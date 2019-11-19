import axios from 'axios';
//const respuesta = await axios.get('http://e-moms-api.now.sh/api/products');
export const fetchProducts = () => (dispatch) => {
  const URL_API = 'http://e-moms-api.now.sh/api/products';
  const PROXY_URL = 'https://obscure-citadel-86298.herokuapp.com/';
  axios.get(`${PROXY_URL}${URL_API}`).then((res) => {
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: res.data.data,
    });
  });
};

//Agregar al carrito de compras
export const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

// elimar del carrito de compras
export const deleteProduct = (payload) => ({
  type: 'DELETE_PRODUCT',
  payload,
});

// aumenta la cantidad de productos en shopping-cart
export const plusQuantity = (payload) => ({
  type: 'PLUS_QUANTITY',
  payload,
});

// dismunuye la cantidad de productos en shopping-cart
export const minusQuantity = (payload) => ({
  type: 'MINUS_QUANTITY',
  payload,
});
