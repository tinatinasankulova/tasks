import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const initData = [
  {
    id: "el1",
    title: "Laptop",
    date: new Date(2025, 6, 23),
    amount: 75.4,
  },
  {
    id: "el2",
    title: "F-51",
    date: new Date(2023, 0, 23),
    amount: 112.5,
  },
  {
    id: "el3",
    title: "New Tv",
    date: new Date(2025, 0, 23),
    amount: 112.5,
  },
  {
    id: "el4",
    title: "Training",
    date: new Date(2024, 0, 23),
    amount: 112.5,
  },
];

function App() {
 const [user, setUser] = useState(initData);


  const saveHandler = (expenseItem) => {
    setUser((prevState) => {
      return[
        expenseItem,
        ...prevState
      ]
    })
  }

  return (
    <div>
      <NewExpense onChange={saveHandler} />
      <Expenses expenses={user} />
    </div>
  );
}

export default App;
