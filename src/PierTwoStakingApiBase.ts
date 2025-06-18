/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

type UtilRequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export interface PaginationData {
  totalCount: number;
  pageSize: number;
  pageNumber: number;
}

export interface PaginatedApiResponseBase {
  data: object;
  message?: string;
  pagination: PaginationData;
}

export interface SolanaStakeAccount {
  customerId: number;
  stakePubkey: string;
  fromPubkey: string;
  stakeAuthority: string;
  withdrawAuthority: string;
  initialLamports: string;
  rentExemptionAmount: string;
  lamports: string;
  inactiveStake: string;
  status: string;
  reference: string;
  label: string;
  creationLastValidBlockHeight: number;
  activationEpoch: number;
  lastStatusSyncEpoch: number;
  performanceTotal: string;
  performance30d: string;
  performance7d: string;
}

export interface ApiResponseBase {
  data: object;
  message?: string;
}

export interface SolanaTransactionSignature {
  pubKey: string;
  /** secret key of signer, only present for stake creation where keypair is ephemeral */
  secretKey?: string;
  signature: string;
}

export interface BuildTransactionPayloadResponseDto {
  /**
   * serialized transaction
   * @example "800200080ac6f91611c...080900040200000000"
   */
  serialized: string;
  /**
   * pubkey of stake account
   * @example "8Htve3nXPsvXk88WrJHH6nQBQCjw4bSCJLuEpT6ArfMY"
   */
  stakePubkey?: string;
  /**
   * additional signatures to apply to transaction before submitting
   * @example [{"pubKey":"6V2Lfg1jvanitWUKWRDLTrWvbHvsMMbRuhQ3CTKY1FAq","signature":"2bfb03d5ce6263ba0f...7a24b6d00c4682c04"}]
   */
  signatures: SolanaTransactionSignature[];
}

export interface StakeInstructionWithInputs {
  type: string;
  input: object;
}

export interface BuildTransactionPayloadRequestDto {
  /** @example "ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8" */
  feePayer: string;
  /**
   * target stake account to which this operation relates
   * @example "8Htve3nXPsvXk88WrJHH6nQBQCjw4bSCJLuEpT6ArfMY"
   */
  stakePubkey?: string;
  /** @example [{"type":"createAndDelegate","input":{"fromPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","stakeAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","withdrawAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","reference":"Fund 1","label":"SOL stake 1","lamports":1000000000}},{"type":"create","input":{"fromPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","stakeAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","withdrawAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","reference":"Fund 1","label":"SOL stake 1","lamports":1000000000}},{"type":"delegate","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8"}},{"type":"undelegate","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8"}},{"type":"withdraw","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","toPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","lamports":1000000000}},{"type":"merge","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","sourceStakePubkey":"2niBr5ra1jswrGRkxVG42GC63fTQ7TtE6uTiNeuJTu67"}}] */
  instructions: StakeInstructionWithInputs[];
}

export interface StakingPerformanceSummary {
  inflationRewardsTotal: string;
  inflationRewards7d: string;
  inflationRewards30d: string;
  mevRewardsTotal: string;
  mevRewards7d: string;
  mevRewards30d: string;
}

export interface SolanaStakeAccountRewards {
  stakePubkey: string;
  dayStart: number;
  epoch: number;
  inflationRewardAmount: string;
  effectiveSlot: number;
  postBalance: string;
  mevRewardAmount: string;
  solPrice: number;
}

export interface StakingRewardsChartData {
  inflationRewards: string;
  mevRewards: string;
  periodStart: number;
  periodEnd: number;
  price: number;
}

export interface StakingNetworkInfo {
  currentEpoch: number;
  avgInflationRewardRate: number;
  slotIndex: number;
  slotsInEpoch: number;
}

export interface AuthorizedEmail {
  /** @example "myteammember@piertwo.com" */
  emailAddress: string;
}

export interface GetAccountResponse {
  /** @example "Pierre Toosen" */
  customerName: string;
  /** @example "Pier Two" */
  companyName: string;
  /** @example "staking@piertwo.com" */
  emailAddress: string;
  /**
   * Status of your automatically generated mnemonic. This status must be ACTIVE before you can request a validator
   * @example "ACTIVE"
   */
  mnemonicStatus: string;
  /**
   * Status of the accounts KYC/KYB application
   * @example "KYC_PENDING"
   */
  kycStatus: string;
  /**
   * Details of agreed terms and conditions
   * @example {"applicableTerms":"general","agreedTerms":{"29-05-2024":"2024-08-19T22:35:52.622Z"}}
   */
  termsAndConditions: object;
  authorizedLogins: AuthorizedEmail[];
}

export interface GetApiKeyDto {
  /** @example "Default API Key" */
  name: string;
  /** @example "0b381d39-43b4-480f-b3c9-f3ff3d19cb0a" */
  key: string;
  /** @format date-time */
  deletedAt?: string;
}

export interface CreateApiKeyDto {
  /** @example "Default API Key" */
  name: string;
}

export interface StakeDetails {
  stakeId: number;
  customerId: number;
  reference: string;
  label: string;
  withdrawalAddress: string;
  suggestedFeeRecipient: string;
  validatorCount: number;
  status: string;
  message: string;
}

export interface CreateStakeResponse {
  stake: StakeDetails;
}

export interface CreateStakeDto {
  /**
   * nominated withdrawal address
   * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
   */
  withdrawalAddress: string;
  /**
   * nominated fee recipient address
   * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
   */
  suggestedFeeRecipient: string;
  /** @example 2 */
  validatorCount: number;
  /**
   * an arbitrary reference used to identify/group the stake
   * @example "customer-id-1403"
   */
  reference: string;
  /**
   * an arbitrary label/memo
   * @example "Stake for 2 vallies"
   */
  label: string;
}

export interface Validator {
  pubkey: string;
  withdrawal_credentials: string;
  amount: number;
  signature: string;
  deposit_message_root: string;
  deposit_data_root: string;
  fork_version: string;
  network_name: string;
  deposit_cli_version: string;
  status: string;
  suggestedFeeRecipient: string;
  validatorIndex: number;
  statusLastChecked: string;
  balanceGwei: string;
  effectiveBalanceGwei: string;
}

export interface StakeDetailsWithValidators {
  stakeId: number;
  customerId: number;
  reference: string;
  label: string;
  withdrawalAddress: string;
  suggestedFeeRecipient: string;
  validatorCount: number;
  status: string;
  message: string;
  validators: Validator[];
}

export interface CreateStakeV2Response {
  stake: StakeDetailsWithValidators;
}

export interface CreateStakePectraDto {
  /**
   * nominated withdrawal address
   * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
   */
  withdrawalAddress: string;
  /**
   * nominated fee recipient address
   * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
   */
  suggestedFeeRecipient: string;
  /**
   * total number of eth to stake
   * @example "1000000000000"
   */
  stakeAmountGwei: string;
  /**
   * max ETH to allocate to each validator, will default to 2048 ETH
   * @example "100000000000"
   */
  maxEthPerValidatorGwei: string;
  /**
   * an arbitrary reference used to identify/group the stake
   * @example "customer-id-1403"
   */
  reference: string;
  /**
   * an arbitrary label/memo
   * @example "Staking 100 ETH"
   */
  label: string;
}

export interface DataWithMessage {
  message: string;
}

export interface ValidatorDepositJson {
  pubkey: string;
  withdrawal_credentials: string;
  amount: number;
  signature: string;
  deposit_message_root: string;
  deposit_data_root: string;
  fork_version: string;
  network_name: string;
  deposit_cli_version: string;
}

export interface ValidatorStatusCounts {
  ACTIVE: number;
  ACTIVE_EXITING: number;
  EXITED: number;
  PENDING_ACTIVATION: number;
  WAITING_DEPOSIT: number;
  WAITING_PREGEN: number;
  WAITING_REQUEST: number;
  WAITING_KEYGEN: number;
  WAITING_VC_DEPLOYMENT: number;
  ABANDONED: number;
}

export interface StakeWithValidatorStatusCounts {
  stakeId: number;
  reference: string;
  validatorStatusCounts: ValidatorStatusCounts;
}

