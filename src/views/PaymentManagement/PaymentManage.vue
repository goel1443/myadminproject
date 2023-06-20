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
    
        <div class="container-fluid list-products">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                       
                        <div class="card-body">
                            <div class="table-responsive product-table">
                                <table class="table dataTable display text-nowrap" id="basic-1">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Details</th>
                                            <th>Amount</th>
                                            <th>Stock</th>
                                            <th>Start date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="/koho/ecommerce/product/page/1" class=""><img src="../../assets/product/productlist/producttable1.png" alt=""></a></td>
                                            <td><a href="/koho/ecommerce/product/page/1" class="">
                                                    <h4>Green Jacket</h4>
                                                </a><span>Vida Loca - Green Denim Fit Men's Casual Shirt.</span></td>
                                            <td>$10</td>
                                            <td class="font-success">In Stock</td>
                                            <td>20/08/2023</td>
                                            <td><button class="btn btn-danger btn-xs me-1" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button><button class="btn btn-primary btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit</button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/koho/ecommerce/product/page/2" class=""><img src="../../assets/product/productlist/producttable2.png" alt=""></a></td>
                                            <td><a href="/koho/ecommerce/product/page/2" class="">
                                                    <h4>Sky Blue Shirt</h4>
                                                </a><span>Wild West - Sky Blue Cotton Blend Regular Fit Men's Formal Shirt.</span></td>
                                            <td>$12</td>
                                            <td class="font-primary">Low Stock</td>
                                            <td>12/04/2023</td>
                                            <td><button class="btn btn-danger btn-xs me-1" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button><button class="btn btn-primary btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit</button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/koho/ecommerce/product/page/3" class=""><img src="../../assets/product/productlist/producttable3.png" alt=""></a></td>
                                            <td><a href="/koho/ecommerce/product/page/3" class="">
                                                    <h4>White Tshirt</h4>
                                                </a><span>aask - White Tshirt Blend Women's Fit &amp; Flare t-shirt.</span></td>
                                            <td>$15</td>
                                            <td class="font-danger">Out of Stock</td>
                                            <td>04/08/2023</td>
                                            <td><button class="btn btn-danger btn-xs me-1" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button><button class="btn btn-primary btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit</button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/koho/ecommerce/product/page/4" class=""><img src="../../assets/product/productlist/producttable4.png" alt=""></a></td>
                                            <td><a href="/koho/ecommerce/product/page/4" class="">
                                                    <h4>Black Top</h4>
                                                </a><span>R L F - black Cotton Blend Women's A-Line Skirt.</span></td>
                                            <td>$16</td>
                                            <td class="font-primary">Low Stock</td>
                                            <td>25/04/2023</td>
                                            <td><button class="btn btn-danger btn-xs me-1" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button><button class="btn btn-primary btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit</button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/koho/ecommerce/product/page/5" class=""><img src="../../assets/product/productlist/producttable1.png" alt=""></a></td>
                                            <td><a href="/koho/ecommerce/product/page/5" class="">
                                                    <h4>Bluegreen Shirt</h4>
                                                </a><span>The Dry State - Blue Denim Regular Fit Men's Denim Jacket.</span></td>
                                            <td>$29</td>
                                            <td class="font-success">In Stock</td>
                                            <td>29/06/2023</td>
                                            <td><button class="btn btn-danger btn-xs me-1" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button><button class="btn btn-primary btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit</button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/koho/ecommerce/product/page/6" class=""><img src="../../assets/product/productlist/producttable1.png" alt=""></a></td>
                                            <td><a href="/koho/ecommerce/product/page/6" class="">
                                                    <h4>Greyblack Shirt</h4>
                                                </a><span>Vida Loca - Blue Denim Fit Men's Casual Shirt.</span></td>
                                            <td>$54</td>
                                            <td class="font-primary">Low Stock</td>
                                            <td>05/28/2023</td>
                                            <td><button class="btn btn-danger btn-xs me-1" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button><button class="btn btn-primary btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit</button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/koho/ecommerce/product/page/7" class=""><img src="../../assets/product/productlist/producttable4.png" alt=""></a></td>
                                            <td><a href="/koho/ecommerce/product/page/7" class="">
                                                    <h4>Blue Shirt</h4>
                                                </a><span>Vida Loca - Blue Denim Fit Men's Casual Shirt.</span></td>
                                            <td>$86</td>
                                            <td class="font-danger">Out of stock</td>
                                            <td>06/21/2023</td>
                                            <td><button class="btn btn-danger btn-xs me-1" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button><button class="btn btn-primary btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit</button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/koho/ecommerce/product/page/8" class=""><img src="../../assets/product/productlist/producttable3.png" alt=""></a></td>
                                            <td><a href="/koho/ecommerce/product/page/8" class="">
                                                    <h4>Light Shirt</h4>
                                                </a><span>Vida Loca - light Denim Fit Men's Casual Shirt.</span></td>
                                            <td>$10</td>
                                            <td class="font-danger">Out of stock</td>
                                            <td>09/23/2023</td>
                                            <td><button class="btn btn-danger btn-xs me-1" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button><button class="btn btn-primary btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit</button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/koho/ecommerce/product/page/9" class=""><img src="../../assets/product/productlist/producttable2.png" alt=""></a></td>
                                            <td><a href="/koho/ecommerce/product/page/9" class="">
                                                    <h4>Greyblack Shirt</h4>
                                                </a><span>The Dry State - Greyblack Denim Regular Fit Men's Denim Jacket.</span></td>
                                            <td>$18</td>
                                            <td class="font-success">In Stock</td>
                                            <td>10/25/2023</td>
                                            <td><button class="btn btn-danger btn-xs me-1" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button><button class="btn btn-primary btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit</button></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/koho/ecommerce/product/page/10" class=""><img src="../../assets/product/productlist/producttable1.png" alt=""></a></td>
                                            <td><a href="/koho/ecommerce/product/page/10" class="">
                                                    <h4>Black Top</h4>
                                                </a><span>aask - Black Polyester Blend Women's Fit &amp; Flare top.</span></td>
                                            <td>$10</td>
                                            <td class="font-danger">Out of stock</td>
                                            <td>04/25/2023</td>
                                            <td><button class="btn btn-danger btn-xs me-1" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button><button class="btn btn-primary btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit</button></td>
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
        name: 'PaymentManage',
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
        letter-spacing: .5px;
        line-height: 1.2;
    }
    
    .card-header>span {
        color: hsla(0,0%,100%,.8);
        font-size: 12px;
       
        margin-top: 5px;
        display: block;
        letter-spacing: 1px;
    }
    
    .card-body {
        padding: 25px;
        background-color: transparent;
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
    }
    
    thead{
        border-color: #2e2846;
    }
    
    
    
    thead tr{
    
        
        border-color: #2e2846;
    
    }
    
     .table thead th {
        border-bottom: 1px solid #2e2846;
        color: hsla(0,0%,100%,.8);
           font-weight: 500;
           padding: 0.75rem;
           font-size:14px;
    }
    
    
    .list-products .product-table table th {
        min-width: 150px;
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
        padding: 0.75rem;
        font-size:14px;
    }
    
    
    
    a {
        color: #534686;
        text-decoration: none;
        letter-spacing: 1px;    
    }
    
    .product-table img {
        height: 40px;
    }
    
    table td  h4 {
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        margin-top: 0;
        margin-bottom: 0.5rem;
        line-height: 1.2;
    }
    
    .product-table span {
        color: #59667a;
        font-size:14px;
    }
    
    .font-success {
        color: #67c100!important;
    }
    
    .product-table button {
        padding: 7px 10px;
    }
    
    .btn-xs {
      
        font-size: 11px;
    }
    
    .btn{
    
        font-weight: 600;
        border-radius: 8px;
    }
    
    .btn-danger {
        background-color: #dc0808!important;
        border-color: #dc0808!important;
    }
    
    .btn-primary{
        background-color: #534686!important;
        border-color: #534686!important;
    }
    
    .font-danger {
        color: #dc0808!important;
    }
    </style>
    