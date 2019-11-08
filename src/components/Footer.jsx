import React from 'react';
//import instagramIcon from '../assets/static/instagram-logo.svg'
//import FacebookIcon from '../assets/static/facebook-logo.svg'
import heartIcon from '../assets/static/heart-icon.png';

const Footer = () => (
  <footer className='footer row'>

    <div className='footer__social col-2'>
      <img className='footer__img' src={heartIcon} alt='logoprueba' />
      <img className='footer__img' src={heartIcon} alt='logoprueba' />
    </div>
    <div className=' footer__rigths col-4'>
      <p>Todos los derechos reservados &copy; 2019</p>
    </div>
    <div className=' footer__contact col-3'>
      <a>Contacto</a>
    </div>

  </footer>
);

export default Footer;
