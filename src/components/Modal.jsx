import React from 'react';
import FacebookIcon from '../assets/static/facebook-logo.svg';

const Modal = ({ showModal }) => {
  const MODAL = showModal ? (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__header'>

          <p>INICIA SESIÓN</p>

        </div>
        <div className=''>
          <form className='modal__form'>
            <label className='modal__data'>
              Correo electronico
              <input type='text' name='name' />
            </label>
            <label className='modal__data'>
              Contraseña
              <input type='email' name='name' />
            </label>
            <input type='submit' value='Enviar' className='form__btn' />
          </form>
        </div>
        <div className='modal__social'>
          <p>O</p>
          <button type='submit' className='modal__fb' id=''>
            <img className='footer__img' src={FacebookIcon} alt='faceebok' />
          Facebook
          </button>
          <p>
            <a href=''>Crea una cuenta</a>
          </p>
        </div>
      </div>
    </div>

  ) :
    null;

  return (
    MODAL

  );
};

export default Modal;

