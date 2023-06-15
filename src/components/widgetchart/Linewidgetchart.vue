<template>
 
    
      <div >
        <div id="chart3">
            <apexchart  height="140px;" :options="chartsaleoptions" :series="chartsaleseries"></apexchart>
        </div>
    </div>
    
    </template>
    
    <script>
    export default {
        name: 'Linewidgetchart',
    
        props: {
            chartsaleoptions: Object,
            chartsaleseries: Array
    
        },
    
     
    }
    </script>
    
    <style>
    .apexcharts-tooltip {
        background-color: black !important;
    
    }
    
    .apexcharts-xaxistooltip {
    
        background-color: black !important;
        color: white
    }
    </style>
    