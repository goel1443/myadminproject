<template>
  <div>
    <section>
      <div class="custom-container">
        <div class="dashboard-row">
          <div class="dashboard-navbar ">

            <div class="header fixed-top ">
              <NavBar :sideclose="sideclose"    @opensidebar="callTogglesnavbar" />
            </div>
          </div>
          <div class="dashboard-sidebar" :class="{active:sideclose }" id="sidebarMenu">
           
        
          <SideBar @closesidebar="callTogglesidebar"  />
     
          
          </div>  
          <div class="dashboard-content" :class="{active:sideclose }">
              <slot>
               
              </slot>
          </div>


        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
export default {
  name:'Dashboard',
  components:{
    NavBar,
    SideBar
  },

  data() {
    return {
      sideclose: false,
      infoBar: false
      
    }
  },

  methods: {

    callTogglesidebar(value) {
      if(this.sideclose==false)
      {
      this.sideclose = !value
    
  

      }
      else{

        this.sideclose = value
      }
      
    },

    callTogglesnavbar(value) {
      this.sideclose = value
      document.getElementById("sidebarMenu").style="display:block"
    },




   
  }

}
</script>

<style scoped>
.dashboard-row{
  min-height: 100%;
}


.dashboard-sidebar {
  width: 250px;
  background-color: #1d1930;

  position: fixed;
  top: 0;
  left: 0;
  
 z-index: 999;
  height:100%;
}


.dashboard-content{

  margin-left:250px;
  margin-top:80px;
   min-height: 100vh;
   color:var(--white);
   font-family:'Roboto';
  z-index:-1;
 
}

.dashboard-content.active{

  margin-left:0px;
}

.header {
    background-color: #1d1930;
    height: 80px;
    color: var(--white);
    font-family: "Roboto";
    font-size: 14px;
    z-index: 1;
    
  }

  
  @media all and (min-width:1200px) and (max-width: 1399px) {
    .dashboard-content.active,
.dashboard-content{

margin-left:0px;
}

}

@media all and (min-width:992px) and (max-width: 1199px) {

  #sidebarMenu{

    display:none;
  }

  .dashboard-sidebar{

    transition: all 0.3s ease-in-out;
  margin-left: 0px;
  }

  .dashboard-sidebar.active {
  transition: all 0.3s ease-in-out;
  margin-left: -250px;
}

.dashboard-content.active,
.dashboard-content{

margin-left:0px;
}

}


@media all and (min-width:768px) and (max-width: 991px) {

#sidebarMenu{

  display:none;
}

.dashboard-sidebar{

transition: all 0.3s ease-in-out;
margin-left: 0px;
}
.dashboard-sidebar.active {
  transition: all 0.3s ease-in-out;
  margin-left: -250px;
}

.dashboard-content.active,
.dashboard-content{

margin-left:0px;
}

}


@media all and (min-width:320px) and (max-width:767px) {

#sidebarMenu{

  display:none;
}


.dashboard-sidebar{

transition: all 0.3s ease-in-out;
margin-left: 0px;
}
.dashboard-sidebar.active {
  transition: all 0.3s ease-in-out;
  margin-left: -250px;
}

.dashboard-content.active,
.dashboard-content{

margin-left:0px;
}

}
</style>