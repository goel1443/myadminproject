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
              <img src="/image/userimage.png" class="img-fluid" alt="user"/>
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

      <div class="card-body" id="chart" style="height:157px">
      
        <apexchart type="area" height="150" :options="chartOptions1" :series="series1"></apexchart>
      
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
                
                  <img src="/image/activity.jpg" alt="activity" class=" rounded-1" />
                
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
                  <img src="/image/activity.jpg" alt="activity" class="img-fluid rounded-1" />
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
                  <img src="/image/activity.jpg" alt="activity" class="img-fluid rounded-1" />
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

      
        <div class="col-xl-5 col-lg-5">
        <div class="card   transaction bg-transparent  mb-lg-0 mb-3 mt-4 ">
         <div class="card-header p-3 ">
             <h3 class="mb-0">Transaction</h3>
         </div>


          <div class="card-body p-0">
            <div class="table-responsive">
            <table class="table table-borderless text-nowrap align-middle">
                    <thead>
                      <tr>
                        <th>Item Name	</th>
                        <th>Date and Time		</th>
                        <th>Income	</th>
                        <th>Progress	</th>
                        <th>Status	</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                       
                        <td>
                          <div class="d-flex align-items-center">
                          <div class="itemname d-flex justify-content-center align-items-center" >
                            <img src="../assets/default/transaction/shoes.png" class="img-fluid" alt="shoes"/>
                          
                          </div>
                          <div class="ms-3 text-start">
                            <a href="#" class="text-decoration-none ">Nike Sports NK</a>
                            <p class="mb-0 ">Free delivery</p>
                          </div>
                        </div></td>
                        <td> <div class="ms-3 text-start">
                            <a href="#" class="text-decoration-none ">12 May 2023</a>
                            <p class="mb-0 ">In 6 Days</p>
                          </div></td>
                        <td><h5 class="mb-0">+$456</h5></td>

                        <td class="text-center progres-status ">
                          <p class="mb-0">65%</p>
                          <div class="progress  " style="height:5px; width:70%; background-color: #2e2846;">
                          <div class="progress-bar " role="progressbar" style="width: 65%;    background-color: #67c100;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </td>
                        <td><h5 class="mb-0">Paypal</h5></td>
                      </tr>


                      <tr>
                       
                       <td>
                         <div class="d-flex align-items-center">
                         <div class="itemname d-flex justify-content-center align-items-center" >
                           <img src="../assets/default/transaction/womenbag.png" class="img-fluid" alt="bag"/>
                         
                         </div>
                         <div class="ms-3 text-start">
                           <a href="#" class="text-decoration-none ">Women Bag</a>
                           <p class="mb-0 ">₹83.65 delivery</p>
                         </div>
                       </div></td>
                       <td> <div class="ms-3 text-start">
                           <a href="#" class="text-decoration-none ">06 May 2023</a>
                           <p class="mb-0 ">In 5 Day</p>
                         </div></td>
                       <td><h5 class="mb-0">-$80</h5></td>

                       <td class="text-center progres-status ">
                         <p class="mb-0">45%</p>
                         <div class="progress  " style="height:5px; width:70%; background-color: #2e2846;">
                         <div class="progress-bar " role="progressbar" style="width: 45%;    background-color: #e56809;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                       </div>
                       </td>
                       <td><h5 class="mb-0">Credit Card</h5></td>
                     </tr>


                     <tr>
                       
                       <td>
                         <div class="d-flex align-items-center">
                         <div class="itemname d-flex justify-content-center align-items-center" >
                           <img src="../assets/default/transaction/sunglass.png" class="img-fluid" alt="glass"/>
                         
                         </div>
                         <div class="ms-3 text-start">
                           <a href="#" class="text-decoration-none ">Sunglasses</a>
                           <p class="mb-0 ">Free delivery</p>
                         </div>
                       </div></td>
                       <td> <div class="ms-3 text-start">
                           <a href="#" class="text-decoration-none ">28 Sep 2023</a>
                           <p class="mb-0 ">in 4 Months</p>
                         </div></td>
                       <td><h5 class="mb-0">-$4,232</h5></td>

                       <td class="text-center progres-status ">
                         <p class="mb-0">85%</p>
                         <div class="progress  " style="height:5px; width:70%; background-color: #2e2846;">
                         <div class="progress-bar " role="progressbar" style="width: 85%;    background-color: #dc0808;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                       </div>
                       </td>
                       <td><h5 class="mb-0">Paypal</h5></td>
                     </tr>



                     <tr>
                       
                       <td>
                         <div class="d-flex align-items-center">
                         <div class="itemname d-flex justify-content-center align-items-center" >
                           <img src="../assets/default/transaction/tshirt.png" class="img-fluid" alt="shirt"/>
                         
                         </div>
                         <div class="ms-3 text-start">
                           <a href="#" class="text-decoration-none ">Cotton T-shirt</a>
                           <p class="mb-0 ">₹283.65 delivery</p>
                         </div>
                       </div></td>
                       <td> <div class="ms-3 text-start">
                           <a href="#" class="text-decoration-none ">22 Mar 2023</a>
                           <p class="mb-0 ">In 8 Days</p>
                         </div></td>
                       <td><h5 class="mb-0">-$645</h5></td>

                       <td class="text-center progres-status ">
                         <p class="mb-0">75%</p>
                         <div class="progress  " style="height:5px; width:70%; background-color: #2e2846;">
                         <div class="progress-bar " role="progressbar" style="width: 75%;    background-color: #3ebcb9;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                       </div>
                       </td>
                       <td><h5 class="mb-0">Credit Card</h5></td>
                     </tr>


                     
                   
                    </tbody>
                  </table>
                  </div>
          </div>
      
        </div>

        
      </div>

      <div class="col-xl-3 col-lg-3 ">
        <div class="row  text-nowrap">
          <div class="col-xl-12 col-sm-6 col-lg-12">
            <div class="card value-chart  mt-4" style="min-height:114px;">
              <div class="card-body p-4">

                <div class="row align-items-center">
                <div class="col-6">
                  <div class="progress-bar">
                  <progress value="60" min="0" max="100" style="visibility:hidden;height:0;width:0;">60%</progress>
                </div>
                </div>
                <div class="col-6">
                  <p>Our Sale Value</p>
                  <h2>$7454.25</h2>

                 
                </div>
                </div>

                <span class="badge ">New</span>

              </div>
            </div>
          </div>
          <div class="col-xl-12 col-sm-6 col-lg-12">
               

            <div class="card  stock-value mt-4">
              <div class="card-body p-4" style="min-height:114px;">

                <div class="row align-items-center stock-progress">
                <div class="col-6">
                  <div class="stock-vertical">
                  <div class="progress"  >
                  <div class="progress-bar " role="progressbar" style=" width:20% " aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div class="progress" >
                  <div class="progress-bar " role="progressbar" style=" width:30% " aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div class="progress" >
                  <div class="progress-bar " role="progressbar" style=" width:40% " aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


                <div class="progress" >
                  <div class="progress-bar " role="progressbar" style=" width:80% " aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


                <div class="progress" >
                  <div class="progress-bar " role="progressbar" style=" width:50% " aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
                </div>
               

               
                <div class="col-6">
                  <p>Today Value</p>
                  <h2>$5263.04</h2>

                 
                </div>
                </div>

                <span class="badge ">Hot</span> 

              </div>
            </div>


          </div>
        </div>

      
        </div>

      <div class="col-xl-4 col-lg-3">
        <div class="row beyond mt-4 ">
          <div class="col-xl-12 px-0">
            <div class="beyond-line">
                  <div>
               
                    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>

                  </div>
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
  data(){
    return{

      series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
          

          series1: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
          chartOptions1: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
          
          
          
    }
  }
          
         
        
};
   
        

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
   color: #b4b2ba;
}

