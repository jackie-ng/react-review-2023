import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useRef, useState } from 'react';
function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    // every input element by default has value property => always a STRING even input TYPE is a number => convert
    // always .current for ref created with useRef()
    const enteredAmountNumber = +enteredAmount; //the plus sign will convert string number to number
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* <input type="text" /> */}
      <Input label="Amount"
        ref={amountInputRef}
        input={{
          id: 'amount_' + props.id, // this changed!
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }} />
      <button>+Add</button>
      {!amountIsValid  && <p>Please enter a valid amount (1-5)</p>}
    </form>
   );
}

export default MealItemForm;
