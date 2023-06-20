<template>
<div>
    
    <div class=" sidebarlogo d-flex justify-content-around  w-100 pt-3">
       <a href="#" class="d-flex align-items-center text-decoration-none"><img src="/image/dashboards.png" style="width:24px"/><h3 class="mb-0 ms-1">Logo</h3></a>

        <button class="btn text-white border-0 shadow-none" @click="closesidebar()">
            <img src="../assets/icon/sidebartoggle.svg" alt="sidebartoggle" class="sidebaricon" />
        </button>
    </div>
    <div class="sidebar-list px-2  mt-5 overflow-auto "   style="height:553px;" >
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start gap-3 mt-3 w-100" id="menu">
            <li class="nav-item listheading py-3 ps-3 rounded-2">
                <h6 class="mb-0">General</h6>
            </li>

            <li class="nav-list">
                <router-link :to="{name:'Default'}"  class="nav-link mainlink align-middle">
                    <img src="../assets/sidebaricon/home.svg" alt="home" />
                    <span class="ms-1 ">Dashboards</span>
                </router-link>
                
            </li>


            <li class="nav-list">
                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link navarrow align-middle">
                    <img src="../assets/sidebaricon/widget.svg" alt="widget" />
                    <span class="ms-1 ">Widgets</span>
                </a>
                <ul class="collapse  flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                    <li class="w-100">
                        <router-link :to="{name:'General'}" class="nav-link">
                          
                            <span >
                                General
                            </span>
                        </router-link>
                    </li>

                    <li class="w-100">
                        <router-link :to="{name:'Chart'}" class="nav-link">
                       
                            <span >
                                Chart
                            </span>
                        </router-link>
                    </li>
                    
                </ul>
            </li>

            <li class="nav-item listheading py-3 ps-3 rounded-2">
                <h6 class="mb-0">Applications</h6>
            </li>



            <li class="nav-list">
                <a href="#submenu2" data-bs-toggle="collapse" class="nav-link navarrow align-middle">
                    <img src="../assets/sidebaricon/widget.svg" alt="widget" />
                    <span class="ms-1 ">Project</span>
                </a>
                <ul class="collapse  flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                    <li class="w-100">
                        <router-link :to="{name:'Project List'}" class="nav-link">
                       
                            <span>
                                Project List
                            </span>
                        </router-link>
                    </li>

                    <li class="w-100">
                        <router-link :to="{name:'Project Create'}" class="nav-link">
                          
                            <span>
                                Project Create
                            </span>
                        </router-link>
                    </li>

                    
                    
                </ul>
            </li>

            <li class="nav-list">
                <router-link :to="{name:'Kanban Board'}"  class="nav-link mainlink align-middle">
                    <img src="../assets/sidebaricon/home.svg" alt="home" />
                    <span class="ms-1 ">Kanban Board</span>
                </router-link>
                
            </li>

            <li class="nav-list">
                <a href="#submenu3" data-bs-toggle="collapse" class="nav-link navarrow align-middle">
                    <img src="../assets/sidebaricon/widget.svg" alt="widget" />
                    <span class="ms-1 ">Ecommerce</span>
                </a>
                <ul class="collapse  flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                    <li class="w-100">
                        <router-link :to="{name:'Product'}" class="nav-link">
                        
                            <span >
                                Product
                            </span>
                        </router-link>
                    </li>
                    <li class="w-100">
                        <router-link :to="{name:'Product Page'}" class="nav-link">
                           
                            <span >
                                Product Page
                            </span>
                        </router-link>
                    </li>
                    <li class="w-100">
                        <router-link :to="{name:'Product List'}" class="nav-link">
                          
                            <span >
                                Product List
                            </span>
                        </router-link>
                    </li>

                    
                    <li class="w-100">
                        <router-link :to="{name:'Recent Order'}" class="nav-link">
                         
                            <span >
                                Order Details
                            </span>
                        </router-link>
                    </li>

                    <li class="w-100">
                        <router-link :to="{name:'Payment Details'}" class="nav-link">
                           
                            <span >
                                Payment Details
                            </span>
                        </router-link>
                    </li>
                    
                    
                </ul>
            </li>

            <li class="nav-list">
                <a href="#submenu4" data-bs-toggle="collapse" class="nav-link navarrow align-middle">
                    <img src="../assets/sidebaricon/widget.svg" alt="widget" />
                    <span class="ms-1 ">Payment Management</span>
                </a>
                <ul class="collapse  flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                    

                    
                    <li class="w-100">
                        <router-link :to="{name:'List of All Payment'}" class="nav-link">
                            
                            <span >
                                Payment History
                            </span>
                        </router-link>
                    </li>



                    <li class="w-100">
                        <router-link :to="{name:'Payment Manage'}" class="nav-link">
                          
                            <span >
                                Payment Manage
                            </span>
                        </router-link>
                    </li>

                   
                    
                    
                </ul>
            </li>

            <li class="nav-list">
                <router-link :to="{name:'Report'}"  class="nav-link mainlink align-middle">
                    <img src="../assets/sidebaricon/home.svg" alt="home" />
                    <span class="ms-1 ">Reporting</span>
                </router-link>
                
            </li>

            <li class="nav-list">
                <router-link :to="{name:'Promocode Generate'}"  class="nav-link mainlink align-middle">
                    <img src="../assets/sidebaricon/home.svg" alt="home" />
                    <span class="ms-1 ">Promocode Management</span>
                </router-link>
                
            </li>

            <li class="nav-list">
                <router-link :to="{name:'User Information'}"  class="nav-link mainlink align-middle">
                    <img src="../assets/sidebaricon/home.svg" alt="home" />
                    <span class="ms-1 ">User Management</span>
                </router-link>
                
            </li>

            <li class="nav-list">
                <router-link :to="{name:'Plan Management'}"  class="nav-link mainlink align-middle">
                    <img src="../assets/sidebaricon/home.svg" alt="home" />
                    <span class="ms-1 ">Plan Management</span>
                </router-link>
                
            </li>

            <li class="nav-list">
                <router-link :to="{name:'Customer Support'}"  class="nav-link mainlink align-middle">
                    <img src="../assets/sidebaricon/home.svg" alt="home" />
                    <span class="ms-1 ">Customer Support</span>
                </router-link>
                
            </li>
          
        </ul>

     

    </div>





  
    

