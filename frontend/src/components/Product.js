import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name} </strong>
          </Card.Title>
        </Link>
      </Card.Body>

      <Rating
        value={product.rating}
        text={`${product.numReviews} reviews`}
        color='#f7a835'
      />

      <Card.Text as='h5'>${product.price}</Card.Text>
    </Card>
  );
};

Rating.propTypes = {
  value: propTypes.number,
  text: propTypes.string.isRequired,
  color: propTypes.string,
};
export default Product;
