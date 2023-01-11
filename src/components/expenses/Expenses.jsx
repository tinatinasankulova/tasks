// import ExpensesItem from "./ExpensesItem"
import { Card } from "../ui/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023')

  const selectedChangeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

const filteredExpenses = props.expenses.filter(el => {
  return el.date.getFullYear().toString() === filteredYear
})


  return (
    <Card className='expenses'>
      <ExpensesChart expenses={props.expenses}/>
      <ExpensesFilter onChangedYear={selectedChangeYearHandler} selected={filteredYear}/>
      <ExpensesList filteredExpenses={filteredExpenses} filteredYear={filteredYear} expenses={props.expenses}/>
    </Card>
  );
}

export default Expenses