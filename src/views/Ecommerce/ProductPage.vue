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

    <div class="container-fluid">
        <div>
            <div class="row product-page-main p-0">
                <div class="col-xl-5 col-md-6  col-12  ">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-9  product-main">
                                    <div class="pro-slide-single">
                                        <swiper :navigation="true"  :autoplay="{delay: 2500,disableOnInteraction: false,}" :modules="modules" class="mySwiper" >
                                                            <swiper-slide>
                                                                <div class="item">
                                                                    <img src="../../assets/product/productside5.jpg" class="img-fluid"/>
                                                              
                                                                   
                                                                </div>
                                                            </swiper-slide>
                                                            <swiper-slide>
                                                                <div class="item">
                                                                    <img src="../../assets/product/productside2.jpg" class="img-fluid"/>
                                                              
                                                                   
                                                                </div>
                                                            </swiper-slide>
                                                            <swiper-slide>
                                                                <div class="item">
                                                                    <img src="../../assets/product/productside1.jpg" class="img-fluid"/>
                                                              
                                                                   
                                                                </div>
                                                            </swiper-slide>

                                                            <swiper-slide>
                                                                <div class="item">
                                                                    <img src="../../assets/product/productside9.jpg" class="img-fluid"/>
                                                              
                                                                   
                                                                </div>
                                                            </swiper-slide>
                                                            
                                        </swiper>
                                    </div>
                                </div>
                                <div class="col-xl-3  product-thumbnail">
                                    <div class="pro-slide-right">
                                        <swiper :navigation="true"  slidesPerView=3  :direction="'vertical'"      :autoplay="{delay: 5000,disableOnInteraction: false,}" :modules="modules" class="mySwiper swipe">
                                                            <swiper-slide>
                                                                <div class="item" >
                                                                    <img src="../../assets/product/productside5.jpg" class="img-fluid"/>
                                                              
                                                                   
                                                                </div>
                                                                
                                                            </swiper-slide>
                                                            <swiper-slide>
                                                                <div class="item">
                                                                    <img src="../../assets/product/productside2.jpg" class="img-fluid"/>
                                                              
                                                                   
                                                                </div>
                                                            </swiper-slide>
                                                            <swiper-slide>
                                                                <div class="item" >
                                                                    <img src="../../assets/product/productside1.jpg" class="img-fluid"/>
                                                              
                                                                   
                                                                </div>
                                                            </swiper-slide>

                                                            <swiper-slide>
                                                                <div class="item" >
                                                                    <img src="../../assets/product/productside9.jpg" class="img-fluid"/>
                                                              
                                                                   
                                                                </div>
                                                            </swiper-slide>
                                                            
                                        </swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-12 ">
                    <div class="card">
                        <div class="card-body">
                            <div class="pro-group pt-0 border-0">
                                <div class="product-page-details mt-0">
                                    <h3>Women's T-Shirt</h3>
                                    <div class="pro-review">
                                        <div class="d-flex">
                                            <div class="Rate"><svg width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px;">
                                                    <defs>
                                                        <symbol id="icon-star-full" viewBox="0 0 32 32">
                                                            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                                                        </symbol>
                                                    </defs>
                                                </svg><input type="hidden" name="rate" value="2"><button type="button" class="Rate__star hover filled"><svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <use xlink:href="#icon-star-full"></use>
                                                    </svg></button><button type="button" class="Rate__star hover filled"><svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <use xlink:href="#icon-star-full"></use>
                                                    </svg></button><button type="button" class="Rate__star"><svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <use xlink:href="#icon-star-full"></use>
                                                    </svg></button><button type="button" class="Rate__star"><svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <use xlink:href="#icon-star-full"></use>
                                                    </svg></button><button type="button" class="Rate__star"><svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <use xlink:href="#icon-star-full"></use>
                                                    </svg></button>
                                                <div class="Rate__view">
                                                    <!---->
                                                    <!---->
                                                </div>
                                            </div><span>(250 review)</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-price"> $120.00 <del>$150.00</del></div>
                                <div class="color-selector">
                                    <ul>
                                        <li class="active white"></li>
                                        <li class="bg-primary"></li>
                                        <li class="bg-secondary"></li>
                                        <li class="bg-success"></li>
                                        <li class="bg-warning"></li>
                                        <li class="bg-danger"></li>
                                    </ul>
                                </div><a href="/koho/ecommerce/cart" class="btn btn-secondary mt-0">
                                    <img src="../../assets/product/shopcart.svg" />
                                    Buy Now</a>
                            </div>
                            <div class="pro-group">
                                <p>Rock Paper Scissors Women's Tank Top High Neck Cotton Top Stylish Women Top..</p>
                            </div>
                            <div class="pro-group">
                                <div class="row">
                                    <div class="col-md-6">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><b>Availability &nbsp;: &nbsp;</b></td>
                                                    <td class="txt-success">In stock</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Brand &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b></td>
                                                    <td>Pixelstrap</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col-md-6">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><b>Seller &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                                                    <td>ABC</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Fabric &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                                                    <td>Cotton </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="pro-group pb-0">
                                <div class="row">
                                    <div class="col-md-4 xl-50 box-col-30">
                                        <h4 class="product-title">share it</h4>
                                    </div>
                                    <div class="col-md-7 xl-50 box-col-70">
                                        <div class="product-icon">
                                            <ul class="product-social">
                                                <li class="d-inline-block"><a href="https://www.facebook.com" target="_blank"><img src="../../assets/product/facebook.svg"/></a></li>
                                                <li class="d-inline-block"><a href="https://www.google.com/" target="_blank"><img src="../../assets/product/google.svg"/></a></li>
                                                <li class="d-inline-block"><a href="https://twitter.com/" target="_blank"><img src="../../assets/product/twitter.svg"/></a></li>
                                                <li class="d-inline-block"><a href="https://www.instagram.com/" target="_blank"><img src="../../assets/product/instagram.svg"/></a></li>
                                            </ul>
                                            <form class="d-inline-block f-right"></form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pro-group pb-0">
                                <div class="pro-shop"><a href="/koho/ecommerce/cart" class="btn btn-primary m-r-10"><img src="../../assets/product/basket.svg" class="me-2"/>Add To Cart</a><a href="/koho/ecommerce/wishlist" class="btn btn-danger"><img src="../../assets/product/heart.svg" class="me-2"/>Add To WishList </a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-md-6 col-12 ">
                    <div class="card">
                        <div class="card-body">
                            <div class="filter-block">
                                <h4>Brand </h4>
                                <ul>
                                    <li>
                                        <div class="form-check"><input class="form-check-input" id="Raymond" type="checkbox" value=""><label class="form-check-label" for="Raymond">Raymond</label></div>
                                    </li>
                                    <li>
                                        <div class="form-check"><input class="form-check-input" id="Pepe-Jeans" type="checkbox" value=""><label class="form-check-label" for="Pepe-Jeans">Pepe-Jeans</label></div>
                                    </li>
                                    <li>
                                        <div class="form-check"><input class="form-check-input" id="Celio" type="checkbox" value=""><label class="form-check-label" for="Celio">Celio</label></div>
                                    </li>
                                    <li>
                                        <div class="form-check"><input class="form-check-input" id="aime" type="checkbox" value=""><label class="form-check-label" for="aime">aime</label></div>
                                    </li>
                                    <li>
                                        <div class="form-check"><input class="form-check-input" id="aliff" type="checkbox" value=""><label class="form-check-label" for="aliff">aliff</label></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="collection-filter-block">
                                <ul class="pro-services">
                                    <li>
                                        <div class="d-flex align-items-center"><i data-name="truck" data-tags="delivery,van,shipping,transport,lorry" data-type="truck" class="vue-feather vue-feather--truck"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#534686" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck vue-feather__content">
                                                    <rect x="1" y="3" width="15" height="13"></rect>
                                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                                </svg></i>
                                            <div class="flex-grow-1">
                                                <h5>Free Shipping </h5>
                                                <p>Free Shipping World Wide</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center"><i data-name="clock" data-tags="time,watch,alarm" data-type="clock" class="vue-feather vue-feather--clock"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#534686"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock vue-feather__content">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg></i>
                                            <div class="flex-grow-1">
                                                <h5>24 X 7 Service </h5>
                                                <p>Online Service For New Customer </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="row product-page-main">
                <div class="col-sm-12">
                    <ul class="nav nav-tabs border-tab mb-0" id="top-tab" role="tablist">
                        <li class="nav-item" role="presentation"><a class="nav-link" id="top-home-tab" data-bs-toggle="tab" href="#top-home" role="tab" aria-controls="top-home" aria-selected="false" tabindex="-1">Fabric</a>
                            <div class="material-border"></div>
                        </li>
                        <li class="nav-item" role="presentation"><a class="nav-link" id="profile-top-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="false" tabindex="-1">Video</a>
                            <div class="material-border"></div>
                        </li>
                        <li class="nav-item" role="presentation"><a class="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false" tabindex="-1">Details</a>
                            <div class="material-border"></div>
                        </li>
                        <li class="nav-item" role="presentation"><a class="nav-link active" id="brand-top-tab" data-bs-toggle="tab" href="#top-brand" role="tab" aria-controls="top-brand" aria-selected="true">Brand</a>
                            <div class="material-border"></div>
                        </li>
                    </ul>
                    <div class="tab-content" id="top-tabContent">
                        <div class="tab-pane fade" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
                            <p class="mb-0 m-t-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            <p class="mb-0 m-t-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                        <div class="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
                            <p class="mb-0 m-t-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                        <div class="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                            <p class="mb-0 m-t-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                        <div class="tab-pane fade active show" id="top-brand" role="tabpanel" aria-labelledby="brand-top-tab">
                            <p class="mb-0 m-t-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
    Navigation,
    Pagination,
    Autoplay
   
} from 'swiper';
import 'swiper/css';
export default {
    name: 'ProductPage',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation,Pagination,Autoplay],
           
        };
    },
    

    
   

}
</script>

