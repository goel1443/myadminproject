
<template>
    <div>
        <div id="chart">
                     
            <apexchart   type="radialBar" height="350px" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
  </template>
  
  
  
  
  
  <script>
  export default {
    name:'radialwidgetchart',
  data(){
  
      return {
        
        series: [70],
       chartOptions:{
        chart: {
          // height: 250,
          type: 'radialBar',
        },
       
       
      plotOptions: {
          radialBar: {
            hollow: {
             
              margin: 15,
              size: '70%',
              image: '../../assets/widget/chartimage/checkcircle.svg',
              imageWidth: 64,
              imageHeight: 64,
              imageClipped: false,
           
            
            },

            
          dataLabels: {
              name: {
                show: true,
                color: '#fff'
              },
              value: {
                color: "#fff",
                show: true,
                offsetY: 10,
                offsetX: 0,
                fontSize:'25px'
              }
            }
       
          },

       
        },

        // fill: {
        //   type: 'image',
        //   image: {
        //     src: ['../../assets/widget/chartimage/radialimg.jpg'],
           
        //   }
        // },
        stroke: {
          lineCap: 'round'
        },
        labels: [''],

      },

     
        





      }
  }
  }
  </script> 


<style scoped>



</style>

  
  
  
  
