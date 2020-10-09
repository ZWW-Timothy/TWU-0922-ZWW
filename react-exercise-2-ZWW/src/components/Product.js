import React, { Component } from 'react';
import './Product.css';
import PropTypes from 'prop-types';
import Image from '../assets/product_image_placeholder.png';

class Product extends Component {
  render() {
    const { name, price, addToCart } = this.props;

    return (
      <section className="product">
        <h3>{name}</h3>
        <img src={Image} />
        <div>
          <span>{price}</span>
          <button onClick={addToCart}>add to cart</button>
        </div>
      </section>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