<style scoped>

.swipe{

    height:482px;
}
.card {
    background-color: #1d1930;
    border: 1px solid #2e2846!important;
    transition: all .3s ease;
    margin-bottom: 30px;
   
    letter-spacing: .5px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(8,21,66,.05);
}

.card .card-body {
    padding: 25px;
    background-color: transparent;
}

.product-page-main .pro-group {
  
    padding-bottom: 15px;
}

.product-page-details {
    display: flex;
    justify-content: space-between;
}


 .product-page-details h3 {
    font-size: 24px;
    color: hsla(0,0%,100%,.8)!important;
    font-weight: 500;
    letter-spacing: .5px;
    line-height: 1.2;
    margin-bottom: 0.5rem;
}

.Rate {
    cursor: default;
}

.Rate__star.filled, .Rate__star.hover {
    color: #efc20f;
}


.Rate__star {
  
    display: inline-block;
 
    text-decoration: none;
   padding:0px;
    background: transparent none;
    border: 0;
}
.Rate .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    vertical-align: middle;
    top: -2px;
    position: relative;
    margin: 0 5px;
}

.Rate__star .icon {
    top: 0;
    vertical-align: middle;
}

.Rate__star {
    color: #dedbdb;

}

.product-page-details span {
    padding-left: 15px;
    font-size:14px;
    color:#ffffffcc
}

