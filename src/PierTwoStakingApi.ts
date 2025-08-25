import { encodeFunctionData, parseEther } from 'viem'

import { 
  Api, 
  ValidatorDepositJson,
  ValidatorWithStakeDetails
} from "./PierTwoStakingApiBase";

import { ethereumBatchDeposit } from "./abi/ethereumBatchDeposit";
import { ethereumPectraBatchDepositAbi } from "./abi/ethereumPectraBatchDeposit";
import { with0xPrefix } from "./utils";

export enum EthereumValidatorStatus {
  WAITING_KEYGEN = 'WAITING_KEYGEN',
  WAITING_DEPOSIT = 'WAITING_DEPOSIT',
  WAITING_VC_DEPLOYMENT = 'WAITING_VC_DEPLOYMENT',
  PENDING_ACTIVATION = 'PENDING_ACTIVATION',
  ACTIVE = 'ACTIVE',
  ACTIVE_EXITING = 'ACTIVE_EXITING',
  EXITED = 'EXITED',
}

export enum SupportedNetworks {
  ethereum = 'ethereum'
}

export enum MnemonicStatus {
  ACTIVE = 'ACTIVE'
}

export const URL = {
  MAINNET: 'https://gw-1.api.piertwo.io',
  MAINNET_US: 'https://gw-1.api.us.piertwo.io',
  TESTNET: 'https://gw-1.api.test.piertwo.io',
}

export const BATCH_DEPOSIT_CONTRACT_ADDRESS = {
  ETHEREUM_MAINNET: '0x12EB6257b03Bc63F9b0121FEc484150A6aDb0De7',
  ETHEREUM_TESNET: '0x16eD4d1F6c4335352F2A20994d4880A8A9609d96'
}

export const ABI = {
  ETHEREUM_BATCH_DEPOSIT: ethereumBatchDeposit
}

const DEFAULT_CHECK_INTERVAL = 5000;

export type ConstructorArgs = ConstructorParameters<typeof Api<null>>[0] & {
  apiKey?: string;
  jwt?: string;
}

export class PierTwoStakingApi extends Api<null> {

  constructor(args: ConstructorArgs) {

    if(!args.apiKey && !args.jwt) {
      throw new Error('apiKey or jwt is required')
    }

    if(!args.baseUrl) {
      throw new Error('baseUrl is required')
    }
    
    const authHeader: {
      'api-key'?: string;
      'authorization'?: string;
    } = {};

    if(args.apiKey) {
      authHeader['api-key'] = args.apiKey;
    } else if (args.jwt) {
      authHeader['authorization'] = `Bearer ${args.jwt}`;
    }

    super({
      ...(args ? args : {}),
      baseApiParams: {
        ...(args?.baseApiParams ? args.baseApiParams : {}),
        headers: {
          ...(args?.baseApiParams?.headers ? args.baseApiParams.headers : {}),
          ...authHeader
        }
      }
    });
  }

  utils = {
    /**
     * @description a promise that resolves when your mnemonic status is ACTIVE
     *
     * @tags utils
     */
    waitForActiveMnemonic: (args?: ({ interval?: number })) => {

      return new Promise(resolve => {

        const check = async () => {
          const account = await this.account.getAccount();
          if(account.data?.mnemonicStatus === MnemonicStatus.ACTIVE) {
            resolve(null);
            return;
          }

          await new Promise(resolveTimeout => setTimeout(resolveTimeout, args?.interval || DEFAULT_CHECK_INTERVAL));

          check();
        }

        check();
      })
    },

    /**
     * @description a promise that resolves when all validators associated to `stakeId`
     * reach `desiredStatus`
     *
     * @tags utils
     */
    waitForValidatorStatus: (args: {
      network: SupportedNetworks,
      desiredStatus: EthereumValidatorStatus
      stakeId: string,
      interval?: number
    }) => {

      const networkModule = this[args.network];

      return new Promise(resolve => {

        const check = async () => {
          const { data } = await networkModule.getEthereumStake(args.stakeId);

          const allStatusesMatch = data.validators.every(v => {
            return v.status === args.desiredStatus
          })

          if(allStatusesMatch){
            resolve(null);
            return;
          }

          await new Promise(resolveTimeout => setTimeout(resolveTimeout, args?.interval || DEFAULT_CHECK_INTERVAL));

          check();
        }

        check();
      })
    },

    /**
     * @description converts data fetched from `ethereum.getOrderedValidators` to be used with 
     * `utils.generateBatchDepositCallData`
     *
     * @tags utils
     */
    validatorWithStakeDetailsToDepositDataJson(
      validatorWithStakeDetails: ValidatorWithStakeDetails
    ): ValidatorDepositJson {
      return {
        pubkey: validatorWithStakeDetails.pubkey,
        withdrawal_credentials: validatorWithStakeDetails.withdrawal_credentials,
        amount: validatorWithStakeDetails.amount,
        signature: validatorWithStakeDetails.signature,
        deposit_message_root: validatorWithStakeDetails.deposit_message_root,
        deposit_data_root: validatorWithStakeDetails.deposit_data_root,
        fork_version: validatorWithStakeDetails.fork_version,
        network_name: validatorWithStakeDetails.network_name,
        deposit_cli_version: validatorWithStakeDetails.deposit_cli_version,
      }
    },

    /**
     * @description generate call data for a batch validator deposit
     * the data field returned from `ethereum.getDepositDataForStake` can be 
     * passed to this function
     *
     * @tags utils
     */
    generateBatchDepositCallData(args: {
      depositData: ValidatorDepositJson[]
    }) {
      const pubkeys: `0x${string}`[] = [];
      const withdrawalCredentials: `0x${string}`[] = [];
      const signatures: `0x${string}`[] = [];
      const depositDataRoots: `0x${string}`[] = [];

      for(const data of args.depositData) {
        pubkeys.push(`0x${data.pubkey}`);
        withdrawalCredentials.push(`0x${data.withdrawal_credentials}`);
        signatures.push(`0x${data.signature}`);
        depositDataRoots.push(`0x${data.deposit_data_root}`);
      }

      return encodeFunctionData({
        abi: ethereumBatchDeposit,
        functionName: 'batchDeposit',
        args: [pubkeys, withdrawalCredentials, signatures, depositDataRoots]
      })
    },

    /**
     * @description generate call data for a post-pectra batch validator deposit
     * the input data required for this is available on Pier Two Validator records
     *
     * @tags utils
     */
    generatePectraBatchDepositCallData(args: {
      depositData: ValidatorDepositJson[]
    }) {
      const batchDepositArgs = args.depositData.map(({ pubkey, withdrawal_credentials, signature, amount }) => ({
        pubKey: with0xPrefix(pubkey),
        withdrawalCredentials: with0xPrefix(withdrawal_credentials),
        signature: with0xPrefix(signature),
        amount: parseEther(amount.toString(), "gwei")
      }));

      return encodeFunctionData({
        abi: ethereumPectraBatchDepositAbi,
        functionName: 'batchDeposit',
        args: [batchDepositArgs]
      })
    }
  }
}