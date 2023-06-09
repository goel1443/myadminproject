import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Layout/Login.vue'


const routes = [
  {
    path: '/',
    name: 'Default',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Default.vue')
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