.product-price del {
    color: #b4b2ba;
    margin-left: 15px;
    font-weight: 600;
    font-size: 14px;
}

.product-price {
    font-size: 16px;
    font-weight: 500;
    color: #b4b2ba;
   
}

ul {
    padding-left: 0;
    list-style-type: none;
    margin-bottom: 0;
}
.product-page-main .color-selector {
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1;
}

.color-selector {
    line-height: 1;

}

.color-selector ul li {
    border-color: #2e2846;
}

.color-selector ul li.white {
    background-color: #fff;
}

.color-selector ul li {
    border-color: #2e2846;
    display: inline-block;
    width: 25px;
    height: 25px;
    cursor: pointer;
    border: 1px solid rgba(83, 70, 134, .102);
    position: relative;
    margin-right:2px;
}

.color-selector ul li.active:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background-image: url('../../assets/product/check.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 22px;
    height: 22px;
    color: #fff;
    

}
.bg-primary {
    background-color: #534686 !important;
}
.bg-secondary {
    background-color: #f73164 !important;
}
.bg-success {
    background-color: #67c100!important;
    color: #fff;
}
.bg-warning {
    background-color: #e56809!important;
    color: #fff;
}

.bg-danger {
    background-color: #dc0808!important;
    color: #fff;
}

.product-page-main .pro-group .btn {
    font-weight: 500;
}

.btn {
    padding: 0.6rem 1.75rem;
    font-size: 14px;
    border-radius: 8px;
}

.btn-secondary {
    background-color: #f73164!important;
    border-color: #f73164!important;
}

.product-page-main .pro-group:nth-child(n+2) {
   
    border-top: 1px solid rgba(83,70,134,.102);
    border-color: #2e2846;
}

