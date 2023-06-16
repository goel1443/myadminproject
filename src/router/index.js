import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Layout/Login.vue'


const routes = [
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
  


  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
