import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue"
import InfoView from "../views/InfoView.vue"
import RegisterView from "@/views/RegisterView";
import DataScreen from "@/views/DataScreen";
import UserView from "@/views/UserView";
import Produce from "@/views/Produce";
import Detection from "@/views/Detection";
import Logistics from "@/views/Logistics";
import Planting1 from "@/views/Planting1";
import Planting2 from "@/views/Planting2";

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
    path: '/Planting1',
    name:'Planting1',
    component: Planting1,
  }
  ,{
    path: '/Planting2',
    name:'Planting2',
    component: Planting2,
  }
  ,{
    path: '/Produce',
    name:'Produce',
    component: Produce,
  }
  ,{
    path: '/Detection',
    name:'Detection',
    component:Detection,
  }
  ,{
    path: '/Logistics',
    name:'Logistics',
    component: Logistics,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});






export default router
