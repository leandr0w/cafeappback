const app = require('./app');
const { db } = require('./database/config');
const port = 3000;
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
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
