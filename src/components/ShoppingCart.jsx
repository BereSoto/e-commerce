import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct } from '../actions';
import { plusQuantity } from '../actions';
import { minusQuantity } from '../actions';
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
          {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
          {cart.map((item) => (
            <div className='cart-item' key={item._id}>
              <div className='cart-element'>
                <span><h4>{item.title}</h4></span>
                <span className='cart-element__image'>
                  <img alt='Producto' src={item.image} />
                </span>
                <span className='element-quantity'>
                  <h4>
                    {item.quantity}
                  </h4>
                  <span className="element-quantity__icons">
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
                <span>
                  $
                  {item.newPrice}
                </span>
                <span>
                  <button className='element-button' type='button' onClick={() => handleDeleteProduct(item)}>
                    <img src={del} alt='Eliminar' />
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className='total_container'>
            <h3>Precio Total:</h3>
            <h4>
              $
              {totalCart}
            </h4>
          </div>
        )}
      </div>
      <div className="cart-checkout">
        <Link to='/checkout'>
          <button className="cart-checkout__button" type='button'>
            Proceder con el pago
          </button>
        </Link>
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
