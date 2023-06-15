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
        <div class="row project-cards">
            <div class="col-md-12 project-list">
                <div class="card">
                    <div class="row">
                        <div class="col-md-6 p-0 d-flex">
                            <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
                                <li class="nav-item" role="presentation"><a class="nav-link active" id="top-home-tab" data-bs-target="#top-home" data-bs-toggle="tab" href="javascript:void(0)" role="tab" aria-controls="top-home" aria-selected="true">
                                        <img src="../../assets/project/projectlist/bulleye.svg" />

                                        All</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link" id="top-home-tab" data-bs-target="#top-profile" data-bs-toggle="tab" href="javascript:void(0)" role="tab" aria-controls="top-profile" aria-selected="false">
                                        <img src="../../assets/project/projectlist/info.svg" /> Doing</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link" id="top-home-tab" data-bs-target="#top-contact" data-bs-toggle="tab" href="javascript:void(0)" role="tab" aria-controls="top-contact" aria-selected="false">
                                        <img src="../../assets/project/projectlist/checkcircle.svg" /> Done</a></li>
                            </ul>

                        </div>
                        <div class="col-md-6 p-0">
                            <div class="form-group mb-0 me-0">

                            </div>
                            <router-link :to="{name:'Project Create'}" class="btn btn-primary"> <img src="../../assets/project/projectlist/plussquare.svg" /> Create New Project</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="tab-content" id="top-tabContent">
                            <div class="tab-pane fade active  show" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
                                <div class="row">
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge badge-primary">Doing</span>
                                            <h4>Endless admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Themeforest, australia</p>
                                                </div>
                                            </div>
                                            <p>Endless Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary">12</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary">5</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary">7</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+10 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>70% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped badge-primary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge badge-secondary">Done</span>
                                            <h4>Universal admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title="">

                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Universal Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary font-secondary">24</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary font-secondary">24</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary font-secondary">40</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+3 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped badge-secondary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge bg-success">Done</span>
                                            <h4>Poco admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Poco Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary txt-success">40</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary txt-success">40</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary txt-success">20</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+2 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped bg-success" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge badge-info">Done</span>
                                            <h4>Xolo admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Xolo Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary txt-info">24</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary txt-info">24</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary txt-info">40</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+3 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped badge-info" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge badge-warning">Doing</span>
                                            <h4>Zeta admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Themeforest, australia</p>
                                                </div>
                                            </div>
                                            <p>Zeta Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary txt-warning">12</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary txt-warning">5</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary txt-warning">7</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+10 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>70% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped badge-warning" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge badge-danger">Done</span>
                                            <h4>Tivo admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Tivo Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary txt-danger">40</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary txt-danger">40</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary txt-danger">20</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+2 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped badge-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
                                <div class="row">
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge badge-primary">Doing</span>
                                            <h4>Endless admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Themeforest, australia</p>
                                                </div>
                                            </div>
                                            <p>Endless Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary">12</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary">5</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary">7</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+10 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>70% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped badge-primary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge bg-primary">Doing</span>
                                            <h4>Universal admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Universal Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary">24</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary">24</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary">40</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+3 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped bg-primary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge bg-primary">Doing</span>
                                            <h4>Poco admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Poco Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary">40</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary">40</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary">20</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+2 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped bg-primary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge bg-primary">Doing</span>
                                            <h4>Tivo admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Tivo Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary">24</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary">24</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary">40</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+3 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped bg-primary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge badge-primary">Doing</span>
                                            <h4>Koho admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Themeforest, australia</p>
                                                </div>
                                            </div>
                                            <p>Koho Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary">12</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary">5</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary">7</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+10 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>70% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped badge-primary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge bg-primary">Doing</span>
                                            <h4>Xolo admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Themeforest, australia</p>
                                                </div>
                                            </div>
                                            <p>Xolo Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-primary">40</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-primary">40</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-primary">20</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+2 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped bg-primary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                                <div class="row">
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge badge-secondary">Done</span>
                                            <h4>Endless admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Themeforest, australia</p>
                                                </div>
                                            </div>
                                            <p>Endless Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-secondary">12</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-secondary">5</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-secondary">7</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+10 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>70% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped badge-secondary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge bg-secondary">Done</span>
                                            <h4>Universal admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Universal Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-secondary">24</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-secondary">24</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-secondary">40</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+3 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped bg-secondary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge bg-secondary">Done</span>
                                            <h4>Poco admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Poco Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-secondary">40</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-secondary">40</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-secondary">20</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+2 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped bg-secondary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge bg-secondary">Done</span>
                                            <h4>Xolo admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Xolo Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-secondary">24</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-secondary">24</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-secondary">40</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+3 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped bg-secondary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge badge-secondary">Done</span>
                                            <h4>Zeta admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Themeforest, australia</p>
                                                </div>
                                            </div>
                                            <p>Zeta Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-secondary">12</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-secondary">5</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-secondary">7</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+10 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>70% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped badge-secondary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6">
                                        <div class="project-box"><span class="badge bg-secondary">Done</span>
                                            <h4>Tivo admin Design</h4>
                                            <div class="d-flex">
                                                <img class="img-20 me-2 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title="">
                                                <div class="flex-grow-1">
                                                    <p>Envato, australia</p>
                                                </div>
                                            </div>
                                            <p>Tivo Admin featured, multipurpose, premium bootstrap admin template.</p>
                                            <div class="row details">
                                                <div class="col-6"><span>Issues </span></div>
                                                <div class="col-6 font-secondary">40</div>
                                                <div class="col-6"><span>Resolved</span></div>
                                                <div class="col-6 font-secondary">40</div>
                                                <div class="col-6"><span>Comment</span></div>
                                                <div class="col-6 font-secondary">20</div>
                                            </div>
                                            <div class="customers">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/firstimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/secondimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block"><img class="img-30 rounded-circle" src="../../assets/project/projectlist/thirdimg.jpg" alt="" data-original-title="" title=""></li>
                                                    <li class="d-inline-block ms-2">
                                                        <p class="f-12">+2 More</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="project-status mt-4">
                                                <div class="d-flex mb-0">
                                                    <p>100% </p>
                                                    <div class="flex-grow-1 text-end"><span>Done</span></div>
                                                </div>
                                                <div class="progress" style="height: 5px;">
                                                    <div class="progress-bar-animated progress-bar-striped bg-secondary" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    name: 'ProjectList'

}
</script>

