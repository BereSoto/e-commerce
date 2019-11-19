const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    case 'ADD_TO_CART':
      // let addItem = state.products.find(item => item.id === action.payload.id);
      const exist = state.cart.find(item => item._id === action.payload._id);
      console.log('estas entrando al action de addToCart');
      console.log(' action: ', action.payload._id);
      if (exist) {
        console.log('este producto ya existe en el cart');
        action.payload.quantity += 1;
        action.payload.newPrice = action.payload.quantity * action.payload.price;
        return {
          ...state,
          totalCart: state.totalCart + action.payload.price,
        }
      } else {
        console.log('este producto NO existe en el cart');
        action.payload.quantity = 1;
        action.payload.newPrice = action.payload.price;
        return {
          ...state,
          cart: [...state.cart, action.payload ],
          totalCart: state.totalCart + Number(action.payload.price),
        }
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        cart: state.cart.filter(items => items.id !== action.payload.id ),
        totalCart: state.totalCart - ( Number(action.payload.quantity) * Number(action.payload.price) ),
      }
    default:
      return state;
  }
};

export default reducer;





// import { combineReducers } from 'redux';
// import productsReducers from './productsReducers';

// export default combineReducers({
//   productsReducers,
// });
