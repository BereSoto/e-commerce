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
      <div className='cart'>
        <div className='cart_container'>
          {cart.length > 0 ? <h3>Carrito de compras:</h3> : <h2>Sin Pedidos</h2>}
          {cart.map((item) => (
            <div className='cart-item' key={item._id}>
              <div className='cart-element'>
                <button className='element-button' type='button' onClick={() => handleDeleteProduct(item)}>
                &times;
                  {/* <img src={del} alt='Eliminar' /> */}
                </button>
                <span className='cart-element__image'>
                  <img alt='Producto' src={item.image} />
                </span>
                <h4 className='cart-element__title'>{item.title}</h4>

                <span className='element-quantity'>
                  <h4>
                    {/* {item.quantity} */}
                  </h4>
                  <span className='element-quantity__icons'>
                    <button className='element-button' type='button' onClick={() => handlePlusQuantity(item)}>
                      <img src={plus} alt='Agregar' />
                    </button>
                    <button className='element-button' type='button' onClick={() => handleMinusQuantity(item)}>
                      <img src={minus} alt='Eliminar' />
                    </button>
                  </span>
                </span>
                <span>
                  $
                  {item.price}
                </span>
                <span className='element-quantity__newprice'>
                  $
                  {item.newPrice}
                </span>
                <span />
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className='total_container'>
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
