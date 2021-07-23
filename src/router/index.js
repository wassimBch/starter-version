import Vue from 'vue'
import VueRouter from 'vue-router'
//add views + video integration


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/user/Users.vue'),
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Users',
            active: true,
          },
        ],
      },
    },
    {
      path: '/users/add',
      name: 'users-add',
      component: () => import('@/views/user/AddUsers.vue'),
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Users',
            active: true,
          },
        ],
      },
    },
    {
      path: '/users/list',
      name: 'users-list',
      component: () => import('@/views/user/ListUsers.vue'),
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Users',
            active: true,
          },
        ],
      },
    },
    {
      path: '/user/:slug',
      name: 'users-view',
      component: () => import('@/views/user/ViewUser.vue'),
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Users',
            active: true,
          },
        ],
      },
    },
    {
      path: '/cars/list',
      name: 'cars-list',
      component: () => import('@/views/car/ListCars.vue'),
      meta: {
        pageTitle: 'Cars',
        breadcrumb: [
          {
            text: 'Cars',
            active: true,
          },
        ],
      },
    },
    {
      path: '/cars/add',
      name: 'cars-add',
      component: () => import('@/views/car/AddCars.vue'),
      meta: {
        pageTitle: 'Cars',
        breadcrumb: [
          {
            text: 'Cars',
            active: true,
          },
        ],
      },
    },
    {
      path: '/cars/model',
      name: 'cars-model',
      component: () => import('@/views/car/ModelCars.vue'),
      meta: {
        pageTitle: 'Cars',
        breadcrumb: [
          {
            text: 'Cars',
            active: true,
          },
        ],
      },
    },
    {
      path: '/mission/add',
      name: 'mission-add',
      component: () => import('@/views/mission/AddMission.vue'),
      meta: {
        pageTitle: 'Missions',
        breadcrumb: [
          {
            text: 'Missions',
            active: true,
          },
        ],
      },
    },
    {
      path: '/missions/list',
      name: 'missions-list',
      component: () => import('@/views/mission/ListMission.vue'),
      meta: {
        pageTitle: 'Missions',
        breadcrumb: [
          {
            text: 'Missions',
            active: true,
          },
        ],
      },
    },
    {
      path: '/missions/type',
      name: 'missions-type',
      component: () => import('@/views/mission/TypeMission.vue'),
      meta: {
        pageTitle: 'Missions',
        breadcrumb: [
          {
            text: 'Missions',
            active: true,
          },
        ],
      },
    },
    {
      path: '/missions/state',
      name: 'missions-state',
      component: () => import('@/views/mission/StateMission.vue'),
      meta: {
        pageTitle: 'Missions',
        breadcrumb: [
          {
            text: 'Missions',
            active: true,
          },
        ],
      },
    },
    {
      path: '/missions/state',
      name: 'missions-point-sale',
      component: () => import('@/views/salePoint/ListSalePoint.vue'),
      meta: {
        pageTitle: 'Sale Point',
        breadcrumb: [
          {
            text: 'Sale Point',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

export default router
