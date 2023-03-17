const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

const productRouter = express.Router();

app.use('/api/v1/products', productRouter);

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

const findAllProducts = (req, res) => {
  const { requestTime } = req;
  res.json({
    message: 'hello from the get route',
    requestTime,
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

productRouter
  .route('/')
  .get(findAllProducts)
  .post(createProduct);

productRouter
  .route('/:id')
  .get(findOneProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

const port = 3000;

//colocar la app a escuchar el servidor por el puerto
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

//crear un middleware para adjuntar al obj req una propiedad llamada requestTime y newdate()
// findAllProducts hay que desestructurar de la req la propiedad requestTime
//enviar por res
