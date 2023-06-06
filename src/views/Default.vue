<template>
  <div >

  <div class="container-fluid">
    <div class="row page-title align-item-center pt-3 px-2">
      <div class="col-6">
        <div class="py-3 ">
          <h4 class="mb-0">{{this.$route.name}} Dashboard</h4>
        </div>
      </div>


      <div class="col-6">
        <nav aria-label="breadcrumb " class="py-3 d-flex justify-content-end ">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><img src="../assets/default/home.svg"/></li>
          <li class="breadcrumb-item">Dashboard</li>
          <li class="breadcrumb-item active" >{{ this.$route.name }}</li>
        </ol>
        </nav>
      </div>
    </div>
  </div>



  <div class="container-fluid">
    <div class="row">
      <div class="col-5">
        <div class="card  user-profile bg-transparent">
          <div class="card-body p-4">
            <div>

              <h3 class="mb-0">Welcome, User</h3>
              <p class="my-4 ">You have completed 40% of your this week! Start a new <br/> goal & improve your result</p>
              <a href="#" class="btn shadow-none" >Continue <img src="../assets/default/rightarrow.svg"/></a>
            </div>



              <div class="user-img">
            <img src="../assets/image/userimage.png" class="img-fluid"/>

         </div>
          </div>

      
        </div>

        
      </div>
    </div>
  </div>



  </div>
</template>

<script>


export default {
  name: 'Default',
  
 
}
</script>

<style scoped>


.breadcrumb-item.active{
  color:#b4b2ba;
}

.user-profile .card-body{
  background-color: #534686;
    border-radius: 20px;
    height:300px;
}

.user-profile p{
  color: #b4b2ba;
  line-height: 26px;

}
.user-profile a,
.user-profile a:focus{
  color:#534686;
  background-color:var(--white);
  font-weight:500;

}


.user-profile .user-img{

  position:absolute;
  right:0;
  top:15px;
}
</style>
