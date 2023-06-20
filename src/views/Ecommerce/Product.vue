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

    <div class="container-fluid product-wrapper">
        <div class="product-grid">
            <div class="feature-products">
                <div class="row m-b-10">
                    <div class="col-md-3 col-sm-2 products-total">
                        <div class="square-product-setting d-inline-block">
                            <a class="icon-grid grid-layout-view" type="button" @click="changeclassfirst('col-xl-3 col-md-6')"><i data-name="grid" data-tags="" data-type="grid" class="vue-feather vue-feather--grid">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid vue-feather__content">
                                        <rect x="3" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="14" width="7" height="7"></rect>
                                        <rect x="3" y="14" width="7" height="7"></rect>
                                    </svg></i>

                            </a>
                        </div>
                        <div class="square-product-setting d-inline-block disp-small">
                            <a class="icon-grid m-0 list-layout-view" type="button" @click="changelistview('list-view')"><i data-name="list" data-tags="options" data-type="list" class="vue-feather vue-feather--list"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list vue-feather__content">
                                        <line x1="8" y1="6" x2="21" y2="6"></line>
                                        <line x1="8" y1="12" x2="21" y2="12"></line>
                                        <line x1="8" y1="18" x2="21" y2="18"></line>
                                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                    </svg></i></a></div>
                        <div class="d-none-productlist filter-toggle">
                            <h4 class="mb-0">Filters<span class="ms-2"><i class="vue-feather vue-feather--chevron-down toggle-data" data-name="chevron-down" data-tags="expand" data-type="chevron-down"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down vue-feather__content">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg></i></span></h4>
                        </div>
                        <div class="grid-options d-inline-block">
                            <ul>
                                <li @click="changeclassfirst('col-md-6')" type="button"><a class="product-2-layout-view" data-original-title="" title=""><span class="line-grid line-grid-1 bg-primary"></span><span class="line-grid line-grid-2 bg-primary"></span></a></li>
                                <li @click="changeclassfirst('col-lg-4 col-md-6')" type="button"><a class="product-3-layout-view" data-original-title="" title=""><span class="line-grid line-grid-3 bg-primary"></span><span class="line-grid line-grid-4 bg-primary"></span><span class="line-grid line-grid-5 bg-primary"></span></a></li>
                                <li @click="changeclassfirst('col-xl-3 col-md-6')" type="button"><a class="product-4-layout-view" data-original-title="" title=""><span class="line-grid line-grid-6 bg-primary"></span><span class="line-grid line-grid-7 bg-primary"></span><span class="line-grid line-grid-8 bg-primary"></span><span class="line-grid line-grid-9 bg-primary"></span></a></li>
                                <li @click="changeclassfirst('col-xl-2 col-lg-4 col-md-6')" type="button"><a class="product-6-layout-view" data-original-title="" title=""><span class="line-grid line-grid-10 bg-primary"></span><span class="line-grid line-grid-11 bg-primary"></span><span class="line-grid line-grid-12 bg-primary"></span><span class="line-grid line-grid-13 bg-primary"></span><span class="line-grid line-grid-14 bg-primary"></span><span class="line-grid line-grid-15 bg-primary"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-10 text-end"><span class="f-w-600 m-r-5 showproduct">Showing Products 1 - 24 Of 200 Results</span>
                        <div class="select2-drpdwn-product select-options d-inline-block"><select class="form-control btn-square" name="select">
                                <option value="low">Lowest Prices</option>
                                <option value="high">Highest Prices</option>
                                <option value="a-z">Featured</option>
                            </select></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="pro-filter-sec">
                            <div class="product-sidebar">
                                <div class="filter-section">
                                    <div class="card">
                                        <div class="card-header" type="button" @click="openfilter()">
                                            <h4 class="mb-0 f-w-600">Filters<span class="pull-right"><img src="../../assets/product/downarrow.svg" alt="down" class="filter-down toggle-data" /></span></h4>
                                        </div>
                                        <div class="left-filter" :class="openfilterside ? 'open':''" >
                                            <div class="card-body filter-cards-view animate-chk">
                                                <div class="product-filter">
                                                    <h6 class="f-w-600">category</h6>
                                                    <div class="checkbox-animated mt-0">
                                                        <ul>
                                                            <li class="filterlist" v-for="(list,index) in producttitle" :key="index" type="button" @click="filterdata(list.title)">
                                                                {{ list.title }}
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                                <div class="product-filter slider-product">
                                                    <h6 class="f-w-600">Colors</h6>
                                                    <div class="color-selector">
                                                        <ul>
                                                            <li class="active white"></li>
                                                            <li class="bg-primary" value="0"></li>
                                                            <li class="bg-secondary"></li>
                                                            <li class="bg-success"></li>
                                                            <li class="bg-warning"></li>
                                                            <li class="bg-danger"></li>
                                                            <li class="blue"></li>
                                                            <li class="red"></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="product-filter pb-0">
                                                    <h6 class="f-w-600"> price <input type="range" min="100.00" max="96.00"></h6>
                                                </div>
                                                <div class="product-filter pb-0 new-products">
                                                    <div class="owl-carousel owl-theme" id="testimonial">

                                                        <swiper :navigation="true" :modules="modules" class="mySwiper">
                                                            <swiper-slide>
                                                                <div class="item">
                                                                    <div class="product-box row mt-2">
                                                                        <div class="product-img col-md-5"><img class="img-fluid img-100" src="../../assets/product/productside1.jpg" alt="" data-original-title="" title=""></div>
                                                                        <div class="product-details col-md-7 text-start">
                                                                            <span><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /></span>
                                                                            <p class="mb-0">Fancy Shirt</p>
                                                                            <div class="product-price">$100.00</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product-box row mt-2">
                                                                        <div class="product-img col-md-5"><img class="img-fluid img-100" src="../../assets/product/productside2.jpg" alt="" data-original-title="" title=""></div>
                                                                        <div class="product-details col-md-7 text-start"><span>
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                            </span>
                                                                            <p class="mb-0">Fancy Shirt</p>
                                                                            <div class="product-price">$100.00</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product-box row mt-2">
                                                                        <div class="product-img col-md-5"><img class="img-fluid img-100" src="../../assets/product/productside3.jpg" alt="" data-original-title="" title=""></div>
                                                                        <div class="product-details col-md-7 text-start"><span><img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" /></span>
                                                                            <p class="mb-0">Fancy Shirt</p>
                                                                            <div class="product-price">$100.00</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </swiper-slide>
                                                            <swiper-slide>
                                                                <div class="item">
                                                                    <div class="product-box row mt-2">
                                                                        <div class="product-img col-md-5"><img class="img-fluid img-100" src="../../assets/product/productside1.jpg" alt="" data-original-title="" title=""></div>
                                                                        <div class="product-details col-md-7 text-start">
                                                                            <span><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /></span>
                                                                            <p class="mb-0">Fancy Shirt</p>
                                                                            <div class="product-price">$100.00</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product-box row mt-2">
                                                                        <div class="product-img col-md-5"><img class="img-fluid img-100" src="../../assets/product/productside2.jpg" alt="" data-original-title="" title=""></div>
                                                                        <div class="product-details col-md-7 text-start"><span>
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                            </span>
                                                                            <p class="mb-0">Fancy Shirt</p>
                                                                            <div class="product-price">$100.00</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product-box row mt-2">
                                                                        <div class="product-img col-md-5"><img class="img-fluid img-100" src="../../assets/product/productside3.jpg" alt="" data-original-title="" title=""></div>
                                                                        <div class="product-details col-md-7 text-start"><span><img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" /></span>
                                                                            <p class="mb-0">Fancy Shirt</p>
                                                                            <div class="product-price">$100.00</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </swiper-slide>
                                                            <swiper-slide>
                                                                <div class="item">
                                                                    <div class="product-box row mt-2">
                                                                        <div class="product-img col-md-5"><img class="img-fluid img-100" src="../../assets/product/productside1.jpg" alt="" data-original-title="" title=""></div>
                                                                        <div class="product-details col-md-7 text-start">
                                                                            <span><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /><img src="../../assets/product/star.svg" /></span>
                                                                            <p class="mb-0">Fancy Shirt</p>
                                                                            <div class="product-price">$100.00</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product-box row mt-2">
                                                                        <div class="product-img col-md-5"><img class="img-fluid img-100" src="../../assets/product/productside2.jpg" alt="" data-original-title="" title=""></div>
                                                                        <div class="product-details col-md-7 text-start"><span>
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                            </span>
                                                                            <p class="mb-0">Fancy Shirt</p>
                                                                            <div class="product-price">$100.00</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product-box row mt-2">
                                                                        <div class="product-img col-md-5"><img class="img-fluid img-100" src="../../assets/product/productside3.jpg" alt="" data-original-title="" title=""></div>
                                                                        <div class="product-details col-md-7 text-start"><span><img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" />
                                                                                <img src="../../assets/product/star.svg" /></span>
                                                                            <p class="mb-0">Fancy Shirt</p>
                                                                            <div class="product-price">$100.00</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </swiper-slide>

                                                        </swiper>
                                                    </div>
                                                </div>
                                                <div class="product-filter text-center"><img class="img-fluid banner-product" src="../../assets/product/productside2.jpg" alt="" data-original-title="" title=""></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-search">
                                <form>
                                    <div class="input-group m-0"><input class="form-control bg-transparent border-0 shadow-none" type="search" placeholder="Search@" aria-describedby="basic-addon2"><button type="button" class="btn bg-transparent border-0 shadow-none" id="basic-addon2"><img src="../../assets/product/search.svg" alt="search" style="width:15px;" /></button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-wrapper-grid" :class="changelist">
                <div class="row">
                    <div :class="add" v-for="(productlist, index) in Product" :key="index">
                        <div class="card">
                            <div class="product-box">
                                <div class="product-img">
                                    <div class="ribbon ribbon-danger">Sale</div><img class="img-fluid" :src="require(`../../assets/product/${productlist.img}`)" alt="">
                                    <div class="product-hover">
                                        <ul><a href="/koho/ecommerce/cart" class="">
                                                <li><img src="../../assets/product/cart.svg" /></li>
                                            </a>
                                            <li data-bs-toggle="modal" data-bs-target="#exampleModal" :checked="checked" @click="modaldata(productlist)"> <img src="../../assets/product/eye.svg" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product-details"><a href="/koho/ecommerce/product/page/1" class="">
                                        <h4>{{productlist.mainheading}}</h4>
                                    </a>
                                    <p>{{productlist.subpara}}</p>
                                    <div class="product-price"> ${{productlist.price}}<del>${{productlist.delprice}}</del></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="modal fade" id="exampleModal" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header ">
                            <div class="product-box row">
                                <div class="product-img col-lg-6">
                                    <img v-if="modal_data != ''" class="img-fluid" :src="require(`../../assets/product/${modal_data?.img}`)" alt="">
                                </div>
                                <div class="product-details col-lg-6 text-start"><a href="/koho/ecommerce/product/page/undefined" class="">

                                        <h4> {{modal_data != '' ? modal_data.mainheading : '' }}</h4>
                                    </a>
                                    <div class="product-price"> ${{modal_data != '' ? modal_data.price : '' }}<del>${{modal_data != '' ? modal_data.delprice : '' }}</del></div>
                                    <div class="product-view">
                                        <h6 class="f-w-600">Product Details</h6>
                                        <p class="mb-0"> Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo. </p>
                                    </div>
                                    <div class="product-size">
                                        <ul class="d-flex align-items-center gap-2 mb-2">
                                            <li><button class="btn btn-outline-light" type="button" data-bs-original-title="" title="">M</button></li>
                                            <li><button class="btn btn-outline-light" type="button" data-bs-original-title="" title="">L</button></li>
                                            <li><button class="btn btn-outline-light" type="button" data-bs-original-title="" title="">Xl</button></li>
                                        </ul>
                                    </div>
                                    <div class="product-qnty">
                                        <h6 class="f-w-600">Quantity</h6>
                                        <fieldset>
                                            <div class="input-group bootstrap-touchspin border-0 bg-transparent">
                                                <button @click="decrement()" class="btn btn-primary btn-square bootstrap-touchspin-down" type="button" data-bs-original-title="" title="">
                                                    <img src="../../assets/product/minus.svg" />
                                                </button>
                                                <input class="touchspin1 text-center" disabled v-model="quantity" type="text" />
                                                <button @click="increment()" class="btn btn-primary btn-square bootstrap-touchspin-up" type="button" data-bs-original-title="" title="">
                                                    <img src="../../assets/product/plus.svg" />
                                                </button>
                                            </div>
                                        </fieldset>
                                        <div class="addcart-btn mt-3"><a href="/koho/ecommerce/cart" class=""><button class="btn btn-primary m-r-10" type="button" data-bs-dismiss="modal" data-original-title="btn btn-info-gradien" title="">Add To Cart</button></a><a href="/koho/ecommerce/checkout" class="btn btn-primary cart-btn-transform">
                                                <div data-bs-dismiss="modal">Buy Now</div>
                                            </a></div>
                                    </div>
                                </div>
                            </div><button class="btn-close" type="button" data-bs-dismiss="modal"></button>
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
import {
    Navigation
} from 'swiper';
import 'swiper/css';
export default {
    name: 'Product',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },

    data() {

        return {
            add: 'col-xl-3 col-md-6',
            openfilterside: false,
            quantity: 1,

            Product: [{
                    img: 'productside2.jpg',
                    mainheading: "Denim Jacket",
                    subpara: "Denim Regular Men's Jacket",
                    price: '120.00',
                    delprice: '150.00'

                },
                {
                    img: 'productside2.jpg',
                    mainheading: "Denim Jacket",
                    subpara: "Denim Regular Men's Jacket",
                    price: '120.00',
                    delprice: '150.00'

                },

                {
                    img: 'productside3.jpg',
                    mainheading: "Women's Coat",
                    subpara: "Cotton Blend Women's Coat",
                    price: '220.00',
                    delprice: '120.00'

                },

                {
                    img: 'productside5.jpg',
                    mainheading: "Women's T-Shirt",
                    subpara: "Denim Regular Men's Shirt",
                    price: '140.00',
                    delprice: '80.00'

                },

                {
                    img: 'productside6.jpg',
                    mainheading: "Men's Shirt",
                    subpara: "Solid Men's Shirt",
                    price: '70.00',
                    delprice: '80.00'

                },

                {
                    img: 'productside7.jpg',
                    mainheading: "Track Suit",
                    subpara: "Cotton Regular Fit Men's Shirt",
                    price: '120.00',
                    delprice: '150.00'

                },

                {
                    img: 'productside8.jpg',
                    mainheading: "Women's Jacket",
                    subpara: "Cotton Regular Fit Women's Track Suit",
                    price: '96.00',
                    delprice: '78.00'

                },

                {
                    img: 'productside9.jpg',
                    mainheading: "Men's Jacket",
                    subpara: "Cotton Regular Fit Men's Shirt",
                    price: '152.00',
                    delprice: '125.00'

                },

                {
                    img: 'productside2.jpg',
                    mainheading: "Women's Coat",
                    subpara: "Denim Regular Men's Jacket",
                    price: '87.00',
                    delprice: '93.00'

                },

                {
                    img: 'productside3.jpg',
                    mainheading: "Women's T-Shirt",
                    subpara: "Cotton Blend Women's Coat",
                    price: '74.00',
                    delprice: '84.00'

                },

                {
                    img: 'productside5.jpg',
                    mainheading: "Women's T-Shirt",
                    subpara: "Solid Women's T-shirt",
                    price: '320.00',
                    delprice: '360.00'

                },

                {
                    img: 'productside6.jpg',
                    mainheading: "Women's T-Shirt",
                    subpara: "Denim Regular Men's Shirt",
                    price: '87.00',
                    delprice: '102.00'

                },
                {
                    img: 'productside5.jpg',
                    mainheading: "Women's T-Shirt",
                    subpara: "Solid Women's T-shirt",
                    price: '320.00',
                    delprice: '360.00'

                },

                {
                    img: 'productside2.jpg',
                    mainheading: "Women's Coat",
                    subpara: "Denim Regular Men's Jacket",
                    price: '87.00',
                    delprice: '93.00'

                },

                {
                    img: 'productside9.jpg',
                    mainheading: "Men's Jacket",
                    subpara: "Cotton Regular Fit Men's Shirt",
                    price: '152.00',
                    delprice: '125.00'

                },

                {
                    img: 'productside5.jpg',
                    mainheading: "Women's T-Shirt",
                    subpara: "Solid Women's T-shirt",
                    price: '320.00',
                    delprice: '360.00'

                },
                {
                    img: 'productside9.jpg',
                    mainheading: "Men's Jacket",
                    subpara: "Cotton Regular Fit Men's Shirt",
                    price: '152.00',
                    delprice: '125.00'

                },

            ],

            modal_data: '',
            changelist: '',
            producttitle: [{

                    title: 'Denim Jacket'
                },

                {

                    title: "Women's Coat"
                },

                {

                    title: "Women's T-Shirt"
                },

                {

                    title: "Men's Shirt"
                },

                {

                    title: "Track Suit"
                },

                {

                    title: "Women's Jacket"
                },

                {

                    title: "Men's Jacket"
                }

            ],

        }

    },
    methods: {

        openfilter() {
            this.openfilterside = !this.openfilterside

        },

        increment() {

            this.quantity = this.quantity + 1
        },

        decrement() {
            if (this.quantity > 0) {
                this.quantity = this.quantity - 1
            }
        },

        modaldata(a) {

            this.modal_data = a;
            this.quantity = 1
        },

        changeclassfirst(addclass) {

            this.add = addclass

            this.changelist = ''

        },

        changelistview(b) {

            this.changelist = b

        },

        
        filterdata(item) {

          
            if (!item) {
                return this.Product;

            } else {
                let val = this.Product ?.filter((e) => e ?.mainheading == item)
                return this.Product = val;
            }

            }

    },

    

    

}
</script>

