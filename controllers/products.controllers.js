const Product = require('../models/products.model');

exports.findAllProducts = async (req, res) => {
  const products = await Product.findAll({
    where: {
      status: true,
    },
  });

  res.status(200).json({
    status: 'success',
    message: 'hello from the get route',
    results: products.length,
    products,
  });
};

exports.findOneProduct = async (req, res) => {
  const { product } = req;
  res.status(200).json({
    status: 'success',
    message: 'hello from the getoneproduct route',
    product,
  });
};
exports.createProduct = async (req, res) => {
  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;
  const product = await Product.create({
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });
  res.json({
    status: 'success',
    message: 'The product has been created',
    product,
  });
};
exports.deleteProduct = async (req, res) => {
  const { product } = req;

  await product.update({
    status: false,
  });

  res.status(200).json({
    status: 'success',
    message: 'The product has been removed',
    product,
  });
};

exports.updateProduct = async (req, res) => {
  const { product } = req;
  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;

  await product.update({
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });

  res.status(200).json({
    status: 'success',
    message: 'The product has been update',
    product,
  });
};
