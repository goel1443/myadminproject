<template>
  <div class="px-2">
    <div class="container-fluid">
      <div class="row page-title align-item-center py-4">
        <div class="col-6">
          <div>
            <h4 class="mb-0">{{this.$route.name}} Dashboard</h4>
          </div>
        </div>

        <div class="col-6">
          <ol class="breadcrumb d-flex justify-content-end">
            <li class="breadcrumb-item">
              <img src="../assets/default/home.svg" alt="home" />
            </li>
            <li class="breadcrumb-item">Dashboard</li>
            <li class="breadcrumb-item active">{{ this.$route.name }}</li>
          </ol>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-5 col-lg-5">
          <div class="card p-2 user-profile mb-lg-0 mb-3">
            <div class="card-body border-0 d-flex text-md-start text-center" style="min-height:228px;">
              <div class="profile-data">
                <h3 class="mb-0">Welcome, User</h3>
                <p
                  class="my-2"
                >You have completed 40% of your this week! Start a new goal & improve your result</p>
                <a href="#" class="btn shadow-none mt-2">
                  Continue
                  <img src="../assets/default/rightarrow.svg" />
                </a>
              </div>

              <div class="profile-img">
                <img src="/image/userimage.png" class="img-fluid" alt="user" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-4 col-md-6">
          <div class="card p-2 yearly-overview mb-md-0 mb-3">
            <div class="card-header d-flex justify-content-between align-items-center">
              <div>
                <h3 class="mb-0">Yearly Overview</h3>
                <p class="my-1">Monday</p>
              </div>

              <div>
                <span class="badge bg-secondary py-2 px-3">50/100</span>
              </div>
            </div>

            <div class="card-body border-0"  style="min-height:150px;" >
              <Linechart />
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-6">
          <div class="card p-2 yearly-overview">
            <div class="card-header d-flex justify-content-between align-items-center">
              <div>
                <h3 class="mb-0">Activity</h3>
              </div>
            </div>

            <div class="card-body border-0 p-2" style="height:215px;">
              <div class="table-responsive" style="height:200px;">
                <table class="table align-middle table-borderless text-nowrap">
                  <tbody>
                    <tr>
                      <td>
                        <img src="/image/activity.jpg" alt="activity" class="rounded-1" />
                      </td>
                      <td>
                        <div>
                          <a href="#" class="text-decoration-none">Review request jim Smith</a>
                          <p class="mb-0">jan 03 19 12:25 PM at Tame</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span class="badge bg-secondary">14m Ago</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          <div>
                            <img
                              src="/image/activity.jpg"
                              alt="activity"
                              class="img-fluid rounded-1"
                            />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <a href="#" class="text-decoration-none">Review request jim Smith</a>
                          <p class="mb-0">jan 03 19 12:25 PM at Tame</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span class="badge bg-secondary">14m Ago</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          <div>
                            <img
                              src="/image/activity.jpg"
                              alt="activity"
                              class="img-fluid rounded-1"
                            />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <a href="#" class="text-decoration-none">Review request jim Smith</a>
                          <p class="mb-0">jan 03 19 12:25 PM at Tame</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span class="badge bg-secondary">14m Ago</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-5 col-lg-5">
          <div class="card transaction bg-transparent mb-lg-0 mb-3 mt-4">
            <div class="card-header p-3">
              <h3 class="mb-0">Transaction</h3>
            </div>

            <div class="card-body border-0 p-0">
              <div class="table-responsive">
                <table class="table table-borderless text-nowrap align-middle">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Date and Time</th>
                      <th>Income</th>
                      <th>Progress</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="itemname d-flex justify-content-center align-items-center">
                            <img
                              src="../assets/default/transaction/shoes.png"
                              class="img-fluid"
                              alt="shoes"
                            />
                          </div>
                          <div class="ms-3 text-start">
                            <a href="#" class="text-decoration-none">Nike Sports NK</a>
                            <p class="mb-0">Free delivery</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="ms-3 text-start">
                          <a href="#" class="text-decoration-none">12 May 2023</a>
                          <p class="mb-0">In 6 Days</p>
                        </div>
                      </td>
                      <td>
                        <h5 class="mb-0">+$456</h5>
                      </td>

                      <td class="text-center progres-status">
                        <p class="mb-0">65%</p>
                        <div
                          class="progress"
                          style="height:5px; width:70%; background-color: #2e2846;"
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 65%;    background-color: #67c100;"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td>
                        <h5 class="mb-0">Paypal</h5>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="itemname d-flex justify-content-center align-items-center">
                            <img
                              src="../assets/default/transaction/womenbag.png"
                              class="img-fluid"
                              alt="bag"
                            />
                          </div>
                          <div class="ms-3 text-start">
                            <a href="#" class="text-decoration-none">Women Bag</a>
                            <p class="mb-0">₹83.65 delivery</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="ms-3 text-start">
                          <a href="#" class="text-decoration-none">06 May 2023</a>
                          <p class="mb-0">In 5 Day</p>
                        </div>
                      </td>
                      <td>
                        <h5 class="mb-0">-$80</h5>
                      </td>

                      <td class="text-center progres-status">
                        <p class="mb-0">45%</p>
                        <div
                          class="progress"
                          style="height:5px; width:70%; background-color: #2e2846;"
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 45%;    background-color: #e56809;"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td>
                        <h5 class="mb-0">Credit Card</h5>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="itemname d-flex justify-content-center align-items-center">
                            <img
                              src="../assets/default/transaction/sunglass.png"
                              class="img-fluid"
                              alt="glass"
                            />
                          </div>
                          <div class="ms-3 text-start">
                            <a href="#" class="text-decoration-none">Sunglasses</a>
                            <p class="mb-0">Free delivery</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="ms-3 text-start">
                          <a href="#" class="text-decoration-none">28 Sep 2023</a>
                          <p class="mb-0">in 4 Months</p>
                        </div>
                      </td>
                      <td>
                        <h5 class="mb-0">-$4,232</h5>
                      </td>

                      <td class="text-center progres-status">
                        <p class="mb-0">85%</p>
                        <div
                          class="progress"
                          style="height:5px; width:70%; background-color: #2e2846;"
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 85%;    background-color: #dc0808;"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td>
                        <h5 class="mb-0">Paypal</h5>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="itemname d-flex justify-content-center align-items-center">
                            <img
                              src="../assets/default/transaction/tshirt.png"
                              class="img-fluid"
                              alt="shirt"
                            />
                          </div>
                          <div class="ms-3 text-start">
                            <a href="#" class="text-decoration-none">Cotton T-shirt</a>
                            <p class="mb-0">₹283.65 delivery</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="ms-3 text-start">
                          <a href="#" class="text-decoration-none">22 Mar 2023</a>
                          <p class="mb-0">In 8 Days</p>
                        </div>
                      </td>
                      <td>
                        <h5 class="mb-0">-$645</h5>
                      </td>

                      <td class="text-center progres-status">
                        <p class="mb-0">75%</p>
                        <div
                          class="progress"
                          style="height:5px; width:70%; background-color: #2e2846;"
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 75%;    background-color: #3ebcb9;"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td>
                        <h5 class="mb-0">Credit Card</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3">
          <div class="row text-nowrap">
            <div class="col-xl-12 col-sm-6 col-lg-12">
              <div class="card value-chart mt-4" style="min-height:202px;">
                <div class="card-body border-0 p-4">
                  <div class="row align-items-center">
                    <div class="col-6">
                      <RadialChart />
                    </div>
                    <div class="col-6">
                      <p>Our Sale Value</p>
                      <h2>$7454.25</h2>
                    </div>
                  </div>

                  <span class="badge">New</span>
                </div>
              </div>
            </div>
            <div class="col-xl-12 col-sm-6 col-lg-12">
              <div class="card stock-value mt-4">
                <div class="card-body p-4" style="min-height:210px;">
                  <div class="row align-items-center stock-progress">
                    <div class="col-6">
                      <div class="stock-vertical">
                        <div class="progress" data-bs-toggle="tooltip" data-bs-placement="bottom" title="80">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style=" width:20% "
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="20"
                          ></div>
                        </div>

                        <div class="progress" data-bs-toggle="tooltip" data-bs-placement="bottom" title="70">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style=" width:30% "
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="30"
                          ></div>
                        </div>

                        <div class="progress" data-bs-toggle="tooltip" data-bs-placement="bottom" title="60">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style=" width:40% "
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="40"
                          ></div>
                        </div>

                        <div class="progress" data-bs-toggle="tooltip" data-bs-placement="bottom" title="20">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style=" width:80% "
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="80"
                          ></div>
                        </div>

                        <div class="progress" data-bs-toggle="tooltip" data-bs-placement="bottom" title="50">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style=" width:50% "
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="50"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div class="col-6">
                      <p>Today Value</p>
                      <h2>$5263.04</h2>
                    </div>
                  </div>

                  <span class="badge">Hot</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-4">
          <div class="row beyond mt-4 mx-1" style="min-height:435px;">
            <div class="col-xl-12 px-0">
              <div class="beyond-line">
               <Barchart/>
              </div>

              <div class="col-xl-12">
                <div class="beyond-details">
                  <h3>
                    Beyond the Lines
                    <span class="badge bg-secondary">6 hours ago</span>
                  </h3>
                  <p>One Of the world,s brightest, young surf Srars, Kanoa lgarashi.</p>

                  <div class="data-history d-flex justify-content-between mt-1">
                    <ul class="gap-2">
                      <li>
                        <img src="../assets/default/beyond/dateimg1.png" class="img-fluid" />
                      </li>
                      <li>
                        <img src="../assets/default/beyond/dateimg2.png" class="img-fluid" />
                      </li>
                      <li>
                        <img src="../assets/default/beyond/dateimg1.png" class="img-fluid" />
                      </li>
                      <li>
                        <img src="../assets/default/beyond/dateimg1.png" class="img-fluid" />
                      </li>
                      <li>
                        <h2>+ 350</h2>
                      </li>
                    </ul>

                    <div class="date-label text-center">
                      <h3>10</h3>
                      <p>june</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-5 col-lg-12">
          <div class="card p-2 invest mb-lg-0 mb-3 mt-4">
            <div class="card-body border-0">
              <div class="row text-nowrap">
                <div class="col-sm-4">
                  <div class="invest-group text-center">
                    <span>+13.6%</span>

                    <div>
                      <Investlinechar  :itemseries1="series1" :itemchartoptions1="chartOptions1"/>
                    </div>
                    <div class="investment">
                      <h5>Total Investment</h5>
                      <h2>$7454.25</h2>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="invest-group text-center">
                    <span>+15.4%</span>

                    <div>
                      <!-- <Investlinechar/> -->
                    </div>
                    <div class="investment">
                      <h5>Total Gain</h5>
                      <h2>$7454.25</h2>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="invest-group text-center">
                    <span>+15.4%</span>

                    <div>
                      <!-- <Investlinechar/> -->
                    </div>
                    <div class="investment">
                      <h5>Profit in 6 months</h5>
                      <h2>$7454.25</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card social-media mt-4" style="min-height:200px;">
            <div class="card-header">
              <h3>Top Social Media</h3>
            </div>
            <div class="card-body border-0 ">
              <div class="table-responsive">
                <table class="table table-borderless align-middle text-nowrap">
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex">
                          <div class="icon">
                            <a href="#">
                              <img src="../assets/default/socialmedia/facebook.png"/>
                            </a>
                          </div>

                          <div class="icon-data">
                            <a href="#" class="text-decoration-none">
                                <h5>Facebook</h5>
                                <p>Social Media</p>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>

                        <div class="social-percent d-flex align-items-center">
                            <img src="../assets/default/socialmedia/uparrow.svg" class="me-1"/>
                            <h5>3.7%</h5>
                        </div>
                      </td>
                      <td>
                        <div class="amount-data">
                        <h5>$24,000</h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="d-flex">
                          <div class="icon">
                            <a href="#">
                              <img src="../assets/default/socialmedia/instagram.png"/>
                            </a>
                          </div>

                          <div class="icon-data">
                            <a href="#" class="text-decoration-none">
                                <h5>Facebook</h5>
                                <p>Social Media</p>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>

                        <div class="social-percent d-flex align-items-center">
                            <img src="../assets/default/socialmedia/uparrow.svg" class="me-1"/>
                            <h5>3.7%</h5>
                        </div>
                      </td>
                      <td>
                        <div class="amount-data">
                        <h5>$24,000</h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="d-flex">
                          <div class="icon">
                            <a href="#">
                              <img src="../assets/default/socialmedia/twitter.png"/>
                            </a>
                          </div>

                          <div class="icon-data">
                            <a href="#" class="text-decoration-none">
                                <h5>Facebook</h5>
                                <p>Social Media</p>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>

                        <div class="social-percent d-flex align-items-center">
                            <img src="../assets/default/socialmedia/uparrow.svg" class="me-1"/>
                            <h5>3.7%</h5>
                        </div>
                      </td>
                      <td>
                        <div class="amount-data">
                        <h5>$24,000</h5>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6">
          <div class="card upgrade-history text-md-start text-center my-4" >

            <div class="card-body border-0 d-flex align-items-center justify-content-md-start justify-content-center">
              <div>
                    <h3>Buy more space now! </h3>
                    <p>Invite 2 Friends and get 5 GB extra space.</p>
                    <a href="#" class="btn upgrade-btn">Upgrade now</a>
              </div>

              <div class="upgrade-img">
                <img src="../assets/default/upgrade/image.png" class="img-fluid"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Investlinechar from  '../components/DashboardChart/Investlinechar.vue'
