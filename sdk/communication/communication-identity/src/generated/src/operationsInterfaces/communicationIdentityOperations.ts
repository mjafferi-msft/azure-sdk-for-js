/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CommunicationIdentityCreateOptionalParams,
  CommunicationIdentityCreateResponse,
  CommunicationIdentityDeleteOptionalParams,
  CommunicationIdentityRevokeAccessTokensOptionalParams,
  CommunicationIdentityRevokeAccessTokensResponse,
  CommunicationIdentityExchangeTeamsUserAccessTokenOptionalParams,
  CommunicationIdentityExchangeTeamsUserAccessTokenResponse,
  CommunicationIdentityTokenScope,
  CommunicationIdentityIssueAccessTokenOptionalParams,
  CommunicationIdentityIssueAccessTokenResponse
} from "../models";

/** Interface representing a CommunicationIdentityOperations. */
export interface CommunicationIdentityOperations {
  /**
   * Create a new identity, and optionally, an access token.
   * @param options The options parameters.
   */
  create(
    options?: CommunicationIdentityCreateOptionalParams
  ): Promise<CommunicationIdentityCreateResponse>;
  /**
   * Delete the identity, revoke all tokens for the identity and delete all associated data.
   * @param id Identifier of the identity to be deleted.
   * @param options The options parameters.
   */
  delete(
    id: string,
    options?: CommunicationIdentityDeleteOptionalParams
  ): Promise<void>;
  /**
   * Revoke all access tokens for the specific identity.
   * @param id Identifier of the identity.
   * @param options The options parameters.
   */
  revokeAccessTokens(
    id: string,
    options?: CommunicationIdentityRevokeAccessTokensOptionalParams
  ): Promise<CommunicationIdentityRevokeAccessTokensResponse>;
  /**
   * Exchange an Azure Active Directory (Azure AD) access token of a Teams user for a new Communication
   * Identity access token with a matching expiration time.
   * @param token Azure AD access token of a Teams User to acquire a new Communication Identity access
   *              token.
   * @param appId Client ID of an Azure AD application to be verified against the appid claim in the
   *              Azure AD access token.
   * @param userId Object ID of an Azure AD user (Teams User) to be verified against the oid claim in the
   *               Azure AD access token.
   * @param options The options parameters.
   */
  exchangeTeamsUserAccessToken(
    token: string,
    appId: string,
    userId: string,
    options?: CommunicationIdentityExchangeTeamsUserAccessTokenOptionalParams
  ): Promise<CommunicationIdentityExchangeTeamsUserAccessTokenResponse>;
  /**
   * Issue a new token for an identity.
   * @param id Identifier of the identity to issue token for.
   * @param scopes List of scopes attached to the token.
   * @param options The options parameters.
   */
  issueAccessToken(
    id: string,
    scopes: CommunicationIdentityTokenScope[],
    options?: CommunicationIdentityIssueAccessTokenOptionalParams
  ): Promise<CommunicationIdentityIssueAccessTokenResponse>;
}
