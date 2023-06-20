<template>
  <div>
    <section class="section">
      <div class="custom-container">
        <div class="dashboard-row">
          <div class="dashboard-navbar ">

            <div class="header fixed-top ">
              <NavBar :sideclose="sideclose"    @opensidebar="callTogglesnavbar" />
            </div>
          </div>
       
          <div class="dashboard-sidebar" :class="{active:sideclose }"  id="sidebarMenu">
           
  
          <SideBar @closesidebar="callTogglesidebar" />
        
          
          </div> 
       
          <div class="dashboard-content" :class="{active:sideclose }">
              <slot>
               
              </slot>
          </div>

          <div class="dashboard-footer " :class="{active:sideclose }">
             <Footer />
          </div>


        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
export default {
  name:'Dashboard',
  components:{
    NavBar,
    SideBar,
    Footer
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


.section{

  background-color: #1d1930;
}
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
  background-color: #151122;
  transition: 0.5s  ;
  padding:0px 15px 0px 15px;
 
}


.dashboard-footer{

  margin-left:250px;
  transition: 0.5s  ;
  background-color: #1d1930;
  color:var(--white);
   font-family:'Roboto';
  
}


.dashboard-content.active,
.dashboard-footer.active{

  margin-left:0px;
}

.header {
    background-color: #1d1930;
    height: 80px;
    color: var(--white);
    font-family: "Roboto";
    font-size: 14px;
    z-index: 3;
    
  }


@media all and (min-width:992px) and (max-width: 1199px) {

  #sidebarMenu{

    display:none;
  }

  .dashboard-sidebar{

    transition: 0.5s  ;
  margin-left: 0px;
  }

  .dashboard-sidebar.active {
    transition: 0.5s ;
  margin-left: -250px;
}

.dashboard-content.active,
.dashboard-content,
.dashboard-footer
{

margin-left:0px;
}

}


@media all and (min-width:768px) and (max-width: 991px) {

#sidebarMenu{

  display:none;
}

.dashboard-sidebar{

  transition: 0.5s ;
margin-left: 0px;
}
.dashboard-sidebar.active {
  transition: 0.5s ;
  margin-left: -250px;
}

.dashboard-content.active,
.dashboard-content,
.dashboard-footer{

margin-left:0px;
}

}


@media all and (min-width:320px) and (max-width:767px) {

#sidebarMenu{

  display:none;
}


.dashboard-sidebar{

transition: 0.5s ;
margin-left: 0px;
}
.dashboard-sidebar.active {
  transition: 0.5s ;
  margin-left: -250px;
}

.dashboard-content.active,
.dashboard-content,
.dashboard-footer{

margin-left:0px;
}
.dashboard-content{

  padding:0px !important;
}
}
</style>