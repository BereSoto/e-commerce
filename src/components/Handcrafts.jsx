import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart  } from '../actions';

import imgShare from '../assets/static/share.png';
import imgShoppingCart from '../assets/static/shopping-cart.png';
import imgWishlist from '../assets/static/wishlist.png';

class Handcrafts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleClick(product) {
    this.props.addToCart(product);
    console.log('handleClick');
  }

  renderProductsList() {
    return this.props.products.map((product) => {

      if (product.categories[0] === 'productos ecológicos' |
          product.categories[0] === 'cuadernos' |
          product.categories[0] === 'accesorios'
      ) {

        return (
          <div className='product' key={product._id}>
            <div className='product__image'>
              <img alt='Producto' src={product.image} />
            </div>
            <div className='product__info'>
              <div className='product__info--details'>
                {product.description}
                <p className='product__info--details--name'>{product.title}</p>
                <p className='product__info--details--price'>
                  {product.price}
$
                </p>
                <a src='#' />
              </div>
              <div className='product__info--icons'>
                <button type='button' onClick={() => this.handleClick(product)}>
                  <img
                    src={imgShoppingCart}
                    alt='Agregar al carrito'
                  />
                </button>  
                {/* <img src={imgShare} alt="Compartir"/> */}
                <img src={imgWishlist} alt='Favoritos' />
              </div>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className='Products'>
        <div className='Products-items'>{this.renderProductsList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  fetchProducts,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Handcrafts);