<style scoped>
.product-wrapper-grid.list-view .product-box {
    display: flex;
    align-items: center;
}

.product-wrapper-grid.list-view [class*=col-] {
    width: 100%;
}

.product-wrapper-grid.list-view .product-box .product-img {
    width: 30%;
}

.page-title h4 {

    font-size: 24px;
    color: var(--white);
}

.m-b-10 {
    margin-bottom: 10px !important;
}

.products-total {
    display: flex;
    align-items: center;
}

.square-product-setting {
    height: 36px;
    vertical-align: middle;
}

.square-product-setting .icon-grid {
    background-color: #1d1930;
    padding: 7px;

    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
}

.square-product-setting a {
    color: #2b2b2b;

}

a {
    text-decoration: none;
    letter-spacing: 1px;
    color: #534686;
}

.vue-feather {
    display: inline-block;
    overflow: hidden;
    vertical-align: -3px;
}

.square-product-setting .icon-grid svg {
    color: hsla(0, 0%, 100%, .8);
    width: 20px;
    height: 20px;
}

svg:not(:root) {
    overflow: hidden;
}

.vue-feather__content {
    display: block;

}

.products-total>div:nth-child(n+2) {
    margin-left: 10px;
}

.d-none-productlist {
    display: none;
}

h4 {

    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.2;
    color: hsla(0, 0%, 100%, .8);
}

