import React from "react";
//import instagramIcon from '../assets/static/instagram-logo.svg'
//import FacebookIcon from '../assets/static/facebook-logo.svg'
import heartIcon from "../assets/static/heart-icon.png";
import '../assets/styles/components/_Footer.scss';

const Footer = () => (
  <footer className="footer">
   
        <div className="footer__social">
          <img className="footer__img" src={heartIcon} alt="logoprueba" />
          <img className="footer__img" src={heartIcon} alt="logoprueba" />
        </div>
        <div className=" footer__rigths">
          <p>Todos los derechos reservados &copy; 2019</p>
        </div>
        <div className=" footer__contact">
          <a>Contacto</a>
        </div>
  
  </footer>
);

export default Footer;
