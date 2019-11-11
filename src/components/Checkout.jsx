import React from 'react';
import visa from '../assets/static/icons8-visa.svg';
import mastercard from '../assets/static/icons8-mastercard.svg';
import amex from '../assets/static/icons8-american-express.svg';

class Checkout extends React.Component {
  constructor (props){
    super(props);
    this.state = {};
      
    
      this.handleInputChange = 
      this.handleInputChange.bind(this);
  }
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'input' ? target.checked : target.value;
      const name = target.name;
      console.log(`${name} ${value}`);
     
      this.setState({
        [name]: value
      });
    }
    render(){
      return (
        <div className='credit__card__form'>
          <div className='credit__card__form__heading'>
            <h2>Confirmar Compra</h2>
          </div>
          <div>
            <form onSubmit = {this.handleSubmit}>
              <div className>
                <label> Nombre que aparece en la tarjeta
                  <input type='text'
                    name="card-name"
                    className='form__control'
                    id='owner' 
                    onChange={this.handleInputChange}/>
                </label>
      
              </div>
              <div className='form__group__ccv'>
                <label>CVV
                  <input type='text'
                    name="card-ccv"
                    className='form-control'
                    id='cvv' onChange={this.handleInputChange} />
                </label>
      
              </div>
              <div className='form-group' id='card-number-field'>
                <label name='cardNumber'>Número de tarjeta
                  <input type='text'
                    name="card-number"
                    className='form-control'
                    id='cardNumber' 
                    onChange={this.handleInputChange} />
                </label>
      
              </div>
              <div className='form-group' id='expiration-date'>
                <label>Fecha de expiración</label>
                <select>
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
                <select>
                  <option value='16'> 2019</option>
                  <option value='17'> 2020</option>
                  <option value='18'> 2021</option>
                  <option value='19'> 2022</option>
                  <option value='20'> 2023</option>
                  <option value='21'> 2024</option>
                </select>
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