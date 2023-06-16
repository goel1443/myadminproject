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
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="form theme-form">
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3"><label>Project Title</label>
                                            <input class="form-control"
                                                type="text" placeholder="Project name *"></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3"><label>Client name</label><input class="form-control" type="text"
                                                placeholder="Name client or company name"></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="mb-3"><label>Project Rate</label><input class="form-control" type="text"
                                                placeholder="Enter project Rate"></div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="mb-3"><label>Project Type</label><select class="form-select">
                                                <option>Hourly</option>
                                                <option>Fix price</option>
                                            </select></div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="mb-3"><label>Priority</label><select class="form-select">
                                                <option>Low</option>
                                                <option>Medium</option>
                                                <option>High</option>
                                                <option>Urgent</option>
                                            </select></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="mb-3"><label>Project Size</label><select class="form-select">
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Big</option>
                                            </select></div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="mb-3"><label>Starting date</label><input
                                                class="datepicker-here form-control" type="date" data-language="en"
                                                data-bs-original-title="" title=""></div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="mb-3"><label>Ending date</label><input
                                                class="datepicker-here form-control" type="date" data-language="en"
                                                data-bs-original-title="" title=""></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3"><label>Enter some Details</label><textarea class="form-control"
                                                id="exampleFormControlTextarea4" rows="3"></textarea></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3"><label>Upload project file</label>
                                                
                                            
                                                   
                                                    <div  class="dropzone__message dropzone__message--style dropzone-clickable"> 
                                                        <DropZone 
                                                            :maxFiles="Number(10000000000)"
                                                            url="http://localhost:5000/item"
                                                            :uploadOnDrop="false"
                                                            :multipleUpload="false"
                                                            :parallelUpload="1"/>
                                                    </div>
                                          

                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="text-end"><a class="btn btn-success me-3"
                                                href="javascript:void(0)">Add</a><a class="btn btn-danger"
                                                href="javascript:void(0)">Cancel</a></div>
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
    name: 'ProjectCreate',




}
</script>

<style scoped>
.card {

    background-color: #1d1930;
    border: 1px solid #2e2846 !important;
    transition: all .3s ease;
    margin-bottom: 30px;
    border: none;
    letter-spacing: .5px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(8, 21, 66, .05);
}

.card .card-body {
    padding: 25px;
    background-color: transparent;
}

label {
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #ffffffcc;
}

.form-control {
    background-color: #151122;
    color: hsla(0, 0%, 100%, .8) !important;
    border: 1px solid #2e2846;
    padding: 12px 15px;
    border-radius: 8px;
    font-size: 14px;

    box-shadow: none;

}

.theme-form input[type=date] {

    font-size: 14px;

    box-shadow: none;

}

::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

::placeholder{

color:#898989;
letter-spacing: 1px;
font-size:14px;
}

.form-select {
    background-color: #151122;
    border: 1px solid #151122;
    color: hsla(0, 0%, 100%, .8);
    font-size: 14px;
    box-shadow: none;
    padding: 12px 15px;
    border-radius: 8px;
}

textarea.form-control {
    min-height: calc(1.5em + 0.75rem + 2px);
}

.dropzone {
    margin-right: auto;
    margin-left: auto;
    padding: 50px !important;
    border: 2px dashed #534686 !important;
    border-radius: 15px !important;
    -o-border-image: none;
    border-image: none;
    background: rgba(83, 70, 134, .1);
    box-sizing: border-box !important;
    min-height: 150px !important;
    position: relative !important;
}

.dropzone-clickable {
    cursor: pointer;
}






 .dropzone__message {
    font-size: 18px;
    color: #534686;
}

.dropzone__message--style {
    flex-grow: 1;
    text-align: center;
}


.dropzone * {
    box-sizing: border-box;
}

.btn {
    padding: 0.6rem 1.75rem;
    font-weight: 600;
    border-radius: 8px;
    font-size: 14px;
}

.btn-success {
    background-color: #67c100 !important;
    border-color: #67c100 !important;
}

.btn {
    padding: 0.6rem 1.75rem;
    font-weight: 600;
    border-radius: 8px;
}

.btn {
    font-size: 14px;
}

.btn-danger {
    background-color: #dc0808 !important;
    border-color: #dc0808 !important;
}</style>
