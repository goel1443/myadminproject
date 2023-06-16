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
