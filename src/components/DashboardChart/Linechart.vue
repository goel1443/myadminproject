
<template>
  <div>
    <div id="chart">
        <apexchart type="area"  height="140px;" :options="chartOptions.chart" :series="series"></apexchart>
    </div>
  </div>
</template>





<script>
export default {
    name:'Linechart',
    
data(){

    return{
        series: [
        {
          name: "Series A",
          data: [20, 20, 50, 90, 70, 80, 30, 45, 35, 95, 70, 45, 90]
        }
      ],
    chartOptions:{
      chart: {

        colors: ["#534686"],
        
        
        type: "area",

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
       
      
        dataLabels: {
          enabled: false,
        
          
          
        },


        stroke: {
          curve: "smooth",
          width: 2
        },
        title: {
          text: undefined,
          align: "left"
        },
        grid: {
          show: false
        },
        legend: {
          show: false
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
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            show: false
          },
          tooltip: {
            enabled: false
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