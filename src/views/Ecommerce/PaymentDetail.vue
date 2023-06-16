<template>
<div>
    <div class="container-fluid">
        <div class="row page-title align-item-center py-4">
            <div class="col-6">
                <div>
                    <h4 class="mb-0">{{ this.$route.name }} Dashboard</h4>
                </div>
            </div>

            <div class="col-6">
                <ol class="breadcrumb d-flex justify-content-end">
                    <li class="breadcrumb-item">
                        <img src="../../assets/default/home.svg" alt="home" />
                    </li>
                    <li class="breadcrumb-item">Dashboard</li>
                    <li class="breadcrumb-item active">{{ this.$route.name }}</li>
                </ol>
            </div>
        </div>
    </div>

    <div class="container-fluid credit-card payment-details">
        <div class="row">
            <div class="col-xl-8">
                <div class="card">
                    <div class="card-header pb-0">
                        <h3>Credit card </h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-7">
                                <form class="theme-form mega-form">
                                    <div class="mb-3"><input class="form-control" type="text" placeholder="Card number"></div>
                                    <div class="mb-3"><input class="form-control" type="text" placeholder="First Name"></div>
                                    <div class="mb-3"><input class="form-control" type="date"></div>
                                    <div class="mb-3"><input class="form-control" type="text" placeholder="Name on card"></div>
                                    <div class="mb-3"><select class="form-select" size="1">
                                            <option>Select Type</option>
                                            <option>Master</option>
                                            <option>Visa</option>
                                        </select></div>
                                </form>
                            </div>
                            <div class="col-md-5 text-center"><img class="img-fluid" src="../../assets/product/paymentdetail/creditcard.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 debit-card">
                <div class="card">
                    <div class="card-header pb-0">
                        <h3>Debit card </h3>
                    </div>
                    <div class="card-body">
                        <form class="theme-form e-commerce-form row">
                            <div class="mb-3 col-sm-6 p-r-0"><input class="form-control" type="text" placeholder="Full name here"></div>
                            <div class="mb-3 col-sm-6"><input class="form-control" type="text" placeholder="Card number"></div>
                            <div class="mb-3 col-sm-6 p-r-0"><input class="form-control" type="text" placeholder="CVV number"></div>
                            <div class="mb-3 col-sm-6"><input class="form-control" type="text" placeholder="CVC"></div>
                            <div class="col-12"><label class="col-form-label p-b-20">Expiration Date</label></div>
                            <div class="mb-3 col-sm-6 p-r-0"><select class="form-select" size="1">
                                    <option>Select Month</option>
                                    <option>Jan</option>
                                    <option>Fab</option>
                                    <option>March</option>
                                    <option>April</option>
                                </select></div>
                            <div class="mb-3 col-sm-6"><select class="form-select" size="1">
                                    <option>Select Year</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                </select></div>
                            <div class="col-12"><button class="btn btn-primary btn-block" type="button" title="">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="card">
                    <div class="card-header pb-0">
                        <h3>COD</h3>
                    </div>
                    <div class="card-body">
                        <form class="theme-form row">
                            <div class="mb-3 col-sm-6 p-r-0"><input class="form-control" type="text" placeholder="First Name"></div>
                            <div class="mb-3 col-sm-6"><input class="form-control" type="text" placeholder="Last name"></div>
                            <div class="mb-3 col-sm-6 p-r-0"><input class="form-control" type="text" placeholder="Pincode"></div>
                            <div class="mb-3 col-sm-6"><input class="form-control" type="number" placeholder="Enter mobile number"></div>
                            <div class="mb-3 col-sm-6 p-r-0"><input class="form-control" type="text" placeholder="State"></div>
                            <div class="mb-3 col-sm-6"><input class="form-control" type="text" placeholder="City"></div>
                            <div class="mb-3 col-12">
                                <grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="dnXmp"></grammarly-extension>
                                <grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="dnXmp"></grammarly-extension><textarea class="form-control" rows="3" placeholder="Address" spellcheck="false"></textarea>
                            </div>
                            <div class="col-12"><button class="btn btn-primary btn-block" type="button" title="">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="card">
                    <div class="card-header pb-0">
                        <h3>EMI</h3>
                    </div>
                    <div class="card-body">
                        <form class="theme-form row">
                            <div class="mb-3 col-sm-6 p-r-0"><input class="form-control" type="text" placeholder="First Name"></div>
                            <div class="mb-3 col-sm-6"><input class="form-control" type="text" placeholder="Last name"></div>
                            <div class="mb-3 col-sm-6 p-r-0"><input class="form-control" type="text" placeholder="Pincode"></div>
                            <div class="mb-3 col-sm-6"><select class="form-select" size="1">
                                    <option>Bank Name</option>
                                    <option>SBI</option>
                                    <option>ICICI</option>
                                    <option>KOTAK</option>
                                    <option>BOB</option>
                                </select></div>
                            <div class="mb-3 col-12"><select class="form-select" size="1">
                                    <option>Select Card</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select></div>
                            <div class="mb-3 col-12"><select class="form-select" size="1">
                                    <option>Select Duration</option>
                                    <option>2015-2016</option>
                                    <option>2016-2017</option>
                                    <option>2017-2018</option>
                                    <option>2018-2019</option>
                                </select></div>
                            <div class="mb-3 col-12">
                                <ul class="payment-opt">
                                    <li><img src="../../assets/product/paymentdetail/mastercard.png" /></li>
                                 <li><img src="../../assets/product/paymentdetail/visa.png" /></li>
                                   <li><img src="../../assets/product/paymentdetail/paypal.png" ></li>
                                </ul>
                            </div>
                            <div class="col-12"><button class="btn btn-primary btn-block" type="button" title="">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="card">
                    <div class="card-header pb-0">
                        <h3>Net Banking</h3>
                    </div>
                    <div class="card-body">
                        <form class="theme-form row">
                            <div class="mb-3 col-12"><input class="form-control" type="text" placeholder="AC Holder name"></div>
                            <div class="mb-3 col-12"><input class="form-control" type="text" placeholder="Account number"></div>
                            <div class="mb-3 col-sm-6 p-r-0"><select class="form-select" size="1">
                                    <option>Select Bank</option>
                                    <option>SBI</option>
                                    <option>ICICI</option>
                                    <option>KOTAK</option>
                                    <option>BOB</option>
                                </select></div>
                            <div class="mb-3 col-sm-6"><input class="form-control" type="text" placeholder="ICFC code"></div>
                            <div class="mb-3 col-12"><input class="form-control" type="number" placeholder="Enter mobile number"></div>
                            <div class="mb-3 col-12"><input class="form-control" type="text" placeholder="Other Details"></div>
                            <div class="col-12"><button class="btn btn-primary btn-block" type="button" title="">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    name: 'PaymentDetails'
}
</script>

