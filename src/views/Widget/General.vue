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
        <div class="row ">

            <div class="col-sm-6 col-lg-3">
                <div class="card o-hidden">
                    <div class="card-body">
                        <div class="d-flex static-widget">
                            <div class="flex-grow-1">
                                <h6 class="font-roboto">Earnings</h6>
                                <h2 class="mb-0 counter"><span class="bold">  <vue3-autocounter ref="counter" :startAmount="0" :endAmount="6659" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h2>
                            </div><svg class="fill-secondary" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5938 14.1562V17.2278C20.9604 17.8102 19.7812 19.3566 19.7812 21.1875C19.7812 23.5138 21.6737 25.4062 24 25.4062C24.7759 25.4062 25.4062 26.0366 25.4062 26.8125C25.4062 27.5884 24.7759 28.2188 24 28.2188C23.2241 28.2188 22.5938 27.5884 22.5938 26.8125H19.7812C19.7812 28.6434 20.9604 30.1898 22.5938 30.7722V33.8438H25.4062V30.7722C27.0396 30.1898 28.2188 28.6434 28.2188 26.8125C28.2188 24.4862 26.3263 22.5938 24 22.5938C23.2241 22.5938 22.5938 21.9634 22.5938 21.1875C22.5938 20.4116 23.2241 19.7812 24 19.7812C24.7759 19.7812 25.4062 20.4116 25.4062 21.1875H28.2188C28.2188 19.3566 27.0396 17.8102 25.4062 17.2278V14.1562H22.5938Z"></path>
                                <path d="M25.4062 0V11.4859C31.2498 12.1433 35.8642 16.7579 36.5232 22.5938H48C47.2954 10.5189 37.4829 0.704531 25.4062 0Z"></path>
                                <path d="M14.1556 31.8558C12.4237 29.6903 11.3438 26.9823 11.3438 24C11.3438 17.5025 16.283 12.1958 22.5938 11.4859V0C10.0492 0.731813 0 11.2718 0 24C0 30.0952 2.39381 35.6398 6.14897 39.8624L14.1556 31.8558Z"></path>
                                <path d="M47.9977 25.4062H36.5143C35.8044 31.717 30.4977 36.6562 24.0002 36.6562C21.0179 36.6562 18.3099 35.5763 16.1444 33.8444L8.13779 41.851C12.3604 45.6062 17.905 48 24.0002 48C36.7284 48 47.2659 37.9508 47.9977 25.4062Z"></path>
                            </svg>
                        </div>
                        <div class="progress-widget">
                            <div class="progress sm-progress-bar progress-animate">
                                <div class="progress-gradient-secondary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"><span class="animate-circle"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="card o-hidden">
                    <div class="card-body">
                        <div class="d-flex static-widget">
                            <div class="flex-grow-1">
                                <h6 class="font-roboto">Products</h6>
                                <h2 class="mb-0 counter"><span class="bold">  <vue3-autocounter ref="counter" :startAmount="0" :endAmount="9856" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h2>
                            </div><svg class="fill-success" width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.92047 8.49509C5.81037 8.42629 5.81748 8.25971 5.93378 8.20177C7.49907 7.41686 9.01464 6.65821 10.5302 5.89775C14.4012 3.95495 18.2696 2.00762 22.1478 0.0792996C22.3387 -0.0157583 22.6468 -0.029338 22.8359 0.060288C28.2402 2.64315 33.6357 5.24502 39.033 7.84327C39.0339 7.84327 39.0339 7.84417 39.0348 7.84417C39.152 7.90121 39.1582 8.06869 39.0472 8.1375C38.9939 8.17009 38.9433 8.20087 38.8918 8.22984C33.5398 11.2228 28.187 14.2121 22.8385 17.2115C22.5793 17.3572 22.3839 17.3762 22.1131 17.2296C16.7851 14.3507 11.4518 11.4826 6.12023 8.61188C6.05453 8.57748 5.98972 8.53855 5.92047 8.49509Z"></path>
                                <path d="M21.1347 23.3676V38.8321C21.1347 38.958 21.0042 39.0386 20.895 38.9806C20.4182 38.7271 19.9734 38.4918 19.5295 38.2528C14.498 35.5441 9.46833 32.8317 4.43154 30.1339C4.12612 29.97 4.02046 29.7944 4.02224 29.4422C4.03822 26.8322 4.03023 24.2222 4.02934 21.6122C4.02934 21.4719 4.02934 21.3325 4.02934 21.1659C4.02934 21.0428 4.15542 20.9622 4.26373 21.0147C4.35252 21.0581 4.43065 21.0962 4.50434 21.1396C8.18539 23.2888 11.8664 25.438 15.5457 27.5909C16.5081 28.154 17.0622 28.0453 17.7627 27.1464C18.7748 25.8472 19.7896 24.5508 20.8045 23.2535C20.8053 23.2526 20.8062 23.2517 20.8071 23.2499C20.9172 23.1132 21.1347 23.192 21.1347 23.3676Z"></path>
                                <path d="M23.83 23.3784C23.83 23.2019 24.0484 23.1241 24.1567 23.2626C25.2168 24.6178 26.2192 25.9016 27.2233 27.1835C27.8928 28.039 28.4504 28.1494 29.3719 27.6117C33.0521 25.4643 36.7323 23.316 40.4133 21.1686C40.4914 21.1233 40.5713 21.0799 40.6592 21.0337C40.7613 20.9803 40.8856 21.0473 40.8972 21.164C40.9025 21.2184 40.9069 21.2691 40.9069 21.3189C40.9087 23.928 40.9052 26.5371 40.9132 29.1462C40.914 29.4006 40.8421 29.5518 40.6131 29.6794C35.1057 32.7539 29.6037 35.8365 24.099 38.9163C24.0892 38.9218 24.0803 38.9263 24.0706 38.9317C23.9605 38.9879 23.8309 38.9082 23.8309 38.7833L23.83 23.3784Z"></path>
                                <path d="M28.4752 24.454C27.2908 22.9385 26.118 21.4384 24.9203 19.9066C24.6983 19.6232 24.7809 19.2031 25.0925 19.0293L41.3092 9.95809C41.5746 9.80962 41.9076 9.89743 42.0692 10.1582C43.0147 11.6791 43.9541 13.1891 44.9103 14.7264C45.0852 15.0079 44.9946 15.3818 44.7114 15.5475C39.5414 18.5649 34.3875 21.5742 29.2086 24.5979C28.9627 24.74 28.651 24.6794 28.4752 24.454Z"></path>
                                <path d="M20.0132 19.931C18.819 21.4592 17.6506 22.9539 16.4804 24.4512C16.3037 24.6767 15.9921 24.7373 15.747 24.5943C10.586 21.5814 5.45504 18.5857 0.288619 15.5701C6.65486e-05 15.4017 -0.087831 15.0188 0.0968427 14.7372C1.02554 13.3204 1.94269 11.9208 2.86872 10.5085C3.03209 10.2596 3.35349 10.1763 3.61363 10.3157C9.018 13.2254 14.3975 16.1215 19.833 19.0483C20.1508 19.2194 20.2378 19.644 20.0132 19.931Z"></path>
                            </svg>
                        </div>
                        <div class="progress-widget">
                            <div class="progress sm-progress-bar progress-animate">
                                <div class="progress-gradient-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="animate-circle"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="card o-hidden">
                    <div class="card-body">
                        <div class="d-flex static-widget">
                            <div class="flex-grow-1">
                                <h6 class="font-roboto">Messages</h6>
                                <h2 class="mb-0 counter"><span class="bold">  <vue3-autocounter ref="counter" :startAmount="0" :endAmount="893" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h2>
                            </div><svg class="fill-primary" width="44" height="46" viewBox="0 0 44 46" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73709 35.2337C6.17884 31.58 4.00316 26.8452 3.49802 21.7377C1.60687 24.237 0.581465 27.3024 0.586192 30.5195C0.589372 32.612 1.03986 34.692 1.89348 36.5729L0.1333 41.9282C-0.169286 42.8488 0.0517454 43.8484 0.7102 44.5369C1.17358 45.0213 1.78451 45.2794 2.4128 45.2794C2.67714 45.2794 2.94458 45.2337 3.2054 45.14L8.32806 43.2997C10.1272 44.1922 12.1167 44.6631 14.1182 44.6665C17.2557 44.6709 20.2418 43.558 22.657 41.5068C17.8005 41.0474 13.2702 38.8615 9.73709 35.2337Z"></path>
                                <path d="M43.8418 35.7427L41.2863 27.9674C42.5181 25.3348 43.1691 22.407 43.1735 19.4611C43.181 14.3388 41.2854 9.49561 37.8357 5.82369C34.3853 2.15096 29.7875 0.0836476 24.889 0.00251856C19.8097 -0.0814855 15.0354 1.93839 11.446 5.69081C7.85665 9.44332 5.92425 14.4346 6.00469 19.7451C6.08229 24.8661 8.05972 29.673 11.5726 33.2803C15.078 36.8798 19.6988 38.861 24.5879 38.8608C24.5975 38.8608 24.6077 38.8608 24.6171 38.8608C27.435 38.8563 30.2356 38.1757 32.7537 36.8879L40.1911 39.5596C40.501 39.671 40.8188 39.7252 41.1329 39.7252C41.8795 39.7252 42.6055 39.4187 43.1563 38.8428C43.9388 38.0247 44.2014 36.8369 43.8418 35.7427ZM26.3834 26.1731H16.7865C16.0633 26.1731 15.477 25.5601 15.477 24.804C15.477 24.0479 16.0633 23.435 16.7865 23.435H26.3833C27.1066 23.435 27.6929 24.048 27.6929 24.804C27.6929 25.5602 27.1067 26.1731 26.3834 26.1731ZM32.3894 20.5426H16.7866C16.0633 20.5426 15.4771 19.9296 15.4771 19.1736C15.4771 18.4176 16.0634 17.8046 16.7866 17.8046H32.3894C33.1127 17.8046 33.6989 18.4176 33.6989 19.1736C33.6989 19.9296 33.1127 20.5426 32.3894 20.5426ZM32.3894 14.912H16.7866C16.0633 14.912 15.4771 14.299 15.4771 13.543C15.4771 12.7869 16.0634 12.1739 16.7866 12.1739H32.3894C33.1127 12.1739 33.6989 12.787 33.6989 13.543C33.6989 14.299 33.1127 14.912 32.3894 14.912Z"></path>
                            </svg>
                        </div>
                        <div class="progress-widget">
                            <div class="progress sm-progress-bar progress-animate">
                                <div class="progress-gradient-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 48%;"><span class="animate-circle"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="card o-hidden">
                    <div class="card-body">
                        <div class="d-flex static-widget">
                            <div class="flex-grow-1">
                                <h6 class="font-roboto">New User</h6>
                                <h2 class="mb-0 counter"><span class="bold">  <vue3-autocounter ref="counter" :startAmount="0" :endAmount="45631" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h2>
                            </div><svg class="fill-danger" width="41" height="46" viewBox="0 0 41 46" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5245 23.3155C24.0019 23.3152 26.3325 16.8296 26.9426 11.5022C27.6941 4.93936 24.5906 0 17.5245 0C10.4593 0 7.35423 4.93899 8.10639 11.5022C8.71709 16.8296 11.047 23.316 17.5245 23.3155Z"></path>
                                <path d="M31.6878 26.0152C31.8962 26.0152 32.1033 26.0214 32.309 26.0328C32.0007 25.5931 31.6439 25.2053 31.2264 24.8935C29.9817 23.9646 28.3698 23.6598 26.9448 23.0998C26.2511 22.8273 25.6299 22.5567 25.0468 22.2485C23.0787 24.4068 20.5123 25.5359 17.5236 25.5362C14.536 25.5362 11.9697 24.4071 10.0019 22.2485C9.41877 22.5568 8.79747 22.8273 8.10393 23.0998C6.67891 23.6599 5.06703 23.9646 3.82233 24.8935C1.6698 26.5001 1.11351 30.1144 0.676438 32.5797C0.315729 34.6148 0.0734026 36.6917 0.00267388 38.7588C-0.0521202 40.36 0.738448 40.5846 2.07801 41.0679C3.75528 41.6728 5.48712 42.1219 7.23061 42.4901C10.5977 43.2011 14.0684 43.7475 17.5242 43.7719C19.1987 43.76 20.8766 43.6249 22.5446 43.4087C21.3095 41.6193 20.5852 39.4517 20.5852 37.1179C20.5853 30.9957 25.5658 26.0152 31.6878 26.0152Z"></path>
                                <path d="M31.6878 28.2357C26.7825 28.2357 22.8057 32.2126 22.8057 37.1179C22.8057 42.0232 26.7824 46 31.6878 46C36.5932 46 40.57 42.0232 40.57 37.1179C40.57 32.2125 36.5931 28.2357 31.6878 28.2357ZM35.5738 38.6417H33.2118V41.0037C33.2118 41.8453 32.5295 42.5277 31.6879 42.5277C30.8462 42.5277 30.1639 41.8453 30.1639 41.0037V38.6417H27.802C26.9603 38.6417 26.278 37.9595 26.278 37.1177C26.278 36.276 26.9602 35.5937 27.802 35.5937H30.1639V33.2318C30.1639 32.3901 30.8462 31.7078 31.6879 31.7078C32.5296 31.7078 33.2118 32.3901 33.2118 33.2318V35.5937H35.5738C36.4155 35.5937 37.0978 36.276 37.0978 37.1177C37.0977 37.9595 36.4155 38.6417 35.5738 38.6417Z"></path>
                            </svg>
                        </div>
                        <div class="progress-widget">
                            <div class="progress sm-progress-bar progress-animate">
                                <div class="progress-gradient-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 48%;"><span class="animate-circle"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-6 box-col-6">
                <div class="widget-joins card widget-arrow">
                    <div class="card-header pb-0">
                        <h3>Sale details</h3>
                    </div>
                    <div class="card-body ">
                        <div class="row gy-4">
                            <div class="col-sm-6" v-for="widgetitem in salewidgetCard" :key="widgetitem">
                                <div class="widget-card">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="widget-icon d-flex align-items-center justify-content-center bg-light-primary" :style="{background:widgetitem.bgcolor}">
                                            <img :src="require(`../../assets/widget/${widgetitem.img}`)" />
                                        </div>
                                        <div class="text-end">
                                            <h6>{{widgetitem.mainheader}}</h6>
                                            <h5>

                                                <span class="counter">
                                                    <span class="bold"> $
                                                        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="widgetitem.amount - 0" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span>
                                                </span>
                                                <span class="ms-2" :style={color:widgetitem.colorpercent}>{{widgetitem.percent}}</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-6 box-col-6">
                <div class="widget-joins card widget-arrow">
                    <div class="card-header pb-0">
                        <h3>Order details</h3>
                    </div>
                    <div class="card-body ">
                        <div class="row gy-4">
                            <div class="col-sm-6" v-for="widgetitem in orderwidgetCard" :key="widgetitem">
                                <div class="widget-card">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="widget-icon d-flex align-items-center justify-content-center bg-light-primary" :style="{background:widgetitem.bgcolor}">
                                            <img :src="require(`../../assets/widget/${widgetitem.img}`)" />
                                        </div>
                                        <div class="text-end">
                                            <h6>{{widgetitem.mainheader}}</h6>
                                            <h5>

                                                <span class="counter">
                                                    <span class="bold">
                                                        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="widgetitem.amount - 0" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span>
                                                </span>
                                                <span class="ms-2" :style={color:widgetitem.colorpercent}>{{widgetitem.percent}}</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-6 col-12">
                <div class="card browser-table ">
                    <div class="card-header pb-0">
                        <h3>Usage in Browser</h3>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive  ">
                            <table class="table align-middle text-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th>Browser</th>
                                        <th>Name</th>
                                        <th>Daily</th>
                                        <th>Weekly</th>
                                        <th>Monthly</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img class="img-fluid" src="../../assets/widget/chrome.png" alt=""></td>
                                        <td>Google Chrome</td>
                                        <td>28%</td>
                                        <td>78%</td>
                                        <td>36%</td>
                                    </tr>
                                    <tr>
                                        <td><img class="img-fluid" src="../../assets/widget/mozila.png" alt=""></td>
                                        <td>Google Chrome</td>
                                        <td>28%</td>
                                        <td>78%</td>
                                        <td>36%</td>
                                    </tr>
                                    <tr>
                                        <td><img class="img-fluid" src="../../assets/widget/safari.png" alt=""></td>
                                        <td>Google Chrome</td>
                                        <td>28%</td>
                                        <td>78%</td>
                                        <td>36%</td>
                                    </tr>

                                    <tr>
                                        <td><img class="img-fluid" src="../../assets/widget/opera.png" alt=""></td>
                                        <td>Google Chrome</td>
                                        <td>28%</td>
                                        <td>78%</td>
                                        <td>36%</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-6 col-lg-12">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card social-widget-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="social-font d-flex justify-content-center align-items-center"><img src="../../assets/widget/facebook.svg" alt=""></div>
                                    <div class="ms-4">
                                        <h2>Facebook</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col text-center">
                                        <h6 class="font-roboto">Posts</h6>
                                        <h5 class="counter mb-0 font-roboto font-primary mt-1"><span calass="bold">
                                                <vue3-autocounter ref="counter" :startAmount="0" :endAmount="6589" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h5>
                                    </div>
                                    <div class="col text-center">
                                        <h6 class="font-roboto">Likes</h6>
                                        <h5 class="counter mb-0 font-roboto font-primary mt-1"><span calass="bold">
                                                <vue3-autocounter ref="counter" :startAmount="0" :endAmount="6589" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card social-widget-card">
                            <div class="card-body">
                                <div class="d-flex  align-items-center">
                                    <div class="social-font d-flex justify-content-center align-items-center"><img src="../../assets/widget/twitter.svg" alt=""></div>
                                    <div class="ms-4">
                                        <h2>Twitter</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col text-center">
                                        <h6 class="font-roboto">Posts</h6>
                                        <h5 class="counter mb-0 font-roboto font-primary mt-1"><span calass="bold">
                                                <vue3-autocounter ref="counter" :startAmount="0" :endAmount="920" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h5>
                                    </div>
                                    <div class="col text-center">
                                        <h6 class="font-roboto">Likes</h6>
                                        <h5 class="counter mb-0 font-roboto font-primary mt-1"><span calass="bold">
                                                <vue3-autocounter ref="counter" :startAmount="0" :endAmount="4" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card social-widget-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="social-font d-flex justify-content-center align-items-center"><img src="../../assets/widget/linkdin.svg" alt=""></div>
                                    <div class="ms-4">
                                        <h2>Linkedin</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col text-center">
                                        <h6 class="font-roboto">Posts</h6>
                                        <h5 class="counter mb-0 font-roboto font-primary mt-1"><span calass="bold">
                                                <vue3-autocounter ref="counter" :startAmount="0" :endAmount="1234" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h5>
                                    </div>
                                    <div class="col text-center">
                                        <h6 class="font-roboto">Likes</h6>
                                        <h5 class="counter mb-0 font-roboto font-primary mt-1"><span calass="bold">
                                                <vue3-autocounter ref="counter" :startAmount="0" :endAmount="4369" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <div class="card social-widget-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="social-font d-flex justify-content-center align-items-center"><img src="../../assets/widget/Instagram.svg" alt=""></div>
                                    <div class="ms-4">
                                        <h2>Instagram</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col text-center">
                                        <h6 class="font-roboto">Posts</h6>
                                        <h5 class="counter mb-0 font-roboto font-primary mt-1"><span calass="bold">
                                                <vue3-autocounter ref="counter" :startAmount="0" :endAmount="369" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h5>
                                    </div>
                                    <div class="col text-center">
                                        <h6 class="font-roboto">Likes</h6>
                                        <h5 class="counter mb-0 font-roboto font-primary mt-1"><span calass="bold">
                                                <vue3-autocounter ref="counter" :startAmount="0" :endAmount="3489" :duration="2" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" /></span></h5>
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
    name: "General",

    data() {

        return {

            salewidgetCard: [

                {
                    img: 'downarrow1.svg',
                    bgcolor: 'rgba(83,70,134,.2)',
                    mainheader: 'Today',
                    amount: '2598',
                    percent: '-36%($258)',
                    colorpercent: '#534686'

                },

                {
                    img: 'downarrow2.svg',
                    bgcolor: 'rgba(255,164,122,.2)',
                    mainheader: 'Month',
                    amount: '63147',
                    percent: '+65%($69)',
                    colorpercent: '#f73164'

                },

                {
                    img: 'uparrow1.svg',
                    bgcolor: 'rgba(103,193,0,.2)',
                    mainheader: 'Week',
                    amount: '2598',
                    percent: '-36%($258)',
                    colorpercent: '#67c100'

                },

                {
                    img: 'uparrow2.svg',
                    bgcolor: 'rgba(220,8,8,.2)',
                    mainheader: 'Year',
                    amount: '9198',
                    percent: '+90%($354)',
                    colorpercent: '#dc0808'

                },

            ],

            orderwidgetCard: [

                {
                    img: 'new.svg',
                    bgcolor: 'rgba(83,70,134,.2)',
                    mainheader: 'New Order',
                    amount: '6981 ',
                    percent: '68%',
                    colorpercent: '#534686'

                },

                {
                    img: 'pending.svg',
                    bgcolor: 'rgba(255,164,122,.2)',
                    mainheader: 'Pending Order',
                    amount: '783 ',
                    percent: '12%',
                    colorpercent: '#f73164'

                },

                {
                    img: 'deliver.svg',
                    bgcolor: 'rgba(103,193,0,.2)',
                    mainheader: 'Delivered Order',
                    amount: '6314 ',
                    percent: '50%',
                    colorpercent: '#67c100'

                },

                {
                    img: 'cancel.svg',
                    bgcolor: 'rgba(220,8,8,.2)',
                    mainheader: 'Cancelled Order',
                    amount: '69',
                    percent: '20%',
                    colorpercent: '#dc0808'

                },

            ]

        }
    }
};
</script>