.toggle-data {
    cursor: pointer;
}

.grid-options,
.products-total>div:nth-child(n+2) {
    margin-left: 10px;
}

.grid-options {
    height: 33px;
}

ul {
    padding-left: 0;
    list-style-type: none;
    margin-bottom: 0;

    margin-top: 0;
}

.grid-options ul li a {
    position: relative;
}

.grid-options ul li a .line-grid {
    background-color: #534686;
}

.grid-options ul li a .line-grid {
    position: absolute;
    width: 4px;
    height: 15px;
    top: 9px;
}

.bg-primary {
    background-color: #534686 !important;
    color: #fff;
}

.grid-options ul li a .line-grid-1 {
    left: 12px;
}

.grid-options ul li a .line-grid-2 {
    left: 18px;
}

.grid-options ul li a .line-grid-3 {
    left: 36px;
}

.grid-options ul li a .line-grid-4 {
    left: 42px;
}

.grid-options ul li a .line-grid-5 {
    left: 48px;
}

.grid-options ul li a .line-grid-6 {
    left: 66px;
}

.grid-options ul li a .line-grid-7 {
    left: 72px;
}

.grid-options ul li a .line-grid-8 {
    left: 78px;
}

.grid-options ul li a .line-grid-9 {
    left: 84px;
}