<style scoped>
.card {

    background-color: #1d1930;
    border: 1px solid #2e2846 !important;
    margin-bottom: 30px;
    transition: all .3s ease;
    letter-spacing: .5px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(8, 21, 66, .05);
}

.project-list .row {
    margin: 15px;
}

.border-tab.nav-tabs {
    border-color: transparent !important;
    border-bottom: 1px solid #2e2846;

}

.border-tab.nav-tabs .nav-item .nav-link {
    color: hsla(0, 0%, 100%, .8);
    border-bottom: #2e2846;
    border: 1px solid transparent;
    padding: 5px 30px 5px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    transition: .3s;
    background-color: transparent;
}

.project-list .border-tab.nav-tabs .nav-item .nav-link.active {
    background-color: transparent;
}

.nav img,
.btn-primary img {
    margin-right: 10px;
}

.vue-feather {
    display: inline-block;
    overflow: hidden;
}

.vue-feather {
    vertical-align: -3px;
}

.project-list .btn {
    float: right;
    display: flex;
    align-items: center;

    background-color: #534686 !important;
    border-color: #534686 !important;
    padding: 0.6rem 1.75rem;
    font-weight: 600;
    border-radius: 8px;
    font-size: 14px;

}

.card .card-body {
    padding: 25px;
    background-color: transparent;

}

.project-cards .tab-content {
    margin-bottom: -30px;
}

.project-box {
    border: 1px solid rgba(83, 70, 134, .15);
    background-color: #151122;
    border-radius: 5px;
    padding: 30px;
    margin-bottom: 30px;
    position: relative;
}

.project-box .d-flex {
    margin-bottom: 15px;
}

.project-box .badge {
    position: absolute;
    right: 15px;
    top: 15px;
}

.badge {
    padding: 0.3em 0.5em;
}

.badge-primary {
    background-color: #534686 !important;

}

.project-box h4 {

    color: hsla(0, 0%, 100%, .8);

    font-weight: 500;
    font-size: 16px;

    line-height: 1.2;
    letter-spacing: 1px;
}

.img-20 {
    width: 20px !important;
}

.project-box p {
    font-size: 13px;
    line-height: unset;
    letter-spacing: .7px;
    color: #b4b2ba;
    margin-bottom: 1rem;
}

.project-box .details {
    margin-bottom: 10px;
}

.font-primary {
    color: hsla(0, 0%, 100%, .8) !important;
    font-size: 14px;
}

.details span,
.project-status span {

    color: hsla(0, 0%, 100%, .8) !important;
    font-size: 14px;
}

.customers ul {
    display: inline-block;
    padding-left: 0;
    list-style-type: none;
    margin-bottom: 0;
    margin-top: 0;
}

.customers ul li:nth-child(n+2) {
    margin-left: -8px;
}

.customers ul li img {
    border: 2px solid #fff;
    box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, .2);
    transition: .5s;
}

.img-30 {
    width: 30px !important;
}

.customers ul li img:hover {
    transform: translateY(-4px) scale(1.02);
    transition: .5s;
}

.card .card-body p:last-child {
    margin-bottom: 0;
}

.project-box .project-status p {
    margin-bottom: 5px;
    font-weight: 800;

}

.progress {
    border-radius: 30px;
    background-color: #2e2846;
    height: 5px;
}

.badge-info {
    background-color: #3ebcb9;
}

.badge-secondary {

    background-color: #f73164;
}

.badge-warning {

    background-color: #e56809;
}

@media all and (min-width: 320px) and (max-width: 767px) {

    .card {

        margin-bottom: 20px;
    }

    .card .card-body {
        padding: 20px;
    }

    .project-cards .tab-content {
        margin-bottom: -20px;
    }

    .project-list .border-tab.nav-tabs {
        display: flex;
    }

    .project-list .border-tab.nav-tabs .nav-item {
        width: auto !important;
    }

    .project-list .border-tab.nav-tabs .nav-item .nav-link {
        padding: 5px 15px 5px 0;
        font-size: 14px;

    }

    .project-list .btn {
        float: left;
        margin-top: 5px;
    }

    .project-box {
        padding: 20px;
        margin-bottom: 20px;
    }

    .project-box .badge {
        right: 5px !important;
        top: 5px !important;
        font-size: 8px;
        padding: 0.42em 0.7em;
    }

    .customers ul li img {
        width: 20px !important;
    }
}
</style>
