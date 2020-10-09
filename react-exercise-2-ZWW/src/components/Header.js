import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Image from '../assets/product_image_placeholder.png';

const Header = (props) => {
  const { cartNum } = props;
  return (
    <header>
      <h1>Store</h1>
      <div>
        <img src={Image} />
        <span>{cartNum}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
    cartNum: PropTypes.number.isRequired,
};

export default Header;