export interface ValidatorWithStakeDetails {
  pubkey: string;
  withdrawal_credentials: string;
  amount: number;
  signature: string;
  deposit_message_root: string;
  deposit_data_root: string;
  fork_version: string;
  network_name: string;
  deposit_cli_version: string;
  status: string;
  suggestedFeeRecipient: string;
  validatorIndex: number;
  statusLastChecked: string;
  balanceGwei: string;
  effectiveBalanceGwei: string;
  withdrawalAddress: string;
  reference: string;
  label: string;
}

export interface Message {
  epoch: string;
  validator_index: string;
}

export interface ValidatorExitMessage {
  message: Message;
  signature: string;
}

export interface ValidatorExitMessageResp {
  pubkey: string;
  exitMessage: ValidatorExitMessage;
}

export interface GenPresignedExitMsgDto {
  /** @example "["a20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03"]" */
  pubkeys: string[];
}

export interface BeaconNodeVoluntaryExitResponse {
  code: number;
  message: string;
}

export interface BulkWithdrawError {
  pubkey: string;
  message: string;
}

export interface EstimatedWithdrawalTimes {
  validatorIndex: number;
  validation: string;
  expectedExitEpoch: number;
  expectedFullWithdrawalEligibilityEpoch: number;
  predictedUpcomingWithdrawalEpoch: number;
  predictedExitSubmissionDeadlineEpoch: number;
}

export interface EstimateWithdrawalTimesDto {
  /** @example [1142356] */
  validatorIndexes: number[];
}

export interface ValidatorDeposit {
  pubkey: string;
  amountGwei: string;
}

export interface GenerateDepositDataDto {
  /** @example [{"pubkey":"a20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03","amountGwei":"1000000000"}] */
  deposits: ValidatorDeposit[];
}

export interface EthereumTransactionCraftingResponse {
  /**
   * target contract address
   * @example "0x0000000000000000000000000000000000000000"
   */
  to: string;
  /**
   * serialised calldata
   * @example "0x02f86d59085208943b57d2c0f0db7b7a5e080c0"
   */
  data: string;
  /**
   * ETH value to send with transaction (in wei)
   * @example "1000000000000000000"
   */
  value: string;
  /**
   * nonce value, this is based on the provided fromAddress
   * @example 3
   */
  nonce: number;
  /**
   * Gas limit for the transaction
   * @example "21000"
   */
  gas: string;
  /**
   * Ethereum network chainId
   * @example 560048
   */
  chainId: number;
  /**
   * Maximum fee per gas in wei
   * @example "20000000000"
   */
  maxFeePerGas: string;
  /**
   * Maximum priority fee per gas in wei
   * @example "1000000000"
   */
  maxPriorityFeePerGas: string;
  /**
   * serialized unsigned transaction made up of other returned fields
   * @example "0x02f86d01808459682f00825208943b3b57de6e72c0f0db7b7a73b3e3e5e5e5e5e5e588016345785d8a000080c0"
   */
  serialized: string;
}

export interface EthereumValidatorTopupDto {
  /**
   * The address to send the transaction from, this is required for accurate gas estimation and nonce calculation
   * @example "0x0000000000000000000000000000000000000000"
   */
  fromAddress: string;
  /**
   * multiplier to apply to gas estimate, defaults to 1.2
   * @example 1.2
   */
  gasEstimateMultiplier: number;
  /**
   * Validator public key to top up
   * @example "0xa20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03"
   */
  validatorPubkey: string;
  /**
   * Amount of ETH to deposit in wei
   * @example "1000000000000000000"
   */
  amountWei: string;
}

export interface EthereumValidatorTopupBaseDto {
  /**
   * Validator public key to top up
   * @example "0xa20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03"
   */
  validatorPubkey: string;
  /**
   * Amount of ETH to deposit in wei
   * @example "1000000000000000000"
   */
  amountWei: string;
}

export interface EthereumValidatorBatchTopupDto {
  /**
   * The address to send the transaction from, this is required for accurate gas estimation and nonce calculation
   * @example "0x0000000000000000000000000000000000000000"
   */
  fromAddress: string;
  /**
   * multiplier to apply to gas estimate, defaults to 1.2
   * @example 1.2
   */
  gasEstimateMultiplier: number;
  /**
   * Array of validator topup details
   * @example [{"validatorPubkey":"0xa20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03","amountWei":"1000000000000000000"}]
   */
  deposits: EthereumValidatorTopupBaseDto[];
}

export interface EthereumValidatorWithdrawDto {
  /**
   * The address to send the transaction from, this is required for accurate gas estimation and nonce calculation
   * @example "0x0000000000000000000000000000000000000000"
   */
  fromAddress: string;
  /**
   * multiplier to apply to gas estimate, defaults to 1.2
   * @example 1.2
   */
  gasEstimateMultiplier: number;
  /**
   * Validator public key to withdraw from
   * @example "a20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03"
   */
  validatorPubkey: string;
  /**
   * Amount of ETH to withdraw in gwei
   * @example "1000000000"
   */
  amountGwei: string;
}

export interface EthereumValidatorConsolidateDto {
  /**
   * The address to send the transaction from, this is required for accurate gas estimation and nonce calculation
   * @example "0x0000000000000000000000000000000000000000"
   */
  fromAddress: string;
  /**
   * multiplier to apply to gas estimate, defaults to 1.2
   * @example 1.2
   */
  gasEstimateMultiplier: number;
  /**
   * Source validator public key (will be consolidated from)
   * @example "a20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03"
   */
  sourceValidatorPubkey: string;
  /**
   * Target validator public key (will be consolidated to)
   * @example "b31f3ba80429db4922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb04"
   */
  targetValidatorPubkey: string;
}

export interface QueueStats {
  /** @example "2 days" */
  entryWaitingTime: string;
  entryWaitingTimeSeconds: number;
  /** @example "34 minutes" */
  exitWaitingTime: string;
  exitWaitingTimeSeconds: number;
  avgApr7d: number;
  avgApr31d: number;
  apr: number;
  activeValidators: number;
  exitingValidators: number;
  enteringValidators: number;
}

export interface ValidatorInfo {
  pubKey: string;
  index: string;
  name: string;
  status: string;
  depositTime: number;
}

export interface ValidatorStat {
  index: number;
  day: number;
  dayStart: number;
  consensusRewards: string;
  executionRewards: string;
  ethPrice: number;
}

export interface ValidatorPerformance {
  index: number;
  el1H: string;
  cl1H: string;
  el1D: string;
  cl1D: string;
  el7D: string;
  cl7D: string;
  el31D: string;
  cl31D: string;
  el1Y: string;
  cl1Y: string;
  elTotal: string;
  clTotal: string;
}

export interface ValidatorDailyPerformanceStat {
  consensusRewards: string;
  executionRewards: string;
  periodStart: number;
  periodEnd: number;
  price: number;
}

export interface CustomerDashboardSummary {
  totalValidators: number;
  totalStakes: number;
  performanceTotal: string;
  numAccounts: number;
  validatorStatusCounts: ValidatorStatusCounts;
}

export interface CustomerDashboardAccount {
  totalValidators: number;
  totalStakes: number;
  performanceTotal: string;
  name: string;
  performance7D: string;
  validatorStatusCounts: ValidatorStatusCounts;
}

export interface CustomerDashboard {
  summary: CustomerDashboardSummary;
  accounts: CustomerDashboardAccount[];
}

export interface CustomerAccountStake {
  stakeId: number;
  name: string;
  withdrawalAddress: string;
  totalValidators: number;
  performanceTotal: string;
  performance7D: string;
  validatorStatusCounts: ValidatorStatusCounts;
}

export interface CustomerAccount {
  name: string;
  performanceTotal: string;
  performance7D: string;
  totalValidators: number;
  validatorStatusCounts: ValidatorStatusCounts;
  stakes: CustomerAccountStake[];
}

export interface ValidatorIncomeHistory {
  /** @format date-time */
  timestampStart: string;
  /** @format date-time */
  timestampEnd: string;
  totalIncomeWei: string;
}

