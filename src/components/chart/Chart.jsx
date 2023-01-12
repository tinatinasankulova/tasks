import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const chartDataPointsValues = props.dataPoints.map((data) => data.value);
  // Переменный пропстан келген массивтин ичинедеги объекттердин значенияларын гана сактады.
  const totalMax = Math.max(...chartDataPointsValues);
  // Переменныйга эн чон значения сакталды, ар бири оз озунчо spread менен чачылды.
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          label={data.label}
          value={data.value}
          maxValue={totalMax}
        />
        // пропстан келген массивтин ар биринин label менен value'си ChartBar компонентине пропс катары берилди жана эн чон значение дагы пропс катары берилди, key - React учун.
      ))}
    </div>
  );
};

export default Chart;
