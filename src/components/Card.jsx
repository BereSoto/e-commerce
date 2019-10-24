import React from 'react';
import '../assets/styles/components/Card.scss';
import imgShare from '../assets/static/share.png';
import imgShoppingCart from '../assets/static/shopping-cart.png';
import imgWishlist from '../assets/static/wishlist.png';

const Card = (props) => {
  const product = props;

  return (
    <div className="product">
      <div className="product__image">
        <img src={product.image} alt="Producto"/>
      </div>
      <div className="product__info">
        <div className="product__info--details">
          <p className="product__info--details--name">{product.name}</p>
          <p className="product__info--details--price">$ {product.price}</p>
          <a src="#">{product.mark}</a>
        </div>
        <div className="product__info--icons">
          <img src={imgShoppingCart} alt="Agregar al carrito"/>
          {/* <img src={imgShare} alt="Compartir"/> */}
          <img src={imgWishlist} alt="Favoritos"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
