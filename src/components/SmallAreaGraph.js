import ReactApexChart from "react-apexcharts";
import { useState } from "react";

function SmallAreaGraph() {
  const [graphOptions, setGraphOptions] = useState({
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51]
      }],
      options: {
        chart: {
          sparkline:{
            enabled: true
          },
          height: 100,
          type: 'area'
        },
        dataLabels:{
          enabled: false
        },
        legend:{
          show: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    
    
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={graphOptions.options}
        series={graphOptions.series}
        type="area"
        height={100}
      />
    </div>
  );
}

export default SmallAreaGraph;
