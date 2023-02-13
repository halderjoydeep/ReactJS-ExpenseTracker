import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const chartItems = months.map((month) => ({ label: month, value: 0 }));

  props.items.forEach((item) => {
    chartItems[item.date.getMonth()].value += Number(item.amount);
  });

  const values = chartItems.map((chartItem) => chartItem.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {chartItems.map((chartItem) => (
        <ChartBar
          key={chartItem.label}
          chartItem={chartItem}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
}

export default Chart;
