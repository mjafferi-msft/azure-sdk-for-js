/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface CommunicationIdentityCreateRequest {
  /** Also create access token for the created identity. */
  createTokenWithScopes?: CommunicationIdentityTokenScope[];
  /** Optional custom validity period of the token within [60,1440] minutes range. If not provided, the default value of 1440 minutes (24 hours) will be used. */
  expiresInMinutes?: number;
}

/** A communication identity with access token. */
export interface CommunicationIdentityAccessTokenResult {
  /** A communication identity. */
  identity: CommunicationIdentity;
  /** An access token. */
  accessToken?: CommunicationIdentityAccessToken;
}

/** A communication identity. */
export interface CommunicationIdentity {
  /** Identifier of the identity. */
  id: string;
}

/** An access token. */
export interface CommunicationIdentityAccessToken {
  /** The access token issued for the identity. */
  token: string;
  /** The expiry time of the token. */
  expiresOn: Date;
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: CommunicationError;
}

/** The Communication Services error. */
export interface CommunicationError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: CommunicationError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: CommunicationError;
}

export interface TeamsUserExchangeTokenRequest {
  /** Azure AD access token of a Teams User to acquire a new Communication Identity access token. */
  token: string;
  /** Client ID of an Azure AD application to be verified against the appid claim in the Azure AD access token. */
  appId: string;
  /** Object ID of an Azure AD user (Teams User) to be verified against the oid claim in the Azure AD access token. */
  userId: string;
}

export interface CommunicationIdentityAccessTokenRequest {
  /** List of scopes attached to the token. */
  scopes: CommunicationIdentityTokenScope[];
  /** Optional custom validity period of the token within [60,1440] minutes range. If not provided, the default value of 1440 minutes (24 hours) will be used. */
  expiresInMinutes?: number;
}

/** Defines headers for CommunicationIdentity_create operation. */
export interface CommunicationIdentityCreateHeaders {
  /** Result of idempotent request. Present only in case of idempotent processing. */
  repeatabilityResult?: string;
}

/** Defines headers for CommunicationIdentity_revokeAccessTokens operation. */
export interface CommunicationIdentityRevokeAccessTokensHeaders {
  /** Result of idempotent request. Present only in case of idempotent processing. */
  repeatabilityResult?: string;
}

/** Known values of {@link CommunicationIdentityTokenScope} that the service accepts. */
export enum KnownCommunicationIdentityTokenScope {
  /** Chat */
  Chat = "chat",
  /** Voip */
  Voip = "voip"
}

/**
 * Defines values for CommunicationIdentityTokenScope. \
 * {@link KnownCommunicationIdentityTokenScope} can be used interchangeably with CommunicationIdentityTokenScope,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **chat** \
 * **voip**
 */
export type CommunicationIdentityTokenScope = string;

/** Optional parameters. */
export interface CommunicationIdentityCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Also create access token for the created identity. */
  createTokenWithScopes?: CommunicationIdentityTokenScope[];
  /** Optional custom validity period of the token within [60,1440] minutes range. If not provided, the default value of 1440 minutes (24 hours) will be used. */
  expiresInMinutes?: number;
  /** If specified, the client directs that the request is repeatable; that is, that the client can make the request multiple times with the same Repeatability-Request-Id and get back an appropriate response without the server executing the request multiple times. The value of the Repeatability-Request-Id is an opaque string representing a client-generated, globally unique for all time, identifier for the request. It is recommended to use version 4 (random) UUIDs. Internal identifiers shouldn't be used. The value should be an opaque meaningless string in UUID format. */
  repeatabilityRequestID?: string;
  /** If Repeatability-Request-ID header is specified, then Repeatability-First-Sent header must also be specified. The value should be the date and time at which the request was first created, expressed using the IMF-fixdate form of HTTP-date */
  repeatabilityFirstSent?: Date;
}

/** Contains response data for the create operation. */
export type CommunicationIdentityCreateResponse = CommunicationIdentityCreateHeaders &
  CommunicationIdentityAccessTokenResult;

/** Optional parameters. */
export interface CommunicationIdentityDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface CommunicationIdentityRevokeAccessTokensOptionalParams
  extends coreClient.OperationOptions {
  /** If specified, the client directs that the request is repeatable; that is, that the client can make the request multiple times with the same Repeatability-Request-Id and get back an appropriate response without the server executing the request multiple times. The value of the Repeatability-Request-Id is an opaque string representing a client-generated, globally unique for all time, identifier for the request. It is recommended to use version 4 (random) UUIDs. Internal identifiers shouldn't be used. The value should be an opaque meaningless string in UUID format. */
  repeatabilityRequestID?: string;
  /** If Repeatability-Request-ID header is specified, then Repeatability-First-Sent header must also be specified. The value should be the date and time at which the request was first created, expressed using the IMF-fixdate form of HTTP-date */
  repeatabilityFirstSent?: Date;
}

/** Contains response data for the revokeAccessTokens operation. */
export type CommunicationIdentityRevokeAccessTokensResponse = CommunicationIdentityRevokeAccessTokensHeaders;

/** Optional parameters. */
export interface CommunicationIdentityExchangeTeamsUserAccessTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exchangeTeamsUserAccessToken operation. */
export type CommunicationIdentityExchangeTeamsUserAccessTokenResponse = CommunicationIdentityAccessToken;

/** Optional parameters. */
export interface CommunicationIdentityIssueAccessTokenOptionalParams
  extends coreClient.OperationOptions {
  /** Optional custom validity period of the token within [60,1440] minutes range. If not provided, the default value of 1440 minutes (24 hours) will be used. */
  expiresInMinutes?: number;
}

/** Contains response data for the issueAccessToken operation. */
export type CommunicationIdentityIssueAccessTokenResponse = CommunicationIdentityAccessToken;

/** Optional parameters. */
export interface IdentityRestClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
