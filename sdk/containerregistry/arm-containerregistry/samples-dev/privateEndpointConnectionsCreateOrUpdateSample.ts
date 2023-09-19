/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PrivateEndpointConnection,
  ContainerRegistryManagementClient
} from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update the state of specified private endpoint connection associated with the container registry.
 *
 * @summary Update the state of specified private endpoint connection associated with the container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/stable/2023-07-01/examples/PrivateEndpointConnectionCreateOrUpdate.json
 */
async function privateEndpointConnectionCreateOrUpdate() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const privateEndpointConnectionName = "myConnection";
  const privateEndpointConnection: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "Auto-Approved",
      status: "Approved"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.privateEndpointConnections.beginCreateOrUpdateAndWait(
    resourceGroupName,
    registryName,
    privateEndpointConnectionName,
    privateEndpointConnection
  );
  console.log(result);
}

async function main() {
  privateEndpointConnectionCreateOrUpdate();
}

main().catch(console.error);
