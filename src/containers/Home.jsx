import React from 'react';
import Hero from '../components/Hero';

// import { connect } from 'react-redux';

// const ProductList = ({ products }) => {
//   return (
//     <Products>
//       {products.map((product) => <Card key={product.id} {...product} />)}
//     </Products>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//   };
// };

// export default connect(mapStateToProps, null)(ProductList);

const Home = () => (
  <Hero />

);

// export default connect(mapStateToProps, null)(ProductList);

export default Home;

