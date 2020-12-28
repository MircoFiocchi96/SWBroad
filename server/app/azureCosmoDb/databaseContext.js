import Cosmos from '@azure/cosmos'
import AzureCredential from '@azure/identity'
import KeyVaultSecretClient from '@azure/keyvault-secrets'
import config from '../../config.js'
const { DefaultAzureCredential } = AzureCredential
const { SecretClient } = KeyVaultSecretClient
const CosmosClient = Cosmos.CosmosClient

class DatabaseContext {
  /**
   * Manages reading, adding, and updating documents in Cosmos DB
   * @param {string} containerId
   */
  constructor(containerId) {
    this.databaseId = config.databaseId
    this.collectionId = containerId
    this.connectionString = null
    this.clientDatabase = null
  }

  async init() {
    const credential = new DefaultAzureCredential()
    const secretClient = new SecretClient(config.vaultUrl, credential)
    this.connectionString = await secretClient.getSecret(config.secretName)
    this.clientDatabase = new CosmosClient(this.connectionString.value)

    const dbResponse = await this.clientDatabase.databases.createIfNotExists({
      id: this.databaseId
    })
    this.database = dbResponse.database
    const coResponse = await this.database.containers.createIfNotExists({
      id: this.collectionId
    })
    this.container = coResponse.container
  }

  async find(querySpec) {
    if (!this.container) {
      throw new Error('Collection is not initialized.')
    }

    const results = await this.container.items.query(querySpec).fetchAll()

    return results.resources
  }

  async addItem(item) {
    const { resource: doc } = await this.container.items.create(item)
    return doc
  }

  async updateItem(item) {
    const { resource: replaced } = await this.container
      .item(item.id)
      .replace(item)
    return replaced
  }

  async getItem(itemId) {
    const { resource } = await this.container.item(itemId).read()
    return resource
  }
}

export default DatabaseContext
