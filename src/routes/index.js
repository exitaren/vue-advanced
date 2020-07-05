import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '@/views/NewsView';
import AskView from '@/views/AskView';
import JobsView from '@/views/JobsView';
import UserView from '@/views/UserView';
import ItemView from '@/views/ItemView';
import bus from '@/utils/bus';
// import createListView from '@/views/CreateListView';
import { store } from '@/store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      // path url 주소
      path: '/news',
      // name
      name: 'news',
      // component 표시될 컴포넌트
      // component: createListView('NewsView')
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch(err => {
            console.log(err);
          });
      }
    },
    {
      path: '/ask',
      name: 'ask',
      // component: createListView('AskView')
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            // bus.$emit('end:spinner');
            next();
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: createListView('JobsView')
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch(err => {
            console.log(err);
          });
      }
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    }
  ]
});
