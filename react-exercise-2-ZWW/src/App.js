import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import ProductS from './components/ProductS';

class App extends Component {
  state = {
    productList: [],
    cartNum: 0,
  };

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.createProductList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  createProductList = (data) => {
    const categoryList = new Set([]);
    data.forEach((product) => categoryList.add(product.category));
    categoryList.forEach((category) => {
      const itemList = {
        category: category,
        item: [],
      }
      data.forEach((product) => {
        if (product.category === category) {
          itemList.item.push({
            name: product.name,
            price: product.price,
          });
        }
      })
      this.state.productList.push(itemList);
      this.setState({
        productList: this.state.productList,
        cartNum: this.state.cartNum,
      })
    });
  }

  handleAddToCart = () => {
    this.setState({
      productList: this.state.productList,
      cartNum: this.state.cartNum + 1,
    });
  }

  render() {
    return (
      <main className="app">
        <Header cartNum = {this.state.cartNum} />
        {this.state.productList.map((product, index) => (
          <ProductS key = {index} category = {product.category} item = {product.item} addToCart = {this.handleAddToCart} />
        ))}
      </main>
    );
  }
}

export default App;