export interface UtxoStatus {
  confirmed: boolean;
  block_height: number;
  block_hash: string;
  block_time: number;
}

export interface GetAddressUtxos {
  txid: string;
  vout: number;
  status: UtxoStatus;
  value: number;
}

export interface BuildStakingTransactionResponseDto {
  /**
   * The unsigned staking transaction PSBT in hex format
   * @example "70736274ff01007d020000000125e99b2..."
   */
  unsignedStakingTx: string;
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
}

export interface UtxoDto {
  /**
   * Transaction ID
   * @example "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16"
   */
  txid: string;
  /**
   * Output index
   * @example 0
   */
  vout: number;
}

export interface BuildStakingTransactionDto {
  /**
   * Public key in hex format (compressed or uncompressed)
   * @example "02a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7"
   */
  publicKey: string;
  /**
   * Staking address (must be valid for current network)
   * @example "bc1..."
   */
  stakingAddress: string;
  /**
   * Amount in satoshis
   * @example 1000000
   */
  amountSatoshi: number;
  /**
   * Time lock in blocks
   * @example 10000
   */
  timeLock: number;
  /** Array of UTXOs to use for the transaction */
  utxos?: UtxoDto[];
  /**
   * Whether to automatically fund the transaction
   * @default false
   */
  autoFund?: boolean;
  /**
   * Fee rate in satoshis per byte
   * @example 10
   */
  feeRate: number;
}

export interface TransactionResponseDto {
  /**
   * The transaction ID
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  txId: string;
}

export interface SubmitStakingTransactionDto {
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
  /**
   * The signed staking transaction PSBT in hex format
   * @example "70736274ff01007d020000000125e99b2..."
   */
  signedStakingTx: string;
}

export interface GetDelegationPayloadsResponseDto {
  /** The slashing transaction PSBT in hex format that needs to be signed */
  slashingPsbtHex: string;
  /** The unbonding slashing transaction PSBT in hex format that needs to be signed */
  unbondingSlashingPsbtHex: string;
  /** The Babylon address that needs to be signed as proof of ownership */
  babylonAddress: string;
}

export interface GetDelegationPayloadsDto {
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
  /**
   * Babylon address
   * @example "bbn1abc123..."
   */
  babylonAddress: string;
  /**
   * Signed staking transaction hex (required for post-stake flow only)
   * @example "0200000001..."
   */
  signedStakingTxHex?: string;
}

export interface BuildRegistrationTransactionResponseDto {
  /** The unsigned Babylon transaction in base64 format ready to be signed and broadcast */
  transaction: string;
  /** The estimated gas required for the transaction on the Babylon chain */
  gasEstimate: number;
}

export interface SignedPayloadsDto {
  /**
   * Slashing PSBT hex string
   * @example "70736274..."
   */
  slashingPsbtHex: string;
  /**
   * Unbonding slashing PSBT hex string
   * @example "70736274..."
   */
  unbondingSlashingPsbtHex: string;
  /**
   * Babylon address (signed message)
   * @example "bbn..."
   */
  babylonAddress: string;
}

export interface BuildRegistrationTransactionDto {
  /**
   * Staking transaction ID
   * @example "txid123..."
   */
  stakingTxId: string;
  /** Signed payloads containing PSBT hex strings and Babylon address */
  signedPayloads: SignedPayloadsDto;
}

export interface StakingTransactionDto {
  txid: string;
  confirmed: boolean;
  broadcasted: boolean;
  depth: number;
}

export interface CovenantSignatureDto {
  /** The covenant public key */
  cov_pk: string;
  /** Array of adaptor signatures */
  adaptor_sigs: string[];
}

export interface CovenantUnbondingSignatureDto {
  /** The covenant public key */
  pk: string;
  /** The signature */
  sig: string;
}

export interface UndelegationResponseDto {
  /** The hex-encoded unbonding transaction */
  unbonding_tx_hex: string;
  /** List of covenant unbonding signatures */
  covenant_unbonding_sig_list: CovenantUnbondingSignatureDto[];
  /** The hex-encoded slashing transaction */
  slashing_tx_hex: string;
  /** The delegator's slashing signature in hex */
  delegator_slashing_sig_hex: string;
  /** List of covenant slashing signatures */
  covenant_slashing_sigs: CovenantSignatureDto[];
  /** Delegator unbonding info response */
  delegator_unbonding_info_response?: object | null;
}

export interface BtcDelegationDto {
  /** The staker's address */
  staker_addr: string;
  /** The Bitcoin public key */
  btc_pk: string;
  /** List of finality provider Bitcoin public keys */
  fp_btc_pk_list: string[];
  /** The staking time in blocks */
  staking_time: number;
  /** The start height of the delegation */
  start_height: number;
  /** The end height of the delegation */
  end_height: number;
  /** Total satoshis being staked */
  total_sat: string;
  /** The hex-encoded staking transaction */
  staking_tx_hex: string;
  /** The hex-encoded slashing transaction */
  slashing_tx_hex: string;
  /** The delegator's slash signature in hex */
  delegator_slash_sig_hex: string;
  /** List of covenant signatures */
  covenant_sigs: CovenantSignatureDto[];
  /** The staking output index */
  staking_output_idx: number;
  /** Whether the delegation is active */
  active: boolean;
  /** Description of the delegation status */
  status_desc: string;
  /** The unbonding time in blocks */
  unbonding_time: number;
  /** The undelegation response */
  undelegation_response?: UndelegationResponseDto | null;
  /** The parameters version */
  params_version: number;
}

export interface DelegationInfoResponseDto {
  /** The BTC delegation information */
  btc_delegation: BtcDelegationDto;
}

export interface UnbondingTransactionDto {
  txid: string;
  confirmed: boolean;
  broadcasted: boolean;
}

export interface GetStakingStatusResponseDto {
  status: string;
  isRegistered: boolean;
  statusExplanation: string;
  stakingTransaction: StakingTransactionDto;
  delegationInfo: DelegationInfoResponseDto | null;
  unbondingTransaction: UnbondingTransactionDto | null;
  /**
   * The type of registration (pre-stake or post-stake)
   * @example "pre-stake"
   */
  registrationType?: string;
  /** Pre-stake verification status if applicable */
  preStakeStatus?: "pending" | "verified" | "rejected";
  /**
   * Babylon registration transaction hash for pre-stake
   * @example "ABC123..."
   */
  babylonRegistrationTxHash?: string;
  /**
   * Whether the pre-stake can be finalized
   * @example false
   */
  canFinalize?: boolean;
  /** Covenant signatures if verified */
  covenantSignatures?: string[];
  /**
   * Unsigned staking PSBT for pre-stake resumption
   * @example "70736274ff0100..."
   */
  unsignedStakingPsbt?: string;
}

export interface BuildUnbondingTransactionResponseDto {
  /**
   * The partially signed Bitcoin transaction (PSBT) that needs to be signed by the staker
   * @example "70736274ff01007d020000000125e99b2..."
   */
  unbondingPsbt: string;
}

export interface StakingTxRequestDto {
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
}

export interface SubmitUnbondingTransactionDto {
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
  /**
   * The signed unbonding transaction PSBT in hex format
   * @example "70736274ff01007d020000000125e99b2..."
   */
  signedUnbondingTx: string;
}

export interface BuildWithdrawalTransactionResponseDto {
  /**
   * The unsigned withdrawal PSBT in hex format
   * @example "70736274ff0100..."
   */
  withdrawalPsbt: string;
  /**
   * The fee rate used for the withdrawal transaction (sat/vB)
   * @example 10
   */
  feeRate: number;
}

export interface BuildWithdrawalTransactionDto {
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
  /**
   * The type of withdrawal
   * @example "early_unbonded"
   */
  withdrawalType: "early_unbonded" | "timelock_expired" | "slashing";
  /**
   * Fee rate in satoshis per byte
   * @example 10
   */
  feeRate: number;
}

export interface SubmitWithdrawalTransactionDto {
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
  /**
   * The signed withdrawal transaction in hex format
   * @example "02000000..."
   */
  signedWithdrawalTx: string;
  /**
   * The type of withdrawal
   * @example "early_unbonded"
   */
  withdrawalType: "early_unbonded" | "timelock_expired" | "slashing";
}

