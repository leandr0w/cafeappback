exports.findAllProducts = (req, res) => {
  const { requestTime } = req;
  res.status(200).json({
    message: 'hello from the get route',
    requestTime,
  });
};

exports.findOneProduct = (req, res) => {
  console.log(req.params.id);
  res.json({
    message: 'hello from the getoneproduct route',
  });
};
exports.createProduct = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'hell from the post route',
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
