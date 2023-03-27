const express = require('express');

const productsController = require('./../controllers/products.controllers');
const productsMiddleware = require('./../middlewares/products.middleware');
const router = express.Router();

router
  .route('/')
  .get(productsController.findAllProducts)
  .post(productsMiddleware.validProduct, productsController.createProduct);

router
  .route('/:id')
  .get(productsMiddleware.validExistProduct, productsController.findOneProduct)
  .patch(
    productsMiddleware.validProduct,
    productsMiddleware.validExistProduct,
    productsController.updateProduct
  )
  .delete(
    productsMiddleware.validExistProduct,
    productsController.deleteProduct
  );

module.exports = router;
