import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Contacto from '../views/Contacto.vue'
import SobreMi from '../views/SobreMi.vue'
import Articulo from '../views/Articulo.vue'
import Post from '../views/Post.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/SobreMi',
    name: 'SobreMi',
    component: SobreMi
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/Post/:entrada',
    component: Post,
    children: [{
      path: '/Articulo',
      name: 'Articulo',
      component: Articulo
    }]
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
