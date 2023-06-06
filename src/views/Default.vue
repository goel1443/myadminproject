<template>
  <div class=" px-2">

  <div class="container-fluid">
    <div class="row page-title align-item-center py-4">
      <div class="col-6">
        <div >
          <h4 class="mb-0">{{this.$route.name}} Dashboard</h4>
        </div>
      </div>


      <div class="col-6">
      
        <ol class="breadcrumb  d-flex justify-content-end">
          <li class="breadcrumb-item"><img src="../assets/default/home.svg" alt="home" /></li>
          <li class="breadcrumb-item">Dashboard</li>
          <li class="breadcrumb-item active" >{{ this.$route.name }}</li>
        </ol>
  
      </div>
    </div>
  </div>



  <div class="container-fluid">
    <div class="row ">
      <div class="col-xl-5 col-lg-5">
        <div class="card  p-2 user-profile mb-lg-0 mb-3 ">
          <div class="card-body   d-flex  text-md-start text-center " style="min-height:228px;">
           
           <div class="profile-data">

              <h3 class="mb-0">Welcome, User</h3>
              <p class="my-2 ">You have completed 40% of your this week! Start a new  goal & improve your result</p>
              <a href="#" class="btn shadow-none mt-2" >Continue <img src="../assets/default/rightarrow.svg"/></a>
            </div>


            <div class="profile-img">
              <img src="../assets/image/userimage.png" class="img-fluid" alt="user"/>
            </div>


     
          </div>

      
        </div>

        
      </div>


      <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="card p-2  yearly-overview  mb-md-0 mb-3">
          <div class="card-header  d-flex justify-content-between align-items-center ">
             <div >
              <h3 class="mb-0">Yearly Overview</h3>
              <p class="my-1 ">Monday</p>
             </div>

             <div >
              <span class="badge bg-secondary py-2 px-3">50/100</span>
             </div>
            
          </div>

          <div class="card-body " style="min-height:150px;">
             
          </div>

      
        </div>

        
      </div>


      <div class="col-xl-3 col-lg-3 col-md-6">
        <div class="card p-2  yearly-overview ">
          <div class="card-header  d-flex justify-content-between align-items-center ">
             <div >
              <h3 class="mb-0">Activity</h3>
         
             </div>

         
            
          </div>

          <div class="card-body p-2 " style="min-height:180px;">
              <div class="table-responsive " style="height:150px;">
            <table class="table align-middle table-borderless text-nowrap">
           
              
              <tbody>
                <tr>
                  <td > 
                
                  <img src="../assets/image/activity.jpg" alt="activity" class=" rounded-1" />
                
             </td>
                  <td>  <div>
                <a href="#" class="text-decoration-none ">Review request jim Smith</a>
                <p class="mb-0">jan 03 19 12:25 PM at Tame</p>
              </div></td>
                  <td>  <div>
                <span class="badge bg-secondary ">14m Ago</span>
              </div></td>
          
                </tr>

                <tr>
                  <th > <div>
                    <div>
                  <img src="../assets/image/activity.jpg" alt="activity" class="img-fluid rounded-1" />
              </div>
              </div></th>
                  <td>  <div>
                <a href="#" class="text-decoration-none ">Review request jim Smith</a>
                <p class="mb-0">jan 03 19 12:25 PM at Tame</p>
              </div></td>
                  <td>  <div>
                <span class="badge bg-secondary ">14m Ago</span>
              </div></td>
          
                </tr>

                <tr>
                  <th > <div>
                    <div>
                  <img src="../assets/image/activity.jpg" alt="activity" class="img-fluid rounded-1" />
              </div>
              </div></th>
                  <td>  <div>
                <a href="#" class="text-decoration-none ">Review request jim Smith</a>
                <p class="mb-0">jan 03 19 12:25 PM at Tame</p>
              </div></td>
                  <td>  <div>
                <span class="badge bg-secondary ">14m Ago</span>
              </div></td>
          
                </tr>

                
              
              </tbody>
            </table>

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

.user-profile{
   background-color: #534686 !important;
    border-radius: 20px;
    
    
    
}


.profile-data{
  max-width:57%;
}
.profile-img{
  position: absolute;
    bottom: -2px;
    right: 0;
}

.profile-img img{
  width:auto;
  height:265px;
}

.user-profile h3{
   font-size:30px;
}

.user-profile p{
  font-size:16px;
  line-height: 28px;
}

 p{
  color: #b4b2ba;
  font-size:14px;


}
.user-profile a,
.user-profile a:focus{
  color:#534686;
  background-color:var(--white);
  font-weight:500;

}

.yearly-overview {
  background-color: #1d1930 !important;
    border: 1px solid #2e2846!important;
    border-radius: 20px;
    
}

h3{
  font-size:20px;
}
.yearly-overview span{

  background-color: #ffffff1a!important;
    color: #fff;
}

a{
  color:var(--white);
  font-size:15px;
}

.card{
  --bs-card-border-width: 0px;
}

::-webkit-scrollbar {
  width:5px;
  height:5px;

 

}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	
  
}
 
::-webkit-scrollbar-thumb {
  background-color: #ffffff1a;
  border-radius:10px;

  
}


@media all and (min-width:320px) and (max-width: 767px) {

.page-title h4{

  font-size:18px;
}

.page-title .breadcrumb-item{

  font-size:14px;
}

.profile-img{

  display:none;
}

h3{
  font-size:20px;
}

.profile-data{
  max-width:100%;
}

}

</style>