export interface StakingParamsDto {
  /**
   * Minimum staking value in satoshis
   * @example 50000
   */
  minStakingValueSat: number;
  /**
   * Maximum staking value in satoshis
   * @example 10000000
   */
  maxStakingValueSat: number;
  /**
   * Minimum staking time in blocks
   * @example 10000
   */
  minStakingTimeBlocks: number;
  /**
   * Maximum staking time in blocks
   * @example 100000
   */
  maxStakingTimeBlocks: number;
  /**
   * Unbonding time in blocks
   * @example 1000
   */
  unbondingTime: number;
  /**
   * Number of Bitcoin confirmations required before delegation
   * @example 10
   */
  confirmationDepth: number;
  /**
   * Current staking parameter version
   * @example 0
   */
  version: number;
  /**
   * Whether staking is currently open
   * @example true
   */
  isStakingOpen: boolean;
}

export interface GetStakingParamsResponseDto {
  /** Current staking parameters */
  params: StakingParamsDto;
}

export interface StakingDetailDto {
  /**
   * The staking transaction ID
   * @example "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16"
   */
  stakingTxId: string;
  /**
   * Amount staked in satoshis
   * @example 100000
   */
  amountSatoshi: number;
  /**
   * Time lock in blocks
   * @example 10000
   */
  timeLock: number;
  /**
   * Current status of the staking
   * @example "registration-transaction-confirmed"
   */
  status: string;
  /**
   * Human-readable description of the current status
   * @example "The registration transaction has been broadcasted and confirmed, your staking is now active"
   */
  statusDescription: string;
  /**
   * Whether the staking is registered on Babylon
   * @example true
   */
  isRegistered: boolean;
  /**
   * Bitcoin staking address
   * @example "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq"
   */
  stakingAddress: string;
  /**
   * Babylon address associated with this stake
   * @example "bbn1..."
   */
  babylonAddress?: string;
  /**
   * Public key of the finality provider
   * @example "02abc..."
   */
  finalityProviderBtcPk: string;
  /**
   * Unbonding transaction ID if unbonding was initiated
   * @example "abc123..."
   */
  unbondingTxId?: string;
  /**
   * Withdrawal transaction ID if withdrawal was completed
   * @example "def456..."
   */
  withdrawalTxId?: string;
  /**
   * When the staking was created
   * @format date-time
   * @example "2024-01-01T00:00:00.000Z"
   */
  createdAt?: string;
  /**
   * When the staking was last updated
   * @format date-time
   * @example "2024-01-01T00:00:00.000Z"
   */
  updatedAt?: string;
  /**
   * The type of registration (pre-stake or post-stake)
   * @example "pre-stake"
   */
  registrationType?: string;
  /** Pre-stake verification status if applicable */
  preStakeStatus?: "pending" | "verified" | "rejected";
  /**
   * Whether the delegation is active on Babylon
   * @example true
   */
  delegationActive?: boolean;
  /**
   * Delegation status from Babylon
   * @example "ACTIVE"
   */
  delegationStatus?: string;
  /**
   * Whether the delegation is available (active and status is ACTIVE)
   * @example true
   */
  isAvailable?: boolean;
}

export interface GetStakingDetailsResponseDto {
  /** List of staking details for the address */
  stakingDetails: StakingDetailDto[];
  /**
   * Total amount staked across all transactions in satoshis
   * @example 500000
   */
  totalStaked: number;
  /**
   * Total amount currently actively staked in satoshis
   * @example 300000
   */
  totalActiveStaked: number;
  /**
   * Total number of staking transactions
   * @example 5
   */
  stakingDetailsCount: number;
  /**
   * Number of active stakes
   * @example 3
   */
  activeStakesCount: number;
}

export interface BuildPreStakeRegistrationResponseDto {
  /**
   * The unsigned staking transaction PSBT in hex format
   * @example "70736274ff01007d020000000125e99b2..."
   */
  unsignedStakingPsbt: string;
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
}

export interface BuildPreStakeRegistrationDto {
  /**
   * Public key in hex format (compressed or uncompressed)
   * @example "02a0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7"
   */
  publicKey: string;
  /**
   * Staking address (must be valid for current network)
   * @example "bc1..."
   */
  stakingAddress: string;
  /**
   * Amount in satoshis
   * @example 1000000
   */
  amountSatoshi: number;
  /**
   * Time lock in blocks
   * @example 10000
   */
  timeLock: number;
  /**
   * Fee rate in satoshis per byte
   * @example 10
   */
  feeRate: number;
  /** Specific UTXOs to use (optional) */
  utxos?: UtxoDto[];
  /**
   * Whether to automatically fund the transaction
   * @default false
   */
  autoFund: boolean;
  /**
   * Babylon address for the delegation
   * @example "bbn1abc123..."
   */
  babylonAddress: string;
}

export interface BuildBabylonPreStakeTransactionResponseDto {
  /** The unsigned Babylon registration transaction in base64 format */
  babylonRegistrationTransaction: string;
  /**
   * The estimated gas required for the Babylon transaction
   * @example 150000
   */
  gasEstimate: number;
}

export interface BuildBabylonPreStakeTransactionDto {
  /**
   * The staking transaction ID
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
  /**
   * The signed slashing transaction PSBT in hex format
   * @example "70736274ff0100..."
   */
  slashingPsbtHex: string;
  /**
   * The signed unbonding slashing transaction PSBT in hex format
   * @example "70736274ff0100..."
   */
  unbondingSlashingPsbtHex: string;
  /**
   * The signed Babylon address for proof of possession
   * @example "base64SignatureString..."
   */
  babylonAddress: string;
}

export interface SubmitPreStakeRegistrationResponseDto {
  /**
   * The Babylon transaction hash
   * @example "ABC123DEF456..."
   */
  txId: string;
}

export interface SubmitPreStakeRegistrationDto {
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
  /**
   * The Babylon transaction hash after user broadcasts it
   * @example "ABC123DEF456..."
   */
  babylonTxHash: string;
  /**
   * The signed Babylon registration transaction in base64 format (optional, used only to verify the provided hash matches the transaction)
   * @example "CvQFCvEFC..."
   */
  signedBabylonTx?: string;
}

export interface FinalizePreStakeResponseDto {
  /**
   * The Bitcoin transaction ID
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  txId: string;
}

export interface FinalizePreStakeDto {
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
  /**
   * The signed staking transaction in hex format
   * @example "02000000..."
   */
  signedStakingTx: string;
}

export interface WebsiteDataPrices {
  solPrice: number;
  ethPrice: number;
  nearPrice: number;
  tonPrice: number;
  polPrice: number;
  eigenPrice: number;
}

export interface WebsiteDataAssetsUnderStake {
  sol: number;
  eth: number;
  near: number;
  ton: number;
  pol: number;
  eigen: number;
}

export interface WebsiteData {
  prices: WebsiteDataPrices;
  assetsUnderStake: WebsiteDataAssetsUnderStake;
}

export interface PierTwoEigenLayerInfo {
  operatorAddress: string;
  eigenPodManagerAddress: string;
}

export interface PierTwoEthereumInfo {
  batchDepositContractAddress: string;
  pectraBatchDepositContractAddress: string;
  beaconDepositContractAddress: string;
  ethValidatorWithdrawalContractAddress: string;
  ethValidatorConsolidationContractAddress: string;
  eigenlayer: PierTwoEigenLayerInfo;
  currentEpoch: number;
  pectraForkEpoch: number;
  network: string;
  chainId: number;
  validatorMaxEBGwei: number;
  validatorMinEBGwei: number;
}

export interface PierTwoSolanaInfo {
  voteAccountAddress: string;
  network: string;
}

export interface PierTwoBitcoinInfo {
  finalityProviderPK: string;
  bitcoinNetwork: string;
  babylonNetwork: string;
  babylonChainId: string;
}

