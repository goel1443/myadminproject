<template>
<div>

   
       
           
               <div class=" d-flex justify-content-between navbar-content   align-items-center">
            
                    <ul class="  d-flex searchlistcontent align-items-center ps-1 mb-0 ">
                        <li >

                            <button class="btn text-white border-0 shadow-none" @click="opensidebar()">
                                <img src="../assets/icon/sidebartoggle.svg" alt="sidebartoggle" class="sidebaricon" />
                            </button>

                        </li>
                        <li class=" searchlist text-light"  :class="{active:sideclose}"> 
                            <div class="input-group search  rounded-2 p-1">
                                <input type="text" class="form-control shadow-none border-0 bg-transparent " placeholder="Search Here................" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                                <button class=" btn input-group-text border-0 bg-transparent shadow-none" id="basic-addon2"><img src="../assets/icon/search.svg" alt="search" /></button>

                            </div>

                            
                            
                            
                        </li>

                        
                        <li class="nav-item   searchbtn onhover" >
                            <a class="nav-link" href="#"  >

                                
                                <button v-on:click="searchbardisplay" class=" btn input-group-text border-0 bg-transparent shadow-none" id="basic-addon3"><img src="../assets/icon/search.svg" alt="search" class="filter" /></button>
                           
                                <input  type="text" class="form-control shadow-none " :class="{open:searchactive}"  placeholder="Search Here................"  aria-describedby="basic-addon3"/>
                                   
                               
                                

                            </a>


                                   
                         
                                      
                              
                               
                            
                        </li>
                    </ul>
           

             
               
                    <ul class="  navicon d-flex justify-content-end iconcontent align-items-center mb-0 ">
                        <li class="nav-item dropdown country">
                            <a class="nav-link text-light bg-transparent dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="../assets/flagicon/united-states.png" style="width:24px"/><span class="ms-1">EN</span></a>
                            <ul class="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item " href="#"><img src="../assets/flagicon/united-states.png" style="width:24px"/><span >English (US)</span></a>
                                </li>
                               
                                <li>
                                    <a class="dropdown-item " href="#"><img src="../assets/flagicon/germany.png" style="width:24px"/><span >Deutsch</span></a>
                                </li>
                              
                                <li>
                                    <a class="dropdown-item " href="#"><img src="../assets/flagicon/spain.png" style="width:24px"/><span >Español</span></a>
                                </li>
                                <li>
                                    <a class="dropdown-item " href="#"><img src="../assets/flagicon/france.png" style="width:24px"/><span >Français</span></a>
                                </li>
                                <li>
                                    <a class="dropdown-item " href="#"><img src="../assets/flagicon/brazil.png" style="width:24px"/><span >Português (BR)</span></a>
                                </li>
                                <li>
                                    <a class="dropdown-item " href="#"><img src="../assets/flagicon/united-states.png" style="width:24px"/><span >简体中文</span></a>
                                </li>
                                <li>
                                    <a class="dropdown-item " href="#"><img src="../assets/flagicon/united-states.png" style="width:24px"/><span>لعربية (AE)</span></a>
                                </li>
                               
                            </ul>
                        </li>

                        <li class="nav-item onhover">
                            <a class="nav-link" href="#">
                                <img src="../assets/icon/moon.svg" alt="moon" class="filter" />
                            </a>
                        </li>

                        <li class="nav-item onhover">
                            <a class="nav-link star" href="#">
                                <img src="../assets/icon/star.svg" alt="star" class="filter" />
                            </a>
                        </li>

                        <li class="nav-item onhover">
                            <a class="nav-link bell" href="#">
                                <img src="../assets/icon/bell.svg" alt="bell" class="filter" />
                                <span class="badge bg-primary rounded-circle bellspan">1</span>
                            </a>
                        </li>
                        <li class="nav-item onhover">
                            <a class="nav-link" href="#">
                                <img src="../assets/icon/message.svg" alt="message" class="filter" />
                            </a>
                        </li>
                        <li class="nav-item onhover screen">
                            <a class="nav-link" href="#">
                                <img src="../assets/icon/fullscreen.svg" alt="fullscreen" class="filter" />
                            </a>
                        </li>

                        <li class="nav-item">
                            <div class="d-flex align-items-center text-nowrap me-lg-0 me-2">
                                <img src="../assets/image/profile.png" alt="profile" class="img-fluid rounded-circle profileimg" />
                                <div class="mx-3" id="admin-data">
                                    <h6 class="mb-0">Name</h6>
                                    <p class="mb-0">
                                        Admin
                                        <img src="../assets/icon/down.svg" alt="down" />
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
            
                </div>
               
            
       
    </div>

