<template>
<div>
    <div class="container-fluid">
        <div class="row page-title align-item-center py-4">
            <div class="col-6">
                <div>
                    <h4 class="mb-0">{{ this.$route.name }} </h4>
                </div>
            </div>

            <div class="col-6">
                <ol class="breadcrumb d-flex justify-content-end">
                    <li class="breadcrumb-item">
                        <img src="../../assets/default/home.svg" alt="home" />
                    </li>
                   
                    <li class="breadcrumb-item ">{{ this.$route.name }}</li>
                </ol>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header pb-0">
                        <h3>Payment history</h3>
                    </div>
                    <div class="card-body">
                        <div class="payment-history table-responsive">
                            <table class="table display dataTable text-nowrap" id="basic-1">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-center">Product</th>
                                        <th scope="col">Product name</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Color</th>
                                        <th scope="col">Article number</th>
                                        <th scope="col">Units</th>
                                        <th scope="col">Price</th>
                                        <th scope="col"><img src="../../assets/product/orderdetail/downarrow.svg"/></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail1.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Women's Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Processing</div>
                                            </div>
                                        </td>
                                        <td>M</td>
                                        <td>White</td>
                                        <td>4215738</td>
                                        <td>1</td>
                                        <td>60$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail2.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Denim Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Processing</div>
                                            </div>  
                                        </td>
                                        <td>L</td>
                                        <td>Blue</td>
                                        <td>8562595</td>
                                        <td>1</td>
                                        <td>50$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail3.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Wonder Skirt</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Processing</div>
                                            </div>
                                        </td>
                                        <td>XL</td>
                                        <td>Red</td>
                                        <td>8521475</td>
                                        <td>2</td>
                                        <td>21$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail4.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Roadster</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Processing</div>
                                            </div>
                                        </td>
                                        <td>M</td>
                                        <td>Brown</td>
                                        <td>9632587</td>
                                        <td>2</td>
                                        <td>20$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail4.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Women T-shirt</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Processing</div>
                                            </div>
                                        </td>
                                        <td>XXL</td>
                                        <td>Brown</td>
                                        <td>7896541</td>
                                        <td>1</td>
                                        <td>10$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail6.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Fancy Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Processing</div>
                                            </div>
                                        </td>
                                        <td>L</td>
                                        <td>Light gray</td>
                                        <td>8547692</td>
                                        <td>1</td>
                                        <td>26$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail2.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Men's Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Processing</div>
                                            </div>
                                        </td>
                                        <td>M</td>
                                        <td>Blue</td>
                                        <td>3654128</td>
                                        <td>1</td>
                                        <td>30$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail4.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Women Trecksuit</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Processing</div>
                                            </div>
                                        </td>
                                        <td>M</td>
                                        <td>Pink</td>
                                        <td>4254178</td>
                                        <td>1</td>
                                        <td>40$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail3.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Women's Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Processing</div>
                                            </div>
                                        </td>
                                        <td>XL</td>
                                        <td>White</td>
                                        <td>1025698</td>
                                        <td>1</td>
                                        <td>55$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail5.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Denim Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Shipped</div>
                                            </div>
                                        </td>
                                        <td>XXL</td>
                                        <td>Blue</td>
                                        <td>3604589</td>
                                        <td>2</td>
                                        <td>10$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail6.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Wonder Skirt</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Shipped</div>
                                            </div>
                                        </td>
                                        <td>L</td>
                                        <td>Red</td>
                                        <td>7539510</td>
                                        <td>2</td>
                                        <td>30$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail1.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Roadster</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Shipped</div>
                                            </div>
                                        </td>
                                        <td>L</td>
                                        <td>Brown</td>
                                        <td>3579512</td>
                                        <td>1</td>
                                        <td>40$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail6.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Women T-shirt</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Shipped</div>
                                            </div>
                                        </td>
                                        <td>M</td>
                                        <td>Brown</td>
                                        <td>4561238</td>
                                        <td>1</td>
                                        <td>70$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail4.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Fancy Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Shipped</div>
                                            </div>
                                        </td>
                                        <td>M</td>
                                        <td>Light gray</td>
                                        <td>1031548</td>
                                        <td>1</td>
                                        <td>75$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail1.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Men's Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Shipped</div>
                                            </div>
                                        </td>
                                        <td>XXL</td>
                                        <td>Blue</td>
                                        <td>5689145</td>
                                        <td>1</td>
                                        <td>78$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail1.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Women Trecksuit</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Shipped</div>
                                            </div>
                                        </td>
                                        <td>XL</td>
                                        <td>Pink</td>
                                        <td>6325147</td>
                                        <td>2</td>
                                        <td>85$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail1.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Women's Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Shipped</div>
                                            </div>
                                        </td>
                                        <td>M</td>
                                        <td>White</td>
                                        <td>5689451</td>
                                        <td>1</td>
                                        <td>60$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail1.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Denim Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Shipped</div>
                                            </div>
                                        </td>
                                        <td>L</td>
                                        <td>Blue</td>
                                        <td>3625147</td>
                                        <td>1</td>
                                        <td>38$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail1.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Wonder Skirt</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Cancelled</div>
                                            </div>
                                        </td>
                                        <td>M</td>
                                        <td>Red</td>
                                        <td>6554988</td>
                                        <td>1</td>
                                        <td>46$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail2.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Roadster</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Cancelled</div>
                                            </div>
                                        </td>
                                        <td>XL</td>
                                        <td>Brown</td>
                                        <td>3254986</td>
                                        <td>2</td>
                                        <td>96$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail4.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Women T-shirt</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Cancelled</div>
                                            </div>
                                        </td>
                                        <td>M</td>
                                        <td>Brown</td>
                                        <td>5632147</td>
                                        <td>1</td>
                                        <td>78$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail3.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Fancy Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Cancelled</div>
                                            </div>
                                        </td>
                                        <td>L</td>
                                        <td>Light gray</td>
                                        <td>3258694</td>
                                        <td>1</td>
                                        <td>41$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail5.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Men's Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Cancelled</div>
                                            </div>
                                        </td>
                                        <td>XXL</td>
                                        <td>Blue</td>
                                        <td>4536987</td>
                                        <td>1</td>
                                        <td>12$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail6.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Women Trecksuit</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Cancelled</div>
                                            </div>
                                        </td>
                                        <td>XL</td>
                                        <td>Pink</td>
                                        <td>3021589</td>
                                        <td>2</td>
                                        <td>36$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail2.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Women's Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Cancelled</div>
                                            </div>
                                        </td>
                                        <td>L</td>
                                        <td>White</td>
                                        <td>8520369</td>
                                        <td>1</td>
                                        <td>51$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail1.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Denim Jacket</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Cancelled</div>
                                            </div>
                                        </td>
                                        <td>M</td>
                                        <td>Blue</td>
                                        <td>4741025</td>
                                        <td>2</td>
                                        <td>58$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><a href="/koho/ecommerce/product/page/1" class=""><img class="img-fluid img-30" src="../../assets/product/orderdetail/orderdetail5.jpg" alt="#"></a></td>
                                        <td>
                                            <div class="product-name"><a href="javascript:void(0)">Wonder Skirt</a>
                                                <div class="order-process"><span class="order-process-circle"></span>Cancelled</div>
                                            </div>
                                        </td>
                                        <td>XXL</td>
                                        <td>Red</td>
                                        <td>2563987</td>
                                        <td>1</td>
                                        <td>62$</td>
                                        <td><i data-name="more-vertical" data-tags="ellipsis" data-type="more-vertical" class="vue-feather vue-feather--more-vertical"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical vue-feather__content">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
            <div class="card-body">
                
          
            
                <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options" @paginate="" />

               
        </div>
         </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    name: 'PaymentHistory',
    data(){

return{

    page: 1,
      recordData: 500,
      perPageData: 10,
      options: {
          edgeNavigation: true,
          chunksNavigation: false,
          chunk: 5,
          texts: false,
          format: false,

      }, 
}
}
}
</script>

