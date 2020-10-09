import React, { Component } from 'react';
import './ProductS.css';
import Product from './Product';
import PropTypes from 'prop-types';

class ProductS extends Component {
  render() {
    const { category, item, addToCart } = this.props;
    return (
      <section className="products">
        <h2>{category}</h2>
        <div className="itemList">
          {item.map((thisItem, index) => (
            <Product
              key={index}
              name={thisItem.name}
              price={thisItem.price}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    );
  }
}

ProductS.propTypes = {
  category: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductS;
