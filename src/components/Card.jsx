import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../actions';

import imgShare from '../assets/static/share.png';
import imgShoppingCart from '../assets/static/shopping-cart.png';
import imgWishlist from '../assets/static/wishlist.png';

class Card extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProductsList() {
    return this.props.products.map((product) => {
      return (
        <div className='card-item'>
          <div className='card-item__image'>
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
              <img
                src={imgShoppingCart}
                alt='Agregar al carrito'

              />
              {/* <img src={imgShare} alt="Compartir"/> */}
              <img src={imgWishlist} alt='Favoritos' />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.products);
    return (
      <div className='card-products'>
        <div className='card-products__items'>{this.renderProductsList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.productsReducers;
};

export default connect(mapStateToProps, { fetchProducts })(Card);