<style scoped>
.card {

    margin-bottom: 30px;
    border: none;
    letter-spacing: .5px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(8, 21, 66, .05);
    background-color: #1d1930;
    border: 1px solid #2e2846 !important;
}

.o-hidden {
    overflow: hidden;
}

.card .card-body {
    padding: 25px;
    background-color: transparent;
}

.static-widget {

    margin-bottom: 40px;
}

.static-widget .flex-grow-1 {
    align-self: center !important;
}

.static-widget h6 {
    color: hsla(0, 0%, 100%, .8);

    font-size: 14px;
    font-weight: 400;
    letter-spacing: .5px;
    line-height: 1.2;
}

h2 {
    letter-spacing: .5px;
    color: hsla(0, 0%, 100%, .8);
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
}

.fill-secondary {
    fill: #ffa47a;
}
.fill-success {
    fill: #67c100;
}

.fill-primary {
    fill: #534686;
}

.fill-danger {
    fill: #dc0808;
}
.progress {
    background-color: #2e2846;
    border-radius: 30px;
    display: flex;
}

.progress-animate {
    overflow: inherit;

    margin-bottom: 2px;
}

.sm-progress-bar {
    height: 5px;
}

.progress-gradient-secondary {
    background-image: linear-gradient(90deg, transparent, #ffa47a);
    position: relative;
}

.progress-gradient-success {
    background-image: linear-gradient(90deg,transparent,#67c100);
    position: relative;
}

.progress-gradient-primary {
    background-image: linear-gradient(to right,transparent,#534686);
    position: relative;
}

.progress-gradient-danger {
    background-image: linear-gradient(90deg,transparent,#dc0808);
    position: relative;
}
.progress-gradient-secondary .animate-circle {
    position: absolute;
    top: -11px;
    right: -8px;
    height: 25px;
    width: 25px;
    border: 5px solid #ffa47a;
    border-radius: 70px;
    animation: heartbit 1s ease-out;
    animation-iteration-count: infinite;
}


.progress-gradient-success .animate-circle {
    position: absolute;
    top: -11px;
    right: -8px;
    height: 25px;
    width: 25px;
    border: 5px solid #67c100;
    border-radius: 70px;
    animation: heartbit 1s ease-out;
    animation-iteration-count: infinite;
}

.progress-gradient-primary .animate-circle {
    position: absolute;
    top: -11px;
    right: -8px;
    height: 25px;
    width: 25px;
    border: 5px solid #534686;
    border-radius: 70px;
    animation: heartbit 1s ease-out;
    animation-iteration-count: infinite;
}

.progress-gradient-danger .animate-circle {
    position: absolute;
    top: -11px;
    right: -8px;
    height: 25px;
    width: 25px;
    border: 5px solid #dc0808;
    border-radius: 70px;
    animation: heartbit 1s ease-out;
    animation-iteration-count: infinite;
}
.progress-animate span {

    bottom: 25px;

    font-weight: 600;
    font-size: 14px;
}

.progress-gradient-secondary:after {
    position: absolute;
    content: "";
    top: -3px;
    right: -1px;
    background-color: #ffa47a;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    box-shadow: 0 0 17px 4px rgba(255, 164, 122, .36);
}


.progress-gradient-success:after {
    position: absolute;
    content: "";
    top: -3px;
    right: -1px;
    background-color: #67c100;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    box-shadow: 0 0 17px 4px rgba(103,193,0,.36);
}

.progress-gradient-primary:after {
    position: absolute;
    content: "";
    top: -3px;
    right: -1px;
    background-color: #534686;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    box-shadow: 0 0 17px 4px rgba(var(--theme-default),.36);
}

.progress-gradient-danger:after {
    position: absolute;
    content: "";
    top: -3px;
    right: -1px;
    background-color: #dc0808;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    box-shadow: 0 0 17px 4px rgba(220,8,8,.36);
}
@keyframes heartbit {

    0% {
        transform: scale(0);
        opacity: 0;
    }

    25% {
        transform: scale(.1);
        opacity: .1;
    }

    50% {
        transform: scale(.5);
        opacity: .3;
    }

    75% {
        transform: scale(.8);
        opacity: .5;
    }

    100% {
        transform: scale(1);
        opacity: 0;
    }

}

.card-header {

    padding: 25px;
    border-bottom: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
    background-color: transparent;
}

.card-header h3 {

    font-size: 20px;
    font-weight: 500;

    color: hsla(0, 0%, 100%, .8);

}

.widget-card {
    border-color: #2e2846;
    border: 3px solid rgba(83, 70, 134, .102);
    padding: 30px;
    border-radius: 10px;
    position: relative;
}

.widget-joins .widget-card .widget-icon {
    width: 50px;
    height: 50px;

    border-radius: 50%;

}

.widget-joins .widget-card h6 {

    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
}

.widget-joins .widget-card h5 {
    font-size: 14px;
    font-weight: 500;
}

.browser-table .table tr {

    border-color: #2e2846;
}

.browser-table .table tr th,
.browser-table .table tr td {
    /* border-top: 0; */
    font-size: 16px;

    font-weight: 500;

    color: hsla(0, 0%, 100%, .8);
    padding: 12px 12px;
    padding-top: 0px;

}

.browser-table .table tr td {

    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #2e2846;
    border-bottom: 0px;
}

.browser-table table tr th:first-child,
.browser-table table tr td:first-child {
    padding-left: 0;
}

.browser-table img {
    width: 45px;
}

.social-widget-card .social-font {
    background-color: hsla(0, 0%, 100%, .1);

    width: 70px;
    height: 70px;

    border-radius: 50%;
}

.social-widget-card h2 {
    margin-bottom: 0;

    letter-spacing: .5px;

    font-size: 24px;

    font-weight: 700;
}

.card .card-footer {

    background-color: #1d1930;
    border-top: 1px solid #2e2846;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 25px;
}

.social-widget-card h6 {
    font-size: 16px;
    font-weight: 500;
    color: hsla(0, 0%, 100%, .8);
    margin-bottom: 0;
}

.social-widget-card h5 {
    font-size: 20px;
    color: hsla(0, 0%, 100%, .8) !important;
    font-weight: 600;
}

.social-widget-card .card-footer .row .col:nth-child(n+2) {
    border-left: 1px solid rgba(83, 70, 134, .102);
    border-color: #2e2846;
}

@media all and (min-width: 768px) and (max-width:991px) {

    .social-widget-card h2 {

        font-size: 20px;
    }

    .social-widget-card .social-font {

        width: 50px;
        height: 50px;
    }

    .social-font img {

        width: 20px;
    }

}

@media all and (min-width: 320px) and (max-width: 767px) {


    h2 {
    font-size: 20px;
}
    .widget-card {

        padding: 15px;
    }

    .widget-joins .widget-card h6 {

        font-size: 16px;

    }

    .widget-joins .widget-card h5 {
        font-size: 12px;

    }

    .static-widget h2 {

        font-size: 20px;

    }

    .browser-table .table tr th,
    .browser-table .table tr td {

        font-size: 14px;
    }

    .browser-table img {
        width: 40px;
    }

    .social-widget-card h2 {

        font-size: 20px;
    }

    .social-widget-card .social-font {

        width: 50px;
        height: 50px;
    }

    .social-font img {

        width: 20px;
    }
}
</style>
