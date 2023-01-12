
import { Card } from "../ui/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023')
// Состоянияны рендер кылуу учун useState функциясы чакырылды жана биринчи аргументке(баштапкы абал) "2023" берилди.
  const selectedChangeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
// ExpensesFilter'ден значенияларды алуу учун функция тузулду, ал значениялар баштапкы значенияга filteredYear'ге setFilteredYear аркылуу барып тушту 
const filteredExpenses = props.expenses.filter(el => {
  return el.date.getFullYear().toString() === filteredYear
})
//filteredExpenses переменныйга пропс аркылуу келген массивти фильтр кылып только жылдары (стринг форматында)  filteredYear'ге (select'тин ичиндеги option'дардагы кайсыл бир клик болгон значение) барабарлар гана берилди.

  return (
    <Card className='expenses'>
      <ExpensesChart expenses={props.expenses}/>
      {/* ExpensesChart'ка простан келген массивтер пропс катары берилди */}
      <ExpensesFilter onChangedYear={selectedChangeYearHandler} selected={filteredYear}/>
      {/* ExpensesFilter'ге пропс катары значение алуу учун тузулгон функция берилди жана алынган значения кайра озуно пропс катары берилди (двухсторонная связка кылуу учун) */}
      <ExpensesList filteredExpenses={filteredExpenses} filteredYear={filteredYear} expenses={props.expenses}/>
      {/* ExpensesList'ге пропс катары фильтрленген значениялар, клик болгон значениялар жана пропстан келген массив берилди */}
    </Card>
  );
}

export default Expenses