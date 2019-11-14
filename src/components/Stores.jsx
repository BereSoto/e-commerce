import React from 'react';
import userPurple from '../assets/static/user-purple.svg';

const Stores = () => (
  <section>
    <div className='stores-column'>
      <div className='stores-column__left'>
        <img className='user-columns__profile' src={userPurple} alt='logouser' />
        <div className='column-social'>
          <p>Adriana</p>
          <p>Sánchez</p>

        </div>

      </div>
      <div className='stores-column__rigth'>
        <h1>hola</h1>
      </div>

    </div>
  </section>
);

export default Stores;
