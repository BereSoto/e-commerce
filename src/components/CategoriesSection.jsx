import React from 'react';
import curva from '../assets/static/ondita.svg';

const CategoriesSection = () => (
  <section className='categories-home'>
    <div className='categories-home__content'>
      <h2>Te recomendamos</h2>
      <div className='categories-home__cards'>
        <div className='categories-home__card'>
          <figure className='snip0015'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg' alt='sample38' />
            <figcaption>
              <h2>
ropa
              </h2>

              <a href='#' />
            </figcaption>
          </figure>
        </div>
        <div className='categories-home__card'>
          <figure className='snip0015'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg' alt='sample38' />
            <figcaption>
              <h2>
I don't know
                {' '}
                <span>which</span>
                {' '}
is worse
              </h2>
              <p>That everyone has his price, or that the price is always so low.</p>
              <a href='#' />
            </figcaption>
          </figure>
        </div>
        <div className='categories-home__card'>
          <figure className='snip0015'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg' alt='sample38' />
            <figcaption>
              <h2>
I don't know
                {' '}
                <span>which</span>
                {' '}
is worse
              </h2>
              <p>That everyone has his price, or that the price is always so low.</p>
              <a href='#' />
            </figcaption>
          </figure>
        </div>
      </div>

    </div>

  </section>

);

export default CategoriesSection;