<style scoped>

.card{

    background-color: #1d1930;
    border: 1px solid #2e2846!important;
    transition: all .3s ease;
    margin-bottom: 30px;

    letter-spacing: .5px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(8,21,66,.05);
}


.card-header {
    background-color: transparent;
    padding: 25px;
    border-bottom: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
}

 h3 {
    font-size: 20px;
    font-weight: 500;
    color: hsla(0,0%,100%,.8)!important;
    margin-bottom: 0;
}

.card .card-body {
    padding: 25px;
    background-color: transparent;
}
.form-control {
    background-color: #151122;
    color: hsla(0,0%,100%,.8) !important;
  
    border: 1px solid #2e2846;
    padding: 12px 15px;
    border-radius: 8px;
}

.theme-form input[type=text],
.theme-form input[type=date], 
.theme-form select,
.theme-form textarea,
.theme-form input[type=number]{

    font-size: 14px;
    
    box-shadow: none;
}

::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

.form-select {
    background-color: #151122;
    border: 1px solid #151122;
    color: hsla(0,0%,100%,.8);
    padding: 12px 15px;
    border-radius: 8px;
}

.p-b-20 {
    padding-bottom: 20px!important;
}
.col-form-label{

font-size:14px;
color:#ffffffcc;
}






.btn {
    font-size: 14px;
    padding: 0.6rem 1.75rem;
    font-weight: 600;
    border-radius: 8px;
}
.btn-primary {
    background-color: #534686!important;
    border-color: #534686!important;
}

::placeholder{

    color:#898989;
    letter-spacing: 1px;
    font-size:14px;
}


ul {
    padding-left: 0;
    list-style-type: none;
    margin-bottom: 0;
}

.payment-opt li {
    display: inline-block;
}

.payment-opt li img {
    height: 20px;
    margin: 15px 15px 0 0;
}
</style>
