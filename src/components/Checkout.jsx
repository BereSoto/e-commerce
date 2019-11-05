import React from 'react';

const Checkout = () => (
  <section className=''>
    <form className="row">
      <div className="col-12 col-lg-6 pay-method">
        <input type="radio" />Credit Card visa
        <input type="radio" />Credit Card Mastercard
      </div>
      <div className="col-12 .col-lg-6">
        <p>Card number</p>
        <input type="text"/>
        <p>Expiration date</p>
        <select name="month" id="">Month</select>
        <select name="year" id="">Year</select>
        <input type="text" /> CVV
        <input type="Name"/> Full name on a Card
      </div>
      <div className="col-12 .col-lg-6">
        <button>pay</button>
      </div>
    </form>
   
  </section>
);

export default Checkout;
