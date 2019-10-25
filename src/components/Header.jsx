import React, { Component } from 'react';

import logo from '../assets/static/logo.png';
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
          <div className='col-1 col-sm-4 col-md-3 col-lg-3 header_brand'>
            <img className='header__img' src={logo} alt='logoprueba' />
          </div>
          <div className='header__menu col- col-sm-4 col-md-4 col-lg-4'>
            <ul>
              <li>
                <a href='/'>Nosotros</a>
              </li>
              <li>
                <a href='/'>Categorías</a>
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
              src={carIcon}
              className='header__icon'
              alt=''
              onClick={this.changeOpen}
            />
            <img src={carIcon} className='header__icon' alt='' />
            <img src={heartIcon} className='header__icon' alt='' />
          </div>
        </div>
      </header>
    );
  };
}

export default Header;
