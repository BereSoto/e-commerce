import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/categorias' component={Home} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;

