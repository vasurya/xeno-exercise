import ReactApexChart from "react-apexcharts";
import { useState } from "react";

function SmallBarGraph() {
  const [graphOptions, setGraphOptions] = useState({
    series: [
      {
        // name: "PRODUCT A",
        data: [44, 55, 21, 67, 10, 43],
      },
      {
        // name: "PRODUCT B",
        data: [13, 23, 50, 8, 90, 27],
      },
    ],

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    
    options: {
      chart: {
        sparkline:{
          enabled: true
        },
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
      },
      dataLabels:{
        enabled: false
      },
      
      legend:{
        show: false
      },
      plotOptions: {
        bar: {
          dataLabels: { show: false },
          horizontal: false,
          columnWidth: "30%",
          startingShape: "flat",
          endingShape: "flat",
        },
      },

      fill: {
        opacity: 1,
      },
    },
  });
  return (
    <div id="chart">
      <ReactApexChart
        options={graphOptions.options}
        series={graphOptions.series}
        type="bar"
        height={100}
      />
    </div>
  );
}

export default SmallBarGraph;
