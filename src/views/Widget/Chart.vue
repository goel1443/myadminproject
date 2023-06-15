<template>
<div>
    <div class="container-fluid">
        <div class="row page-title align-item-center py-4">
            <div class="col-6">
                <div>
                    <h4 class="mb-0">{{ this.$route.name }} Dashboard</h4>
                </div>
            </div>

            <div class="col-6">
                <ol class="breadcrumb d-flex justify-content-end">
                    <li class="breadcrumb-item">
                        <img src="../../assets/default/home.svg" alt="home" />
                    </li>
                    <li class="breadcrumb-item">Dashboard</li>
                    <li class="breadcrumb-item active">{{ this.$route.name }}</li>
                </ol>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 col-md-12">
                <div class="card o-hidden">
                    <div class="chart-widget-top">
                        <div class="row card-body">
                            <div class="col-7">
                                <h4 style="color: #7366ff">SALE</h4>
                                <span class="num">
                                    90%
                                    <img src="../../assets/widget/chartimage/uparrow.svg" alt="arrow" /></span>
                            </div>
                            <div class="col-5 text-end">
                                <h4 class="num total-value">$ 3654</h4>
                            </div>
                        </div>
                        <div>
                            <Linewidgetchart :chartsaleoptions="chartOptions1" :chartsaleseries="series1" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="card o-hidden">
                    <div class="chart-widget-top">
                        <div class="row card-body">
                            <div class="col-7">
                                <h4 style="color: #f73164">PROJECTS</h4>
                                <span class="num">
                                    30%
                                    <img src="../../assets/widget/chartimage/uparrow.svg" alt="arrow" /></span>
                            </div>
                            <div class="col-5 text-end">
                                <h4 class="num total-value">12569</h4>
                            </div>
                        </div>
                        <div>
                            <Linewidgetchart :chartsaleoptions="chartOptions2" :chartsaleseries="series2" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="card o-hidden">
                    <div class="chart-widget-top">
                        <div class="row card-body">
                            <div class="col-7">
                                <h4 style="color: #67c100">PRODUCTS</h4>
                                <span class="num">
                                    68%
                                    <img src="../../assets/widget/chartimage/uparrow.svg" alt="arrow" /></span>
                            </div>
                            <div class="col-5 text-end">
                                <h4 class="num total-value">93M</h4>
                            </div>
                        </div>
                        <div>
                            <Linewidgetchart :chartsaleoptions="chartOptions3" :chartsaleseries="series3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-7 col-md-12 box-col-7">
                <div class="card o-hidden">
                    <div class="card-header pb-0">
                        <h3>Marketing Expenses</h3>
                    </div>
                    <div class="bar-chart-widget">
                        <div class="bottom-content card-body">
                            <div class="row">
                                <div class="col-12">
                                    <Barwidgetchart />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0"></div>
                </div>
            </div>

            <div class="col-lg-5 col-md-12 box-col-5">
                <div class="card o-hidden">
                    <div class="card-header pb-0">
                        <h3>Total Earning</h3>
                    </div>
                    <div class="bar-chart-widget">
                        <div class="top-content bg-primary"></div>
                        <div class="bottom-content card-body">
                            <div class="row">
                                <div class="col-12">
                                    <radialwidgetchart />
                                </div>
                            </div>

                            <div class="row text-center total-earning">
                                <div class="col-4 b-r-light">
                                    <div>
                                        <span class="font-primary">12% <img src="../../assets/widget/chartimage/uparrow.svg" alt="arrow" /></span>
                                        <span class="text-muted block-bottom">Year</span>
                                        <h2 class="num m-0">
                                            <span class="counter color-bottom">3659</span>M
                                        </h2>
                                    </div>
                                </div>
                                <div class="col-4 b-r-light">
                                    <div>
                                        <span class="font-primary">15% <img src="../../assets/widget/chartimage/uparrow.svg" alt="arrow" /></span>
                                        <span class="text-muted block-bottom">Month</span>
                                        <h2 class="num m-0">
                                            <span class="counter color-bottom">698</span>M
                                        </h2>
                                    </div>
                                </div>
                                <div class="col-4 ">
                                    <div>
                                        <span class="font-primary">34% <img src="../../assets/widget/chartimage/uparrow.svg" alt="arrow" /></span><span class="text-muted block-bottom">Today</span>
                                        <h2 class="num m-0">
                                            <span class="counter color-bottom">9361</span>M
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 box-col-12">
                <div class="donut-chart-widget">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h3>Browser Uses</h3>
                        </div>
                        <div class="card-body">
                            <Candelstickchart />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-5 box-col-5">
                <div class="card">
                    <div class="card-header pb-0">
                        <div class="row">
                            <div class="col-9">
                                <h3>Finance</h3>
                            </div>
                            <div class="col-3 text-end"><i class="vue-feather vue-feather--navigation text-muted" data-name="navigation" data-tags="location,travel" data-type="navigation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-navigation vue-feather__content">
                                        <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                                    </svg></i></div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="chart-container">
                          <lineaveragechart/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 box-col-7">
                <div class="card">
                    <div class="card-header pb-0">
                        <div class="row">
                            <div class="col-9">
                                <h3>Order Status</h3>
                            </div>
                            <div class="col-3 text-end"><i class="vue-feather vue-feather--shopping-bag text-muted" data-name="shopping-bag" data-tags="ecommerce,cart,purchase,store" data-type="shopping-bag"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag vue-feather__content">
                                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                                    </svg></i></div>
                        </div>
                    </div>
                    <div class="card-body">
                      <orderstatuslinechart/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Linewidgetchart from "../../components/widgetchart/Linewidgetchart.vue";
