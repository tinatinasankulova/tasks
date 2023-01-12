import ExpensesItem from './ExpensesItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0 && props.filteredYear !== 'All') {
    return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
  }
// Эгер фильтрленген объекттин длинасы нолго барабар жана клик болгон значения All'го барабар эмес болсо "No expenses found" кайрыйт

  if (props.filteredExpenses.length > 0 ) {
    return <ul className='expenses-list'>
      {props.filteredExpenses.map((expense) => (
        <ExpensesItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}
    </ul>
  }

// Эгер фильтрленген объект нолдон чон болсо ExpensesItem ды чакырылып пропс берилип ал жактан рендер болот.

  if (props.filteredYear === 'All') {
    return <ul className='expenses-list'>
      {props.expenses.map(expense => (
     <ExpensesItem 
     key={expense.id}
     title={expense.title}
     amount={expense.amount}
     date={expense.date}
    />
    ))}
    </ul>
  };
  //  Эгер клик болгон значение All'го барабар болсо анда общий массивти рендер кылат. 
};

export default ExpensesList;