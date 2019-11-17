import axios from 'axios';
//const respuesta = await axios.get('http://e-moms-api.now.sh/api/products');
export const fetchProducts = () => (dispatch) => {
  axios.get('http://e-moms-api.now.sh/api/products')
    .then(res => {
      dispatch({
  
        type: 'FETCH_PRODUCTS',
        payload: res.data.data
      })
    
    })
  
  
}