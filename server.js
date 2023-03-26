require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');

//autenticacion base de datos
db.authenticate()
  .then(() =>
    console.log('Database authenticated')
  )
  .catch((err) => console.log(err));
//sincronizacion base de datos
db.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
