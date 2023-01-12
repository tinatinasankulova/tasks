import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
 const [title, setTitle] = useState('')
 const [amount, setAmount] = useState('')
 const [date, setDate] = useState('')
 // Состоянияларды рендер кылуучу функциялар чакырылды, баштапкы абалдары пустой.

  const titleChangeHandler = (event) => {
      setTitle(event.target.value)
  };
 // Обработчик ичинен баштапкы абалды озгортуучу функция чакырып инпуттун значениясын алып берди.Бул биринчи инпутка илинген. 

  const amountChangHandler = (event) => {
     setAmount(event.target.value)
  };
  //  // Обработчик ичинен баштапкы абалды озгортуучу функция чакырып инпуттун значениясын алып берди.Бул экинчи инпутка илинген. 


  const datechangHandler = (event) => {
     setDate(event.target.value)
  };
//  // Обработчик ичинен баштапкы абалды озгортуучу функция чакырып инпуттун значениясын алып берди.Бул учунчу инпутка илинген. 


  const submitHandler = (event) => {
    event.preventDefault();
// form'га илинген обработчик. По default'у сразу иштеп кетет ошондуктан preventDefault() чакырылды
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
// Эгерде инпуттар бош болсо alert чыгат, бош болбосо значениялар userData объектисине топтолуп, props'тан келген функция аркылуу поднятие болду. Поднятие болгон сон инпуттардун ичи пустой строкага барабарланды.  
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
