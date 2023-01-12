import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "%";
// Переменныйдын баштапкы мааниси % барабар.
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
// Эгер простан келген эн чон значения 0 дон чон болсо анда barFillHeight переменныйына  пропстан келген значенияны эн чон пропстан келген значенияга болуп 100 го кобойтуп округление кылып берди.
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
          // barFillHeight тин коптугуно жараша стиль иштейт
        ></div>
      </div>
      <label className="chart-bar__label">{props.label}</label>
      {/* лейблга пропстан келген айлардын аттары тушот */}
    </div>
  );
};

export default ChartBar;
