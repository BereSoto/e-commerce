import React from 'react';

const FavoriteteSection = () => (
  <section className='favorite-home'>
    <div className='favorite-home__content'>
      <h2>Los más vendidos</h2>
      <div className='favorite-home__cards'>
        <div className='favorite-home__card'>
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
        <div className='favorite-home__card'>
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
        <div className='favorite-home__card'>
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

export default FavoriteteSection;
