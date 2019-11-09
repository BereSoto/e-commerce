import React from 'react';
import Hero from '../components/Hero';
import CategoriesSection from '../components/CategoriesSection';
import FavoriteSection from '../components/FavoriteSection';


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
  <section>
    <Hero />
    <div>
      <CategoriesSection />
    </div>
    <div>
      <FavoriteSection />
    </div>

  </section>

);

// export default connect(mapStateToProps, null)(ProductList);

export default Home;

