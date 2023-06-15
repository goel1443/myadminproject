<template>
<div>
    <div id="chart">
        <apexchart type="bar" height="380" :options="chartOptions" :series="series"></apexchart>
    </div>
</div>
</template>

  
<script>
export default {
    name: 'lineaveragechart',

    data() {
        return {

            series: [{
                name: "sales",
                data: [{
                    x: '2019/01/01',
                    y: 400
                }, {
                    x: '2019/04/01',
                    y: 430
                }, {
                    x: '2019/07/01',
                    y: 448
                }, {
                    x: '2019/10/01',
                    y: 470
                }, {
                    x: '2020/01/01',
                    y: 540
                }, {
                    x: '2020/04/01',
                    y: 580
                }, {
                    x: '2020/07/01',
                    y: 690
                }, {
                    x: '2020/10/01',
                    y: 690
                }]
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 380,
                    toolbar: {
                        show: true,
                       
                        tools: {
                            download: false,

                            selection: false,
                            zoom: false,
                            zoomin: false,
                            zoomout: false,
                            pan: false,

                        },
                    },
                },
                colors:['#7366ff'],
                title: {
                    text: 'Load Average',
                    align: 'left',
                    style: {

                        color: '#fff'
                    }
                },

                xaxis: {
                    show:true,
                    type: 'category',

                     labels: {
                        show: true,
                        style: {
                            colors: '#fff'
                        }
                    },



    
                },

                yaxis:{
                    show:true,
                    labels: {
                        show: true,
                        style: {
                            colors: '#fff'
                        }
                    },

                },
                legend: {
                    show: false
                },
                grid: {

                    show: false
                }
            },

        }
    }

}
</script>

  
<style >
.apexcharts-tooltip {
    background-color: black !important;

}

.apexcharts-xaxistooltip {

    background-color: black !important;
    color:white !important
}
</style>
