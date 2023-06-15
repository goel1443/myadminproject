<template>
    <div>
      <div id="chart">
                    <apexchart type="bar" height="150px" :options="chartOptions" :series="series"></apexchart>
                  </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'StackedChart',
  
      data(){
          return{
  
            series: [{
            name: 'Marine Sprite',
            data: [20, 30, 40, 80, 50],
            color:'rgb(255, 164, 122)'
          
          }, {
            name: 'Striking Calf',
            data: [80, 70, 60, 20, 50],
            color:'rgb(234, 218, 211)'
            
          }, ],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 150,
              stacked: true,
            
              
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
            }
        },
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 5,
                dataLabels: {
                 enabled:false
                }
              },
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
       
        },
        fill: {
          opacity: 1
        },
    

        legend:{
          show:false
        },
        grid:{

          show:false
        },
        tooltip: {
         enabled:true,
         theme: true,
          style: {
            fontSize: '12px',
            
            
            
          }
        }
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