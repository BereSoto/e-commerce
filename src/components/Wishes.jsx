import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeToWishes } from '../actions';
import remove from '../assets/static/icon-delete.svg';
import carIcon from '../assets/static/car-icon-card.svg';

const Wishes = (props) => {
  const { wishes } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
    props.removeToWishes(product);
  };

  const handleRemoveToWishes = (product) => {
    props.removeToWishes(product);
  };

  return (
    <section className=''>
      {wishes.length > 0 ? <h1>Lista de deseos</h1> : <h1>No hay productos en la lista de deseos</h1>}
      <div className='card-products__items'>
        {wishes.map((product) => (
          <div className='card-item' key={product._id}>
            <div className='card-item__image'>
              <img alt='Producto' src={product.image} />
            </div>
            <div className='card-item__info'>
              <p className='product__info--details--name'>{product.title}</p>
              <p className='product__info--details--price'>
                $
                                {' '}
                                {product.price}
              </p>
            </div>
            <div className='product__info--icons'>
              <button type='button' onClick={() => { handleAddToCart(product) ; }}>
                <img src={carIcon} alt='Agregar al carrito' />
              </button>
              <button type='button' onClick={() => handleRemoveToWishes(product)}>
                <img src={remove} alt='Favoritos' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    wishes: state.wishes,
  };
};

const mapDispatchToProps = {
  addToCart,
  removeToWishes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishes);

