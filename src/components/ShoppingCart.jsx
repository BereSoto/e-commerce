import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct, plusQuantity, minusQuantity } from '../actions';

import plus from '../assets/static/icon-plus.svg';
import minus from '../assets/static/icon-minus.svg';
import del from '../assets/static/icon-delete.svg';

const ShoppinCart = (props) => {
  const { cart, totalCart } = props;

  const handleDeleteProduct = (item) => {
    props.deleteProduct(item);
  };

  const handlePlusQuantity = (product) => {
    props.plusQuantity(product);
  };

  const handleMinusQuantity = (product) => {
    props.minusQuantity(product);
  };

  return (
    <>
      <div className='cart-container'>
        <div className='cart-container__columns'>
          {cart.length > 0 ? <h3>Carrito de compras:</h3> : <h2>Sin Pedidos</h2>}
          {cart.map((item) => (
            <div className='cart-container__shoop' key={item._id}>
              <div className='cart-container__close'>
                <button className='element-button' type='button' onClick={() => handleDeleteProduct(item)}>
                &times;
                  {/* <img src={del} alt='Eliminar' /> */}
                </button>
                <div className='cart-container__image'>
                  <img alt='Producto' src={item.image} />
                </div>
                <div className='cart-container__title'>
                  <h4>{item.title}</h4>
                </div>
                <div className='cart-container__quantity'>
                  <h4>
                    {item.quantity}
                  </h4>
                  <div className='cart-container__icons'>
                    <button className='element-button' type='button' onClick={() => handlePlusQuantity(item)}>
                      <img src={plus} alt='Agregar' />
                    </button>
                    <button className='element-button' type='button' onClick={() => handleMinusQuantity(item)}>
                      <img src={minus} alt='Eliminar' />
                    </button>
                  </div>
                </div>
                <span>
                  $
                  {item.price}
                </span>
                <span className='cart-container__newprice'>
                  $
                  {item.newPrice}
                </span>
                <span />
              </div>
            </div> //columna izquierda
          ))}
        </div>
        {cart.length > 0 && (
          <div className='cart-container__total'>
            <p>Precio Total:</p>
            <p>
              $
              {totalCart}
            </p>
            <div className='cart-checkout'>
              <Link to='/checkout'>
                <button className='form__btn' type='button'>
              Proceder con el pago
                </button>
              </Link>
            </div>
          </div>

        )}
      </div>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalCart: state.totalCart,
  };
};

const mapDispatchToProps = {
  deleteProduct,
  plusQuantity,
  minusQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppinCart);
