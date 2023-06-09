
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
          height: 350,
          type: "radialBar"
        },
        
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%"
            },

            dataLabels: {
              value: {
                color: "#fff",
                show: true,
                offsetY: -10,
                offsetX: 10
              }
            }
          }
        },
        labels: [""],
        colors: ["#534686"]
      },
          
      }
  }
  }
  </script> 




  
  
  
  
