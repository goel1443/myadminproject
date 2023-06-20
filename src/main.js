import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import VueApexCharts from "vue3-apexcharts";
import Vue3Autocounter from 'vue3-autocounter';
import DropZone from 'dropzone-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'v-pagination-3';
createApp(App).use(store).use(router).component('pagination', Pagination).use(VueApexCharts).component('vue3-autocounter', Vue3Autocounter).use(DropZone).mount('#app')