.grid-options ul li a .line-grid-10 {
    left: 103px;
}

.grid-options ul li a .line-grid-11 {
    left: 109px;
}

.grid-options ul li a .line-grid-12 {
    left: 115px;
}

.grid-options ul li a .line-grid-13 {
    left: 121px;
}

.grid-options ul li a .line-grid-14 {
    left: 127px;
}

.grid-options ul li a .line-grid-15 {
    left: 133px;
}

.m-r-5 {
    margin-right: 5px;
}

.form-control {

    color: hsla(0, 0%, 100%, .8);
    border: 1px solid #2e2846;
    font-size: 14px;

}

.select2-drpdwn-product .form-control {
    background-color: #1d1930 !important;

    margin-bottom: 10px;
    box-shadow: none;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.showproduct {

    font-size: 14px;
    color: #ffffffcc;
}

.card {

    background-color: #1d1930;
    border: 1px solid #2e2846 !important;
    transition: all .3s ease;
    margin-bottom: 30px;

    letter-spacing: .5px;

    box-shadow: 0 0 20px rgba(8, 21, 66, .05);
}

.card .card-header {

    background-color: transparent;
    border-bottom: none;
    position: relative;
}

.pro-filter-sec {
    display: flex;
    justify-content: space-between;
}

.pro-filter-sec .product-sidebar {
    width: 375px;
    min-width: 375px;
    margin-right: 30px;
}

.pro-filter-sec .product-sidebar .card {
    border-radius: 5px;
}

.product-sidebar .filter-section .card .card-header {
    padding: 16px 30px;
    border-radius: 5px;
}

.product-sidebar .filter-section .card .card-header h4 {
    position: relative;
}

.product-sidebar .filter-section .card .card-header h4 .pull-right .filter-down {
    position: absolute;
    top: -3px;
    right: -1px;
    width: 22px;

    text-align: right;
    cursor: pointer;
}

.product-sidebar .filter-section .card .left-filter {
    background-color: #1d1930;
    border-color: #2e2846;
}

.product-sidebar .filter-section .card .left-filter {
    z-index: 0;
    opacity: 0;
    visibility: hidden;
    height: 0;
    transition: .3s;
}

.product-sidebar .filter-section .card .left-filter.open {
    z-index: 1;
    opacity: 1;
    visibility: visible;
    position: absolute;
    width: 100%;
    top: 53px;
    height: auto;
    border: 1px solid #2e2846;
    ;
    transition: 0.3s
}

.product-sidebar .filter-section .card .left-filter .card-body {
    padding: 20px;

}

.product-filter h6 {
    margin-bottom: 15px;
    font-size: 18px;
    letter-spacing: .5px;
    line-height: 1.2;
    color: #ffffffcc;
}

.filter-cards-view .checkbox-animated {

    margin-bottom: 30px;
}

.product-filter .checkbox-animated label {
    font-weight: 500;
    color: #9993b4;
    font-size: 14px;
}

.animate-chk label:last-child {
    margin-bottom: 0;
}

.animate-chk label {
    line-height: 1.6;
    cursor: pointer;
}

.checkbox_animated {
    cursor: pointer;
    position: relative;
    margin: 0 1rem 0 0;
}

[type=checkbox] {
    box-sizing: border-box;
    padding: 0;
}

.filterlist {

    padding: 10px;
    font-size: 14px;
    color: #534686;
}

.checkbox_animated:before {
    transition: transform .4s cubic-bezier(.45, 1.8, .5, .75);
    transform: rotate(-45deg) scale(0);
    content: "";
    position: absolute;
    left: 0.25rem;
    top: 0.225rem;
    z-index: 1;
    width: 0.75rem;
    height: 0.375rem;
    border: 2px solid #534686;
    border-top-style: none;
    border-right-style: none;
}

.checkbox_animated:checked:before {
    transform: rotate(-45deg) scale(1);
}

.checkbox_animated:after {

    content: "";
    position: absolute;
    top: -0.2rem;
    left: 0;
    width: 1.3rem;
    height: 1.3rem;
    background: #151122;
    border: 2px solid #151122;
    cursor: pointer;
}

.card .card-body {

    background-color: transparent;
}

.slider-product {
    border-top: 1px solid #151122;
    border-bottom: 1px solid #151122;
    padding: 15px 0;
    margin-bottom: 15px;
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

.color-selector ul li.white.active:before {
    color: #9993b4 !important;
}

.bg-primary {
    background-color: #534686 !important;
    color: #fff;
}

.bg-secondary {
    background-color: #f73164 !important;
    color: #fff;
}

.bg-success {
    background-color: #67c100 !important;
    color: #fff;
}

.bg-warning {
    background-color: #e56809 !important;
    color: #fff;
}

.bg-danger {
    background-color: #dc0808 !important;
    color: #fff;
}

.color-selector ul li.blue {
    background-color: #63b4f2;
}

.color-selector ul li.red {
    background-color: #ff647f;
}

.product-filter.new-products {
    margin-top: 20px;
}

.product-box {
    background-color: #1d1930;
    overflow: hidden;
    border-radius: 10px;
}

.product-box .product-img {
    position: relative;
}

.img-100 {
    width: 100px !important;
}

.product-box .product-details {
    padding: 25px;
}

.product-box .product-details span img {
    margin-right: 4px;

}

.filter-cards-view p {
    color: #b4b2ba;
    line-height: 1.6;
    letter-spacing: .02em;
    font-size: 13px;

}

.product-price {
    color: #b4b2ba;
    font-size: 16px;
    font-weight: 500;
}

.product-filter .banner-product {
    margin-top: 15px;
}

.pro-filter-sec .product-search {
    width: 100%;
}

.input-group {
    background-color: #151122;
    color: hsla(0, 0%, 100%, .8);
    border: 1px solid #2e2846;
    font-size: 14px;
    padding: 7px 15px;
    border-radius: 8px;
    box-shadow: none;

}

.input-group .form-control {

    color: hsla(0, 0%, 100%, .8);
}

/* product-wrapper-grid css start */

.product-wrapper .product-grid .product-wrapper-grid {
    margin-left: 0;
    transition: .3s;
}

.product-box {
    background-color: #1d1930;
    overflow: hidden;
    border-radius: 10px;
}

.product-box .product-img {
    position: relative;
}

.product-box .product-img .product-hover {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .2);

    opacity: 0;
    border-radius: 100%;
    transform: scale(0);
    transition: all .3s ease;
}

.product-box .product-img .product-hover ul {
    display: flex;
    align-items: center;
}

.product-box .product-img .product-hover ul li {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, .08);
    background-color: #fff;
    font-size: 18px;
    border-radius: 100%;
    line-height: 1.6;
    height: 45px;
    width: 45px;
    margin: 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.product-box .product-img .product-hover ul img {
    font-size: 14px;
}

.product-box .product-details {
    padding: 25px;
}

.product-box .product-details h4 {
    font-weight: 600;
    color: hsla(0, 0%, 100%, .8);
    font-size: 20px;
    line-height: 1;
    margin-bottom: 5px;
    text-transform: capitalize;
    letter-spacing: 1px;

}

.product-box .product-details p {

    font-size: 13px;
    color: #b4b2ba;
    line-height: 1.7;
    letter-spacing: .7px;
    margin-bottom: 5px;
}

.product-price {
    font-size: 16px;
    font-weight: 500;
    color: #b4b2ba;
}

.product-price del {
    color: #b4b2ba;
    margin-left: 15px;
    font-weight: 600;
    font-size: 14px;

}

.ribbon-danger {
    background: #dc0808;
}

.ribbon {
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    clear: left;
    position: absolute;
    top: 12px;
    left: 0;
    color: #fff;

}

.product-box:hover .product-hover {
    opacity: 1;
    border-radius: 0;
    transform: scale(1);
    transition: all .3s ease;
}

.product-box .product-img .product-hover ul li:hover {
    background-color: #534686;
    transition: all .3s ease;
}

.product-box .product-img .product-hover ul li:hover img {
    filter: invert(100%);
}

/* modal css start */

.modal.show .modal-dialog {
    transform: none;
}

.modal.fade .modal-dialog {
    transition: transform .3s ease-out;

}

.modal-content {
    background-color: #1d1930;
}

.modal-header {
    border-color: #2e2846;
}

.product-box .product-details h4 {
    font-weight: 600;
    color: hsla(0, 0%, 100%, .8);
    font-size: 20px;
    line-height: 1;
    margin-bottom: 5px;
    text-transform: capitalize;
}

.product-grid .modal .modal-header .product-box .product-details .product-view {
    padding: 10px 0;
    margin: 12px 0;
    border-top: 1px solid rgba(83, 70, 134, .2);
    border-bottom: 1px solid rgba(83, 70, 134, .2);
}

.product-box .product-details h6 {
    color: hsla(0, 0%, 100%, .8);
    text-transform: uppercase;
    margin-bottom: 10px;

    font-weight: 600;

    font-size: 12px;
    font-weight: 400;

    letter-spacing: .5px;
}

.btn-close {
    filter: brightness(.8) invert(1);
    box-shadow: none;
}

.modal-content .btn-close,
.modal-footer .btn-close,
.modal-header .btn-close {
    position: absolute;
    top: 30px;
    right: 25px;
}

.product-grid .modal .modal-header .product-box .product-details .product-size .btn {
    padding: 7px 14px;

    color: #534686;
    background-color: rgba(83, 70, 134, .1);
    border: none;
}

.btn-outline-light:hover {

    background-color: #dbdbdb !important;
    border-color: #dbdbdb !important;
}

.input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
}

