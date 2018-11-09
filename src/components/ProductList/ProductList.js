import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';
import { getShopProducts } from '../../state/products';

//  Cards for each product

class ProductList extends Component {
  initialState = { productList: [] };
  state = this.initialState;
  componentDidMount() {
    const productList = this.props.getShopProducts();

    this.setState({ productList });
  }
  render() {
    console.log(this.state);
    return <div />;
  }
}

const mapStateToProps = state => ({
  products: state.products.productList,
});

export default connect(
  mapStateToProps,
  { getShopProducts },
)(ProductList);
