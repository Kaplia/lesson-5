import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout.vue';
import Tasks from '../components/Tasks.vue';
import Kanban from '../components/Kanban.vue';
import Activity from '../components/Activity.vue';
import Calendar from '../components/Calendar.vue';
import Files from '../components/Files.vue';
import NotFound from '../components/NotFound.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/tasks',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'tasks',
        component: Tasks,
      },
      {
        path: '/kanban',
        name: 'kanban',
        component: Kanban,
      },
      {
        path: '/activity',
        name: 'activity',
        component: Activity,
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: Calendar,
      },
      {
        path: '/files',
        name: 'files',
        component: Files,
      },
      // {
      //   path: '/404',
      //   name: 'NotFound',
      //   component: NotFound,
      // },
      // { path: '*', redirect: '/404' },
    ],
  },
  { path: '/404', component: NotFound },
  { path: '*', redirect: '/404' },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
