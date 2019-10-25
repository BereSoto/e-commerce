import React from 'react';

const Modal = ({ showModal }) => {
  const MODAL = showModal ? <div>Hola mundo</div> : null;

  return (
    MODAL
  );
};

export default Modal;
