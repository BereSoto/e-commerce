
import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../actions';
import carIcon from '../assets/static/car-icon-card.svg';
import heartIcon from '../assets/static/heart-icon-card.svg';

import imgShoppingCart from '../assets/static/shopping-cart.png';
import imgWishlist from '../assets/static/wishlist.png';

class Card extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleClick(product) {
    this.props.addToCart(product);
    console.log('handleClick');
  }

  renderProductsList() {
    return this.props.products.map((product) => {
      return (
        <div className='card-item' key={product._id}>
          <div className='card-item__image'>
            <img alt='Producto' src={product.image} />
          </div>
          <div className='card-item__info'>
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
              <img src={heartIcon} alt='Favoritos' />
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  fetchProducts,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
