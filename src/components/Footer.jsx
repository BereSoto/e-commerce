import React from "react";
//import instagramIcon from '../assets/static/instagram-logo.svg'
//import FacebookIcon from '../assets/static/facebook-logo.svg'
import heartIcon from "../assets/static/heart-icon.png";
import '../assets/styles/components/_Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="row">
        <div className="footer__social">
        <img className="footer__img" src={heartIcon} alt="logoprueba" />
        </div>
        <div className=" footer__contact">
            <a>Contacto</a>
            <p>Todos los derechos reservados</p>
        </div>
        <div className=" footer__end">
        <img className="footer__img" src={heartIcon} alt="logoprueba" />
        </div>
      </div>
  </footer>
);

export default Footer;
