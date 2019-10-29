import React from 'react';

const Modal = ({ showModal }) => {
  const MODAL = showModal ? (
    <div className='Modal'>
      <div className='Modal__header'>
        <p>Crea una cuenta</p>
      </div>

    </div>
  ) :
    null;

  return (
    MODAL

  );
};

export default Modal;
