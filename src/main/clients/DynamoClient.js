const AWS = require('aws-sdk');
const logger = require('../loaders/logger');

class DynamoClient {
    constructor() {
        this.documentClient = new AWS.DynamoDB.DocumentClient({
            apiVersion: '2012-08-10',
            region: process.env.REGION,
            endpoint: process.env.DB_ENDPOINT
        });
    }

    async findById(tableName, key) {
        const params = {
            TableName: tableName,
            Key: key
        };

        try {
            const dynamoItem = await this.documentClient.get(params).promise();
            logger.info(dynamoItem);
            return dynamoItem.Item;
        } catch (e) {
            logger.error(`Failed DynamoClient findById tableName: ${tableName}, key: ${JSON.stringify(key)}`);
            throw e;
        }
    }

    async update(tableName, key, update) {
        const params = {
            TableName: tableName,
            Key: key,
            UpdateExpression: "set info = :i",
            ExpressionAttributeValues: {
                ":i": update.info
            },
            ReturnValues: "ALL_NEW"
        };

        try {
            const updated = await this.documentClient.update(params).promise();
            return updated.Attributes;
        } catch (e) {
            logger.error(`Failed DynamoClient findById update: ${tableName}, key: ${JSON.stringify(key)}, ${JSON.stringify(update)}`);
            throw e;
        }
    }
}

module.exports = DynamoClient;
