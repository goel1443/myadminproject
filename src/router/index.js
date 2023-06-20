import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Layout/Login.vue'


const routes = [


  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      auth:true
    }
   

   
  },

  {
    path: '/register',
    name: 'Register',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../Layout/Register.vue')
    },
    meta:{
      auth:true
    }

   
  },
  {
    path: '/',
    name: 'Default',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Dashboard/Default.vue')
    },
  
    
  },



  {
    path: '/general',
    name: 'General',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Widget/General.vue')
    },
  
    
  },

  

  {
    path: '/chart',
    name: 'Chart',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Widget/Chart.vue')
    },
  
    
  },



  {
    path: '/projectlist',
    name: 'Project List',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Project/ProjectList.vue')
    },
  
    
  },


  {
    path: '/projectcreate',
    name: 'Project Create',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Project/ProjectCreate.vue')
    },
  
    
  },


  {
    path: '/kanbanboard',
    name: 'Kanban Board',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Kanbanboard/KanbanBoard.vue')
    },
  
    
  },


  
  {
    path: '/product',
    name: 'Product',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Ecommerce/Product.vue')
    },
  
    
  },

  {
    path: '/productlist',
    name: 'Product List',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Ecommerce/ProductList.vue')
    },
  
    
  },
  {
    path: '/order/history',
    name: 'Recent Order',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Ecommerce/OrderDetails.vue')
    },
  
    
  },

 

  {
    path: '/paymentdetail',
    name: 'Payment Details',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Ecommerce/PaymentDetail.vue')
    },
  
    
  },

  {
    path: '/productpage',
    name: 'Product Page',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Ecommerce/ProductPage.vue')
    },
  
    
  },


  {
    path: '/payment/history',
    name: 'List of All Payment',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/PaymentManagement/PaymentHistory.vue')
    },
  
    
  },


  {
    path: '/payment/manage',
    name: 'Payment Manage',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/PaymentManagement/PaymentManage.vue')
    },
  
    
  },
  
  
  {
    path: '/report',
    name: 'Report',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Report/Reporting.vue')
    },
  
    
  },
  

  {
    path: '/promocode',
    name: 'Promocode Generate',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Promocode/Promocode.vue')
    },
  
    
  },
  
  {
    path: '/usermanage',
    name: 'User Information',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/UserManage/Usermanage.vue')
    },
  
    
  },

  {
    path: '/planmanage',
    name: 'Plan Management',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Plan/Planmanage.vue')
    },
  
    
  },
  
  {
    path: '/customersupport',
    name: 'Customer Support',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CustSupp/Custsupp.vue')
    },
  
    
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
