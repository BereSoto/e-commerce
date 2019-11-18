
const INITIAL_STATE = {
  products: [],
  cart: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case 'FETCH_PRODUCTS':
      return {...state, products: action.payload }
    
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

      default:
        return state;
  }
}