import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Errorpage from '../views/Errorpage.vue'
import Dashboard from '../views/Dashboard.vue'
import Report from '../views/Report.vue'
import Campaign from '../views/Campaign.vue'
import Calculate from '../views/Calculate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/errorpage',
    name: 'Errorpage',
    component: Errorpage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/campaign',
    name: 'Campaign',
    component: Campaign
  },
  {
    path: '/calculate',
    name: 'Calculate',
    component: Calculate
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
