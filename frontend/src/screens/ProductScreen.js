import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, errors, product } = productDetails;
  console.log(productDetails);
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className='btn btn-light pl-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : errors ? (
        <Message variant='danger'>{errors}</Message>
      ) : (
        <Row xs={1}>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color='#f7a835'
                />
              </ListGroup.Item>
              <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description : {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    {' '}
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export const MemoizedProductScreen = React.memo(ProductScreen);
