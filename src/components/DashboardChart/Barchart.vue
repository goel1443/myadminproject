<template>
  <div>
    <div id="chart3">
                  <apexchart type="bar" height="200px" :options="chartOptions" :series="series"></apexchart>
                </div>
  </div>
</template>

<script>
export default {
    name:'Barchart',

    data(){
        return{

            series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 250
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
      
          xaxis: {
          show: false,
          labels: {
            show: false
          },

          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
      
        },
        yaxis: {
          title: {
            text: "$ (thousands)"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        }
      },
        }
    }
}
</script>

<style>

</style>