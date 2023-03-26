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
  console.log(req.params.id);

  const { id } = req.params;

  const product = await Product.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: `product not with id: ${id} not found`,
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'hello from the getoneproduct route',
    product,
  });
};
exports.createProduct = async (req, res) => {
  const {
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  } = req.body;
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
    message: 'hell from the post route',
    product,
  });
};
exports.deleteProduct = (req, res) => {
  console.log('me ejecute');
  res.json({
    message: 'hell from the delete route',
  });
};

exports.updateProduct = (req, res) => {
  console.log(req.params);
  console.log('me ejecute');
  res.json({
    message: 'hell from the patch route',
  });
};
