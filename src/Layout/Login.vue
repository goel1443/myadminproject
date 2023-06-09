<template>
  <div >
   <section id="loginpage">
    <div class="container-fluid">
        <div class="row justify-content-center align-items-center  login  ">
         
                   <div class="col-xl-4 col-lg-5   col-sm-6">
                 <div class="loginform ">
                        <form class="gap-3 row">
                            <div class="text-center col-12">
                            <h2>Sign in to account</h2>
                            <p>Enter your email & password to login</p>
                            </div>
                           <div class="col-12">
                                <lablel for="form-email" class="form-label ">Email Address</lablel>
                                <input type="text" class="form-control shadow-none my-2" id="form-email" placeholder="Test@gmail.com" />
                           </div>


                           <div class="col-12">
                                <lablel for="basic-addon2" class="form-label ">Password</lablel>
                               
                                <div class="input-group  rounded-2 my-2">
                                    <input 
                                    :type="!show ? 'password': 'text'"
                                    class="form-control shadow-none border-0 bg-transparent"
                                    placeholder="**********"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    />

                                    <button
                                    class="btn input-group-text show-btn border-0 bg-transparent shadow-none"
                                    id="basic-addon2"
                                    @click.prevent="showpassword"
                                    >
                                    show
                                    </button>
                            </div>
                           </div>
                           <div class="col-12">
                           <div class="form-check d-flex align-items-center">
                                <input class="form-check-input shadow-none border-0" type="checkbox" value="" id="form2Example31"  />
                                <label class="form-check-label ms-2" for="form2Example31"> Remember password </label>
                            </div>

                            <div class="mt-1">
                                <a href="#" class="text-decoration-none shadow-none forget-password" >Forgot password?</a>
                            </div>
                            </div>

                            <div class="col-12">
                                <button class="btn sign-btn w-100 py-2">Sign in</button>
                            </div>

                            <div class="col-12">
                                <div class="mt-2">
                               <h3 class="text-center">Or Sign in with</h3>
                               </div>
                            </div>

                            <div class="col-12">
                                <ul class="d-flex align-items-center justify-content-center gap-3  ">
                                        <li>
                                                    <a href="#"><img src="../assets/login/facebook.svg" /></a>
                                        </li>

                                        <li>
                                            <a href="#"><img src="../assets/login/linkdin.svg" /></a>
                                        </li>

                                        <li>
                                            <a href="#"><img src="../assets/login/twitter.svg" /></a>
                                        </li>


                                        <li>
                                            <a href="#"><img src="../assets/login/instagram.svg" /></a>
                                        </li>
                                </ul>
                            </div>

                            <div class="col-12">
                                <div class="text-center create">
                                    <p>Don't have account? <router-link :to="{name:'Register'}" class="ms-2 text-decoration-none">Create Account</router-link></p>
                                </div>
                            </div>
                        </form>
                 </div>
            </div>
                
          
        </div>
    </div>
   </section>
  </div>
</template>

<script>
export default {
name:'Login',
data(){
    return{

        show:false
    }
},

methods:{

    showpassword(){

        this.show=!this.show
    }
}


}
</script>

<style scoped >
#loginpage{
background:#1d1930;
color:var(--white);
font-family:'Roboto';
white-space:nowrap

}

.login{

    min-height:100vh;
}

.loginform{

    /* box-shadow: 0 0 37px hsla(0,0%,100%,.05); */
    background-color:#151122;
   
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 37px rgba(8,21,66,.05);
    margin: 0 auto;
    color:var(--white);
}

.loginform h2{
    font-size:24px;
}

.loginform p{

  
    color: #b4b2ba;
}

.form-label{

    font-size: 15px;
    color: #b4b2ba;
}

.form-control,
.form-control:focus{

    border-color: #151122;
    background-color:#1d1930;
    color:var(--white);
    padding:10px;
    font-size: 14px;
    font-family:'Roboto'
   
}

.input-group{

    border-color: #151122;
    background-color:#1d1930;
    color:var(--white);
    font-family:'Roboto';
    font-size: 14px;
}

::placeholder{

    color: #b4b2ba;
}


.show-btn{

    color:var(--white);
    font-size:14px;
}


.form-check-input{
    background-color: #1d1930!important;

    width: 24px;
    height: 24px;
    cursor:pointer
}

.form-check-label{
    font-size:14px;
}

.forget-password{

    color: #b4b2ba;
    font-size:15px;
    letter-spacing: 1px;
    
}

.sign-btn{
    background-color: #534686 !important;
    color:var(--white);
    font-size:14px;
}

.loginform h3{

    font-size: 20px;
    font-weight: 500;
    color: #b4b2ba;
    position:relative;
    
    z-index: 1;
}


.loginform h3::before{
    content: "";
    position: absolute;
    width: 25%;
    height: 2px;
    background-color: rgba(83,70,134,.5);
    top: 10px;
    z-index: -1;
    left: 0;
}

.loginform h3::after{
    content: "";
    position: absolute;
    width: 25%;
    height: 2px;
    background-color: rgba(83,70,134,.5);
    top: 10px;
    z-index: -1;
    right: 0;
}

ul{
    list-style-type: none;
    padding-left:0px;
}
ul a{

    text-decoration:none;

}
ul li{
    width:40px;
    height:40px;

    display:flex;
    align-items:center;
    justify-content: center;
    border-radius:50%;
    border: 1px solid rgba(83,70,134,.102);
    background-color: rgba(83,70,134,.05);


}

ul li:hover{
    width:40px;
    height:40px;
    background-color: #534686 !important;
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius:50%;

  

}

ul li img{

    width:20px;
}
ul li:hover img{
    filter: invert(100%);
}

.loginform .create p{

    font-size: 14px;
}

.loginform .create a{

    color: hsla(0,0%,100%,.8);
    
}

@media all and (min-width:320px) and (max-width:767px) {
    .loginform{



padding: 25px;

}
.loginform p{

  
font-size:15px;
}

}
</style>