import Barchart from  '../components/DashboardChart/Barchart.vue'
import RadialChart from  '../components/DashboardChart/Radialchart.vue'
import Linechart from  '../components/DashboardChart/Linechart.vue'
export default {
  name: "Default",
  components:{
    Linechart,
    RadialChart,
    Barchart,
    Investlinechar
  },

  data(){

    return{

      series1: [
         

         {
           data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
         }
       
       
       ],
       chartOptions1:{
         chart: {
         type: "line",
         width: 100,

         sparkline: {
           enabled: false
         },
         colors: ["rgb(115, 102, 255)"]
       }

       
     }
     
    }
  }




  
  
};
</script>

<style scoped>
.breadcrumb-item.active {
  color: #b4b2ba;
}

.user-profile {
  background-color: #534686 !important;
  border-radius: 20px;
}

.profile-data {
  max-width: 57%;
}
.profile-img {
  position: absolute;
  bottom: -2px;
  right: 0;
}

.profile-img img {
  width: auto;
  height: 265px;
}

.user-profile h3 {
  font-size: 30px;
  color: #b4b2ba;
}

.user-profile p {
  font-size: 16px;
  line-height: 28px;
}

p {
  color: #ffffffcc;
  font-size: 14px;
}
.user-profile a,
.user-profile a:focus {
  color: #534686;
  background-color: var(--white);
  font-weight: 500;
}

