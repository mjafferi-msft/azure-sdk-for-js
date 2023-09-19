/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Runs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerRegistryManagementClient } from "../containerRegistryManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Run,
  RunsListNextOptionalParams,
  RunsListOptionalParams,
  RunsListResponse,
  RunsGetOptionalParams,
  RunsGetResponse,
  RunUpdateParameters,
  RunsUpdateOptionalParams,
  RunsUpdateResponse,
  RunsGetLogSasUrlOptionalParams,
  RunsGetLogSasUrlResponse,
  RunsCancelOptionalParams,
  RunsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Runs operations. */
export class RunsImpl implements Runs {
  private readonly client: ContainerRegistryManagementClient;

  /**
   * Initialize a new instance of the class Runs class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerRegistryManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the runs for a registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    registryName: string,
    options?: RunsListOptionalParams
  ): PagedAsyncIterableIterator<Run> {
    const iter = this.listPagingAll(resourceGroupName, registryName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          registryName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    registryName: string,
    options?: RunsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Run[]> {
    let result: RunsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, registryName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        registryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    registryName: string,
    options?: RunsListOptionalParams
  ): AsyncIterableIterator<Run> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      registryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the runs for a registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    registryName: string,
    options?: RunsListOptionalParams
  ): Promise<RunsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the detailed information for a given run.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runId The run ID.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    runId: string,
    options?: RunsGetOptionalParams
  ): Promise<RunsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, runId, options },
      getOperationSpec
    );
  }

  /**
   * Patch the run properties.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runId The run ID.
   * @param runUpdateParameters The run update properties.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    registryName: string,
    runId: string,
    runUpdateParameters: RunUpdateParameters,
    options?: RunsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<RunsUpdateResponse>, RunsUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<RunsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        registryName,
        runId,
        runUpdateParameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      RunsUpdateResponse,
      OperationState<RunsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch the run properties.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runId The run ID.
   * @param runUpdateParameters The run update properties.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    runId: string,
    runUpdateParameters: RunUpdateParameters,
    options?: RunsUpdateOptionalParams
  ): Promise<RunsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      registryName,
      runId,
      runUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a link to download the run logs.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runId The run ID.
   * @param options The options parameters.
   */
  getLogSasUrl(
    resourceGroupName: string,
    registryName: string,
    runId: string,
    options?: RunsGetLogSasUrlOptionalParams
  ): Promise<RunsGetLogSasUrlResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, runId, options },
      getLogSasUrlOperationSpec
    );
  }

  /**
   * Cancel an existing run.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runId The run ID.
   * @param options The options parameters.
   */
  async beginCancel(
    resourceGroupName: string,
    registryName: string,
    runId: string,
    options?: RunsCancelOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, registryName, runId, options },
      spec: cancelOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Cancel an existing run.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runId The run ID.
   * @param options The options parameters.
   */
  async beginCancelAndWait(
    resourceGroupName: string,
    registryName: string,
    runId: string,
    options?: RunsCancelOptionalParams
  ): Promise<void> {
    const poller = await this.beginCancel(
      resourceGroupName,
      registryName,
      runId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    registryName: string,
    nextLink: string,
    options?: RunsListNextOptionalParams
  ): Promise<RunsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RunListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry
    }
  },
  queryParameters: [Parameters.apiVersion1, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Run
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.runId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Run
    },
    201: {
      bodyMapper: Mappers.Run
    },
    202: {
      bodyMapper: Mappers.Run
    },
    204: {
      bodyMapper: Mappers.Run
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry
    }
  },
  requestBody: Parameters.runUpdateParameters,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.runId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLogSasUrlOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}/listLogSasUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RunGetLogResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.runId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}/cancel",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.runId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RunListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.nextLink,
    Parameters.resourceGroupName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
