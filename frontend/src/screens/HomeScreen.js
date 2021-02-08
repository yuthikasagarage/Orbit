import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async (products) => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, [products]);

  return (
    <>
      <h3>Latest Products</h3>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={3} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
