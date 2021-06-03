require('dotenv').config();
const express = require('express');
const logger = require('./loaders/logger');
const productRouter = require('./routers/product.router');

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use((req, res, next) => {
    logger.info(req);
    next();
});
app.use(express.json());

app.use('/api/v1/products', productRouter);

app.listen(PORT, () => {
    logger.info(`App listening at http://localhost:${PORT}`);
});
