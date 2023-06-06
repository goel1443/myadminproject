<template>
  <div>
    <section>
      <div class="custom-container">
        <div class="dashboard-row">
          <div class="dashboard-navbar fixed-top">

            <div class="header ">
              <NavBar :sideclose="sideclose"    @opensidebar="callTogglesnavbar" />
            </div>
          </div>
          <div class="dashboard-sidebar" :class="{active:sideclose ,hide:infoBar}" >
           
        
          <SideBar @closesidebar="callTogglesidebar"  />
     
          
          </div>  
          <div class="dashboard-content">
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
  z-index: 1;
 
  height:100%;
}


.dashboard-content{

  margin-left:250px;
  margin-top:80px;
   min-height: 900px;
   color:var(--white);
   font-family:'Roboto'
  
}


.header {
    background-color: #1d1930;
    height: 80px;
    color: var(--white);
    font-family: "Roboto";
    font-size: 14px;
    z-index: -1;
    
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

}
</style>