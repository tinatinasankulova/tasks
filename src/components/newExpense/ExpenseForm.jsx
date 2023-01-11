import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
 const [title, setTitle] = useState('')
 const [amount, setAmount] = useState('')
 const [date, setDate] = useState('')

  const titleChangeHandler = (event) => {
      setTitle(event.target.value)
  };

  const amountChangHandler = (event) => {
     setAmount(event.target.value)
  };

  const datechangHandler = (event) => {
     setDate(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();

  if (title.trim().length === 0 && amount.trim().length === 0 && date.trim().length === 0) {
    alert('Please, fill inputs')
  }  else {
  const userData = {
    title,
    amount: Number(amount),
    date: new Date(date),
  }
  props.onGet(userData)
  setTitle('')
  setAmount('')
  setDate('')
} 
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title : </label>
          <input name="title" type="text" onChange={titleChangeHandler} value={title}/>
        </div>
        <div className="new-expense__control">
          <label>Amount : </label>
          <input
            value={amount}
            name="amount"
            type="number"
            min={"1"}
            step="1"
            onChange={amountChangHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date : </label>
          <input
            value={date}
            name="date"
            type="date"
            max={"2026-01-01"}
            min="2023-01-01"
            onChange={datechangHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
