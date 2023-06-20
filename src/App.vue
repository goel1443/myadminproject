<template>
 <div>
     <template v-if=" this.$route.meta.auth==true">
      <router-view />
    </template>
  <Dashboard v-else>
    <router-view/>

  </Dashboard>
 

 </div>

</template>
<script>
import Dashboard from './Layout/Dashboard.vue';
export default {
  name:'App',
  components:{
    Dashboard
  }
}
</script>

<style>



:root{

 --white:#ffffff;
 --black:#000000;
}

.swiper-button-next:after,  .swiper-button-prev:after {
    display:none
}



.page-link {
  z-index: 2 !important;
  color: #ffffffcc !important;
  background-color: #534686 !important;
  box-shadow: none !important;

  border-color: #534686 !important;
  font-size: 15px !important;
 
  font-weight:600;
}

.page-item.active .page-link {
  z-index: 2 !important;
  color: #534686 !important;
  box-shadow: none !important;
  background-color: #ffffffcc !important;
  border-color: #ffffffcc !important;
 
}

.pagination_box ul li {
  border: none !important;
  margin-bottom: 20px !important;
  margin-bottom: 0 !important;
  color: white;
}

.page-item:first-child .page-link,
.page-item:last-child .page-link {
  box-shadow: none !important;
}
.VuePagination__pagination {
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 15px !important;
 
  gap: 4px;
}
.VuePagination nav
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.VuePagination nav p {
  color:#ffffffcc;
 
  font-size: 15px;
  margin-bottom:0;
}

.VuePagination ul{
 

  margin-bottom:0;
}






@font-face {
  font-family: "Roboto";
  src: url("@/assets/font/Roboto-Black.ttf");
  font-weight: 900;
}
@font-face {
  font-family: "Roboto";
  src: url("@/assets/font/Roboto-Bold.ttf");
  font-weight: 700;
}
@font-face {
  font-family: "Roboto";
  src: url("@/assets/font/Roboto-Light.ttf");
  font-weight: 300;
}
@font-face {
  font-family: "Roboto";
  src: url("@/assets/font/Roboto-Medium.ttf");
  font-weight: 500;
}
@font-face {
  font-family: "Roboto";
  src: url("@/assets/font/Roboto-Regular.ttf");
  font-weight: 400;
}
@font-face {
  font-family: "Roboto";
  src: url("@/assets/font/Roboto-Thin.ttf");
  font-weight: 100;
}




</style>