<style scoped>
.card {
    margin-bottom: 30px;
    transition: all .3s ease;   
    letter-spacing: .5px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(8,21,66,.05);
    background-color: #1d1930;
    border: 1px solid #2e2846!important;
}

.card-header {
    

    padding: 25px;
    border-bottom: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
}

.card-body {
    padding: 25px;
    background-color: transparent;
}

 h3 {
    font-size: 20px;
    font-weight: 500;
    color: hsla(0,0%,100%,.8)!important;
    letter-spacing: .5px;
    
    line-height: 1.2;

}

table.dataTable:not(.fixedHeader-locked):not(.fixedHeader-floating) {
    width: 100%!important;
}

table.dataTable {
    border-collapse: collapse!important;
    margin-top: 0!important;
}
.table {
    margin-bottom: 0;
    text-align:center
}
thead{
    border-color: #2e2846;
}

thead tr{

    
border-color: #2e2846;

}



.payment-history table thead tr th {
    background-color: #151122;
    color: hsla(0,0%,100%,.8);
    vertical-align: middle;
    border: 2px solid rgba(83,70,134,.102);
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    min-width: 170px;
    border-top: none!important;
}

tbody{
    border-color:#2e2846;
}

tbody tr {
    border-color: #2e2846;
}

table.dataTable tbody tr:nth-of-type(odd) {
    background-color: #1f232b;
}

td{
    color: hsla(0,0%,100%,.8);
    border-color: #2e2846;
    font-weight: 600;
    vertical-align: middle;
    padding: 0.75rem;
    font-size:14px;
}

a {
    color: #534686;
    text-decoration: none;
    letter-spacing: 1px;    
}

.img-30 {
    width: 30px!important;
}

.payment-history table tbody tr td .product-name a {
    font-size: 15px;
    color: #898989;
}
.payment-history table tbody tr td .product-name .order-process {
    font-size: 13px;
    padding-left: 15px;

}
.payment-history table tbody tr td .product-name .order-process .order-process-circle {
    position: relative;
}

.payment-history table tbody tr td .product-name .order-process .order-process-circle:before {
    position: absolute;
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #898989;
    left: -15px;
    top: 4px;
}
</style>
