import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.svg';
import carIcon from '../assets/static/car-icon.svg';
import heartIcon from '../assets/static/heart-icon.svg';
import Modal from './Modal';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.changeOpen = this.changeOpen.bind(this);
  }

  changeOpen() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;

    return (
      <header className='header'>
        <div className='row'>
          <Link to='/'>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 header_brand'>
              <img className='header__img' src={logo} alt='logoprueba' />
            </div>
          </Link>
          {/*
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
          */}
          {/*
          <div className=' header__search col- col-sm-4 col-md-3 col-lg-3'>
            <input
              type='text'
              className='header__search__input'
              placeholder=' Buscar...'
            />
          </div>
          */}
          <Modal showModal={isOpen} closeCb={this.changeOpen} />

          <div className='col-2 offset-7 col-sm-2 offset-sm-7 col-md-2 offset-md-7 col-lg-2 offset-md-7 header__icons__menu'>
            <button type='button' onClick={this.changeOpen}>
              <img src={userIcon} className='header__icon' alt='User Icon' />
            </button>
            <Link to='/cart'>
              <img src={carIcon} className='header__icon' alt='' />
            </Link>
            <Link to='wishes'>
              <img src={heartIcon} className='header__icon' alt='' />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
