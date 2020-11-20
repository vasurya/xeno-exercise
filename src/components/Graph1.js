import apexcharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

function Graph1(){
   const [graphoptions,setGraphOptions] = useState({
        series: [{
            name: 'Author',
            data: [44, 55, 57, 56, 61, 58, 63]
          }, {
            name: 'Customer',
            data: [76, 85, 101, 98, 87, 105, 91]
          }, ],
          legend:{
              show:true
          },
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '30%',
                startingShape: 'flat',
                endingShape: 'flat'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 Aug'],
            },
            yaxis: {
              title: {
                // text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
    })
    return(
        <div id="chart">
        <ReactApexChart options={graphoptions.options} series={graphoptions.series} type="bar" height={350} />
      </div>
          
    )
}

export default Graph1;