.user-profile p{
  font-size:16px;
  line-height: 28px;
}

 p{
  color: #ffffffcc;
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
  color: #ffffffcc
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

.transaction{
  
  
    border: 1px solid #2e2846!important;
  
    border-radius: 20px;
    color: #ffffffcc
}

.transaction .card-header{
  background-color: #1d1930;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.table{
  color: #ffffffcc;
  background-color: #1d1930;
 }






.table tbody tr{

  background-color: #1d1930;
  border:16px solid #151122;
}

.table .itemname{

  background-color: rgba(83,70,134,.3);
  width:40px;
  height:40px;
  border-radius:5px;
  transition: all .5s ease;
}

.table .itemname:hover{

  background-color: #ffffff33;
}

a:hover{
  color:var(--white)
}

.progres-status p{
  margin-bottom:2px;
  color:#b4b2ba;
  font-size: 13px;
  

}

.transaction h5{

  font-size: 14px;
    font-weight: 500;
}


.value-chart{

  border: 1px solid #2e2846!important;
  background-color: #1d1930;

  border-radius: 20px;
}

.value-chart .badge,
.stock-value .badge{
  background-color: #534686 !important;
  position: absolute;
    top: 20px;
    font-size: 9px;
    right: 20px;
    padding: 5px 10px;
}


.value-chart .progress-bar {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: 
    radial-gradient(closest-side, #1d1930 79%, transparent 80% 100%),
    conic-gradient(#534686 60%,  #ffffff 0);    
}

.value-chart .progress-bar::before {
  content: "60";
  font-size:24px;
}

.stock-progress .progress-bar{
  background-color:green;
}


.value-chart p,
.stock-value p{

  color: #b4b2ba;
  margin-bottom: 5px;
  font-size:16px;
   
}


.value-chart h2,
.stock-value h2{

color: #ffffffcc;
font-size: 22px;
margin-bottom:0px;
 
}

.stock-value {
  border-radius: 20px;
  background-color: #ffa47a26;
    border: 1px solid #2e2846!important;
}

.stock-progress .progress{


 height:9%;
  width:65%;
  background-color:rgb(234, 218, 211); 
  border-radius:20px;   
   border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-top:12px;

}
.stock-progress .progress-bar{
  background-color:rgb(255, 164, 122); 
}

.stock-vertical {

  width: 140px;
    transform: rotate(270deg) translate(35px,20px);
  
    height: 140px;
}

.beyond{
  border-radius:20px;
  background-color: #1d1930;
  min-height:556px;


}

.beyond-line{
  border-radius:20px;
  background-color: #534686;
  min-height:216px;
 
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
.value-chart .progress-bar {
  
  width: 100px;
  height: 100px;
   
}

.stock-vertical{

  width: 100px;
  height: 100px;

  transform: rotate(270deg) translate(27px,7px);

}
}

</style>
