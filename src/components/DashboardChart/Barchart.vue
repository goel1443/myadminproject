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
          data: [30, 70, 40, 50, 70, 50, 90]
        },
        {
          name: "Revenue",
          data: [60, 40, 30, 60, 80, 70, 75]
        },
        {
          name: "Free Cash Flow",
          data: [40, 60, 35, 90, 60, 60, 60]
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 250,
          toolbar:{
          show:false,
         
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          
          
          
        },
        },
       
        },
       
        colors:['rgb(183, 177, 215)','rgb(183, 177, 215)','rgb(255, 255, 255)'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
            borderRadius: 5,
            offsetY:10
          }
        },
        dataLabels: {
          enabled: false,
         
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
          show: false,
          title: {
            text: "$ (thousands)"
          },
          
        },
        fill: {
          opacity: 1
        },
        tooltip: {
         enabled:true,
         theme: true,
      style: {
        fontSize: '12px',
        
        
        
      },
        },

        legend:{
          show:false
        },
        grid:{

          show:false
        }
      },
        }
    },

    
}
</script>

<style >
.apexcharts-tooltip{
  background-color:black !important;

}
</style>