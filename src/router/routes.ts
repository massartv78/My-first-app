import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/admin',
    component: () => import('layouts/SeconderyLayout.vue'),
    children: [
      { path: 'start', component: () => import('pages/IndexPage.vue') },
      { path: '', component: () => import('pages/AdminIndex.vue') }
  ],

  },
  {
    path: '/vanessa',
    component: () => import('layouts/TertiaryLayout.vue'),
    children: [{ path: 'derdePagina', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
