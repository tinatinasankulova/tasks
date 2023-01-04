import ExpensesItem from "./ExpensesItem"


const Expenses = (props) => {
  
  return (
    <div>
      <ExpensesItem title={props.expenses[0].title}
      date={props.expenses[0].date}
      amount={props.expenses[0].amount}/>
      <ExpensesItem title={props.expenses[1].title}
      date={props.expenses[1].date}
      amount={props.expenses[1].amount}/>
    </div>
  );
}

export default Expenses