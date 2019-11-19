const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    case 'ADD_TO_CART':
      const exist = state.cart.find(item => item._id === action.payload._id);
      if (exist) {
        action.payload.quantity += 1;
        action.payload.newPrice = action.payload.quantity * action.payload.price;
        return {
          ...state,
          totalCart: state.totalCart + action.payload.price,
        }
      } else {
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
        cart: state.cart.filter(items => items._id !== action.payload._id),
        totalCart: state.totalCart - (Number(action.payload.quantity) * Number(action.payload.price)),
      };
    case 'PLUS_QUANTITY':
      action.payload.quantity += 1;
      action.payload.newPrice = action.payload.quantity * action.payload.price;
      return {
        ...state,
        totalCart: state.totalCart + action.payload.price,
      };
    case 'MINUS_QUANTITY':
      const isGreaterThanOne = action.payload.quantity > 1;
      if (isGreaterThanOne) {
        action.payload.quantity -= 1;
        action.payload.newPrice = action.payload.quantity * action.payload.price;
        return {
          ...state,
          totalCart: state.totalCart - action.payload.price,
        }
      }
      else {
        alert('No es posible disminuir la cantidad de productos, te sugiero eliminarlo =)');
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
