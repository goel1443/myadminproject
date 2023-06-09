<template>
  <div>
    <div id="chart " style="margin-top:30px">
      <apexchart   height="140px" :options="itemchartoptions1" :series="itemseries1"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: "Investlinechart",
props:{

  itemseries1: Array,
  itemchartoptions1:Object
},


  data() {
    return {

    
    //   series1: [
         

    //      {
    //        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    //      }
       
       
    //    ],
    //    chartOptions1:{
    //      chart: {
    //      type: "line",
    //      width: 100,

    //      sparkline: {
    //        enabled: false
    //      },
    //      colors: ["rgb(115, 102, 255)"]
    //    }

       
    //  }
     
     
       
      
    };
  },

 
};
</script>

<style>
</style>