.product-grid .modal .modal-header .product-box .product-details .product-qnty .btn-square {
    height: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
}

.touchspin1 {
    color: hsla(0, 0%, 100%, .8);
}

.product-grid .modal .modal-header .product-box .product-details .product-qnty .touchspin1 {
    width: 60px;
    height: 30px;
    background-color: rgba(83, 70, 134, .1);
    border: none;
}

.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.btn-square {
    border-radius: 0;
}

.btn-primary {
    font-size: 14px;
    color: #fff;
    background-color: #534686;
    border-color: #534686 !important;
    padding: 0.6rem 1.75rem;
    font-weight: 600;
    border-radius: 8px;
}

.m-r-10 {
    margin-right: 10px;
}

@media all and (min-width:1400px) and (max-width: 1600px) {
    .grid-options ul li:last-child {
        display: none;

    }

}

@media all and (min-width:1200px) and (max-width: 1399px) {
    .grid-options ul li:last-child {
        display: none;

    }

}

@media all and (min-width:992px) and (max-width: 1199px) {
    .grid-options ul li:last-child {
        display: none;

    }

    .grid-options ul li:nth-child(3) {
        display: none;
    }

    .pro-filter-sec .product-sidebar {
        width: 250px;
        min-width: 250px;

    }

    .new-products .owl-carousel .product-box.row>div {
        width: 100%;
    }
}

