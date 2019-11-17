import React from 'react';
import prueba from '../assets/static/img/prueba.jpg';
import plus from '../assets/static/plus.svg';
import less from '../assets/static/less.svg';


const Cart = (props) => {
  const { cart } = props;
  
  

  return(
    <div>
      <div className='row cart_container'>
        
       
        <div className="Checkout-item">
          <div className='col-3'>
            <img className='img-prueba'/>
          </div>
          <div className='col-4'>
           
            
          </div>
          <div col-2>
            <img src={plus} className="cart-icons"/>
            <img src={less} className="cart-icons" onClick={() => handleRemoveToCart(cart, item)}/>
          </div>
          <div col-2>
            <p>Count</p>
          </div>  
        </div>
    
      </div>
      <div className='row total_container'> 
        <p>Total</p>
      </div>
    </div>
  );

};



export default Cart;

