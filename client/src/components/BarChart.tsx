import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ chartData }) => {
  const data = {
    labels: chartData.map((data) => data.date),
    datasets: [
      {
        data: chartData.map((data) => data.count),
        backgroundColor: ["rgba(102,129,220,0.4)"],
        borderColor: ["rgb(102,129,220)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgba(128,128,128,.2)",
        },
      },
      y: {
        grid: {
          color: "rgba(128,128,128,.2)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Monthly Jobs",
        font: {
          size: 20,
        },
      },
    },
  };
  //
  return <Bar options={options} data={data} />;
};

export default BarChart;
