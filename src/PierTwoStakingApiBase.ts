/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

type UtilRequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export interface ApiResponseBase {
  data: object;
  message?: string;
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
   * User region as ISO 3166-1 alpha-2 country code
   * @example "US"
   */
  region: string;
  /**
   * Details of agreed terms and conditions
   * @example {"applicableTerms":"general","agreedTerms":{"29-05-2024":"2024-08-19T22:35:52.622Z"}}
   */
  termsAndConditions: object;
  authorizedLogins: AuthorizedEmail[];
}

export interface ApiRoles {
  /** Full access to all operations */
  admin?: boolean;
  /** Access to everything except team member management and API key management */
  staker?: boolean;
  /** Read-only access across all staking networks */
  reader?: boolean;
}

export interface IpRestrictionDto {
  /**
   * List of allowed CIDR ranges (IPv4 and IPv6 supported). Singular IPs must be encoded as host CIDRs (IPv4 /32, IPv6 /128).
   * @example ["192.168.1.0/24","10.0.0.50/32","2001:db8::/32","::1/128"]
   */
  allowedCidrs: string[];
}

export interface IpRestrictionConfigDto {
  /** IP restriction rules */
  restrictions: IpRestrictionDto;
}

export interface GetApiKeyDto {
  /**
   * Internal id of the API key
   * @example "66f181818181818181818181"
   */
  keyId: string;
  /** @example "Default API Key" */
  name: string;
  /** @example "0b381d39-43b4-480f-b3c9-f3ff3d19cb0a" */
  key: string;
  /** @format date-time */
  deletedAt?: string;
  roles: ApiRoles;
  /** IP restrictions for this API key */
  ipRestrictions?: IpRestrictionConfigDto;
}

export interface CreateApiKeyDto {
  /** @example "Default API Key" */
  name: string;
  roles?: ApiRoles;
  /** IP restriction configuration for the API key */
  ipRestrictions?: IpRestrictionConfigDto;
}

export type CustomerSummary = object;

export interface GetIpRestrictionsResponseDto {
  /** IP restriction configuration */
  ipRestrictions: IpRestrictionConfigDto;
}

export interface UpdateAccountIpRestrictionsDto {
  /** IP restriction configuration for the account */
  ipRestrictions: IpRestrictionConfigDto;
}

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
  /** @example [{"type":"createAndDelegate","input":{"fromPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","stakeAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","withdrawAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","reference":"Fund 1","label":"SOL stake 1","lamports":1000000000}},{"type":"create","input":{"fromPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","stakeAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","withdrawAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","reference":"Fund 1","label":"SOL stake 1","lamports":1000000000}},{"type":"delegate","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8"}},{"type":"undelegate","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8"}},{"type":"withdraw","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","toPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","lamports":1000000000}},{"type":"merge","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","sourceStakePubkey":"2niBr5ra1jswrGRkxVG42GC63fTQ7TtE6uTiNeuJTu67"}},{"type":"authorize","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","newAuthorizedPubkey":"ehxMpdUdAS63ceRCWqTGnMVHpdkjzaEsXDq1e5usoni","stakeAuthorizationType":1}}] */
  instructions: StakeInstructionWithInputs[];
}

