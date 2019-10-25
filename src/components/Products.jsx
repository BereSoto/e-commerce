import React from 'react';
import '../assets/styles/components/Products.scss';

const Products = ({ children }) => (
  <section className='products__container'>
    {children}
  </section>
);

export default Products;
