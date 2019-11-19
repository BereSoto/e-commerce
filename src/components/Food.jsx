import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../actions';
import imgShoppingCart from '../assets/static/shopping-cart.png';
import imgWishlist from '../assets/static/wishlist.png';

class Food extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleClick(product) {
    this.props.addToCart(product);
    console.log('handleClick');
  }

  renderProductsList() {
    return this.props.products.map((product) => {

      if (product.categories[0] === 'comida') {

        return (
          <div className='card-item' key={product._id}>
            <div className='card-item__image'>
              <img alt='Producto' src={product.image} />
            </div>
            <div className='card-item__info'>
              <div className='card-item__product'>
                <h5>
                  {product.description}
                </h5>
                <p>{product.title}</p>
                <p>
                  {product.price}
$
                </p>
                <a src='#' />
              </div>
              <div className='card-item__icons'>
                <button type='button' onClick={() => this.handleClick(product)}>
                  <img
                    src={imgShoppingCart}
                    alt='Agregar al carrito'

                  />
                </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Food);
