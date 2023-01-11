import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

const chartDataPointsValues = props.dataPoints.map(data => data.value)
const totalMax = Math.max(...chartDataPointsValues)


  return (
    <div className='chart'>
      {props.dataPoints.map(data => (
        <ChartBar
         key={data.label}
         label={data.label}
         value={data.value}
         maxValue={totalMax}
        />
      ))}
    </div>
  )
}

export default Chart