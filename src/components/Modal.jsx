import React from 'react';

const Modal = ({ showModal }) => {
  const MODAL = showModal ? (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__header'>
          <p>INICIA SESIÓN</p>
        </div>
        <form action='modal__form'>
          <label htmlFor='' className='modal__data'>Correo electronico</label>
          <input type='text' name='' id='' placeholder='correo electronico' />
          <label htmlFor='' className='modal__data'>Contraseña</label>
          <input type='text' name='' id='' placeholder='contraseña' />
          <button className='modal__btn'>Enviar</button>
        </form>
        <div>
          <p>O inicia con</p>
          <button>Facebook</button>
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

