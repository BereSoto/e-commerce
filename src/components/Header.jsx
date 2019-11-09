import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.svg';
import carIcon from '../assets/static/car-icon.png';
import heartIcon from '../assets/static/heart-icon.png';
import Modal from './Modal';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.changeOpen = this.changeOpen.bind(this);
  };

  changeOpen() {
    const { isOpen } = this.state;
    console.log(isOpen);
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <header className='header'>
        <div className='row'>
          <div className='col-1 col-sm-2 col-md-2 col-lg-2 header_brand'>
            <img className='header__img' src={logo} alt='logoprueba' />
          </div>
          <div className='header__menu col- col-sm-4 col-md-4 col-lg-4'>
            <ul>
              <li>
                <a href='/'>Nosotros</a>
              </li>
              <li>
                  <Link to='/'> Categorías</Link>
              </li>
            </ul>
          </div>
          <div className=' header__search col- col-sm-4 col-md-3 col-lg-3'>
            <input
              type='text'
              className='header__search__input'
              placeholder=' Buscar...'
            />
          </div>
          <Modal showModal={isOpen} />
          <div className='header__icons__menu'>
            <img
              src={userIcon}
              className='header__icon'
              alt=''
              onClick={this.changeOpen}
            />
              <Link to='/cart'><img src={carIcon} className='header__icon' alt='' /></Link>
              <Link to='wishes'><img src={heartIcon} className='header__icon' alt='' /></Link>
          </div>
        </div>
      </header>
    );
  };
}

export default Header;
