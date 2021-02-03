import dotenv from 'dotenv';
import products from './data/products.js';
import express from 'express';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config();

connectDB();

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
