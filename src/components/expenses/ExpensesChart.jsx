import Chart from '../chart/Chart'
import './ExpensesChart.css'

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Okt', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0},
  ]
for(const expense of props.expenses) {
  const currentMonth = expense.date.getMonth()
  // Массивтин for of методу аркылуу простан келген массивтеги объекттерди итерация кылып,  currentMonth переменныйга объекттин ичиндеги датаны алып ага getMonth аркылуу нумерация берилди(нумерация 0 дон башталат)
  chartDataPoints[currentMonth].value += expense.amount
  // Массивтин итерация болгондогу ар бир объекттин значениясына объекттин amount'ту кошулду
}

  return <Chart dataPoints={chartDataPoints}/>
// Бул компонента бизге Chart компонентин кайтарат жана ага пропс катары массив берилди
}

export default ExpensesChart;