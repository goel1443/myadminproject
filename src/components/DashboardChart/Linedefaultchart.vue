<template>
<div >
    <div id="chart">
        <apexchart type="area" height="140px;" :options="chartOptions" :series="series"></apexchart>
    </div>
</div>


</template>

<script>
export default {
    name: 'Linedefaultchart',

  
    data() {

        return {
            dashboard: false,
            chart: false,
            series: [{
                name: "Yearly Overview ",
                data: [20, 20, 50, 90, 70, 80, 30, 45, 35, 95, 70, 45, 90]
            }],
            chartOptions: {
                chart: {
                    type: "area",

                    toolbar: {
                        show: false,

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

                colors: ["rgb(83, 70, 134)"],

                dataLabels: {
                    enabled: false,

                },

                stroke: {
                    curve: "smooth",
                    width: 2
                },
                title: {
                    text: undefined,
                    align: "left"
                },
                grid: {
                    show: false
                },
                legend: {
                    show: false
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
                    },
                    tooltip:{
                      enabled:false
                    }
                },
                yaxis: {
                    show: false,
                    labels: {
                        show: false

                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                   
                },
                tooltip: {
                    enabled: true,
                    theme: true,
                    style: {
                        fontSize: '12px',

                    }

                }

            },

        }
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
