import React from 'react';
import visa from '../assets/static/icons8-visa.svg';
import mastercard from '../assets/static/icons8-mastercard.svg';
import amex from '../assets/static/icons8-american-express.svg';

const luhnCheck = (num) => {
  const arr = (`${num}`)
    .split('')
    .reverse()
    .map((x) => parseInt(x));
  const lastDigit = arr.splice(0, 1)[0];
  // console.log(arr);
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  // console.log(sum);
  //console.log(arr.length);
  return sum % 10 === 0;

};

//4152313311981191

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange =
      this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'input' ? target.name : target.value;
    const { name } = target;
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
    //console.log(`${name} ${value}`);

    this.setState({
      [name]: value,

    });

    //console.log(luhnCheck(`${value}`));
    switch (`${value[0]}`) {
      case '4': console.log('Visa');
        break;
      case '5': console.log('Mastercard');
        break;
      default: console.log('Otra');
        break;
    }
    if (`${value.length}` == 16 && luhnCheck(`${value}`)) {
      console.log('Tarjeta Valida');
    } else if (`${value.length}` == 16 && !luhnCheck(`${value}`)) {
      console.log('tarjeta invalida');
    }

  }

  render() {

    return (
      <div className='credit__card__form'>
        <div className='credit__card__form__heading'>
          <h2>Confirmar Compra</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className>
              <label>
                {' '}
Nombre que aparece en la tarjeta
                <input
                  type='text'
                  name='card-name'
                  className='form__control'
                  id='owner'
                  onChange={this.handleInputChange}

                />

              </label>

            </div>
            <div className='form__group__ccv'>
              <label>
CVV
                <input
                  type='text'
                  name='card-ccv'
                  className='form-control'
                  id='cvv'
                  onChange={this.handleInputChange}
                />
              </label>

            </div>
            <div className='form-group' id='card-number-field'>
              <label name='cardNumber'>
Número de tarjeta
                <input
                  type='text'
                  name='card-number'
                  className='form-control'
                  id='cardNumber'
                  onChange={this.handleInputChange}
                />
                <div style={{ color: 'green' }}>{this.state.valid}</div>
              </label>

            </div>
            <div className='form-group' id='expiration-date'>
              <label>Fecha de expiración</label>
              <div className='control'>
                <div className='select'>
                  <select name='month' onChange={this.handleInputChange}>
                    <option value='01'>Enero</option>
                    <option value='02'>Febrero </option>
                    <option value='03'>Marzo</option>
                    <option value='04'>Abril</option>
                    <option value='05'>Mayo</option>
                    <option value='06'>Junio</option>
                    <option value='07'>Julio</option>
                    <option value='08'>Augosto</option>
                    <option value='09'>Septiembre</option>
                    <option value='10'>Octubre</option>
                    <option value='11'>Noviembre</option>
                    <option value='12'>Diciembre</option>
                  </select>
                </div>
              </div>
              <div className='control'>
                <div className='select'>
                  <select name='year' onChange={this.handleInputChange}>
                    <option value='19'> 2019</option>
                    <option value='20'> 2020</option>
                    <option value='21'> 2021</option>
                    <option value='22'> 2022</option>
                    <option value='23'> 2023</option>
                    <option value='24'> 2024</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='form-group' id='credit_cards'>
              <img className='card_type' src={visa} id='visa' />
              <img className='card_type' src={mastercard} id='mastercard' />
              <img className='card_type' src={amex} id='amex' />
            </div>
            <div className='form-group' id='pay-now'>
              <button type='submit' className='form__btn' id='confirm-purchase'>Confirmar</button>
            </div>
          </form>
        </div>
      </div>
    );

  }

}

export default Checkout;