import Barwidgetchart from "../../components/widgetchart/Barwidgetchart.vue";
import radialwidgetchart from "../../components/widgetchart/radialwidgetchart.vue";
import Candelstickchart from "../../components/widgetchart/Candelstickchart.vue";
import lineaveragechart from "../../components/widgetchart/lineaveragechart.vue";
import orderstatuslinechart from "../../components/widgetchart/orderstatuslinechart.vue";
export default {
    name: "Chart",
    components: {
        Linewidgetchart,
        Barwidgetchart,
        radialwidgetchart,
        Candelstickchart,
        lineaveragechart,
        orderstatuslinechart
    },

    data() {
        return {
            series1: [{
                name: "Sale ",

                data: [
                    [1537275600000, 4],
                    [1537281000000, 6],
                    [1537284600000, 8],
                    [1537288200000, 6],
                    [1537291800000, 10],
                    [1537295400000, 12],
                    [1537299000000, 14],
                ],
            }, ],
            chartOptions1: {
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
                    width: 2,
                },
                title: {
                    text: undefined,
                    align: "left",
                },
                grid: {
                    show: false,
                },
                legend: {
                    show: false,
                },
                xaxis: {
                    type: "datetime",
                    show: true,

                    labels: {
                        show: false,
                        datetimeUTC: false,
                    },

                    tooltip: {
                        enabled: false,
                    },

                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yyyy HH:mm",
                    },
                    enabled: true,
                    theme: false,
                    style: {
                        fontSize: "12px",
                    },
                },
                yaxis: {
                    show: false,
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    crosshairs: {
                        show: false,
                    },
                },
            },

            series2: [{
                name: "Projects ",

                data: [
                    [1537275600000, 6],
                    [1537281000000, 2],
                    [1537284600000, 10],
                    [1537288200000, 8],
                    [1537291800000, 4],
                    [1537295400000, 12],
                    [1537299000000, 14],
                ],
            }, ],
            chartOptions2: {
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

                colors: ["rgb(255, 164, 122)"],

                dataLabels: {
                    enabled: false,
                },

                stroke: {
                    curve: "smooth",
                    width: 2,
                },
                title: {
                    text: undefined,
                    align: "left",
                },
                grid: {
                    show: false,
                },
                legend: {
                    show: false,
                },
                xaxis: {
                    type: "datetime",
                    show: true,

                    labels: {
                        show: false,
                        datetimeUTC: false,
                    },

                    tooltip: {
                        enabled: false,
                    },

                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yyyy HH:mm",
                    },
                    enabled: true,
                    theme: false,
                    style: {
                        fontSize: "12px",
                    },
                },
                yaxis: {
                    show: false,
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    crosshairs: {
                        show: false,
                    },
                },
            },

            series3: [{
                name: "Products ",

                data: [
                    [1537275600000, 16],
                    [1537281000000, 14],
                    [1537284600000, 10],
                    [1537288200000, 12],
                    [1537291800000, 10],
                    [1537295400000, 12],
                    [1537299000000, 8],
                ],
            }, ],
            chartOptions3: {
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

                colors: ["rgb(103, 193, 0)"],

                dataLabels: {
                    enabled: false,
                },

                stroke: {
                    curve: "smooth",
                    width: 2,
                },
                title: {
                    text: undefined,
                    align: "left",
                },
                grid: {
                    show: false,
                },
                legend: {
                    show: false,
                },
                xaxis: {
                    type: "datetime",
                    show: true,

                    labels: {
                        show: false,
                        datetimeUTC: false,
                    },

                    tooltip: {
                        enabled: false,
                    },

                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yyyy HH:mm",
                    },
                    enabled: true,
                    theme: false,
                    style: {
                        fontSize: "12px",
                    },
                },
                yaxis: {
                    show: false,
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    crosshairs: {
                        show: false,
                    },
                },
            },
        };
    },
};
</script>

<style scoped>
.card {
    background-color: #1d1930;
    border: 1px solid #2e2846 !important;
    margin-bottom: 30px;
    border: none;
    letter-spacing: 0.5px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(8, 21, 66, 0.05);
}

.card .card-body {
    padding: 25px;
    background-color: transparent;
}

.chart-widget-top h4 {
    font-weight: 600;
    font-size: 16px;

    letter-spacing: 1px;
}

.chart-widget-top .num {
    font-size: 14px;

    color: hsla(0, 0%, 100%, 0.8) !important;
}

.card .card-header {
    padding: 25px;
    border-bottom: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
    background-color: transparent;
}

.card-header h3 {
    color: hsla(0, 0%, 100%, 0.8);
    font-size: 20px;
    font-weight: 500;
}

.total-earning .block-bottom {
    display: block;
    color: hsla(0, 0%, 100%, .6) !important;

}

.total-earning .font-primary {

    color: hsla(0, 0%, 100%, .8) !important;
    font-size: 14px;
}

.total-earning h2 {

    color: hsla(0, 0%, 100%, .8);

    font-weight: 600;

    margin: 0 !important;

    letter-spacing: .5px;

    font-size: 24px;
}

.b-r-light {
    border-right: 1px solid #2e2846 !important;

}

.donu-chart-widget h3 {

    color: hsla(0, 0%, 100%, .8) !important;

    font-size: 20px;
    font-weight: 500;
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .total-earning h2 {

        font-size: 16px;

    }

    .total-earning .font-primary {
        font-size: 12px;
    }

    .total-earning .block-bottom {

        font-size: 15px;
    }

    .card .card-body {

        padding: 20px;
    }

    .card-header h3 {

        font-size: 18px;
    }
}
</style>