.product-page-main .pro-group {
    padding-top: 15px;
    padding-bottom: 15px;
}
.product-page-main p {
    color: hsla(0,0%,100%,.8);
    font-size: 15px;
    line-height: 1.7;
    letter-spacing: .7px;
}

.txt-success {
    color: #67c100!important;
}
table td {
    font-size:14px;
    color:#ffffffcc;
}



.product-page-main .pro-group h4 {
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    color:#ffffffcc;
}

.product-social li a {
   

    font-size: 15px;
    border: 1px solid rgba(83,70,134,.102);
    border-radius: 100%;
    height: 35px;
    width: 35px;
    display: inline-block;
    text-align: center;
    line-height: 2.3;
    transition: all .3s ease;
    border-color: #2e2846;
    color: hsla(0,0%,100%,.8);

}

.product-social li:nth-child(n+2) {
    margin-left: 10px;
}

.product-social img{
    width:22px;
}

.product-social li a:hover {
    background-color: #534686;
}

.btn-primary {
    background-color: #534686!important;
    border-color: #534686!important;
}

.m-r-10 {
    margin-right: 10px;
}

.btn-danger, .btn-danger.disabled, .btn-danger:disabled {
    background-color: #dc0808!important;
    border-color: #dc0808!important;
}

 .filter-block h4 {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    color:#ffffffcc;
}

.filter-block ul li:nth-child(n+2){

    margin-top:15px;
}
.filter-block ul li .form-check {
    margin-bottom: 0;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
}
.form-check-input {
    background-color: #151122;
}

.form-check-input[type=checkbox] {
    border-radius: 0.25em;
}
.form-check .form-check-input {
    float: left;
    margin-left: -1.5em;
    box-shadow:none;
}

.filter-block ul li .form-check label {
    margin-bottom: 0;
    vertical-align: middle;
    font-size:14px;
}

.filter-block ul li {
    color: #9993b4;
}

.form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
}

.form-check-input:checked[type=checkbox] {
 background-color:#534686 ;

}

.vue-feather {
    display: inline-block;
    overflow: hidden;
    vertical-align: -3px;
}
ul.pro-services li svg {
    color: #534686;
    margin-right: 24px ;
}

ul.pro-services li h5 {
    font-size: 16px;
    margin-bottom: 5px;
    letter-spacing: .5px;
    font-weight: 500;
    line-height: 1.2;   
    color:#fff;
}

ul.pro-services li p {
    font-size: 14px;
    margin-bottom:0px;
    color: hsla(0,0%,100%,.8);
}

ul.pro-services li:nth-child(n+2) {
    margin-top: 20px;
}



.product-page-main {
    padding: 30px;
}

.border-tab.nav-tabs {
    border-bottom: 1px solid #2e2846;
}


.border-tab.nav-tabs .nav-item .nav-link {
    font-size: 16px;
    color: hsla(0,0%,100%,.8);
    text-align: center;
    padding: 10px 25px;
    border: none;
    text-transform: uppercase;
    font-weight: 500;
    transition: .3s;
}
 .product-page-main .border-tab.nav-tabs .nav-item .nav-link.active {
    color: #fff!important;
    background-color: #534686;
    border-bottom: none;
 
}

.product-page-main p {
    color: hsla(0,0%,100%,.8);
    font-size: 15px;
}

.m-t-20 {
    margin-top: 20px!important;
}








@media all  and (min-width:320px) and (max-width:767px){
  
  
.product-page-main .border-tab.nav-tabs .nav-item .nav-link {
    padding: 8px 18px;
    font-size: 14px;
}




.product-page-main {
    padding: 15px;
}
.card-body{

    padding:20px;
}


}
@media only screen  and (max-width:1199px){
    .pro-slide-right{

display:none;
}
}

@media only screen  and (max-width:575px){


    .border-tab.nav-tabs 
 {
   display: block; 
}
.border-tab.nav-tabs .nav-item{
display:block;
width:100%
}

.product-page-details {
    display: block;
}

.product-page-main .pro-group .btn {
    padding: 7px 15px;
    font-size: 12px;
}

.product-social li a {
    width: 30px;
    height: 30px;
    font-size: 13px;
}

.product-page-main .pro-group .btn:nth-child(n+2) {
    margin-top: 5px;
}
 ul.pro-services li h5 {
    margin-bottom: 0;
}
}

</style>
