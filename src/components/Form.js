import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {newNum, newName, newCvv, newDate} from '../features/CardSlice';


const Form = () => {

   const dispatch = useDispatch();
   const [numberInput, setNumberInput] = useState('');
   const [nameInput, setNameInput] = useState('');
   const [cvvInput, setCvvInput] = useState('');
   const today = new Date();
   const asd = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
   const [dateInput, setDateInput] = useState('');

   const keyPressed = (event) => {
      console.log();
   }


   const inputChecker = (event, setState, feature, numMax) => {
      event.preventDefault()
      let value = event.target.value;
      let finalValue = new Array(numMax);

      if (value.length <= numMax && value.length >= 0) {
         for (let index = 0; index < numMax; index++) {
            if (value[index]) {
               finalValue[index] = value[index];
            }
         }
         finalValue = finalValue.slice(0, numMax);
         dispatch(feature(finalValue));
         setState(value);
      } 
      if (value.length > numMax) {
         value = value.slice(0, numMax-1);
      }
   }

   const numHandler = (event) => {
      inputChecker(event, setNumberInput, newNum, 16);

   }
   const nameHandler = (event) => {
      inputChecker(event, setNameInput, newName, 16);
   }
   const cvvHandler = (event) => {
      inputChecker(event, setCvvInput, newCvv, 3);
   }
   const dateHandler = (event) => {
      event.preventDefault();
      const month = event.target.value.slice(5,7);
      const day = event.target.value.slice(8,10);

      dispatch(newDate([month, day]));
      setDateInput(`2021-${month}-${day}`)
   }

   const cvvFocus = (event) => {
      event.preventDefault();
      document.querySelector('.card-front').classList.add('rotate-front');
      document.querySelector('.card-back').classList.add('rotate-back');
   }

   const cvvBlur = (event) => {
      event.preventDefault();
      document.querySelector('.card-front').classList.remove('rotate-front');
      document.querySelector('.card-back').classList.remove('rotate-back');
   }

   return(
      <>
         <form action="" className="form">
            <div className="form-wrapper">
               <div className="form-block">
                  <label htmlFor="num">Number of Card</label>
                  <input type="number" id="num" value={numberInput} onKeyPress={keyPressed} onChange={numHandler}/>
               </div>
               <div className="form-block">
                  <label htmlFor="holder">Card Holders</label>
                  <input type="text" id="holder" value={nameInput} onChange={nameHandler}/>
               </div>
               <div className="form-block__bottom">
                  <div className="form-block">
                     <label htmlFor="date">Date</label>
                     <input type="date" id="date" value={dateInput} onChange={dateHandler} min="2021-02-18" max="2021-12-31" />
                  </div>
                  <div className="form-block">
                     <label htmlFor="cvv">CVV</label>
                     <input type="number" id="cvv" onFocus={cvvFocus} onBlur={cvvBlur} value={cvvInput} onChange={cvvHandler}/>
                  </div>
               </div>
            </div>
            
            {/* <button onClick={numHandler}>123</button> */}
         </form>
      </>
   );
}

export default Form;