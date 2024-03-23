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

export type ApiResponseBase = object;

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

export type ValidatorDepositJson = object;

export interface PaginationData {
  totalCount: number;
  pageSize: number;
  pageNumber: number;
}

export interface PaginatedApiResponseBase {
  pagination: PaginationData;
}

export type ValidatorStatusCounts = object;

export interface StakeWithValidatorStatusCounts {
  stakeId: number;
  reference: string;
  validatorStatusCounts: ValidatorStatusCounts;
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
  public baseUrl: string = "";
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
      const r = response as HttpResponse<T, E>;
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
 * @title Piertwo Staking API
 * @version 1.0
 * @contact
 *
 * The Piertwo Staking API Docs
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  account = {
    /**
     * @description Fetch basic account details
     *
     * @tags account
     * @name GetAccount
     * @request GET:/account
     */
    getAccount: (params: RequestParams = {}) =>
      this.request<
        ApiResponseBase & {
          data?: GetAccountResponse;
        },
        any
      >({
        path: `/account`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  ethereum = {
    /**
     * @description Request one or more new validators
     *
     * @tags ethereum
     * @name CreateStake
     * @request POST:/ethereum/stake
     */
    createStake: (data: CreateStakeDto, params: RequestParams = {}) =>
      this.request<
        ApiResponseBase & {
          data?: CreateStakeResponse;
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
     * @description Fetch a single staking request by stakeId
     *
     * @tags ethereum
     * @name GetStake
     * @request GET:/ethereum/stake/{stakeId}
     */
    getStake: (stakeId: string, params: RequestParams = {}) =>
      this.request<
        ApiResponseBase & {
          data?: StakeDetailsWithValidators;
        },
        any
      >({
        path: `/ethereum/stake/${stakeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch deposit data for all validators in stake request
     *
     * @tags ethereum
     * @name GetDepositDataForStake
     * @request GET:/ethereum/stake/{stakeId}/depositdata
     */
    getDepositDataForStake: (stakeId: string, params: RequestParams = {}) =>
      this.request<
        ApiResponseBase & {
          data?: ValidatorDepositJson[];
        },
        any
      >({
        path: `/ethereum/stake/${stakeId}/depositdata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch all staking requests for your account
     *
     * @tags ethereum
     * @name GetStakes
     * @request GET:/ethereum/stakes
     */
    getStakes: (
      query?: {
        reference?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginatedApiResponseBase & {
          data?: StakeDetailsWithValidators[];
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
     * @description Fetch all staking requests with validator status counts
     *
     * @tags ethereum
     * @name GetStakesWithValidatorStatusCounts
     * @request GET:/ethereum/stakesWithValidatorStatusCounts
     */
    getStakesWithValidatorStatusCounts: (params: RequestParams = {}) =>
      this.request<
        ApiResponseBase & {
          data?: StakeWithValidatorStatusCounts[];
        },
        any
      >({
        path: `/ethereum/stakesWithValidatorStatusCounts`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Generate one or more pre-signed exit messages for a specified list of public keys
     *
     * @tags ethereum
     * @name GenPresignedExitMsg
     * @request POST:/ethereum/genPresignedExitMsg
     */
    genPresignedExitMsg: (data: GenPresignedExitMsgDto, params: RequestParams = {}) =>
      this.request<
        ApiResponseBase & {
          data?: ValidatorExitMessageResp[];
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
     * @description Broadcast a pre-signed exit message to the beacon chain
     *
     * @tags ethereum
     * @name BroadcastPresignedExitMessage
     * @request POST:/ethereum/broadcastPresignedExitMsg
     */
    broadcastPresignedExitMessage: (data: ValidatorExitMessage, params: RequestParams = {}) =>
      this.request<
        ApiResponseBase & {
          data?: BeaconNodeVoluntaryExitResponse;
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
     * @description Generate one or more pre-signed exit messages for a specified list of public keys and broadcast the message to a beacon node
     *
     * @tags ethereum
     * @name BulkWithdraw
     * @request POST:/ethereum/bulkWithdrawValidators
     */
    bulkWithdraw: (data: GenPresignedExitMsgDto, params: RequestParams = {}) =>
      this.request<
        ApiResponseBase & {
          data?: BulkWithdrawError[];
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
  };
}
