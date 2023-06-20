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
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card">

                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="card-header pb-0">
                                <h3>Promo Code </h3>
                            </div>
                            <div class="card-body">

                                <form class="theme-form mega-form">
                                    

                                    <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Code Generator"  aria-describedby="button-addon2">
                                    <button class="btn btn-primary" type="button" id="button-addon2">Random</button>
                                    </div>

                                    <div class="mb-3">
                                        <label class="col-form-label p-b-5" id="date1">Start Date</label>
                                        <input class="form-control" aria-describedby="date1" type="date">
                                    </div>

                                    <div class="mb-3">
                                        <label class="col-form-label p-b-5" id="date2">End Date</label>
                                        <input class="form-control" aria-describedby="date2" type="date">
                                    </div>
                                    <div class="mb-3 input-group">

                                        <input class="form-control" type="number" min="0" placeholder="Enter Any Value">

                                    </div>
                                    <div class="col-12"><button class="btn btn-primary btn-block" type="button" title="">Submit</button></div>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="card">
                    <div class="card-header pb-0">
                        <h3>Promod Code Data </h3>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive product-table">
                            <table class="table dataTable display text-center text-nowrap" id="basic-1">
                                <thead>
                                    <tr>

                                        <th>Code Generate</th>
                                        <th>Start date</th>
                                        <th>End date</th>
                                        <th>Promo code</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>ab58c39eg</td>
                                        <td>20/08/2023</td>
                                        <td>22/08/2023</td>
                                        <td>20</td>
                                    </tr>

                                    <tr>

                                        <td>ab58c39eg</td>
                                        <td>20/08/2023</td>
                                        <td>22/08/2023</td>
                                        <td>20</td>
                                    </tr>

                                    <tr>

                                        <td>ab58c39eg</td>
                                        <td>20/08/2023</td>
                                        <td>22/08/2023</td>
                                        <td>20</td>
                                    </tr>

                                    <tr>

                                    <td>ab58c39eg</td>
                                    <td>20/08/2023</td>
                                    <td>22/08/2023</td>
                                    <td>20</td>
                                    </tr>

                                    <tr>

                                    <td>ab58c39eg</td>
                                    <td>20/08/2023</td>
                                    <td>22/08/2023</td>
                                    <td>20</td>
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

    name: 'Promocode',
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

    background-color: #1d1930;
    border: 1px solid #2e2846 !important;
    transition: all .3s ease;
    margin-bottom: 30px;

    letter-spacing: .5px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(8, 21, 66, .05);
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
    color: hsla(0, 0%, 100%, .8) !important;
    margin-bottom: 0;
}

.card-body {
    padding: 25px;
    background-color: transparent;
}

.form-control {
    background-color: #151122;
    color: hsla(0, 0%, 100%, .8) !important;

    border: 1px solid #2e2846;
    padding: 12px 15px;
    border-radius: 8px;
}

.theme-form input[type=text],
.theme-form input[type=date],
.theme-form select,
.theme-form textarea,
.theme-form input[type=number] {

    font-size: 14px;

    box-shadow: none;
}

::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

.form-select {
    background-color: #151122;
    border: 1px solid #151122;
    color: hsla(0, 0%, 100%, .8);
    padding: 12px 15px;
    border-radius: 8px;
}

::placeholder {

    color: #898989;
    letter-spacing: 1px;
    font-size: 14px;
}

.btn {
    font-size: 14px;
    padding: 0.6rem 1.75rem;
    font-weight: 600;
    border-radius: 8px;
}

.btn-primary {
    background-color: #534686 !important;
    border-color: #534686 !important;
}

.p-b-5 {
    padding-bottom: 10px !important;
}

.col-form-label {

    font-size: 14px;
    color: #ffffffcc;
}

/* table css */

table.dataTable:not(.fixedHeader-locked):not(.fixedHeader-floating) {
    width: 100% !important;
}

table.dataTable {
    border-collapse: collapse !important;
    margin-top: 0 !important;
}

.table {
    margin-bottom: 0;
}

thead {
    border-color: #2e2846;
}

thead tr {

    border-color: #2e2846;

}

.table thead th {
    border-bottom: 1px solid #2e2846;
    color: hsla(0, 0%, 100%, .8);
    font-weight: 500;
    padding: 0.75rem;
    font-size: 14px;
}

.list-products .product-table table th {
    min-width: 150px;
}

tbody {
    border-color: #2e2846;
}

tbody tr {
    border-color: #2e2846;
}

table.dataTable tbody tr:nth-of-type(odd) {
    background-color: #1f232b;
}

td {
    color: hsla(0, 0%, 100%, .8);
    border-color: #2e2846;
    padding: 0.75rem;
    font-size: 14px;
}

a {
    color: #534686;
    text-decoration: none;
    letter-spacing: 1px;
}

.product-table img {
    height: 40px;
}

table td h4 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.2;
}

.product-table span {
    color: #59667a;
    font-size: 14px;
}

.font-success {
    color: #67c100 !important;
}

.product-table button {
    padding: 7px 10px;
}

.btn-xs {

    font-size: 11px;
}

.btn {

    font-weight: 600;
    border-radius: 8px;
}

.btn-danger {
    background-color: #dc0808 !important;
    border-color: #dc0808 !important;
}

.font-danger {
    color: #dc0808 !important;
}
</style>
