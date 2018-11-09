import React from 'react';
import Link from 'gatsby-link';
import ProductList from '../components/ProductList/ProductList';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <ProductList />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
