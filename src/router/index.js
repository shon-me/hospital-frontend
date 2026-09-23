import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/Login.vue'
import Patients from '@/components/Patients.vue'
import Profile from '@/components/Profile.vue'
import SignUp from '@/components/SignUp.vue'
import ViewPatient from '@/components/ViewPatient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/homepage',
      component: HomePage
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/patients',
      component: Patients
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/viewpatient',
      component: ViewPatient
    },
  ],
})

export default router
