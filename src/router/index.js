import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue"
import InfoView from "../views/InfoView.vue"
import RegisterView from "@/views/RegisterView";
import DataScreen from "@/views/DataScreen";
import UserView from "@/views/UserView";

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView,
  },
  {
    path: '/screen',
    name: 'screen',
    component: DataScreen,
  },{
    path: '/user',
    name:'user',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
