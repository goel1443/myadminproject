<template>
    <div>
      <div id="chart">
            <apexchart type="bar" height="390px;"  :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'Barwidgetchart',
  
      data(){
          return{
  
            series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
       chartOptions:{
        chart: {
          type: 'bar',
          height: 350,
        
          toolbar:{
          show:true,
          style:{
            background:'#000'
          },

         
        tools: {
          download: true,
          
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          
          
          
        },
        },
        },

        colors:["rgb(83, 70, 134)","rgb(255, 164, 122)","rgb(103, 193, 0)"],
     
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '65%',
            endingShape: 'rounded'
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
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          labels:{
            show:true,
            style:{
              colors:'#fff'
            }
            
          },

          axisBorder: {
          show: false,
     
      },

      axisTicks: {
          show: false,
      }
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          },

          labels:{
            show:true,
            style:{
              colors:'#fff'
            }
            
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
          

        },
        legend:{
          show:false
        },
        grid:{
          show:false
        }
       }
          }
      },
  
      
  }
  </script>
  
  <style >
  .apexcharts-tooltip{
    background-color:black !important;
  
  }

  .apexcharts-menu{

background-color:#000 !important;
  }
  </style>