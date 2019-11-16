import React from 'react';
import prueba from '../assets/static/img/prueba.jpg';
import plus from '../assets/static/plus.svg';
import less from '../assets/static/less.svg';

const Cart = () => (
  <div>
    <div className='row cart_container'>
      <div className='col-3'>
        <img src={prueba} className='img-prueba' />
      </div>
      <div className='col-4'>
        <p>Product description</p>
        <p>Store</p>
      </div>
      <div col-2>
        <img src={plus} className='cart-icons' />
        <img src={less} className='cart-icons' />
      </div>
      <div col-2>
        <p>Count</p>
      </div>

    </div>
    <div className='row total_container'>
      <p>Total</p>
    </div>
  </div>

);

export default Cart;

