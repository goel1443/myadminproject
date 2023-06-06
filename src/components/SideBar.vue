<template>
<div>
    
    <div class=" sidebarlogo d-flex justify-content-around align-items-center w-100 pt-3">
       <a href="#" class="d-flex align-items-center text-decoration-none"><img src="../assets/image/dash1.svg" style="width:50px"/><h3 class="mb-0 ms-1">Logo</h3></a>

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
                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link navarrow align-middle">
                    <img src="../assets/sidebaricon/speedometer.svg" alt="speedometer" />
                    <span class="ms-1 ">Dashboards</span>
                </a>
                <ul class="collapse  flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                    <li class="w-100">
                        <router-link :to="{name:'Default'}" class="nav-link">
                            -
                            <span >
                                Default
                            </span>
                        </router-link>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            -
                            <span>Item 2</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="nav-link align-middle">
                    <img src="../assets/sidebaricon/table.svg" alt="table" />
                    <span class="ms-1 ">Orders</span>
                </a>
            </li>
            <li class="nav-list">
                <a href="#submenu2" data-bs-toggle="collapse" class="nav-link navarrow align-middle">
                    <img src="../assets/sidebaricon/bootstrap.svg" alt="bootstrap" />
                    <span class="ms-1 ">Bootstrap</span>
                </a>
                <ul class="collapse  flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                    <li class="w-100">
                        <a href="#" class="nav-link">

                            <span >Item 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span >Item 2</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-list">
                <a href="#submenu3" data-bs-toggle="collapse" class="nav-link navarrow align-middle">
                    <img src="../assets/sidebaricon/grid.svg" alt="grid" />
                    <span class="ms-1 ">Products</span>
                </a>
                <ul class="collapse  flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                    <li class="w-100">
                        <a href="#" class="nav-link">
                            <span >Product 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span >Product 2</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span >Product 3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span >Product</span> 4
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="nav-link align-middle">
                    <img src="../assets/sidebaricon/people.svg" alt="people" />
                    <span class="ms-1 ">Customers</span>
                </a>
            </li>
        </ul>

        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start gap-3 mt-3 w-100" id="menu">
            <li class="nav-item listheading py-3 ps-3 rounded-2">
                <h6 class="mb-0">General</h6>
            </li>

            <li class="nav-list">
                <a href="#submenu4" data-bs-toggle="collapse" class="nav-link navarrow align-middle">
                    <img src="../assets/sidebaricon/speedometer.svg" alt="speedometer" />
                    <span class="ms-1 ">Dashboards</span>
                </a>
                <ul class="collapse  flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                    <li class="w-100">
                        <a href="#" class="nav-link">
                            -
                            <span >Item 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            -
                            <span>Item 2</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="nav-link align-middle">
                    <img src="../assets/sidebaricon/table.svg" alt="table" />
                    <span class="ms-1 ">Orders</span>
                </a>
            </li>
            <li class="nav-list">
                <a href="#submenu5" data-bs-toggle="collapse" class="nav-link navarrow align-middle">
                    <img src="../assets/sidebaricon/bootstrap.svg" alt="bootstrap" />
                    <span class="ms-1 ">Bootstrap</span>
                </a>
                <ul class="collapse  flex-column ms-1" id="submenu5" data-bs-parent="#menu">
                    <li class="w-100">
                        <a href="#" class="nav-link">

                            <span >Item 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span >Item 2</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-list">
                <a href="#submenu6" data-bs-toggle="collapse" class="nav-link navarrow align-middle">
                    <img src="../assets/sidebaricon/grid.svg" alt="grid" />
                    <span class="ms-1 ">Products</span>
                </a>
                <ul class="collapse  flex-column ms-1" id="submenu6" data-bs-parent="#menu">
                    <li class="w-100">
                        <a href="#" class="nav-link">
                            <span >Product 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span >Product 2</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span >Product 3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span >Product</span> 4
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="nav-link align-middle">
                    <img src="../assets/sidebaricon/people.svg" alt="people" />
                    <span class="ms-1 ">Customers</span>
                </a>
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

.sidebarlogo h3{

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
