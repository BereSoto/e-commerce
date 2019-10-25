import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
// import App from './containers/App';
import App from './routes/App';
import './assets/styles/main.scss';

const initialState = {
  products: [
    {
      'id': '1',
      'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
      'name': 'Camiseta',
      'price': 25,
      'description': 'bla bla bla bla bla',
      'mark': 'Diseños Gaby',
    },
    {
      'id': '3',
      'image': 'https://arepa.s3.amazonaws.com/mug.png',
      'name': 'Mug',
      'price': 10,
      'description': 'bla bla bla bla bla',
      'mark': 'Diseños Gaby',
    },
    {
      'id': '4',
      'image': 'https://arepa.s3.amazonaws.com/pin.png',
      'name': 'Pin',
      'price': 4,
      'description': 'bla bla bla bla bla',
      'mark': 'Diseños Gaby',
    },
    {
      'id': '5',
      'image': 'https://arepa.s3.amazonaws.com/stickers1.png',
      'name': 'Stickers',
      'price': 2,
      'description': 'bla bla bla bla bla',
      'mark': 'Diseños Gaby',
    },
    {
      'id': '6',
      'image': 'https://arepa.s3.amazonaws.com/stickers2.png',
      'name': 'Stickers',
      'price': 2,
      'description': 'bla bla bla bla bla',
      'mark': 'Diseños Gaby',
    },
    {
      'id': '7',
      'image': 'https://arepa.s3.amazonaws.com/hoodie.png',
      'name': 'Hoodie',
      'price': 35,
      'description': 'bla bla bla bla bla',
      'mark': 'Diseños Gaby',
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
