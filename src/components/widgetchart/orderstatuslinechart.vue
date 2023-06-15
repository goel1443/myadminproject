<template>
<div>
    <div id="chart">
        <apexchart type="line" height="380" :options="chartOptions" :series="series"></apexchart>
    </div>
</div>
</template>

    
<script>
export default {
    name: 'orderstatuslinechart',

    data() {
        return {

            series: [
            {
                    name: "Running",
                    data: [12, 11, 14, 18, 17, 13, 13],
                   
                    
                },
                {
                    name: "Waiting",
                    data: [28, 29, 33, 36, 32, 32, 33]
                },
               
            ],

            chartOptions: {

                chart: {
                    height: 350,
                    type: 'line',
                    
                    toolbar: {
                        show: false
                    }
                },
              
                colors: [ 'rgb(83, 70, 134)','rgb(255, 164, 122)'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Processes',
                    align: 'left',
                    style:{

                        color:'#fff'
                    }

                },
                grid: {
                   show:false
                },
             
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    title: {
                        text: 'Month',
                        style:{
                            color:'#fff'
                        }
                    },
                    labels:{

                        show:true,
                        style:{

                            colors:'#fff'
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: 'Temperature',
                        style:{
                            color:'#fff'
                        }
                    },
                    min: 5,
                    max: 40,
                    labels:{

                    show:true,
                    style:{

                        colors:'#fff'
                    }
}
                },
                legend: {
                    show:true,
                    position: 'top',
                    horizontalAlign: 'left',
                    floating: true,
                    offsetY:    -35,
                    offsetX: 100,
                    labels:{
                        colors:'#fff'
                    },
                   
                }
            }
        }
    }
    }
</script>

    
<style>
.apexcharts-tooltip {
    background-color: black !important;

}

.apexcharts-xaxistooltip {

    background-color: black !important;
    color: white !important
}
</style>