</template>

<script>
export default {
    name: "NavBar",
    props: ['sideclose'],
    data(){

        return{
            sideopen:false,
            searchactive:false
        }
    },

    methods:{

        opensidebar(){

            this.$emit('opensidebar',this.sideopen)
        },

        searchbardisplay(){
         
          this.searchactive=!this.searchactive
          
   
        }

    }
    
};
</script>

<style scoped>

li{

    list-style-type: none;
}



.navbar-content,ul {
    height:80px;

}

.filter {

    width: 18px;
}

.search {
    background-color: #151122;

    color: #828184;
   
    width:100%;
}


#admin-data h6{
font-size:14px;
}

#admin-data p{
font-size:12px;
}


.bell {
    position: relative;
}


.searchlist.active{
    margin-left:25px;
}

.bell .badge {
    position: absolute;
    top: 4px;
    left: 17px;
    padding: 2px 4px;
}

.bell img,
.star img {
    animation: tada 4s alternate ease-in-out infinite;
}



@keyframes tada {
    0% {
        transform: scale(1);
    }

    10%,
    20% {
        transform: scale(0.9) rotate(-3deg);
    }

    30%,
    50%,
    70%,
    90% {
        transform: scale(1.1) rotate(3deg);
    }

    40%,
    60%,
    80% {
        transform: scale(1.1) rotate(-3deg);
    }

    100% {
        transform: scale(1) rotate(0);
    }
}

.navicon {
    gap: 20px;
}

.nav-link {
    color: var(--white);
    background-color: #151122;
    width: 36px;
    height: 36px;
    display: flex;

    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

::placeholder {
    color: #b4b2ba !important;
    font-size: 14px;
}

.searchlist {
    transition: all 0.3s ease-in-out;
    margin-left:225px;
    
}

.profileimg {
    min-width: 40px;
    height: 40px;
    border: 2px solid #7367a2;
}

.search {
    width: 570px;
}

.navbar-toggler-icon {
    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(289deg) brightness(103%) contrast(101%);
    width: 24px;
}



.onhover:hover>.nav-link {
    background-color: #7367a2;

    border-radius: 50%;
}



.form-control {
    color: #b4b2ba !important;
    font-size: 14px;

}

.sidebaricon {

    transform: scaleX(-1);

}

.searchbtn{

    display:none;
}

.dropdown-toggle::after{
    display:none;
}


.country .dropdown-menu{
    background-color: #151122;
   padding:0px;
}

.country .dropdown-item{

background-color: #1d1930;
    color:#ffffffcc;
    border-bottom:1px solid #151122;
    font-size:14px;
    display:flex;
    align-items: center;
    padding:8px 20px;
}

.country .dropdown-item:hover{

    color:var(--white)
}

.country .dropdown-item span{
    margin-left:10px;
}

@media all and (min-width:1200px) and (max-width: 1399px) {

    .searchlist{
    margin-left:0px;
  }
  .searchlist.active{
    margin-left:0px;
  }

}

@media all and (min-width:992px) and (max-width: 1199px) {
  .search {
   width: 320px;
  }
  .searchlist{
    margin-left:0px;
  }

  .searchlist.active{
    margin-left:0px;
  }
}
@media all and (min-width: 768px) and (max-width: 991px) {
  .search {
    width: 225px;
  }

  #admin-data{
    display:none;
  }
  .searchlist{
    margin-left:0px;
  }

  .searchlist.active{
    margin-left:0px;
  }

} 
@media all and (min-width: 320px) and (max-width: 767px) {
  .searchlist,.country ,.screen{
    display:none ;
  }
  .searchbtn{
position:relative;
display:block;
}
  #admin-data{
    display:none;
  }
  .filter{
    width:18px;
  }
  .nav-link{
    width:35px;
    height:35px;
  }

  .navicon {
    gap: 4px;
}

.searchlist{
    margin-left:0px;
  }

.profileimg{
    min-width:35px;
    height:35px;
}

.searchlistcontent{

    width:20%;
}

/* .iconcontent{
    width:80%;
} */

.form-control{

    position: absolute;
    top: 100%;
    left: 10px;
    width: 170px;
    padding: 7px 15px;
    background-color: black;
    border: 1px solid #534686;
    border-radius: 30px!important;
    visibility: visible;
    opacity: 1;
    transform: translateY(-35px) scaleY(0);
    transition: all .3s linear;
}

.form-control.open{

    transform: translateY(0) scaleY(1);
    opacity: 1;
    visibility: visible;
    z-index: 2;
    background-color: black;
}




} 
</style>
