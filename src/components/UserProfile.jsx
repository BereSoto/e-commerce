import React from 'react';
import userPurple from '../assets/static/user-purple.svg';

const UserProfile = () => (
  <section>
    <div className='user-columns'>
      <div className='user-columns__left'>
        <img className='user-columns__profile' src={userPurple} alt='logouser' />
        <h3 className='user-columns__name'>Mari Paz</h3>
      </div>
      <div className='user-columns__rigth'>
        <div className='user-columns__data'>
          <form className='user-columns__form'>
            <label>
              <input type='text' name='name' placeholder='Nombre' />
            </label>
            <label>
              <input type='email' name='name' placeholder='Apellido' />
            </label>
            <input type='submit' value='Submit' />
          </form>

        </div>

      </div>
    </div>

  </section>

);

export default UserProfile;
