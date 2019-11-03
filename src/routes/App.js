import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Cart from '../components/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wishes from '../components/Wishes';
import Checkout from '../components/Checkout';
import NotFound from '../containers/NotFound';

const App = () => (
  <>
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/categorias' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/wishes' component={Wishes} />
        <Route exact path='/checkout' component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    <Footer />
    </BrowserRouter>
  </>
);

export default App;

