import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/home'
import EditCactus from '@/components/cactus/edit'
import create from '@/components/cactus/create'
import details from '@/components/cactus/details'
import remove from '@/components/cactus/remove'
import genere from '@/components/cactus/genere'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/create', name: 'create', component: create },
    { path: '/edit/:id', name: 'Edit', component: EditCactus },
    { path: '/details/:id', name: 'details', component: details },
    { path: '/genere/:id', name: 'genere', component: genere },
    { path: '/remove/:id', name: 'remove', component: remove }
  ]
})