@media all and (min-width:768px) and (max-width: 991px) {

    .grid-options ul li:last-child {
        display: none;

    }

    .grid-options ul li:nth-child(3) {
        display: none;
    }

    .pro-filter-sec .product-sidebar {
        width: 250px;
        min-width: 250px;

    }

    .new-products .owl-carousel .product-box.row>div {
        width: 100%;
    }

    .product-wrapper-grid.list-view .product-box .product-img {
        width: 45%;
    }
}

@media all and (min-width:320px) and (max-width: 767px) {
    .grid-options ul li:last-child {
        display: none;

    }

    .product-wrapper-grid.list-view .product-box .product-img {
        width: 100%;
    }

    .disp-small {

        display: none !important;
    }

    .grid-options ul li:nth-child(3) {
        display: none;
    }

    .pro-filter-sec .product-sidebar {
        width: 250px;
        min-width: 250px;

    }

    .new-products .owl-carousel .product-box.row>div {
        width: 100%;
    }

    .grid-options ul li {
        display: none;
    }
}

@media only screen and (max-width: 575px) {
    .feature-products .text-end {
        text-align: left !important;
    }

    .pro-filter-sec {
        display: block;

    }

    .btn {
        padding: 8px 10px;
    }

    .pro-filter-sec .product-sidebar {
        width: 50%;

    }

    .pro-filter-sec .product-search {

        margin-bottom: 20px;
    }

    .product-box .product-details h6 {
        font-size: 14px;
        font-weight: 700;
    }

}

@media (max-width: 398px) {
    .btn-square {

        margin-top: 10px;
    }

    .touchspin1 {

        margin-top: 10px;
    }

}
</style>
