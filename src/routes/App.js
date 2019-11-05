import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Header from '../components/Header';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CategoriesSection from '../components/CategoriesSection';

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Switch>
        <Hero>
          <Route exact path='/' component={Home} />
          <Route exact path='/categorias' component={Home} />

        </Hero>

      </Switch>
    </BrowserRouter>
    <CategoriesSection />
    <Footer />
  </div>
);

export default App;

