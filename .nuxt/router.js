import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d931d28 = () => interopDefault(import('../pages/home_page.vue' /* webpackChunkName: "pages/home_page" */))
const _7352f217 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _7f97c973 = () => interopDefault(import('../pages/isbn_profile.vue' /* webpackChunkName: "pages/isbn_profile" */))
const _3e0db466 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _788417bb = () => interopDefault(import('../pages/new_book.vue' /* webpackChunkName: "pages/new_book" */))
const _26c1ed34 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _5ffa752a = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _7466114f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home_page",
    component: _0d931d28,
    name: "home_page"
  }, {
    path: "/inspire",
    component: _7352f217,
    name: "inspire"
  }, {
    path: "/isbn_profile",
    component: _7f97c973,
    name: "isbn_profile"
  }, {
    path: "/login",
    component: _3e0db466,
    name: "login"
  }, {
    path: "/new_book",
    component: _788417bb,
    name: "new_book"
  }, {
    path: "/profile",
    component: _26c1ed34,
    name: "profile"
  }, {
    path: "/signup",
    component: _5ffa752a,
    name: "signup"
  }, {
    path: "/",
    component: _7466114f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