.yearly-overview {
  background-color: #1d1930 !important;
  border: 1px solid #2e2846 !important;
  border-radius: 20px;
}

h3 {
  font-size: 20px;
  color: #ffffffcc;
}
.yearly-overview span {
  background-color: #ffffff1a !important;
  color: #fff;
}

a {
  color: hsla(0,0%,100%,.8);
  font-size: 14px;
}

.yearly-overview p{

  color: #b4b2ba;
  font-size: 13px;
}

.yearly-overview span{

  background-color: hsla(0,0%,100%,.08);
  background: rgba(83,70,134,.05);
    padding: 4px 4px;
    border-radius: 5px;

    color: #b4b2ba;
    font-size: 10px;
    font-weight: 400;

    font-family: Rubik,sans-serif;
}


  

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  background-color: #ffffff1a;
  border-radius: 10px;
}

.transaction {
  border: 1px solid #2e2846 !important;

  border-radius: 20px;
  color: #ffffffcc;
}

.transaction .card-header {
  background-color: #1d1930;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.transaction .table {
  color: #ffffffcc;
  background-color: #1d1930;
}

.transaction .table tbody tr {
  background-color: #1d1930;
  border: 16px solid #151122;
}

.transaction .table .itemname {
  background-color: rgba(83, 70, 134, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 5px;
  transition: all 0.5s ease;
}

.transaction .table .itemname:hover {
  background-color: #ffffff33;
}

a:hover {
  color: var(--white);
}

.progres-status p {
  margin-bottom: 2px;
  color: #b4b2ba;
  font-size: 13px;
}

.transaction h5 {
  font-size: 14px;
  font-weight: 500;
}

.value-chart {
  border: 1px solid #2e2846 !important;
  background-color: #1d1930;

  border-radius: 20px;
}

.value-chart .badge,
.stock-value .badge {
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
  background: radial-gradient(closest-side, #1d1930 79%, transparent 80% 100%),
    conic-gradient(#534686 60%, #ffffff 0);
}

.value-chart .progress-bar::before {
  content: "60";
  font-size: 24px;
}

.stock-progress .progress-bar {
  background-color: green;
}

.value-chart p,
.stock-value p {
  color: #b4b2ba;
  margin-bottom: 5px;
  font-size: 16px;
}

.value-chart h2,
.stock-value h2 {
  color: #ffffffcc;
  font-size: 22px;
  margin-bottom: 0px;
}

.stock-value {
  border-radius: 20px;
  background-color: #ffa47a26;
  border: 1px solid #2e2846 !important;
}

.stock-progress .progress {
  height: 9%;
  width: 65%;
  background-color: rgb(234, 218, 211);
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-top: 12px;
}
.stock-progress .progress-bar {
  background-color: rgb(255, 164, 122);
}

.stock-vertical {
  width: 140px;
  transform: rotate(270deg) translate(35px, 20px);

  height: 140px;
}

.beyond {
  border-radius: 20px;
  background-color: #1d1930;
  min-height: 556px;
}

.beyond-line {
  border-radius: 20px;
  background-color: #534686;
  min-height: 216px;
}

.beyond-details {
  padding: 32px 20px;
}
.beyond-details h3 {
  font-size: 20px;
  font-weight: 500;
}

.beyond-details .badge {
  background-color: hsla(0, 0%, 100%, 0.05) !important;
  color: hsla(0, 0%, 100%, 0.8);
  margin-left: 10px;
  font-size: 10px;
  padding: 7px 10px;
  font-weight: 500;
  vertical-align: middle;
}

.beyond-details p {
  font-size: 14px;
  width: 60%;
  margin: 0;
  color: #b4b2ba;
  line-height: 1.7;
  letter-spacing: 0.7px;
}

.beyond-details ul {
  display: flex;
  align-items: center;
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 0;
}
.beyond-details .data-history h2 {
  margin-bottom: 0;
  padding-left: 10px;

  letter-spacing: 0.5px;

  font-size: 20px;

  font-weight: 700;
}

.beyond-details .date-label {
  background-color: #151122;

  padding: 10px;

  width: 60px;
  text-transform: capitalize;
}

.beyond-details .date-label h3 {
  font-size: 20px;
  margin-bottom: 0;
  font-weight: 700;
  color: hsla(0, 0%, 100%, 0.8) !important;
}

.beyond-details .date-label p {
  font-size: 13px;
  margin-bottom: 0;
  font-weight: 700;
  width: 100%;
  color: #b4b2ba;
  line-height: 1;
}

.invest {
  border-radius: 20px;
  background-color: #1d1930;
  border: 1px solid #2e2846 !important;
}

.invest-group span {
  font-weight: 500;
  font-size: 18px;
}

.invest-group h5 {
  font-size: 14px;
  font-weight: 500;
  color: #9993b4;
}

.invest-group h2 {
  font-size: 22px;
  font-weight: 500;
}

.social-media {
  background-color: #1d1930;
  border: 1px solid #2e2846 !important;
  border-radius: 20px;
}

.social-media h3 {
  font-size: 20px;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.8) !important;
}

.social-media .card-header {
  padding: 20px 25px 7px;
}

.social-media .icon {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: hsla(0, 0%, 100%, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  transition: all 0.5s ease;
}


.social-media .icon-data h5{
  color: hsla(0,0%,100%,.8);


    margin-bottom: 0;

    letter-spacing: .5px;

    font-size: 14px;
    font-weight: 500;

}


.social-media .icon-data p{
  margin-bottom: 0;

    color: #b4b2ba;


    line-height: unset;

    font-size: 13px;
    line-height: 1.7;
    letter-spacing: .7px;

}

.social-media .social-percent h5,
.social-media .amount-data h5{

  margin-bottom: 0;

  color: #b4b2ba;
    font-size: 14px;
    font-weight: 500;

}

.social-media tr:hover{

  background-color: rgba(83,70,134,.14);
}

.social-media tr:hover .icon{

  background-color: hsla(0,0%,100%,.2);
}

.upgrade-history {

  background-color: #1d1930;
    border: 1px solid #2e2846!important;
    border-radius:20px;
    min-height:275px;
    
}

.upgrade-history .card-body{
  padding:25px;
}
.upgrade-history h3{

  color: hsla(0,0%,100%,.8)!important;

    font-size: 20px;
    font-weight: 500;
}

.upgrade-history p{

  color: #b4b2ba;

    width: 65%;
    font-size: 14px;

    line-height: 1.7;
    letter-spacing: .7px;



    margin-top: 0;
    margin-bottom: 1rem;
}

.upgrade-history .upgrade-btn{

  background-color:#534686;
  font-size: 14px;
  color:var(--white);
  border-color: #534686!important;
  padding: 0.6rem 1.75rem;
    font-weight: 700;
    border-radius: 8px;
}

.upgrade-history .upgrade-img {

  position: absolute;
    top: -10px;
    right: -20px;
}
@media all and (min-width: 320px) and (max-width: 767px) {
  .page-title h4 {
    font-size: 18px;
  }

  .page-title .breadcrumb-item {
    font-size: 14px;
  }

  .profile-img {
    display: none;
  }

  h3 {
    font-size: 20px;
  }

  .profile-data {
    max-width: 100%;
  }
  .value-chart .progress-bar {
    width: 100px;
    height: 100px;
  }

  .stock-vertical {
    width: 100px;
    height: 100px;

    transform: rotate(270deg) translate(27px, 7px);
  }
  .beyond-details .data-history h2 {
    font-size: 14px;
  }
  .beyond-details p {
    width: auto;
  }

  .upgrade-img{

    display:none;
  }

  .upgrade-history{

    
    min-height:200px !important;
    
  }

  .upgrade-history .card-body{

    padding:10px;
  }
  .upgrade-history p{

    width:auto;
  }

}
</style>
