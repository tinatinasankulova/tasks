import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {


const saveExpenseHandler = (expenseItem) => {
  const newData = {
    ...expenseItem,
    id: Math.random().toString
  }
 props.onChange(newData)
}
// ExpenseForm'дан келген значенияны алуу учун тузулгон функция, параметрине ExpenseForm'дан келген значение тушот жана значениялар менен id кошулган жаны объект тузулуп, props аркылуу поднятие болуп значениялар App'ка кетет.

  return (
    <div className='new-expense'>
      <ExpenseForm onGet={saveExpenseHandler} />
      {/* ExpenseForm'га props катары значенияларды алуу учун saveExpenseHandler функциясы берилди */}
    </div>
  )
}

export default NewExpense;