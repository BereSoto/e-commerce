import React from 'react';
import curva from '../assets/static/ondita.svg';
import {  Link } from 'react-router-dom';

const CategoriesSection = () => (
  <section className='categories-home'>
    <div className=''>
      <img src={curva} className='curva' alt='' />
    </div>

    <div className='categories-home__content'>
      <h2>Categorias</h2>
      <div className='categories-home__cards'>
        <Link to='/clothes'>
          <div className='categories-home__card'>
            <figure className='image'>
              <img src='https://e-moms.s3.us-east-2.amazonaws.com/maizajo/naranja.jpg' alt='demo' />
              <figcaption>
                <h2>
                ropa
                </h2>
              
              </figcaption>
            </figure>
          </div>
          </Link>
          <Link to= '/babys'>
          <div className='categories-home__card'>
          <figure className='image'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg' alt='demo' />
            <figcaption>
              <h2>
               Bebes
              </h2>
            </figcaption>
          </figure>
        </div>
          </Link>
          <Link to= '/handcrafts'>
        <div className='categories-home__card'>
          <figure className='image'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg' alt='' />
            <figcaption>
              <h2>
                Artesanias
              </h2>
            </figcaption>
          </figure>
        </div>
        </Link>
        <Link to= '/food'>
        <div className='categories-home__card'>
          <figure className='image'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg' alt='' />
            <figcaption>
              <h2>
                Comida
              </h2>
            </figcaption>
          </figure>
        </div>
        </Link>
      </div>
    </div>
    <div className='categories-home__btn'>
      <a href='' className='categories-home__text'>Descubre más</a>

    </div>

  </section>

);

export default CategoriesSection;
