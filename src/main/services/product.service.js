const DynamoClient = require('../clients/DynamoClient');
const logger = require('../loaders/logger');

class ProductService {
    constructor() {
        this.dynamoClient = new DynamoClient();
        this.tableName = 'products';
    }

    async findById(product_id) {
        logger.info(`Finding product by id ${product_id}`);
        try {
            const product = await this.dynamoClient.findById(this.tableName, {id: product_id});
            if (product) {
                logger.info(`Found product by id ${product_id} successfully`);
            }
            return product;
        } catch (e) {
            logger.error(`Error finding product by id ${product_id}`, e);
            throw e;
        }
    }

    async update(target, update) {
        logger.info(`Updating product ${target.id}`);
        try {
            const updated = await this.dynamoClient.update(this.tableName, {id: target.id}, update);
            logger.info(`Updated product ${target.id} successfully`);
            return updated;
        } catch (e) {
            logger.error(`Error updating product ${target.id}`);
            throw e;
        }
    }
}

module.exports = ProductService;
