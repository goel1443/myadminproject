<template>
  <div>
    <div id="chart " >
      <apexchart  height="130px" :options="itemchartoptions1" :series="itemseries1"></apexchart>
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

data(){
  return{

    abc:'fghrge'
  }
}


 
};
</script>

<style>

.apexcharts-tooltip{
  background-color:black !important;

}
</style>