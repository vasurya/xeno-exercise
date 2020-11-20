import ReactApexChart from "react-apexcharts";
import { useState } from "react";

function SmallDonutGraph() {
  const [graphOptions, setGraphOptions] = useState({
    series: [44, 55, 17],
    options: {
      chart: {
        type: "donut",
      },
      dataLabels:{
        enabled: false
      },
      legend:{
        show: true
      },
      options: {
        chart: {
          sparkline:{
            enabled: true
          },
          width: 400,
          height: 350
        },
        legend: {
          position: "bottom",
        },
      },
    },
  });

  

  return (
    
    <div id="chart">
    <ReactApexChart options={graphOptions.options} series={graphOptions.series} type="donut" />
  </div>
      
  )
}

export default SmallDonutGraph;