</div>
</template>

<script>
export default {
    name: "SideBar",
    data() {
        return {
            sideactive: false
           
        };
    },

    methods: {
        closesidebar() {
            this.$emit("closesidebar", this.sideactive);
        },
    
    }
};
</script>

<style scoped>
.sidebarlogo {

    color: var(--white);
}


.nav li img{

    width:18px;
}
.nav-link{
    display:flex;
    align-items:center
}
.sidebarlogo h3{
    font-size:24px;
    color: var(--white);
}
.sidebar-list {
    margin: 0px 15px;
}

.filter {
    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(289deg) brightness(103%) contrast(101%);
    width: 20px;
}

.listheading {
    background-color: #ffffff1a;
    color: var(--white);
}


.mainlink:focus{

    background:#ffffff1a;
}
li {
    width: 100%;
}

span {
    font-size: 14px;
}

.navarrow {
    position: relative;
    color: var(--white);
}

.nav-link {
    color: var(--white);
    padding: 10px;
}

.navarrow::after {
    position: absolute;
    content: "";
    width: 18px;
    height: 18px;
    background-image: url("../assets/sidebaricon/rightangle.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    left: 180px;
    top: 14px;
    transform: rotate(0deg);
    transition: all 0.3s ease-in-out;
}

.navarrow[aria-expanded="true"]::after {
    transform: rotate(90deg);
    transition: all 0.3s ease-in-out;
}

.sidebaricon {
    transform: scaleX(-1);
}

.nav-link:hover,
.nav-link:focus {
    color: var(--white);
}

.nav-list:hover>.nav-link {
    background-color: #ffffff1a;
    border-radius: 10px;
    padding: 10px;
}

.nav-link[aria-expanded="true"] {
    background-color: #ffffff1a;
    border-radius: 10px;
    padding: 10px;
}

.collapse a.nav-link:focus {
    color: #ad98ff !important;

}

.collapse a.nav-link:focus>.collapse .nav-link {
    background-color: #ffffff1a;

}

.sidebar-list::-webkit-scrollbar {
  width:5px;
  
 

}
 
.sidebar-list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  
  
}
 
.sidebar-list::-webkit-scrollbar-thumb {
  background-color: #ffffff1a;
  border-radius:10px;

  
}
.sidebar-list{
    width:230px;
}


</style>