export interface PierTwoInfo {
  ethereum: PierTwoEthereumInfo;
  solana: PierTwoSolanaInfo;
  bitcoin: PierTwoBitcoinInfo;
}

export interface SystemInfoResponse {
  /**
   * Version of the API Gateway service
   * @example "1.0.0"
   */
  apiGatewayVersion: string;
  /**
   * Version of the internal Ethereum staking API
   * @example "1.0.0"
   */
  ethStakingApiVersion: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://gw-1.api.piertwo.io";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title Pier Two Staking API
 * @version 1.0.74-mainnet
 * @baseUrl https://gw-1.api.piertwo.io
 * @contact
 *
 * The Pier Two Staking API Docs
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  solana = {
    /**
     * @description Returns the details of Solana staking positions for your account.
     *
     * @tags Solana
     * @name GetSolanaStakes
     * @summary Get Solana Stake Accounts
     * @request GET:/solana/stakes
     */
    getSolanaStakes: (
      query?: {
        pageNumber?: number;
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<PaginatedApiResponseBase, "data"> & {
          data: SolanaStakeAccount[];
        },
        any
      >({
        path: `/solana/stakes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate a stake transaction payload containing one or more instructions. Possible instruction types and inputs are described below: This returns a serialized transaction which can be deserialized, signed and submitted to the network. See [@solana/web.js](https://solana-labs.github.io/solana-web3.js/index.html) docs for deserializing [Versioned Messages](https://solana-labs.github.io/solana-web3.js/variables/VersionedMessage-1.html) and working with [Versioned Transactions](https://solana-labs.github.io/solana-web3.js/classes/VersionedTransaction.html) ***N.B any instructions operating on an existing stake account must specify target stakePubkey in the request body seperate to the instructions*** ***Create and delegate new stake account*** ~~~ { type: 'createAndDelegate' input: { fromPubkey: pubkey of funding address, stakeAuthority: address authorized to delegate and undelegate stake, withdrawAuthority: address authorized to withdraw stake, lamports: amount of lamports to stake (1 sol = 1000000000 lamports), reference: an arbitrary reference used to identify/group the stake within the Pier Two platform, label: an arbitrary label/memo for use within the Pier Two platform } } ~~~ ***Create a new stake account (same input data as 'createAndDelegate')*** ~~~ { type: 'create' input: { fromPubkey: pubkey of funding address, stakeAuthority: address authorized to delegate and undelegate stake, withdrawAuthority: address authorized to withdraw stake, lamports: amount of lamports to stake (1 sol = 1000000000 lamports), reference: an arbitrary reference used to identify/group the stake within the Pier Two platform, label: an arbitrary label/memo for use within the Pier Two platform } } ~~~ ***Delegate an existing stake account*** ~~~ { type: 'delegate' input: { authorizedPubkey: address authorized to delegate and undelegate stake } } ~~~ ***Undelegate (deactivate) an existing stake account*** ~~~ { type: 'undelegate' input: { authorizedPubkey: address authorized to delegate and undelegate stake } } ~~~ ***Withdraw inactive stake (deactivated stake balance or any other excess SOL held by account)*** ~~~ { type: 'withdraw' input: { toPubkey: recipient of withdrawn funds, authorizedPubkey: address authorized to withdraw stake, lamports: amount of lamports to withdraw (1 sol = 1000000000 lamports), } } ~~~ ***Merge an eligible stake account into target stake account*** An eligible stake account must have the same stakeAuthority and withdrawAuthority and have been active for an entire epoch and earned rewards ~~~ { type: 'merge' input: { sourceStakePubkey: address of stake account to merge (this account will be dissolved/closed onchain), authorizedPubkey: address authorized to delegate and undelegate } } ~~~
     *
     * @tags Solana
     * @name BuildTransactionPayload
     * @summary Generate a stake transaction payload
     * @request POST:/solana/stake/buildTransaction
     */
    buildTransactionPayload: (data: BuildTransactionPayloadRequestDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildTransactionPayloadResponseDto;
        },
        any
      >({
        path: `/solana/stake/buildTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the 7D, 30D and total inflation and MEV rewards for the specified stake accounts.
     *
     * @tags Solana
     * @name GetPerformanceSummary
     * @summary Get Solana stake performance summary
     * @request GET:/solana/stake/performanceSummary
     */
    getPerformanceSummary: (
      query?: {
        /** comma seperated list of stake account pubkeys, will return data for all active stake accounts if none are provided */
        stakePubkey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakingPerformanceSummary;
        },
        any
      >({
        path: `/solana/stake/performanceSummary`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns daily rewards stats of specified stake accounts.
     *
     * @tags Solana
     * @name GetStakeAccoutDailyRewards
     * @summary Get daily rewards stats
     * @request GET:/solana/stake/dailyRewards
     */
    getStakeAccoutDailyRewards: (
      query: {
        /** comma seperated list of stake account pubkeys */
        stakePubkey: string;
        /** fiat currency for ethereum pricing */
        currency?: string;
        /** unix timestamp of starting date from */
        dateFrom?: number;
        /** unix timestamp of ending date to */
        dateTo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: SolanaStakeAccountRewards[];
        },
        any
      >({
        path: `/solana/stake/dailyRewards`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns summarized Solana staking rewards data suitable for use in charts.
     *
     * @tags Solana
     * @name GetStakeRewardsChartData
     * @summary Get staking rewards chart data
     * @request GET:/solana/stake/rewardsChartData
     */
    getStakeRewardsChartData: (
      query?: {
        /** comma seperated list of stake pubkeys, will return all rewards if none are specified */
        stakePubkeys?: string;
        /** unix timestamp of starting date from */
        dateFrom?: number;
        /** unix timestamp of ending date to */
        dateTo?: number;
        /** number of datapoints to return, defaults to 30 */
        datapoints?: number;
        /** currency used for price data */
        currency?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakingRewardsChartData[];
        },
        any
      >({
        path: `/solana/stake/rewardsChartData`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns information about the current epoch and inflation reward rate.
     *
     * @tags Solana
     * @name GetNetworkStakingInfo
     * @summary Get current epoch staking reward info
     * @request GET:/solana/stake/networkInfo
     */
    getNetworkStakingInfo: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakingNetworkInfo;
        },
        any
      >({
        path: `/solana/stake/networkInfo`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  account = {
    /**
     * @description Returns basic account details such as name, email address, KYC status, etc.
     *
     * @tags Account
     * @name GetAccount
     * @summary Get basic account details
     * @request GET:/account
     */
    getAccount: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetAccountResponse;
        },
        any
      >({
        path: `/account`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all api keys for your account, optionally including revoked keys.
     *
     * @tags Account
     * @name GetApiKeys
     * @summary Get API keys
     * @request GET:/account/apikeys
     */
    getApiKeys: (
      query?: {
        /** Anything except 'true' will be considered `false`. */
        includeRevokedKeys?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetApiKeyDto[];
        },
        any
      >({
        path: `/account/apikeys`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a new api key for your account with a specified name.
     *
     * @tags Account
     * @name AddNewApiKey
     * @summary Create a new API key
     * @request POST:/account/apikeys
     */
    addNewApiKey: (data: CreateApiKeyDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetApiKeyDto;
        },
        any
      >({
        path: `/account/apikeys`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Revoke an api key for your account.
     *
     * @tags Account
     * @name RevokeApiKey
     * @summary Revoke an API key
     * @request PUT:/account/apikeys/{key}
     */
    revokeApiKey: (key: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetApiKeyDto;
        },
        any
      >({
        path: `/account/apikeys/${key}`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  };
  ethereum = {
    /**
     * @description **DEPRECATED** use `/stakeV2` instead. Request one or more new validators. Validators created via this endpoint will have `0x01` withdrawal credentials.
     *
     * @tags Ethereum
     * @name CreateStake
     * @summary [Deprecated] Create Capella-era (0x01) validator(s)
     * @request POST:/ethereum/stake
     */
    createStake: (data: CreateStakeDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CreateStakeResponse;
        },
        any
      >({
        path: `/ethereum/stake`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Request one or more new validators, returning the individual validator details in the response. Validators created via this endpoint will have `0x01` withdrawal credentials.
     *
     * @tags Ethereum
     * @name CreateStakeV2
     * @summary Create Capella-era (0x01) validator(s)
     * @request POST:/ethereum/stakeV2
     */
    createStakeV2: (data: CreateStakeDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CreateStakeV2Response;
        },
        any
      >({
        path: `/ethereum/stakeV2`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Stake an arbitrary amount of ETH (Denoted in gwei) post-Pectra. This endpoint will calculate and create the appropriate number of validators for the staked amount. The data required for the deposit transaction will be returned in the response. Validators created via this endpoint will have `0x02` withdrawal credentials.
     *
     * @tags Ethereum
     * @name CreateStakeV3
     * @summary Create Pectra-era (0x02) validator(s)
     * @request POST:/ethereum/stakeV3
     */
    createStakeV3: (data: CreateStakePectraDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CreateStakeV2Response;
        },
        any
      >({
        path: `/ethereum/stakeV3`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Abandon stake request and all associated validators.
     *
     * @tags Ethereum
     * @name AbandonStake
     * @summary Abandon Stake
     * @request PUT:/ethereum/stake/{stakeId}/abandon
     */
    abandonStake: (stakeId: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: DataWithMessage;
        },
        any
      >({
        path: `/ethereum/stake/${stakeId}/abandon`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns stake details and associated validators by stakeId.
     *
     * @tags Ethereum
     * @name GetStake
     * @summary Get Stake details by stakeId
     * @request GET:/ethereum/stake/{stakeId}
     */
    getStake: (stakeId: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakeDetailsWithValidators;
        },
        any
      >({
        path: `/ethereum/stake/${stakeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns deposit data for all validators in the specified stake request.
     *
     * @tags Ethereum
     * @name GetDepositDataForStake
     * @summary Get deposit data for Stake
     * @request GET:/ethereum/stake/{stakeId}/depositdata
     */
    getDepositDataForStake: (stakeId: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorDepositJson[];
        },
        any
      >({
        path: `/ethereum/stake/${stakeId}/depositdata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns details of all staking requests for your account including withdrawal address, fee recipient, and validator details.
     *
     * @tags Ethereum
     * @name GetEthereumStakes
     * @summary Get Stakes
     * @request GET:/ethereum/stakes
     */
    getEthereumStakes: (
      query?: {
        reference?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakeDetailsWithValidators[];
        },
        any
      >({
        path: `/ethereum/stakes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all staking requests with validator status counts.
     *
     * @tags Ethereum
     * @name GetStakesWithValidatorStatusCounts
     * @summary Get Stakes with validator counts bystatus
     * @request GET:/ethereum/stakesWithValidatorStatusCounts
     */
    getStakesWithValidatorStatusCounts: (
      query?: {
        reference?: string;
        withdrawalAddress?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakeWithValidatorStatusCounts[];
        },
        any
      >({
        path: `/ethereum/stakesWithValidatorStatusCounts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns Validators for your account with filtering on reference, withdrawal address, and status. Records are returned in order of initial request.
     *
     * @tags Ethereum
     * @name GetOrderedValidators
     * @summary Get Validators
     * @request GET:/ethereum/orderedValidators
     */
    getOrderedValidators: (
      query?: {
        reference?: string;
        withdrawalAddress?: string;
        /** defaults to 100 */
        count?: string;
        status?: string;
        skip?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorWithStakeDetails[];
        },
        any
      >({
        path: `/ethereum/orderedValidators`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate one or more pre-signed exit messages for a specified list of public keys
     *
     * @tags Ethereum
     * @name GenPresignedExitMsg
     * @summary Generate exit message(s)
     * @request POST:/ethereum/genPresignedExitMsg
     */
    genPresignedExitMsg: (data: GenPresignedExitMsgDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorExitMessageResp[];
        },
        any
      >({
        path: `/ethereum/genPresignedExitMsg`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Broadcast one or more pre-signed exit messages to the beacon chain
     *
     * @tags Ethereum
     * @name BroadcastPresignedExitMessage
     * @summary Broadcast exit message(s)
     * @request POST:/ethereum/broadcastPresignedExitMsg
     */
    broadcastPresignedExitMessage: (data: ValidatorExitMessage, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BeaconNodeVoluntaryExitResponse;
        },
        any
      >({
        path: `/ethereum/broadcastPresignedExitMsg`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate pre-signed exit message(s) for a specified list of public keys and broadcast the message to a beacon node in a single request.
     *
     * @tags Ethereum
     * @name BulkWithdraw
     * @summary Bulk withdraw Validators
     * @request POST:/ethereum/bulkWithdrawValidators
     */
    bulkWithdraw: (data: GenPresignedExitMsgDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BulkWithdrawError[];
        },
        any
      >({
        path: `/ethereum/bulkWithdrawValidators`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will simulate all pending withdrawals up to and including the specified validator indexes. The simulation calculates the estimated exit as if the exit had been processed at that moment in time. The results are indicative and can only account for the state of the exit queue at the time of simulating. If this is being used optimise validator exits, caution should be taken since missing the `predictedExitSubmissionDeadlineEpoch` will result in the longest possible period of no rewards earned. Submitting exit messages during the deadline epoch can be risky, some time (2-4 minutes) should be allowed for the beacon chain to process any exit messages broadcasted to the network. We recommend submitting exit messages at least an hour before the deadline epoch to account for unexpected changes to the exit queue. You should also consider the impact of your own withdrawals on the exit queue if you are exiting large amounts of validators at once. This endpoint will return an error in the following situations: - one or more invalid validator indexes are passed - one or more of the specified validators does not have withdrawal credentials set (0x01...) - one or more validators has already exited - one or more validators is not known to the beacon chain Below is a description of each of the fields returned: - **expectedExitEpoch** - the epoch in which the validator would exit the Beacon chain if its exit was processed at the current time - **expectedFullWithdrawalEligibilityEpoch** - the epoch where the validator would become eligible for receiving the full staked balance ETH plus any excess - **predictedUpcomingWithdrawalEpoch** - the predicted epoch in which the validator's withdrawal will be processed by the Beacon chain, taking the current exit queue into account - **predictedExitSubmissionDeadlineEpoch** - the deadline epoch in which the validator should already be queued for exiting the Beacon chain
     *
     * @tags Ethereum
     * @name EstimateWithdrawalTimes
     * @summary Estimate validator exit times
     * @request POST:/ethereum/estimateWithdrawalTimes
     */
    estimateWithdrawalTimes: (data: EstimateWithdrawalTimesDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: EstimatedWithdrawalTimes[];
        },
        any
      >({
        path: `/ethereum/estimateWithdrawalTimes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description By default, validator records are populated with deposit transaction data suitable for deposits of 32ETH. This endpoint can be used in situations where you want to perform deposits of amounts other than 32ETH. This will generate the deposit transaction data for one or more validators corresponding to the amount(s) specified in the request body. ***Note that this will not replace nor invalidate the deposit data that is stored on the validator records themselves*** This endpoint will return an error in the following situations: - an invalid amount is specified (<= 0 or > 32000000000) - one or more of the specified validators is not in a WAITING_DEPOSIT state - one or more validators is not associated your account - the list of specified validators contains duplicate pubkeys
     *
     * @tags Ethereum
     * @name GenerateDepositData
     * @summary Generate arbitrary amount deposit data
     * @request POST:/ethereum/validators/generateDepositData
     */
    generateDepositData: (data: GenerateDepositDataDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorDepositJson[];
        },
        any
      >({
        path: `/ethereum/validators/generateDepositData`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **This endpoint is only to be used with active 0x02 validators, using this to perform initial activation deposits will result in a loss of funds.** Generate transaction data for depositing additional ETH to an active 0x02 validator. This endpoint will generate a transaction for interacting with the [canonical beacon deposit contract](https://etherscan.io/address/0x00000000219ab540356cBB839Cbe05303d7705Fa). The generated transaction will contain a dummy signature and deposit data root [since signature validation is skipped for active validators](https://eth2book.info/capella/part2/deposits-withdrawals/staking/#top-up-deposits). The returned transaction data must be signed and broadcast by the user.
     *
     * @tags Ethereum
     * @name CraftEthValidatorTopupTx
     * @summary Generate validator top-up transaction
     * @request POST:/ethereum/txcrafting/validators/topup
     */
    craftEthValidatorTopupTx: (data: EthereumValidatorTopupDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: EthereumTransactionCraftingResponse;
        },
        any
      >({
        path: `/ethereum/txcrafting/validators/topup`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **This endpoint is only to be used with active 0x02 validators, using this to perform initial activation deposits will result in a loss of funds.** Generate transaction data for depositing additional ETH to multiple active 0x02 validators. This endpoint will generate a transaction for interacting with our [pectra batch deposit implementation](https://docs.piertwo.com/docs/batch-deposit-contract). The generated transaction will contain a dummy signature and deposit data root [since signature validation is skipped for active validators](https://eth2book.info/capella/part2/deposits-withdrawals/staking/#top-up-deposits). The returned transaction data must be signed and broadcast by the user.
     *
     * @tags Ethereum
     * @name CraftEthValidatorBatchTopupTx
     * @summary Generate batch validator top-up transaction
     * @request POST:/ethereum/txcrafting/validators/batchtopup
     */
    craftEthValidatorBatchTopupTx: (data: EthereumValidatorBatchTopupDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: EthereumTransactionCraftingResponse;
        },
        any
      >({
        path: `/ethereum/txcrafting/validators/batchtopup`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate transaction data for performing an [EIP 7002 on-chain validator withdrawal](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-7002.md#abstract). This can be used to withdraw accrued rewards exceeding 32 ETH. The withdrawal amount will be capped such that the validator balance does not fall below 32 ETH. This can be used to perform a full exit by specifying an amount of 0. The returned transaction data must be signed and broadcast by the user.
     *
     * @tags Ethereum
     * @name CraftEthValidatorWithdrawTx
     * @summary Generate validator withdrawal transaction
     * @request POST:/ethereum/txcrafting/validators/withdraw
     */
    craftEthValidatorWithdrawTx: (data: EthereumValidatorWithdrawDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: EthereumTransactionCraftingResponse;
        },
        any
      >({
        path: `/ethereum/txcrafting/validators/withdraw`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate transaction data for performing an [EIP 7251 on-chain validator consolidation](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-7251.md#abstract). This can be used to upgrade a single validator by specifying itself as both the source and target. Or to combine 2 active validators into a single validator. The consolidation transaction must be signed and submitted by the address controlling the source validator (the configured withdrawal address).
     *
     * @tags Ethereum
     * @name CraftEthValidatorConsolidateTx
     * @summary Generate validator consolidation transaction
     * @request POST:/ethereum/txcrafting/validators/consolidate
     */
    craftEthValidatorConsolidateTx: (data: EthereumValidatorConsolidateDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: EthereumTransactionCraftingResponse;
        },
        any
      >({
        path: `/ethereum/txcrafting/validators/consolidate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the estimated wait times and other queue stats for entering and exiting validators.
     *
     * @tags Ethereum
     * @name GetValidatorQueueStats
     * @summary Get Validator queue
     * @request GET:/ethereum/validators/queueStats
     */
    getValidatorQueueStats: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: QueueStats;
        },
        any
      >({
        path: `/ethereum/validators/queueStats`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns beacon chain information of validators, returns info for all active validators if none are specified.
     *
     * @tags Ethereum
     * @name GetValidatorInfo
     * @summary Get Validator beacon chain info
     * @request GET:/ethereum/validators/info
     */
    getValidatorInfo: (
      query?: {
        /** comma seperated list of validator indexes */
        validatorIndex?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorInfo[];
        },
        any
      >({
        path: `/ethereum/validators/info`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns daily rewards stats of validators, returns stats for all active validators if none are specified
     *
     * @tags Ethereum
     * @name GetValidatorDailyRewards
     * @summary Get Validator daily rewards
     * @request GET:/ethereum/validators/dailyRewards
     */
    getValidatorDailyRewards: (
      query?: {
        /** comma seperated list of validator indexes */
        validatorIndex?: string;
        /** fiat currency for ethereum pricing */
        currency?: string;
        /** unix timestamp of starting date from */
        dateFrom?: number;
        /** unix timestamp of ending date to */
        dateTo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorStat[];
        },
        any
      >({
        path: `/ethereum/validators/dailyRewards`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns daily performance stats of validators, returns stats for all active validators if none are specified
     *
     * @tags Ethereum
     * @name GetValidatorDailyPerformance
     * @summary Get Validator daily performance
     * @request GET:/ethereum/validators/performance
     */
    getValidatorDailyPerformance: (
      query?: {
        /** comma seperated list of validator indexes */
        validatorIndex?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorPerformance[];
        },
        any
      >({
        path: `/ethereum/validators/performance`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns summarized validator rewards data suitable for use in charts.
     *
     * @tags Ethereum
     * @name GetValidatorRewardsChartData
     * @summary Get staking rewards chart data
     * @request GET:/ethereum/validators/rewardsChartData
     */
    getValidatorRewardsChartData: (
      query?: {
        /** comma seperated list of validator indexes */
        validatorIds?: string;
        /** unix timestamp of starting date from */
        dateFrom?: number;
        /** unix timestamp of ending date to */
        dateTo?: number;
        /** account reference to use as filter */
        account?: string;
        /** number of datapoints to return */
        datapoints?: number;
        /** currency used for price data */
        currency?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorDailyPerformanceStat[];
        },
        any
      >({
        path: `/ethereum/validators/rewardsChartData`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the dashboard summary. Individual stakes are flattened
     *
     * @tags Ethereum
     * @name GetValidatorDashboardSummary
     * @summary Get Staking dashboard summary
     * @request GET:/ethereum/validators/dashboard
     */
    getValidatorDashboardSummary: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CustomerDashboard;
        },
        any
      >({
        path: `/ethereum/validators/dashboard`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the accounts summary. Individual stakes are not flattened
     *
     * @tags Ethereum
     * @name GetValidatorAccountsSummary
     * @summary Get Staking accounts summary
     * @request GET:/ethereum/validators/accounts
     */
    getValidatorAccountsSummary: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CustomerAccount[];
        },
        any
      >({
        path: `/ethereum/validators/accounts`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns validator income history for a given time frame and validator indices
     *
     * @tags Ethereum
     * @name GetValidatorIncomeHistory
     * @summary Get Validator income history
     * @request GET:/ethereum/validators/incomeHistory
     */
    getValidatorIncomeHistory: (
      query: {
        /** Time frame for the data: 1D (1 day in 1-hour chunks) or 1W (1 week in 6-hour chunks) */
        timeFrame: "1D" | "1W";
        /** comma seperated list of validator indexes */
        validatorIds?: string;
        /** account reference to use as filter */
        account?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorIncomeHistory[];
        },
        any
      >({
        path: `/ethereum/validators/incomeHistory`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  bitcoin = {
    /**
     * @description Get UTXOs for a given bitcoin address
     *
     * @tags Bitcoin
     * @name GetAddressUtxos
     * @summary Get UTXOs for a given bitcoin address. Only available on testnet
     * @request GET:/bitcoin/utxos/{address}
     */
    getAddressUtxos: (address: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetAddressUtxos[];
        },
        any
      >({
        path: `/bitcoin/utxos/${address}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Build a bitcoin staking transaction for use with the post-stake flow. Only available on testnet
     *
     * @tags Bitcoin
     * @name BuildStakingTransaction
     * @summary Build a post-stake bitcoin staking transaction
     * @request POST:/bitcoin/buildStakingTransaction
     */
    buildStakingTransaction: (data: BuildStakingTransactionDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildStakingTransactionResponseDto;
        },
        any
      >({
        path: `/bitcoin/buildStakingTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit a signed staking transaction for broadcasting to the Bitcoin network using the post-stake flow. Only available on testnet
     *
     * @tags Bitcoin
     * @name SubmitStakingTransaction
     * @summary Broadcast a signed bitcoin staking transaction for use with the post-stake flow
     * @request POST:/bitcoin/submitStakingTransaction
     */
    submitStakingTransaction: (data: SubmitStakingTransactionDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: TransactionResponseDto;
        },
        any
      >({
        path: `/bitcoin/submitStakingTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get delegation payloads for a given staking transaction ID. Only available on testnet
     *
     * @tags Bitcoin
     * @name GetDelegationPayloads
     * @summary Get delegation payloads
     * @request POST:/bitcoin/getDelegationPayloads
     */
    getDelegationPayloads: (data: GetDelegationPayloadsDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetDelegationPayloadsResponseDto;
        },
        any
      >({
        path: `/bitcoin/getDelegationPayloads`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Build a babylon registration transaction for an existing stake as part of the post-stake flow. Only available on testnet
     *
     * @tags Bitcoin
     * @name BuildRegistrationTransaction
     * @summary Build a post-stake babylon registration transaction
     * @request POST:/bitcoin/buildRegistrationTransaction
     */
    buildRegistrationTransaction: (data: BuildRegistrationTransactionDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildRegistrationTransactionResponseDto;
        },
        any
      >({
        path: `/bitcoin/buildRegistrationTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the status of a staking transaction. Only available on testnet
     *
     * @tags Bitcoin
     * @name GetStakingStatus
     * @summary Get the status of a staking transaction
     * @request GET:/bitcoin/stakingStatus/{stakingTxId}
     */
    getStakingStatus: (stakingTxId: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetStakingStatusResponseDto;
        },
        any
      >({
        path: `/bitcoin/stakingStatus/${stakingTxId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Build an unbonding transaction PSBT. Only available on testnet
     *
     * @tags Bitcoin
     * @name BuildUnbondingTransaction
     * @summary Build an unbonding transaction PSBT that needs to be signed by the staker.
     * @request POST:/bitcoin/buildUnbondingTransaction
     */
    buildUnbondingTransaction: (data: StakingTxRequestDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildUnbondingTransactionResponseDto;
        },
        any
      >({
        path: `/bitcoin/buildUnbondingTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit a staker-signed unbonding transaction PSBT. Only available on testnet
     *
     * @tags Bitcoin
     * @name SubmitUnbondingTransaction
     * @summary Submit a staker-signed unbonding transaction PSBT for processing with covenant signatures and broadcasting.
     * @request POST:/bitcoin/submitUnbondingTransaction
     */
    submitUnbondingTransaction: (data: SubmitUnbondingTransactionDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: TransactionResponseDto;
        },
        any
      >({
        path: `/bitcoin/submitUnbondingTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Build a withdrawal transaction PSBT for withdrawing funds from unbonded or expired stakes. Only available on testnet
     *
     * @tags Bitcoin
     * @name BuildWithdrawalTransaction
     * @summary Build a withdrawal transaction PSBT
     * @request POST:/bitcoin/buildWithdrawalTransaction
     */
    buildWithdrawalTransaction: (data: BuildWithdrawalTransactionDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildWithdrawalTransactionResponseDto;
        },
        any
      >({
        path: `/bitcoin/buildWithdrawalTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit a signed withdrawal transaction for broadcasting to the Bitcoin network. Only available on testnet
     *
     * @tags Bitcoin
     * @name SubmitWithdrawalTransaction
     * @summary Submit a signed withdrawal transaction for broadcasting to the Bitcoin network
     * @request POST:/bitcoin/submitWithdrawalTransaction
     */
    submitWithdrawalTransaction: (data: SubmitWithdrawalTransactionDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: TransactionResponseDto;
        },
        any
      >({
        path: `/bitcoin/submitWithdrawalTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get current staking parameters including confirmation requirements. Only available on testnet
     *
     * @tags Bitcoin
     * @name GetStakingParams
     * @summary Get current babylon staking protocol parameters
     * @request GET:/bitcoin/stakingParams
     */
    getStakingParams: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetStakingParamsResponseDto;
        },
        any
      >({
        path: `/bitcoin/stakingParams`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get all staking details for your account. Only available on testnet
     *
     * @tags Bitcoin
     * @name GetStakingDetails
     * @summary Get all staking details for your account
     * @request GET:/bitcoin/stakingDetails
     */
    getStakingDetails: (
      query?: {
        /** Bitcoin address */
        address?: string;
        pageNumber?: number;
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<PaginatedApiResponseBase, "data"> & {
          data: GetStakingDetailsResponseDto;
        },
        any
      >({
        path: `/bitcoin/stakingDetails`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Build an unsigned pre-stake staking transaction PSBT that needs to be signed by the staker. Only available on testnet
     *
     * @tags Bitcoin
     * @name BuildPreStakeStakingTransaction
     * @summary Build an unsigned pre-stake staking transaction PSBT
     * @request POST:/bitcoin/buildPreStakeStakingTransaction
     */
    buildPreStakeStakingTransaction: (data: BuildPreStakeRegistrationDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildPreStakeRegistrationResponseDto;
        },
        any
      >({
        path: `/bitcoin/buildPreStakeStakingTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get delegation payloads for pre-stake using the unsigned staking transaction. Only available on testnet
     *
     * @tags Bitcoin
     * @name GetDelegationPayloadsPreStake
     * @summary Get delegation payloads for pre-stake
     * @request POST:/bitcoin/getDelegationPayloadsPreStake
     */
    getDelegationPayloadsPreStake: (data: GetDelegationPayloadsDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetDelegationPayloadsResponseDto;
        },
        any
      >({
        path: `/bitcoin/getDelegationPayloadsPreStake`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Build a Babylon pre-stake transaction with signed delegation payloads. Only available on testnet
     *
     * @tags Bitcoin
     * @name BuildBabylonPreStakeTransaction
     * @summary Build a Babylon pre-stake transaction with signed delegation payloads
     * @request POST:/bitcoin/buildBabylonPreStakeTransaction
     */
    buildBabylonPreStakeTransaction: (data: BuildBabylonPreStakeTransactionDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildBabylonPreStakeTransactionResponseDto;
        },
        any
      >({
        path: `/bitcoin/buildBabylonPreStakeTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit a signed pre-stake registration to Babylon for covenant verification. Only available on testnet
     *
     * @tags Bitcoin
     * @name SubmitPreStakeRegistration
     * @summary Submit a signed pre-stake registration to Babylon for covenant verification
     * @request POST:/bitcoin/submitPreStakeRegistration
     */
    submitPreStakeRegistration: (data: SubmitPreStakeRegistrationDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: SubmitPreStakeRegistrationResponseDto;
        },
        any
      >({
        path: `/bitcoin/submitPreStakeRegistration`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Finalize a verified pre-stake by broadcasting the Bitcoin staking transaction. Only available on testnet
     *
     * @tags Bitcoin
     * @name FinalizePreStake
     * @summary Broadcast and finalize a verified pre-stake Bitcoin staking transaction
     * @request POST:/bitcoin/finalizePreStake
     */
    finalizePreStake: (data: FinalizePreStakeDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: FinalizePreStakeResponseDto;
        },
        any
      >({
        path: `/bitcoin/finalizePreStake`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  public = {
    /**
     * @description get data for rendering network statistics (asset prices, assets UAM, etc)
     *
     * @tags Public
     * @name GetWebsiteData
     * @summary Get Pier Two Public Data
     * @request GET:/public/websiteData
     */
    getWebsiteData: (
      query?: {
        /** currency used for price data (`usd` by default) */
        currency?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: WebsiteData;
        },
        any
      >({
        path: `/public/websiteData`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get static network config such as chain id, contract addresses, operator addresses, etc
     *
     * @tags Public
     * @name NetworkConfig
     * @summary Get Network Config
     * @request GET:/public/networkConfig
     */
    networkConfig: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: PierTwoInfo;
        },
        any
      >({
        path: `/public/networkConfig`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get system information including API versions
     *
     * @tags Public
     * @name GetSystemInfo
     * @summary Get System Info
     * @request GET:/public/systemInfo
     */
    getSystemInfo: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: SystemInfoResponse;
        },
        any
      >({
        path: `/public/systemInfo`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
