/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AlphaIdsImpl } from "./operations";
import { AlphaIds } from "./operationsInterfaces";
import { AlphaIDsClientContext } from "./alphaIDsClientContext";
import { AlphaIDsClientOptionalParams } from "./models";

export class AlphaIDsClient extends AlphaIDsClientContext {
  /**
   * Initializes a new instance of the AlphaIDsClient class.
   * @param endpoint The communication resource, for example https://resourcename.communication.azure.com
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: AlphaIDsClientOptionalParams) {
    super(endpoint, options);
    this.alphaIds = new AlphaIdsImpl(this);
  }

  alphaIds: AlphaIds;
}