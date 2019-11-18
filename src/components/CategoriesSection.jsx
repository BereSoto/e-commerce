import React from 'react';
import { Link } from 'react-router-dom';
import curva from '../assets/static/ondita.svg';
import gradiente from '../assets/static/img/gradient.png';
// import {  Link } from 'react-router-dom';

const CategoriesSection = () => (
  <section className='categories-home'>
    <h2>Categorías</h2>
    <div className=''>
      <img src={curva} className='curva' alt='' />
    </div>

    <div className='categories-home__content'>
      <h2>Categorias</h2>
      <div className='categories-home__cards'>
        <Link to='/clothes'>
          <div className='categories-home__card'>
            <figure className='image'>
              <img src={gradiente} alt='demo' className='categories-home__img' />
              <figcaption>
                <h2>
                ROPA
                </h2>

              </figcaption>
            </figure>
          </div>
        </Link>
        <Link to='/babys'>
          <div className='categories-home__card'>
            <figure className='image'>
              <img src={gradiente} alt='demo' />
              <figcaption>
                <h2>
               BEBÉS
                </h2>
              </figcaption>
            </figure>
          </div>
        </Link>
        <Link to='/handcrafts'>
          <div className='categories-home__card'>
            <figure className='image'>
              <img src={gradiente} alt='' />
              <figcaption>
                <h2>
                ARTESANIAS
                </h2>
              </figcaption>
            </figure>
          </div>
          </Link>
        <Link to='/food'>
          <div className='categories-home__card'>
            <figure className='image'>
              <img src={gradiente} alt='' />
              <figcaption>
                <h2>
                COMIDA
                </h2>
              </figcaption>
            </figure>
          </div>
        </Link>
      </div>
    </div>
    {/*
    <div className='categories-home__btn'>
      <a href='' className='categories-home__text'>Descubre más</a>

    </div>
    */}
  </section>

);

export default CategoriesSection;
