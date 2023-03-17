//requerimos express que es una libreria
const express = require('express');
//iniciamos la app de expres en la variable app
const app = express();

app.use(express.json());

const findAllProducts = (req, res) => {
  res.json({
    message: 'hello from the get route',
  });
};

const findOneProduct = (req, res) => {
  console.log(req.params.id);
  res.json({
    message: 'hello from the getoneproduct route',
  });
};

const createProduct = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'hell from the post route',
  });
};
const deleteProduct = (req, res) => {
  console.log('me ejecute');
  res.json({
    message: 'hell from the delete route',
  });
};

const updateProduct = (req, res) => {
  console.log(req.params);
  console.log('me ejecute');
  res.json({
    message: 'hell from the patch route',
  });
};

app
  .route('/api/v1/products')
  .get(findAllProducts)
  .post(createProduct);

app
  .route('/api/v1/products/:id')
  .get(findOneProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

const port = 3000;

//colocar la app a escuchar el servidor por el puerto
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
