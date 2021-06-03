const ProductService = require('../services/product.service');
const logger = require('../loaders/logger');

class ProductController {
    constructor() {
        this.productService = new ProductService();
    }

    findById() {
        return async (req, res, next, product_id) => {
            try {
                req.product = await this.productService.findById(product_id);
                if (req.product) {
                    return next();
                }
                const message = `Product with id ${product_id} not found`;
                logger.info(message);
                res.status(404).json({message});
            } catch (e) {
                logger.error(`ProductController findById product_id ${product_id} ${e.message}`);
                return next(e);
            }
        };
    }

    getProduct() {
        return (req, res) => {
            res.json(req.product);
        };
    }

    update() {
        return async (req, res, next) => {
            try {
                res.json(await this.productService.update(req.product, req.body));
            } catch (e) {
                logger.error(`ProductController update target ${JSON.stringify(req.product)} source ${JSON.stringify(req.body)} ${e.message}`);
                return next(e);
            }
        };
    }
}

module.exports = ProductController;
