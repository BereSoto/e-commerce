import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Cart from '../components/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wishes from '../components/Wishes';
import Checkout from '../components/Checkout';
import NotFound from '../containers/NotFound';
import Hero from '../components/Hero';
import CategoriesSection from '../components/CategoriesSection';
import FavoriteSection from '../components/FavoriteSection';

const App = () => (
  <>
    <BrowserRouter>
    <Header />
      <Switch>
       <Hero>
        <Route exact path='/' component={Home} />
        <Route exact path='/categorias' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/wishes' component={Wishes} />
        <Route exact path='/checkout' component={Checkout} />
        <Route component={NotFound} />
       </Hero>
      </Switch>
    </BrowserRouter>
    <CategoriesSection />
    <FavoriteSection />
    <Footer />
  </>
);

export default App;

