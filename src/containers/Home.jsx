import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Products from '../components/Products';

const ProductList = ({ products }) => {
  return (
    <Products>
      {products.map((product) => <Card key={product.id} {...product} />)}
    </Products>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductList);
