import React from 'react';
import curva from '../assets/static/ondita.svg';

const CategoriesSection = () => (
  <section className='categories-home'>
    <div className=''>
      <img src={curva} className='curva' alt='' />
    </div>

    <div className='categories-home__content'>
      <h2>Categorias</h2>
      <div className='categories-home__cards'>
        <div className='categories-home__card'>
          <figure className='image'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg' alt='demo' />
            <figcaption>
              <h2>
               ropa
              </h2>
              <a href='#' />
            </figcaption>
          </figure>
        </div>
        <div className='categories-home__card'>
          <figure className='image'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg' alt='demo' />
            <figcaption>
              <h2>
               Bebes
              </h2>
              <a href='#' />
            </figcaption>
          </figure>
        </div>
        <div className='categories-home__card'>
          <figure className='image'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg' alt='' />
            <figcaption>
              <h2>
                Artesanias
              </h2>

              <a href='#' />
            </figcaption>
          </figure>
        </div>
      </div>

    </div>

  </section>

);

export default CategoriesSection;
