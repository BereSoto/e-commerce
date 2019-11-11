import React from 'react';
import hero from '../assets/static/hero.png';

const Hero = () => (
  <section className='hero'>
    <div className='hero__column-left'>
      <h1 className='hero__title'>En xxxxx creamos un espacio para impulsar tus sueños.</h1>
      <p>Se una mas de nuestras emprendedoras.</p>
      <p>
      Creamos un espacio para todas las mujeres que quieran contar su historia y cumplir sus sueños

      </p>
    </div>
    <div className='hero__column-rigth'>
      <img src={hero} className='' alt='' />

    </div>
  </section>

);

export default Hero;
