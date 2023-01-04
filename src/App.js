
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expense = [
    {
      id: "el1",
      title: "Laptop",
      date: new Date(2023, 6, 23),
      amount: 75.4,
    },
    {
      id: "el2",
      title: "F-51",
      date: new Date(2023, 0, 23),
      amount: 112.5,
    },
  ];
  return (
    <div className="App">
      <Expenses expenses={expense}/>
      
    </div>
  );
}

export default App;
