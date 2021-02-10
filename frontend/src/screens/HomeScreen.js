import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, errors, products } = productList;

  console.log(products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h3>Latest Products</h3>
      {loading ? (
        <Loader></Loader>
      ) : errors ? (
        <Message variant='danger'> {errors}</Message>
      ) : (
        <Row>
          {products ? (
            products.map((product) => (
              <Col sm={12} md={6} lg={3} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))
          ) : (
            <h1>still loading</h1>
          )}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
