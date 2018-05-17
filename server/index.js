require('dotenv').config();
const express = require('express'),
      cors = require('cors'),
      {json} = require('body-parser'),
      app = express(),
      port = process.env.PORT || 3000,
      massive = require('massive');
const {create, getOne, getAll, update, deleteProduct} = require(`${__dirname}/controllers/products_controller`);


massive(process.env.CONNECTION_STRING)
  .then(db => {
    // console.log(db);
    app.set('db', db);
  });


app.use(cors());
app.use(json());


app.post('/api/product', create);

app.get('/api/product/:id', getOne);

app.get('/api/products', getAll);

app.put('/api/product/:id', update);

app.delete('/api/product/:id', deleteProduct);


app.listen(port, ()=>(console.log(`Listening on port: ${port}`)));