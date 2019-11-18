import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../actions';
import carIcon from '../assets/static/car-icon-card.svg';
import heartIcon from '../assets/static/heart-icon-card.svg';

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
          <div className='card-item__info'>
            <div className='card-item__product'>
              <h5 className='card-item__descripcion'>{product.description}</h5>

              <p className='card-item__name'>{product.title}</p>
              <p className='card-item__price'>
              $
                {product.price}

              </p>
              <a src='#' />
            </div>
            <div className='card-item__icons'>
              <img
                src={carIcon}
                alt='Agregar al carrito'
                className='icon-left'
              />
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

const mapStateToProps = (reducers) => {
  return reducers.productsReducers;
};

export default connect(mapStateToProps, { fetchProducts })(Card);
