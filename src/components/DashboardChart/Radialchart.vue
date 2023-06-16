
<template>
    <div>
                    <div id="chart">
                     
                      <apexchart type="radialBar"  height="150px;" :options="chartOptions" :series="series"></apexchart>
                      </div>
    </div>
  </template>
  
  
  
  
  
  <script>
  export default {
    name:'Radialchart',
  data(){
  
      return{
        
        series: [60],

      chartOptions: {
        chart: {
          height: 150,
          type: "radialBar"
        },
        
        plotOptions: {
          radialBar: {
            offsetX: 0,
          offsetY: 20,
            hollow: {
              size: "50%",
              
            },


            dataLabels: {
              value: {
                color: "#fff",
                show: true,
                offsetY: -10,
                offsetX: 11
              }
            }
          },

         
        },
        labels: [""],
        colors: ["#534686"],


        
      },
          
      }
  }
  }
  </script> 


<style >
.apexcharts-tooltip{
  background-color:black !important;

}

</style>

  
  
  
  
