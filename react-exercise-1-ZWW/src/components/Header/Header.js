import React from 'react';
import image from '../../assets/avatar.jpg';
import './Header.css';

const Header = () => {
  return (
    <div>
      <img src={image} />
      <h1>HELLO,</h1>
      <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
    </div>
  );
};

export default Header;
