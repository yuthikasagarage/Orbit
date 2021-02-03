import dotenv from 'dotenv';
import products from './data/products.js';
import express from 'express';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Api');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.send(product);
});

const port = process.env.PORT || 5002;

app.listen(port, console.log('server running'));