export interface SolanaStakingPerformanceSummary {
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

export interface SolanaStakingRewardsChartData {
  inflationRewards: string;
  mevRewards: string;
  periodStart: number;
  periodEnd: number;
  price: number;
}

export interface SolanaStakingNetworkInfo {
  currentEpoch: number;
  avgInflationRewardRate: number;
  slotIndex: number;
  slotsInEpoch: number;
}

export interface StakeDetails {
  stakeId: number;
  customerId: number;
  reference: string;
  region?: "US" | "AU";
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
  label?: string;
  /**
   * region
   * @example "AU"
   */
  region?: "US" | "AU";
}

export interface Validator {
  pubkey: string;
  withdrawal_credentials: string;
  amount: number;
  signature: string;
  deposit_message_root: string;
  region?: "US" | "AU";
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
  region?: "US" | "AU";
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
  label?: string;
  /**
   * region
   * @example "AU"
   */
  region?: "US" | "AU";
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
  region?: "US" | "AU";
}

export interface ValidatorWithStakeDetails {
  pubkey: string;
  withdrawal_credentials: string;
  amount: number;
  signature: string;
  deposit_message_root: string;
  region?: "US" | "AU";
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
   * Array of validator deposit details
   * @example [{"validatorPubkey":"0xa20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03","amountWei":"1000000000000000000"}]
   */
  deposits: EthereumValidatorTopupBaseDto[];
}

export interface EthereumValidatorDepositDto {
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
  /**
   * Deposit signature (signed by validator key)
   * @example "8473169ba6...fdfb36571"
   */
  signature: string;
  /**
   * Withdrawal credentials
   * @example "0x020000000000000000000000110af92ba116fd7868216aa794a7e4da3b9d7d11"
   */
  withdrawalCredentials: string;
}

export interface EthereumValidatorDepositBaseDto {
  /**
   * Validator public key to deposit into
   * @example "0xa20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03"
   */
  validatorPubkey: string;
  /**
   * Amount of ETH to deposit in wei
   * @example "1000000000000000000"
   */
  amountWei: string;
  /**
   * Deposit signature (signed by validator key)
   * @example "8473169ba6...fdfb36571"
   */
  signature: string;
  /**
   * Withdrawal credentials
   * @example "0x020000000000000000000000110af92ba116fd7868216aa794a7e4da3b9d7d11"
   */
  withdrawalCredentials: string;
}

export interface EthereumValidatorBatchDepositDto {
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
   * Array of validator deposit details
   * @example [{"validatorPubkey":"0xa20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03","amountWei":"1000000000000000000","signature":"8473169ba6...fdfb36571","withdrawalCredentials":"0x020000000000000000000000110af92ba116fd7868216aa794a7e4da3b9d7d11"}]
   */
  deposits: EthereumValidatorDepositBaseDto[];
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
  exitingBalanceGwei: string;
  enteringBalanceGwei: string;
}

export interface ValidatorInfo {
  pubKey: string;
  index: string;
  name: string;
  status: string;
  depositTime: number;
}

export interface ValidatorDailyRewardDto {
  index: number;
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

export interface BitcoinUtxoStatus {
  confirmed: boolean;
  block_height: number;
  block_hash: string;
  block_time: number;
}

export interface GetBitcoinAddressUtxos {
  txid: string;
  vout: number;
  status: BitcoinUtxoStatus;
  value: number;
}

export interface BuildBabylonStakingTransactionResponseDto {
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

export interface BitcoinUtxoDto {
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

export interface BuildBabylonStakingTransactionDto {
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
  utxos?: BitcoinUtxoDto[];
  /**
   * Whether to automatically fund the transaction
   * @default false
   */
  autoFund?: boolean;
  /**
   * Fee rate in satoshis per byte
   * @example 10
   */
  feeRate?: number;
}

export interface BitcoinTransactionResponseDto {
  /**
   * The transaction ID
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  txId: string;
}

export interface SubmitBabylonStakingTransactionDto {
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

export interface GetBabylonDelegationPayloadsResponseDto {
  /** The slashing transaction PSBT in hex format that needs to be signed */
  slashingPsbtHex: string;
  /** The unbonding slashing transaction PSBT in hex format that needs to be signed */
  unbondingSlashingPsbtHex: string;
  /** The Babylon address that needs to be signed as proof of ownership */
  babylonAddress: string;
}

export interface GetBabylonDelegationPayloadsDto {
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

export interface BuildBabylonRegistrationTransactionResponseDto {
  /** The unsigned Babylon transaction in base64 format ready to be signed and broadcast */
  transaction: string;
  /** The estimated gas required for the transaction on the Babylon chain */
  gasEstimate: number;
}

export interface BabylonSignedPayloadsDto {
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

export interface BuildBabylonRegistrationTransactionDto {
  /**
   * Staking transaction ID
   * @example "txid123..."
   */
  stakingTxId: string;
  /** Signed payloads containing PSBT hex strings and Babylon address */
  signedPayloads: BabylonSignedPayloadsDto;
}

export interface BabylonStakingTransactionDto {
  txid: string;
  confirmed: boolean;
  broadcasted: boolean;
  depth: number;
}

export interface BabylonCovenantSignatureDto {
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

export interface BabylonUndelegationResponseDto {
  /** The hex-encoded unbonding transaction */
  unbonding_tx_hex: string;
  /** List of covenant unbonding signatures */
  covenant_unbonding_sig_list: CovenantUnbondingSignatureDto[];
  /** The hex-encoded slashing transaction */
  slashing_tx_hex: string;
  /** The delegator's slashing signature in hex */
  delegator_slashing_sig_hex: string;
  /** List of covenant slashing signatures */
  covenant_slashing_sigs: BabylonCovenantSignatureDto[];
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
  covenant_sigs: BabylonCovenantSignatureDto[];
  /** The staking output index */
  staking_output_idx: number;
  /** Whether the delegation is active */
  active: boolean;
  /** Description of the delegation status */
  status_desc: string;
  /** The unbonding time in blocks */
  unbonding_time: number;
  /** The undelegation response */
  undelegation_response?: BabylonUndelegationResponseDto | null;
  /** The parameters version */
  params_version: number;
}

export interface BabylonDelegationInfoResponseDto {
  /** The BTC delegation information */
  btc_delegation: BtcDelegationDto;
}

export interface BabylonUnbondingTransactionDto {
  txid: string;
  confirmed: boolean;
  broadcasted: boolean;
}

export interface GetBabylonStakingStatusResponseDto {
  status: string;
  isRegistered: boolean;
  statusExplanation: string;
  stakingTransaction: BabylonStakingTransactionDto;
  delegationInfo: BabylonDelegationInfoResponseDto | null;
  unbondingTransaction: BabylonUnbondingTransactionDto | null;
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

export interface BuildBabylonUnbondingTransactionResponseDto {
  /**
   * The partially signed Bitcoin transaction (PSBT) that needs to be signed by the staker
   * @example "70736274ff01007d020000000125e99b2..."
   */
  unbondingPsbt: string;
}

export interface BabylonStakingTxRequestDto {
  /**
   * The transaction ID of the staking transaction
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  stakingTxId: string;
}

export interface SubmitBabylonUnbondingTransactionDto {
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

export interface BuildBabylonWithdrawalTransactionResponseDto {
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

export interface BuildBabylonWithdrawalTransactionDto {
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
  feeRate?: number;
}

export interface SubmitBabylonWithdrawalTransactionDto {
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

export interface BabylonStakingParamsDto {
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

export interface GetBabylonStakingParamsResponseDto {
  /** Current staking parameters */
  params: BabylonStakingParamsDto;
}

export interface BabylonStakingDetailDto {
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

export interface GetBabylonStakingDetailsResponseDto {
  /** List of staking details for the address */
  stakingDetails: BabylonStakingDetailDto[];
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

export interface BuildBabylonPreStakeRegistrationResponseDto {
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

export interface BuildBabylonPreStakeRegistrationDto {
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
  feeRate?: number;
  /** Specific UTXOs to use (optional) */
  utxos?: BitcoinUtxoDto[];
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

export interface SubmitBabylonPreStakeRegistrationResponseDto {
  /**
   * The Babylon transaction hash
   * @example "ABC123DEF456..."
   */
  txId: string;
}

export interface SubmitBabylonPreStakeRegistrationDto {
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

export interface FinalizeBabylonPreStakeResponseDto {
  /**
   * The Bitcoin transaction ID
   * @example "e7344f4673bc62cdbcd501c629feda83784bddd900a40dc088ec26241817576a"
   */
  txId: string;
}

export interface FinalizeBabylonPreStakeDto {
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

export interface CardanoStakeAccount {
  stakeAccountAddress: string;
  poolId: string;
  lovelace: string;
  status: string;
  reference: string;
  label: string;
  activationEpoch: number;
  lastSyncEpoch: number;
  totalWithdrawals: string;
  withdrawableAmount: string;
  drepId: string;
  performanceTotal: string;
  performance30d: string;
  performance7d: string;
}

export interface CardanoStakingPerformanceSummary {
  stakingRewardsTotal: string;
  stakingRewards7d: string;
  stakingRewards30d: string;
}

export interface CardanoStakeAccountRewards {
  stakeAccountAddress: string;
  epoch: number;
  type: string;
  dayStart: number;
  epochStart: number;
  dayEnd: number;
  epochEnd: number;
  consensusRewardAmount: string;
  poolId: string;
  adaPrice: number;
}

export interface AddCardanoStakeAccountDto {
  /**
   * The stake account address to add to the system
   * @example "stake1u9klnfr0v4f2k3v2c0t4d0h3l2p8x9q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f"
   */
  stakeAccountAddress: string;
  /**
   * Arbitrary reference/grouping, this will show in the UI as the account
   * @example "Test Fund"
   */
  reference: string;
  /**
   * Secondary label for this particular stake position
   * @example "Balance Sheet Stake"
   */
  label?: string;
}

export interface CardanoUtxo {
  /**
   * The transaction hash
   * @example "0x1234567890abcdef..."
   */
  txHash: string;
  /**
   * The output index
   * @example 0
   */
  outputIndex: number;
  /**
   * The amount of lovelace in the output
   * @example "1000000"
   */
  lovelace: string;
  /**
   * The address of the output
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  address: string;
}

export interface CardanoTransactionCraftingResponse {
  /**
   * The unsigned transaction in CBOR format
   * @example "84a50081825820..."
   */
  unsignedTx: string;
  /**
   * The transaction fee in lovelace
   * @example "170000"
   */
  fee: string;
  /**
   * UTXOs being spent as part of the transaction
   * @example [{"txHash":"0x1234567890abcdef...","outputIndex":0,"lovelacee":"1000000","address":"addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"}]
   */
  utxosIn: CardanoUtxo[];
  /**
   * UTXOs being created as change outputs
   * @example [{"txHash":"0x1234567890abcdef...","outputIndex":0,"lovelace":"1000000","address":"addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"}]
   */
  utxosOut: CardanoUtxo[];
}

export interface CardanoRegisterStakeAddressDto {
  /**
   * The stake address to use for staking operations
   * @example "stake1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  stakeAddress: string;
  /**
   * The address to use for UTXO selection
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  utxoAddress: string;
  /**
   * The address to spend utxos to. If not provided, the change will be returned to the utxoAddress
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  changeAddress?: string;
  /**
   * Arbitrary reference/grouping
   * @example "Test Fund"
   */
  reference: string;
  /**
   * Optional secondary label for this particular stake position
   * @example "Balance Sheet Stake"
   */
  label?: string;
}

export interface CardanoDeregisterStakeAddressDto {
  /**
   * The stake address to use for staking operations
   * @example "stake1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  stakeAddress: string;
  /**
   * The address to use for UTXO selection
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  utxoAddress: string;
  /**
   * The address to spend utxos to. If not provided, the change will be returned to the utxoAddress
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  changeAddress?: string;
}

export interface CardanoDelegateStakeDto {
  /**
   * The stake address to use for staking operations
   * @example "stake1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  stakeAddress: string;
  /**
   * The address to use for UTXO selection
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  utxoAddress: string;
  /**
   * The address to spend utxos to. If not provided, the change will be returned to the utxoAddress
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  changeAddress?: string;
  /**
   * Arbitrary reference/grouping
   * @example "Test Fund"
   */
  reference: string;
  /**
   * Optional secondary label for this particular stake position
   * @example "Balance Sheet Stake"
   */
  label?: string;
}

export interface CardanoRegisterAndDelegateDto {
  /**
   * The stake address to use for staking operations
   * @example "stake1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  stakeAddress: string;
  /**
   * The address to use for UTXO selection
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  utxoAddress: string;
  /**
   * The address to spend utxos to. If not provided, the change will be returned to the utxoAddress
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  changeAddress?: string;
  /**
   * Arbitrary reference/grouping
   * @example "Test Fund"
   */
  reference: string;
  /**
   * Optional secondary label for this particular stake position
   * @example "Balance Sheet Stake"
   */
  label?: string;
}

export interface CardanoStakingRewardsWithdrawalDto {
  /**
   * The stake address to use for staking operations
   * @example "stake1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  stakeAddress: string;
  /**
   * The address to use for UTXO selection
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  utxoAddress: string;
  /**
   * The address to spend utxos to. If not provided, the change will be returned to the utxoAddress
   * @example "addr1qdzmqvfdnxsn4a3hd57x435madswynt4hqw8n7f2pdq05g4995re"
   */
  changeAddress?: string;
  /**
   * The amount of lovelace to withdraw
   * @example "1000000"
   */
  amountLovelace: string;
}

export interface CardanoTransactionSubmissionResponse {
  /**
   * The transaction hash of the submitted transaction
   * @example "0x1234567890abcdef..."
   */
  txHash: string;
}

export interface SubmitCardanoTransactionDto {
  /**
   * The signed transaction in CBOR hex format
   * @example "84a50081825820..."
   */
  signedTx: string;
}

export interface CardanoTransactionStatusResponse {
  /**
   * The transaction hash of the submitted transaction
   * @example "0x1234567890abcdef..."
   */
  txHash: string;
  /**
   * The block number of the transaction
   * @example 123123123
   */
  block: number;
  /**
   * The block number of the transaction
   * @example 1635505891
   */
  blockTime: number;
  /**
   * The slot number of the transaction
   * @example 42000000
   */
  slot: number;
  /**
   * The fees of the transaction
   * @example 1000000
   */
  fees: string;
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

export interface PierTwoCardanoInfo {
  network: string;
  defaultPoolId: string;
}

export interface PierTwoInfo {
  ethereum: PierTwoEthereumInfo;
  solana: PierTwoSolanaInfo;
  bitcoin: PierTwoBitcoinInfo;
  cardano: PierTwoCardanoInfo;
}

export interface SystemInfoResponse {
  /**
   * Version of the API Gateway service
   * @example "1.0.0"
   */
  apiGatewayVersion: string;
  /**
   * Version of the internal Ethereum staking API for AU region
   * @example "1.0.0"
   */
  auEthStakingApiVersion: string;
  /**
   * Version of the internal Ethereum staking API for US region
   * @example "1.0.0"
   */
  usEthStakingApiVersion: string;
}

export interface RegisterLsEthResponse {
  /**
   * Account status
   * @example "ACTIVE"
   */
  status: string;
  /**
   * Account creation timestamp
   * @example "2024-01-15T10:30:00Z"
   */
  createdAt: string;
}

export interface RegistrationStatusResponse {
  /**
   * Account status
   * @example "ACTIVE"
   */
  status: string;
}

export interface LsEthWalletChallengeResponse {
  /**
   * Message to be signed by the wallet
   * @example "Please sign this message to verify wallet ownership. Nonce: abc123def456"
   */
  message: string;
  /**
   * Unique nonce for this challenge
   * @example "abc123def456"
   */
  nonce: string;
  /**
   * Expiration timestamp for this challenge
   * @format date-time
   * @example "2023-07-28T12:00:00.000Z"
   */
  expiresAt: string;
}

export interface LsEthWalletChallengeRequest {
  /**
   * Ethereum wallet address to verify ownership of
   * @example "0x742d35Cc6634C0532925a3b8D084FB0F26f01234"
   */
  address: string;
}

export interface LsEthWalletDto {
  /** Wallet address */
  address: string;
  /** Whether the wallet is allowlisted */
  allowlisted: boolean;
  /** Time the wallet was created */
  createdAt: string;
  /** Our UUID for this wallet */
  id: string;
  /** Whether the wallet is on platform */
  onPlatform: boolean;
  /** Status of the submission of the wallet account on-chain */
  status: string;
  /** The type of wallet - chain or protocol it exists on */
  type: string;
}

export interface LsEthWalletVerifyResponse {
  /**
   * Indicates if wallet was successfully added
   * @example true
   */
  success: boolean;
  /** Wallet information from Alluvial */
  wallet: LsEthWalletDto;
}

export interface LsEthWalletVerifyRequest {
  /**
   * Ethereum wallet address being verified
   * @example "0x742d35Cc6634C0532925a3b8D084FB0F26f01234"
   */
  address: string;
  /**
   * Nonce from the challenge response
   * @example "abc123def456"
   */
  nonce: string;
  /**
   * Signature of the challenge message
   * @example "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
   */
  signature: string;
}

export interface LsEthListWalletsResponse {
  /** Array of wallets for the user */
  wallets: LsEthWalletDto[];
}

export interface LsEthProtocolStatsResponse {
  /**
   * 7-day average staking reward rate
   * @example "3.5"
   */
  aSrr7d: string;
  /**
   * ETH to LsETH conversion rate
   * @example "1.0423421489732119402"
   */
  conversionRate: string;
  /**
   * Date of the protocol statistics
   * @example "2025-08-08T00:58:48Z"
   */
  date: string;
  /**
   * Gross fee in LsETH
   * @example "1234.56"
   */
  grossFeeLsEth: string;
  /**
   * Gross fee rate
   * @example "0.1"
   */
  grossFeeRate: string;
  /**
   * Oracle report reference
   * @example "19fedfa926a41b9d2e98f4f5bb30cd275de6be4cd6d9a45f20232bef61b6fa4600000088"
   */
  oracleReport: string;
  /**
   * Protocol service fee rate
   * @example "0.1"
   */
  protocolServiceFeeRate: string;
  /**
   * Total rewards in ETH
   * @example "12345.67"
   */
  rewardsEth: string;
  /**
   * Total ETH staked in the protocol
   * @example "1000000.4234949295"
   */
  totalEthStaked: string;
  /**
   * Total LsETH token supply
   * @example "950000.999586858321"
   */
  totalLsEthSupply: string;
  /**
   * Total number of active protocol validator keys
   * @example 25000
   */
  totalProtocolActiveKeysCount: number;
  /**
   * Total LsETH burned by the protocol
   * @example "50542.59394311209"
   */
  totalProtocolBurnsLsEth: string;
  /**
   * Total LsETH minted by the protocol
   * @example "103509.4500201346984"
   */
  totalProtocolMintsLsEth: string;
}

export interface LsEthDepositDto {
  /**
   * The address to send the transaction from, this is required for accurate gas estimation and nonce calculation
   * @example "0x0000000000000000000000000000000000000000"
   */
  fromAddress: string;
  /**
   * multiplier to apply to gas estimate, defaults to 1.2
   * @example 1.2
   */
  gasEstimateMultiplier?: number;
  /**
   * Amount of ETH to deposit in wei
   * @example "1000000000000000000"
   */
  amountWei: string;
}

export interface LsEthRedeemDto {
  /**
   * The address to send the transaction from, this is required for accurate gas estimation and nonce calculation
   * @example "0x0000000000000000000000000000000000000000"
   */
  fromAddress: string;
  /**
   * multiplier to apply to gas estimate, defaults to 1.2
   * @example 1.2
   */
  gasEstimateMultiplier?: number;
  /**
   * Amount of lsETH to redeem in wei
   * @example "1000000000000000000"
   */
  lsEthAmountWei: string;
  /**
   * Recipient address for the redeemed ETH (can be different from fromAddress)
   * @example "0x1234567890123456789012345678901234567890"
   */
  recipient: string;
}

export interface LsEthWalletBalanceResponse {
  /**
   * Wallet address
   * @example "0xc8cd785c6ba55d71a6530c08d1df7ecbf090299c"
   */
  address: string;
  /**
   * LsETH balance
   * @example "295022399276590070922"
   */
  lsEthBalance: string;
  /**
   * Block number
   * @example 962779
   */
  blockNumber: number;
}

export interface LsEthRedeemRequestDto {
  /**
   * The ID of the redeem request
   * @example 1234
   */
  id: number;
  /**
   * The owner of the redeem request
   * @example "0x1234...5678"
   */
  owner: string;
  /**
   * The amount of the redeem request in lsETH (wei)
   * @example "1000000000000000000"
   */
  totalAmountLsEth: string;
  /**
   * The maximum amount of ETH redeemable by this request (wei)
   * @example "1000000000000000000"
   */
  maxRedeemableAmountEth: string;
  /**
   * The possible amount available to claim in lsETH (wei)
   * @example "1000000000000000000"
   */
  claimableAmountLsEth: string;
  /**
   * The amount already claimed in ETH (wei)
   * @example "0"
   */
  claimedAmountEth: string;
  /**
   * The amount already claimed in lsETH (wei)
   * @example "0"
   */
  claimedAmountLsEth: string;
  /**
   * Block number when the request was made
   * @example 19000000
   */
  requestedAt: number;
  /**
   * Timestamp when the request was made
   * @example "2024-01-20T10:30:00Z"
   */
  timestamp: string;
  /**
   * The status of the claimed request
   * @example "NOT_CLAIMED"
   */
  statusClaim:
    | "NOT_CLAIMED"
    | "PARTIALLY_CLAIMED"
    | "FULLY_CLAIMED"
    | "PENDING_SATISFACTION"
    | "PARTIALLY_SATISFIED"
    | "FULLY_SATISFIED";
  /**
   * The status of the satisfaction (withdrawal stack matching the redeem queue)
   * @example "PENDING_SATISFACTION"
   */
  statusSatisfaction:
    | "NOT_CLAIMED"
    | "PARTIALLY_CLAIMED"
    | "FULLY_CLAIMED"
    | "PENDING_SATISFACTION"
    | "PARTIALLY_SATISFIED"
    | "FULLY_SATISFIED";
  /**
   * The withdrawal event ID needed to claim the redeem (or -1 when no withdrawals available)
   * @example 123
   */
  withdrawalEventId: number;
  /**
   * The height is the cumulative sum of all the sizes of preceding redeem requests
   * @example 100000
   */
  height: number;
}

export interface LsEthListRedeemsResponse {
  /** List of redemption requests */
  redeems: LsEthRedeemRequestDto[];
}

export interface LsEthRedeemDetailsResponse {
  /**
   * The ID of the redeem request
   * @example 1234
   */
  id: number;
  /**
   * The owner of the redeem request
   * @example "0x1234...5678"
   */
  owner: string;
  /**
   * The amount of the redeem request in lsETH (wei)
   * @example "1000000000000000000"
   */
  totalAmountLsEth: string;
  /**
   * The maximum amount of ETH redeemable by this request (wei)
   * @example "1000000000000000000"
   */
  maxRedeemableAmountEth: string;
  /**
   * The possible amount available to claim in lsETH (wei)
   * @example "1000000000000000000"
   */
  claimableAmountLsEth: string;
  /**
   * The amount already claimed in ETH (wei)
   * @example "0"
   */
  claimedAmountEth: string;
  /**
   * The amount already claimed in lsETH (wei)
   * @example "0"
   */
  claimedAmountLsEth: string;
  /**
   * Block number when the request was made
   * @example 19000000
   */
  requestedAt: number;
  /**
   * Timestamp when the request was made
   * @example "2024-01-20T10:30:00Z"
   */
  timestamp: string;
  /**
   * The status of the claimed request
   * @example "NOT_CLAIMED"
   */
  statusClaim:
    | "NOT_CLAIMED"
    | "PARTIALLY_CLAIMED"
    | "FULLY_CLAIMED"
    | "PENDING_SATISFACTION"
    | "PARTIALLY_SATISFIED"
    | "FULLY_SATISFIED";
  /**
   * The status of the satisfaction (withdrawal stack matching the redeem queue)
   * @example "PENDING_SATISFACTION"
   */
  statusSatisfaction:
    | "NOT_CLAIMED"
    | "PARTIALLY_CLAIMED"
    | "FULLY_CLAIMED"
    | "PENDING_SATISFACTION"
    | "PARTIALLY_SATISFIED"
    | "FULLY_SATISFIED";
  /**
   * The withdrawal event ID needed to claim the redeem (or -1 when no withdrawals available)
   * @example 123
   */
  withdrawalEventId: number;
  /**
   * The height is the cumulative sum of all the sizes of preceding redeem requests
   * @example 100000
   */
  height: number;
  /**
   * Customer ID associated with this redemption
   * @example "67890abcdef"
   */
  customerId: string;
}

export interface LsEthRedeemProjectionResponse {
  /**
   * Customer ID associated with this redemption
   * @example "67890abcdef"
   */
  customerId: string;
  /**
   * The redeem request ID
   * @example 1234
   */
  redeemId: number;
  /**
   * Estimated time when the redemption will be satisfied
   * @example "2024-02-01T10:30:00Z"
   */
  estimatedSatisfactionTime: string;
  /**
   * Estimated number of days until satisfaction
   * @example 7
   */
  estimatedDaysUntilSatisfaction: number;
  /**
   * Whether the redemption is already satisfied
   * @example true
   */
  isAlreadySatisfied: boolean;
  /**
   * Human-readable message about the projection
   * @example "The redemption is expected to be satisfied in approximately 7 days"
   */
  message: string;
}

export interface LsEthClaimRedeemDto {
  /**
   * The address that will send the transaction
   * @example "0x1234567890123456789012345678901234567890"
   */
  fromAddress: string;
  /**
   * Array of redeem request IDs to claim
   * @example [1234,1235]
   */
  redeemRequestIds: number[];
  /**
   * Array of withdrawal event IDs corresponding to the redeem requests
   * @example [456,457]
   */
  withdrawalEventIds: number[];
  /**
   * Gas estimate multiplier (default: 1.2)
   * @example 1.2
   */
  gasEstimateMultiplier?: number;
}

export interface LsEthWalletTransactionDto {
  /**
   * ETH amount involved in the transaction
   * @example "1.5"
   */
  amountEth: string;
  /**
   * lsETH amount involved in the transaction
   * @example "1.499"
   */
  amountLsEth: string;
  /**
   * ETH to lsETH conversion rate at time of transaction
   * @example "1.000879064857666026"
   */
  conversionRate: string;
  /**
   * Transaction date in ISO format
   * @example "2025-07-29T07:36:36Z"
   */
  date: string;
  /**
   * Whether the transaction is finalized
   * @example true
   */
  finalized: boolean;
  /**
   * Blockchain transaction hash
   * @example "0x6911f98fc06e1b834c704f271f234dbeed867d5a745dc0889f7dfd8b79274e3c"
   */
  transactionHash: string;
  /**
   * Type of transaction
   * @example "DEPOSIT"
   */
  transactionType: "DEPOSIT" | "REDEEM" | "CLAIM";
}

export interface LsEthWalletTransactionHistoryResponse {
  /** List of wallet transactions */
  transactions: LsEthWalletTransactionDto[];
  /**
   * Cursor for next page of results
   * @example "eyJhZnRlciI6IjIwMjUtMDctMjkifQ=="
   */
  nextCursor?: string;
}

export interface LsEthAggregateActivityItem {
  /** Type of activity item */
  type: "TRANSACTION" | "REDEMPTION";
  /**
   * Date of the activity in ISO format
   * @example "2025-07-29T07:36:36Z"
   */
  date: string;
  /**
   * Wallet address associated with this activity
   * @example "0x1234567890123456789012345678901234567890"
   */
  walletAddress: string;
  /** Transaction data (only present when type is TRANSACTION) */
  transaction?: LsEthWalletTransactionDto;
  /** Redemption data (only present when type is REDEMPTION) */
  redemption?: LsEthRedeemRequestDto;
}

export interface LsEthAggregateActivityResponse {
  /** Array of activity items sorted by date (newest first) */
  activities: LsEthAggregateActivityItem[];
  /**
   * Total number of activity items
   * @example 25
   */
  totalCount: number;
}

export interface LsEthRedeemManagerInfoResponse {
  /**
   * The cumulative sum of the redeem request heights
   * @example 1000
   */
  totalAmountRedeemQueueLsEth: number;
  /**
   * The cumulative sum of the withdrawal event heights
   * @example 500
   */
  totalAmountWithdrawalStackLsEth: number;
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

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://gw-1.api.piertwo.io";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

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
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
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
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
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

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
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

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
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
 * @version 1.0.113-main-mainnet
 * @baseUrl https://gw-1.api.piertwo.io
 * @contact
 *
 * The Pier Two Staking API Docs
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
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
     * @request PUT:/account/apikeys/{keyId}
     */
    revokeApiKey: (keyId: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetApiKeyDto;
        },
        any
      >({
        path: `/account/apikeys/${keyId}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns detailed summary of stake positions, known addresses, and rewards
     *
     * @tags Account
     * @name GetAccountSummary
     * @summary Get account summary
     * @request GET:/account/summary
     */
    getAccountSummary: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CustomerSummary;
        },
        any
      >({
        path: `/account/summary`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get IP restrictions for user account (JWT authentication)
     *
     * @tags Account
     * @name GetUserIpRestrictions
     * @summary Get user IP restrictions
     * @request GET:/account/userIpRestrictions
     */
    getUserIpRestrictions: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetIpRestrictionsResponseDto;
        },
        any
      >({
        path: `/account/userIpRestrictions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update IP restrictions for user account (JWT authentication)
     *
     * @tags Account
     * @name UpdateUserIpRestrictions
     * @summary Update user IP restrictions
     * @request PUT:/account/userIpRestrictions
     */
    updateUserIpRestrictions: (
      data: UpdateAccountIpRestrictionsDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetIpRestrictionsResponseDto;
        },
        any
      >({
        path: `/account/userIpRestrictions`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get default IP restrictions for all API keys under the account
     *
     * @tags Account
     * @name GetApiKeyDefaultIpRestrictions
     * @summary Get API key default IP restrictions
     * @request GET:/account/apiKeyDefaultIpRestrictions
     */
    getApiKeyDefaultIpRestrictions: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetIpRestrictionsResponseDto;
        },
        any
      >({
        path: `/account/apiKeyDefaultIpRestrictions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update default IP restrictions for all API keys under the account
     *
     * @tags Account
     * @name UpdateApiKeyDefaultIpRestrictions
     * @summary Update API key default IP restrictions
     * @request PUT:/account/apiKeyDefaultIpRestrictions
     */
    updateApiKeyDefaultIpRestrictions: (
      data: UpdateAccountIpRestrictionsDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetIpRestrictionsResponseDto;
        },
        any
      >({
        path: `/account/apiKeyDefaultIpRestrictions`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
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
     * @description Generate a stake transaction payload containing one or more instructions. Possible instruction types and inputs are described below: This returns a serialized transaction which can be deserialized, signed and submitted to the network. See [@solana/web.js](https://solana-labs.github.io/solana-web3.js/index.html) docs for deserializing [Versioned Messages](https://solana-labs.github.io/solana-web3.js/variables/VersionedMessage-1.html) and working with [Versioned Transactions](https://solana-labs.github.io/solana-web3.js/classes/VersionedTransaction.html) ***N.B any instructions operating on an existing stake account must specify target stakePubkey in the request body seperate to the instructions*** ***Create and delegate new stake account*** ~~~ { type: 'createAndDelegate' input: { fromPubkey: pubkey of funding address, stakeAuthority: address authorized to delegate and undelegate stake, withdrawAuthority: address authorized to withdraw stake, lamports: amount of lamports to stake (1 sol = 1000000000 lamports), reference: an arbitrary reference used to identify/group the stake within the Pier Two platform, label: an arbitrary label/memo for use within the Pier Two platform } } ~~~ ***Create a new stake account (same input data as 'createAndDelegate')*** ~~~ { type: 'create' input: { fromPubkey: pubkey of funding address, stakeAuthority: address authorized to delegate and undelegate stake, withdrawAuthority: address authorized to withdraw stake, lamports: amount of lamports to stake (1 sol = 1000000000 lamports), reference: an arbitrary reference used to identify/group the stake within the Pier Two platform, label: an arbitrary label/memo for use within the Pier Two platform } } ~~~ ***Delegate an existing stake account*** ~~~ { type: 'delegate' input: { authorizedPubkey: address authorized to delegate and undelegate stake } } ~~~ ***Undelegate (deactivate) an existing stake account*** ~~~ { type: 'undelegate' input: { authorizedPubkey: address authorized to delegate and undelegate stake } } ~~~ ***Withdraw inactive stake (deactivated stake balance or any other excess SOL held by account)*** ~~~ { type: 'withdraw' input: { toPubkey: recipient of withdrawn funds, authorizedPubkey: address authorized to withdraw stake, lamports: amount of lamports to withdraw (1 sol = 1000000000 lamports), } } ~~~ ***Merge an eligible stake account into target stake account*** An eligible stake account must have the same stakeAuthority and withdrawAuthority and have been active for an entire epoch and earned rewards ~~~ { type: 'merge' input: { sourceStakePubkey: address of stake account to merge (this account will be dissolved/closed onchain), authorizedPubkey: address authorized to delegate and undelegate } } ~~~ ***Change withdraw or stake authority address of an existing stake account*** This must be signed by the existing authority address of the stake account ~~~ { type: 'authorize' input: { authorizedPubkey: the current authority address of the stake account, newAuthorizedPubkey: the new authority address of the stake account, stakeAuthorizationType: the authority type to change (0 for stake authority, 1 for withdraw authority), } } ~~~
     *
     * @tags Solana
     * @name BuildSolanaStakeTransactionPayload
     * @summary Generate a Solana stake transaction payload
     * @request POST:/solana/stake/buildTransaction
     */
    buildSolanaStakeTransactionPayload: (
      data: BuildTransactionPayloadRequestDto,
      params: RequestParams = {},
    ) =>
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
     * @name GetSolanaStakePerformanceSummary
     * @summary Get Solana stake performance summary
     * @request GET:/solana/stake/performanceSummary
     */
    getSolanaStakePerformanceSummary: (
      query?: {
        /** comma seperated list of stake account pubkeys, will return data for all active stake accounts if none are provided */
        stakePubkey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: SolanaStakingPerformanceSummary;
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
     * @name GetSolanaStakeAccountDailyRewards
     * @summary Get daily rewards stats
     * @request GET:/solana/stake/dailyRewards
     */
    getSolanaStakeAccountDailyRewards: (
      query: {
        /** comma seperated list of stake account pubkeys */
        stakePubkey: string;
        /** fiat currency for solana pricing */
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
     * @name GetSolanaStakeRewardsChartData
     * @summary Get staking rewards chart data
     * @request GET:/solana/stake/rewardsChartData
     */
    getSolanaStakeRewardsChartData: (
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
          data: SolanaStakingRewardsChartData[];
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
     * @name GetSolanaNetworkStakingInfo
     * @summary Get current epoch staking reward info
     * @request GET:/solana/stake/networkInfo
     */
    getSolanaNetworkStakingInfo: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: SolanaStakingNetworkInfo;
        },
        any
      >({
        path: `/solana/stake/networkInfo`,
        method: "GET",
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
     * @name CreateEthereumStakeV2
     * @summary Create Capella-era (0x01) validator(s)
     * @request POST:/ethereum/stakeV2
     */
    createEthereumStakeV2: (data: CreateStakeDto, params: RequestParams = {}) =>
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
     * @name CreateEthereumStakeV3
     * @summary Create Pectra-era (0x02) validator(s)
     * @request POST:/ethereum/stakeV3
     */
    createEthereumStakeV3: (
      data: CreateStakePectraDto,
      params: RequestParams = {},
    ) =>
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
     * @name AbandonEthereumStake
     * @summary Abandon Stake
     * @request PUT:/ethereum/stake/{stakeId}/abandon
     */
    abandonEthereumStake: (stakeId: string, params: RequestParams = {}) =>
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
     * @name GetEthereumStake
     * @summary Get Stake details by stakeId
     * @request GET:/ethereum/stake/{stakeId}
     */
    getEthereumStake: (stakeId: string, params: RequestParams = {}) =>
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
     * @name GetEthereumDepositDataForStake
     * @summary Get deposit data for Stake
     * @request GET:/ethereum/stake/{stakeId}/depositdata
     */
    getEthereumDepositDataForStake: (
      stakeId: string,
      params: RequestParams = {},
    ) =>
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
     * @name GetEthereumStakesWithValidatorStatusCounts
     * @summary Get Stakes with validator counts bystatus
     * @request GET:/ethereum/stakesWithValidatorStatusCounts
     */
    getEthereumStakesWithValidatorStatusCounts: (
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
     * @name GetEthereumOrderedValidators
     * @summary Get Validators
     * @request GET:/ethereum/orderedValidators
     */
    getEthereumOrderedValidators: (
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
     * @description Generate one or more pre-signed exit messages for a specified list of public keys. You are not guaranteed one result per public key provided. Errors generating exit messages (usually caused by validator not being active or not being known to the system) will be handled silently and a result for this public key will not be included in the response. Your code should not assume one result per public key or consistent ordering of results.
     *
     * @tags Ethereum
     * @name GenEthereumPresignedExitMsg
     * @summary Generate exit message(s)
     * @request POST:/ethereum/genPresignedExitMsg
     */
    genEthereumPresignedExitMsg: (
      data: GenPresignedExitMsgDto,
      params: RequestParams = {},
    ) =>
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
     * @name BroadcastEthereumPresignedExitMessage
     * @summary Broadcast exit message(s)
     * @request POST:/ethereum/broadcastPresignedExitMsg
     */
    broadcastEthereumPresignedExitMessage: (
      data: ValidatorExitMessage,
      params: RequestParams = {},
    ) =>
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
     * @name BulkWithdrawEthereumValidators
     * @summary Bulk withdraw Validators
     * @request POST:/ethereum/bulkWithdrawValidators
     */
    bulkWithdrawEthereumValidators: (
      data: GenPresignedExitMsgDto,
      params: RequestParams = {},
    ) =>
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
     * @name EstimateEthereumWithdrawalTimes
     * @summary Estimate validator exit times
     * @request POST:/ethereum/estimateWithdrawalTimes
     */
    estimateEthereumWithdrawalTimes: (
      data: EstimateWithdrawalTimesDto,
      params: RequestParams = {},
    ) =>
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
     * @name GenerateEthereumDepositData
     * @summary Generate arbitrary amount deposit data
     * @request POST:/ethereum/validators/generateDepositData
     */
    generateEthereumDepositData: (
      data: GenerateDepositDataDto,
      params: RequestParams = {},
    ) =>
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
     * @name CraftEthereumValidatorTopupTx
     * @summary Generate validator top-up transaction
     * @request POST:/ethereum/txcrafting/validators/topup
     */
    craftEthereumValidatorTopupTx: (
      data: EthereumValidatorTopupDto,
      params: RequestParams = {},
    ) =>
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
     * @name CraftEthereumValidatorBatchTopupTx
     * @summary Generate batch validator top-up transaction
     * @request POST:/ethereum/txcrafting/validators/batchtopup
     */
    craftEthereumValidatorBatchTopupTx: (
      data: EthereumValidatorBatchTopupDto,
      params: RequestParams = {},
    ) =>
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
     * @description Generate transaction data for depositing ETH to a single validator that is not yet active. This endpoint will generate a transaction for interacting with the [canonical beacon deposit contract](https://etherscan.io/address/0x00000000219ab540356cBB839Cbe05303d7705Fa). The returned transaction data must be signed and broadcast by the user.
     *
     * @tags Ethereum
     * @name CraftEthereumValidatorDepositTx
     * @summary Generate initial validator deposit transaction
     * @request POST:/ethereum/txcrafting/validators/deposit
     */
    craftEthereumValidatorDepositTx: (
      data: EthereumValidatorDepositDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: EthereumTransactionCraftingResponse;
        },
        any
      >({
        path: `/ethereum/txcrafting/validators/deposit`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate transaction data for depositing ETH to multiple validators that are not yet active. This endpoint will generate a transaction for interacting with our [pectra batch deposit implementation](https://docs.piertwo.com/docs/batch-deposit-contract). The returned transaction data must be signed and broadcast by the user.
     *
     * @tags Ethereum
     * @name CraftEthereumValidatorBatchDepositTx
     * @summary Generate batch initialvalidator deposit transaction
     * @request POST:/ethereum/txcrafting/validators/batchdeposit
     */
    craftEthereumValidatorBatchDepositTx: (
      data: EthereumValidatorBatchDepositDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: EthereumTransactionCraftingResponse;
        },
        any
      >({
        path: `/ethereum/txcrafting/validators/batchdeposit`,
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
     * @name CraftEthereumValidatorWithdrawTx
     * @summary Generate validator withdrawal transaction
     * @request POST:/ethereum/txcrafting/validators/withdraw
     */
    craftEthereumValidatorWithdrawTx: (
      data: EthereumValidatorWithdrawDto,
      params: RequestParams = {},
    ) =>
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
     * @name CraftEthereumValidatorConsolidateTx
     * @summary Generate validator consolidation transaction
     * @request POST:/ethereum/txcrafting/validators/consolidate
     */
    craftEthereumValidatorConsolidateTx: (
      data: EthereumValidatorConsolidateDto,
      params: RequestParams = {},
    ) =>
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
     * @name GetEthereumValidatorQueueStats
     * @summary Get Validator queue
     * @request GET:/ethereum/validators/queueStats
     */
    getEthereumValidatorQueueStats: (params: RequestParams = {}) =>
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
     * @name GetEthereumValidatorInfo
     * @summary Get Validator beacon chain info
     * @request GET:/ethereum/validators/info
     */
    getEthereumValidatorInfo: (
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
     * @name GetEthereumValidatorDailyRewards
     * @summary Get Validator daily rewards
     * @request GET:/ethereum/validators/dailyRewards
     */
    getEthereumValidatorDailyRewards: (
      query?: {
        /** comma seperated list of validator indexes */
        validatorIndex?: string;
        /** fiat currency for ethereum pricing */
        currency?: string;
        /** unix timestamp of starting date from */
        dateFrom?: number;
        /** unix timestamp of ending date to */
        dateTo?: number;
        /** whether or not to wait for data sync */
        waitForDataSync?: string;
        /** data source version, v1 = daily balance snapshot, v2 = income details */
        version?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorDailyRewardDto[];
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
     * @name GetEthereumValidatorDailyPerformance
     * @summary Get Validator daily performance
     * @request GET:/ethereum/validators/performance
     */
    getEthereumValidatorDailyPerformance: (
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
     * @name GetEthereumValidatorRewardsChartData
     * @summary Get staking rewards chart data
     * @request GET:/ethereum/validators/rewardsChartData
     */
    getEthereumValidatorRewardsChartData: (
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
        /** data source version, v1 = daily balance snapshot, v2 = income details */
        version?: string;
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
     * @name GetEthereumValidatorDashboardSummary
     * @summary Get Staking dashboard summary
     * @request GET:/ethereum/validators/dashboard
     */
    getEthereumValidatorDashboardSummary: (params: RequestParams = {}) =>
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
     * @name GetEthereumValidatorAccountsSummary
     * @summary Get Staking accounts summary
     * @request GET:/ethereum/validators/accounts
     */
    getEthereumValidatorAccountsSummary: (params: RequestParams = {}) =>
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
     * @name GetEthereumValidatorIncomeHistory
     * @summary Get Validator income history
     * @request GET:/ethereum/validators/incomeHistory
     */
    getEthereumValidatorIncomeHistory: (
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
     * @name GetBitcoinAddressUtxos
     * @summary Get UTXOs for a given bitcoin address. Only available on testnet
     * @request GET:/bitcoin/utxos/{address}
     */
    getBitcoinAddressUtxos: (address: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetBitcoinAddressUtxos[];
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
     * @name BuildBabylonStakingTransaction
     * @summary Build a post-stake bitcoin staking transaction
     * @request POST:/bitcoin/buildStakingTransaction
     */
    buildBabylonStakingTransaction: (
      data: BuildBabylonStakingTransactionDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildBabylonStakingTransactionResponseDto;
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
     * @name SubmitBabylonStakingTransaction
     * @summary Broadcast a signed bitcoin staking transaction for use with the post-stake flow
     * @request POST:/bitcoin/submitStakingTransaction
     */
    submitBabylonStakingTransaction: (
      data: SubmitBabylonStakingTransactionDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BitcoinTransactionResponseDto;
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
     * @name GetBabylonDelegationPayloads
     * @summary Get delegation payloads
     * @request POST:/bitcoin/getDelegationPayloads
     */
    getBabylonDelegationPayloads: (
      data: GetBabylonDelegationPayloadsDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetBabylonDelegationPayloadsResponseDto;
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
     * @name BuildBabylonRegistrationTransaction
     * @summary Build a post-stake babylon registration transaction
     * @request POST:/bitcoin/buildRegistrationTransaction
     */
    buildBabylonRegistrationTransaction: (
      data: BuildBabylonRegistrationTransactionDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildBabylonRegistrationTransactionResponseDto;
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
     * @name GetBabylonStakingStatus
     * @summary Get the status of a staking transaction
     * @request GET:/bitcoin/stakingStatus/{stakingTxId}
     */
    getBabylonStakingStatus: (
      stakingTxId: string,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetBabylonStakingStatusResponseDto;
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
     * @name BuildBabylonUnbondingTransaction
     * @summary Build an unbonding transaction PSBT that needs to be signed by the staker.
     * @request POST:/bitcoin/buildUnbondingTransaction
     */
    buildBabylonUnbondingTransaction: (
      data: BabylonStakingTxRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildBabylonUnbondingTransactionResponseDto;
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
     * @name SubmitBabylonUnbondingTransaction
     * @summary Submit a staker-signed unbonding transaction PSBT for processing with covenant signatures and broadcasting.
     * @request POST:/bitcoin/submitUnbondingTransaction
     */
    submitBabylonUnbondingTransaction: (
      data: SubmitBabylonUnbondingTransactionDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BitcoinTransactionResponseDto;
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
     * @name BuildBabylonWithdrawalTransaction
     * @summary Build a withdrawal transaction PSBT
     * @request POST:/bitcoin/buildWithdrawalTransaction
     */
    buildBabylonWithdrawalTransaction: (
      data: BuildBabylonWithdrawalTransactionDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildBabylonWithdrawalTransactionResponseDto;
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
     * @name SubmitBabylonWithdrawalTransaction
     * @summary Submit a signed withdrawal transaction for broadcasting to the Bitcoin network
     * @request POST:/bitcoin/submitWithdrawalTransaction
     */
    submitBabylonWithdrawalTransaction: (
      data: SubmitBabylonWithdrawalTransactionDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BitcoinTransactionResponseDto;
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
     * @name GetBabylonStakingParams
     * @summary Get current babylon staking protocol parameters
     * @request GET:/bitcoin/stakingParams
     */
    getBabylonStakingParams: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetBabylonStakingParamsResponseDto;
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
     * @name GetBabylonStakingDetails
     * @summary Get all staking details for your account
     * @request GET:/bitcoin/stakingDetails
     */
    getBabylonStakingDetails: (
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
          data: GetBabylonStakingDetailsResponseDto;
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
     * @name BuildBabylonPreStakeStakingTransaction
     * @summary Build an unsigned pre-stake staking transaction PSBT
     * @request POST:/bitcoin/buildPreStakeStakingTransaction
     */
    buildBabylonPreStakeStakingTransaction: (
      data: BuildBabylonPreStakeRegistrationDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildBabylonPreStakeRegistrationResponseDto;
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
     * @name GetBabylonDelegationPayloadsPreStake
     * @summary Get delegation payloads for pre-stake
     * @request POST:/bitcoin/getDelegationPayloadsPreStake
     */
    getBabylonDelegationPayloadsPreStake: (
      data: GetBabylonDelegationPayloadsDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetBabylonDelegationPayloadsResponseDto;
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
    buildBabylonPreStakeTransaction: (
      data: BuildBabylonPreStakeTransactionDto,
      params: RequestParams = {},
    ) =>
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
     * @name SubmitBabylonPreStakeRegistration
     * @summary Submit a signed pre-stake registration to Babylon for covenant verification
     * @request POST:/bitcoin/submitPreStakeRegistration
     */
    submitBabylonPreStakeRegistration: (
      data: SubmitBabylonPreStakeRegistrationDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: SubmitBabylonPreStakeRegistrationResponseDto;
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
     * @name FinalizeBabylonPreStake
     * @summary Broadcast and finalize a verified pre-stake Bitcoin staking transaction
     * @request POST:/bitcoin/finalizePreStake
     */
    finalizeBabylonPreStake: (
      data: FinalizeBabylonPreStakeDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: FinalizeBabylonPreStakeResponseDto;
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
  cardano = {
    /**
     * @description Returns the details of Cardano staking positions for your account.
     *
     * @tags Cardano
     * @name GetCardanoStakes
     * @summary Get Cardano Stake Accounts
     * @request GET:/cardano/stakes
     */
    getCardanoStakes: (
      query?: {
        pageNumber?: number;
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<PaginatedApiResponseBase, "data"> & {
          data: CardanoStakeAccount[];
        },
        any
      >({
        path: `/cardano/stakes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the 7D, 30D and total staking and MEV rewards for the specified stake accounts.
     *
     * @tags Cardano
     * @name GetCardanoStakePerformanceSummary
     * @summary Get Cardano stake performance summary
     * @request GET:/cardano/stake/performanceSummary
     */
    getCardanoStakePerformanceSummary: (
      query?: {
        /** comma seperated list of stake account addresses, will return data for all active stake accounts if none are provided */
        stakeAccountAddress?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CardanoStakingPerformanceSummary;
        },
        any
      >({
        path: `/cardano/stake/performanceSummary`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns daily rewards stats of specified stake accounts.
     *
     * @tags Cardano
     * @name GetCardanoStakeAccountDailyRewards
     * @summary Get daily rewards stats
     * @request GET:/cardano/stake/dailyRewards
     */
    getCardanoStakeAccountDailyRewards: (
      query: {
        /** comma seperated list of stake account addresses */
        stakeAccountAddress: string;
        /** fiat currency for ada pricing */
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
          data: CardanoStakeAccountRewards[];
        },
        any
      >({
        path: `/cardano/stake/dailyRewards`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a known Cardano stake account to your account
     *
     * @tags Cardano
     * @name AddCardanoStakeAccount
     * @summary Add Cardano Stake Account
     * @request POST:/cardano/stake/account
     */
    addCardanoStakeAccount: (
      data: AddCardanoStakeAccountDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CardanoStakeAccount;
        },
        any
      >({
        path: `/cardano/stake/account`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Craft a transaction for registering a Cardano stake address and add it to your account The stake account will be automatically added to your account for tracking. This will deposit 2 ADA from the utxoAddress into the Stake Address, which is required by the protocol. ***This transaction must be signed by the owner of the UTXO's being spent into this transaction (utxoAddress)***
     *
     * @tags Cardano
     * @name CraftCardanoRegisterStakeAddressTx
     * @summary Craft Cardano Stake Address Registration Transaction
     * @request POST:/cardano/txcrafting/registerStakeAddress
     */
    craftCardanoRegisterStakeAddressTx: (
      data: CardanoRegisterStakeAddressDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CardanoTransactionCraftingResponse;
        },
        any
      >({
        path: `/cardano/txcrafting/registerStakeAddress`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Craft a transaction for deregistering a Cardano stake address ***This transaction must be signed by the owner of the UTXO's being spent into this transaction (utxoAddress) as well as your Stake Key***
     *
     * @tags Cardano
     * @name CraftCardanoDeregisterStakeAddressTx
     * @summary Craft Cardano Stake Address Deregistration Transaction
     * @request POST:/cardano/txcrafting/deregisterStakeAddress
     */
    craftCardanoDeregisterStakeAddressTx: (
      data: CardanoDeregisterStakeAddressDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CardanoTransactionCraftingResponse;
        },
        any
      >({
        path: `/cardano/txcrafting/deregisterStakeAddress`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Craft a transaction for delegating stake to a Cardano stake pool and add it to your account The stake account will be automatically added to your account for tracking. ***This transaction must be signed by the owner of the UTXO's being spent into this transaction (utxoAddress) as well as your Stake Key***
     *
     * @tags Cardano
     * @name CraftCardanoDelegateStakeTx
     * @summary Craft Cardano Stake Delegation Transaction
     * @request POST:/cardano/txcrafting/delegateStake
     */
    craftCardanoDelegateStakeTx: (
      data: CardanoDelegateStakeDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CardanoTransactionCraftingResponse;
        },
        any
      >({
        path: `/cardano/txcrafting/delegateStake`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Craft a transaction for registering and delegating stake to a Cardano stake pool in a single transaction and add it to your account The stake account will be automatically added to your account for tracking. This will deposit 2 ADA from the utxoAddress into the Stake Address, which is required by the protocol. ***This transaction must be signed by the owner of the UTXO's being spent into this transaction (utxoAddress) as well as your Stake Key***
     *
     * @tags Cardano
     * @name CraftCardanoRegisterAndDelegateTx
     * @summary Craft Cardano Register and Delegate Transaction
     * @request POST:/cardano/txcrafting/registerAndDelegate
     */
    craftCardanoRegisterAndDelegateTx: (
      data: CardanoRegisterAndDelegateDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CardanoTransactionCraftingResponse;
        },
        any
      >({
        path: `/cardano/txcrafting/registerAndDelegate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Craft a transaction for withdrawing rewards from your Stake Address ***This transaction must be signed by the owner of the UTXO's being spent into this transaction (utxoAddress) as well as your Stake Key***
     *
     * @tags Cardano
     * @name CraftCardanoStakingRewardsWithdrawalTx
     * @summary Craft Cardano Stake Rewards Withdrawal Transaction
     * @request POST:/cardano/txcrafting/stakingRewardsWithdrawal
     */
    craftCardanoStakingRewardsWithdrawalTx: (
      data: CardanoStakingRewardsWithdrawalDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CardanoTransactionCraftingResponse;
        },
        any
      >({
        path: `/cardano/txcrafting/stakingRewardsWithdrawal`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit a signed Cardano transaction to the network
     *
     * @tags Cardano
     * @name SubmitCardanoTransaction
     * @summary Submit Signed Cardano Transaction
     * @request POST:/cardano/submitSignedTx
     */
    submitCardanoTransaction: (
      data: SubmitCardanoTransactionDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CardanoTransactionSubmissionResponse;
        },
        any
      >({
        path: `/cardano/submitSignedTx`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the status of a Cardano transaction by the tx hash
     *
     * @tags Cardano
     * @name GetCardanoTransactionStatus
     * @summary Get Cardano Transaction Status
     * @request GET:/cardano/txStatus/{txHash}
     */
    getCardanoTransactionStatus: (txHash: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CardanoTransactionStatusResponse;
        },
        any
      >({
        path: `/cardano/txStatus/${txHash}`,
        method: "GET",
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

    /**
     * @description Get supported currency symbols for reporting (chart data and rewards data exports)
     *
     * @tags Public
     * @name SupportedCurrencies
     * @summary Get Supported Currencies
     * @request GET:/public/supportedCurrencies
     */
    supportedCurrencies: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: string[];
        },
        any
      >({
        path: `/public/supportedCurrencies`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  lsEth = {
    /**
     * @description Register user for liquid staking ETH services
     *
     * @tags LsEth
     * @name RegisterLsEth
     * @summary Register for liquid staking
     * @request POST:/lsEth/register
     */
    registerLsEth: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: RegisterLsEthResponse;
        },
        any
      >({
        path: `/lsEth/register`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Check if user is registered for liquid staking ETH services
     *
     * @tags LsEth
     * @name CheckLsEthRegistration
     * @summary Check liquid staking registration status
     * @request GET:/lsEth/registrationStatus
     */
    checkLsEthRegistration: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: RegistrationStatusResponse;
        },
        any
      >({
        path: `/lsEth/registrationStatus`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Generate a message with nonce that must be signed to prove wallet ownership
     *
     * @tags LsEth
     * @name AddLsEthWalletChallenge
     * @summary Generate wallet ownership challenge
     * @request POST:/lsEth/wallet/add/challenge
     */
    addLsEthWalletChallenge: (
      data: LsEthWalletChallengeRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthWalletChallengeResponse;
        },
        any
      >({
        path: `/lsEth/wallet/add/challenge`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Verify signed challenge and add wallet to Alluvial platform
     *
     * @tags LsEth
     * @name AddLsEthWalletVerify
     * @summary Verify wallet ownership and add wallet
     * @request POST:/lsEth/wallet/add/verify
     */
    addLsEthWalletVerify: (
      data: LsEthWalletVerifyRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthWalletVerifyResponse;
        },
        any
      >({
        path: `/lsEth/wallet/add/verify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List all wallets associated with the user account with pagination support
     *
     * @tags LsEth
     * @name ListLsEthWallets
     * @summary List user wallets
     * @request GET:/lsEth/wallets
     */
    listLsEthWallets: (
      query?: {
        /**
         * Enable to only return allowlisted wallets
         * @example true
         */
        allowlist?: boolean;
        /**
         * Enable to only return wallets on platform
         * @example true
         */
        onPlatform?: boolean;
        /**
         * Offset for pagination
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * Limit for pagination
         * @min 1
         * @max 100
         * @example 20
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthListWalletsResponse;
        },
        any
      >({
        path: `/lsEth/wallets`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get high-level current lsETH protocol statistics including conversion rate, staking rewards, and supply metrics
     *
     * @tags LsEth
     * @name GetLsEthProtocolStats
     * @summary Get lsETH protocol statistics
     * @request GET:/lsEth/protocolStats
     */
    getLsEthProtocolStats: (
      query?: {
        /** Display lsETH values in units of wei. Defaults to ETH/lsETH with decimal representation if not specified. */
        unit?: "wei";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthProtocolStatsResponse;
        },
        any
      >({
        path: `/lsEth/protocolStats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate transaction data for depositing ETH to receive lsETH tokens
     *
     * @tags LsEth
     * @name CraftLsEthDepositTx
     * @summary Generate lsETH deposit transaction
     * @request POST:/lsEth/txcrafting/deposit
     */
    craftLsEthDepositTx: (data: LsEthDepositDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: EthereumTransactionCraftingResponse;
        },
        any
      >({
        path: `/lsEth/txcrafting/deposit`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate transaction data for redeeming lsETH tokens to receive ETH
     *
     * @tags LsEth
     * @name CraftLsEthRedeemTx
     * @summary Generate lsETH redemption transaction
     * @request POST:/lsEth/txcrafting/redeem
     */
    craftLsEthRedeemTx: (data: LsEthRedeemDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: EthereumTransactionCraftingResponse;
        },
        any
      >({
        path: `/lsEth/txcrafting/redeem`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the lsETH and ETH balance for a wallet address linked to your account
     *
     * @tags LsEth
     * @name GetLsEthWalletBalance
     * @summary Get wallet lsETH and ETH balance
     * @request GET:/lsEth/balance
     */
    getLsEthWalletBalance: (
      query: {
        /** Wallet address to check balance for (must be linked to your account) */
        address: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthWalletBalanceResponse;
        },
        any
      >({
        path: `/lsEth/balance`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description List all redemption requests for your wallets or a specific wallet
     *
     * @tags LsEth
     * @name ListLsEthRedeems
     * @summary List redemption requests
     * @request GET:/lsEth/redeems
     */
    listLsEthRedeems: (
      query?: {
        /** Optional wallet address to filter redemptions (must be linked to your account) */
        walletAddress?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthListRedeemsResponse;
        },
        any
      >({
        path: `/lsEth/redeems`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a specific redemption request
     *
     * @tags LsEth
     * @name GetLsEthRedeemDetails
     * @summary Get redemption request details
     * @request GET:/lsEth/redeems/{id}
     */
    getLsEthRedeemDetails: (id: number, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthRedeemDetailsResponse;
        },
        any
      >({
        path: `/lsEth/redeems/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get estimated timing for when a redemption request will be satisfied
     *
     * @tags LsEth
     * @name GetLsEthRedeemProjection
     * @summary Get redemption timing projection
     * @request GET:/lsEth/redeems/{id}/projection
     */
    getLsEthRedeemProjection: (id: number, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthRedeemProjectionResponse;
        },
        any
      >({
        path: `/lsEth/redeems/${id}/projection`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Generate transaction data for claiming ETH from satisfied redemption requests
     *
     * @tags LsEth
     * @name CraftLsEthClaimRedeemTx
     * @summary Generate claim redemption transaction
     * @request POST:/lsEth/txcrafting/claim
     */
    craftLsEthClaimRedeemTx: (
      data: LsEthClaimRedeemDto,
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: EthereumTransactionCraftingResponse;
        },
        any
      >({
        path: `/lsEth/txcrafting/claim`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get transaction history for a specific wallet address linked to your account
     *
     * @tags LsEth
     * @name GetLsEthWalletTransactionHistory
     * @summary Get wallet transaction history
     * @request GET:/lsEth/transactions
     */
    getLsEthWalletTransactionHistory: (
      query: {
        address: string;
        /**
         * Start date for transaction history (ISO format)
         * @example "2025-01-01T00:00:00Z"
         */
        from?: string;
        /**
         * End date for transaction history (ISO format)
         * @example "2025-12-31T23:59:59Z"
         */
        to?: string;
        /**
         * Number of transactions per page (default: 100)
         * @default 100
         * @example 50
         */
        pageSize?: number;
        /**
         * Pagination cursor for next page
         * @example "eyJhZnRlciI6IjIwMjUtMDctMjkifQ=="
         */
        nextCursor?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthWalletTransactionHistoryResponse;
        },
        any
      >({
        path: `/lsEth/transactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get combined transaction and redemption history from all allowlisted wallets, sorted by date
     *
     * @tags LsEth
     * @name GetLsEthAggregateActivity
     * @summary Get aggregate activity across all wallets
     * @request GET:/lsEth/activity
     */
    getLsEthAggregateActivity: (
      query?: {
        /** Maximum number of activities to return (optional) */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthAggregateActivityResponse;
        },
        any
      >({
        path: `/lsEth/activity`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get information about the redeem manager including queue and withdrawal stack amounts
     *
     * @tags LsEth
     * @name GetLsEthRedeemManagerInfo
     * @summary Get redeem manager information
     * @request GET:/lsEth/redeemManagerInfo
     */
    getLsEthRedeemManagerInfo: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: LsEthRedeemManagerInfoResponse;
        },
        any
      >({
        path: `/lsEth/redeemManagerInfo`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
