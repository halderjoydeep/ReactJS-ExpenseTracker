import "./ChartBar.css";

function ChartBar(props) {
  const height =
    Math.round((props.chartItem.value / props.maxValue) * 100) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div style={{ height: height }} className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label">{props.chartItem.label}</div>
    </div>
  );
}

export default ChartBar;
