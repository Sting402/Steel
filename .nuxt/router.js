import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _29bc49fb = () => interopDefault(import('..\\pages\\ys-about\\index.vue' /* webpackChunkName: "pages/ys-about/index" */))
const _44cf74c0 = () => interopDefault(import('..\\pages\\ys-concept\\index.vue' /* webpackChunkName: "pages/ys-concept/index" */))
const _cf79eff0 = () => interopDefault(import('..\\pages\\ys-contact\\index.vue' /* webpackChunkName: "pages/ys-contact/index" */))
const _260ef5fe = () => interopDefault(import('..\\pages\\ys-employee\\index.vue' /* webpackChunkName: "pages/ys-employee/index" */))
const _2389434c = () => interopDefault(import('..\\pages\\ys-equipment\\index.vue' /* webpackChunkName: "pages/ys-equipment/index" */))
const _71cfdc7e = () => interopDefault(import('..\\pages\\ys-flow\\index.vue' /* webpackChunkName: "pages/ys-flow/index" */))
const _2e66f283 = () => interopDefault(import('..\\pages\\ys-legacy\\index.vue' /* webpackChunkName: "pages/ys-legacy/index" */))
const _96aa0f68 = () => interopDefault(import('..\\pages\\ys-map\\index.vue' /* webpackChunkName: "pages/ys-map/index" */))
const _10f8757a = () => interopDefault(import('..\\pages\\ys-policy\\index.vue' /* webpackChunkName: "pages/ys-policy/index" */))
const _6ed817d9 = () => interopDefault(import('..\\pages\\ys-product\\index.vue' /* webpackChunkName: "pages/ys-product/index" */))
const _da09a2da = () => interopDefault(import('..\\pages\\ys-production\\index.vue' /* webpackChunkName: "pages/ys-production/index" */))
const _050ef9c9 = () => interopDefault(import('..\\pages\\ys-quality\\index.vue' /* webpackChunkName: "pages/ys-quality/index" */))
const _66847e95 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ys-about",
    component: _29bc49fb,
    name: "ys-about"
  }, {
    path: "/ys-concept",
    component: _44cf74c0,
    name: "ys-concept"
  }, {
    path: "/ys-contact",
    component: _cf79eff0,
    name: "ys-contact"
  }, {
    path: "/ys-employee",
    component: _260ef5fe,
    name: "ys-employee"
  }, {
    path: "/ys-equipment",
    component: _2389434c,
    name: "ys-equipment"
  }, {
    path: "/ys-flow",
    component: _71cfdc7e,
    name: "ys-flow"
  }, {
    path: "/ys-legacy",
    component: _2e66f283,
    name: "ys-legacy"
  }, {
    path: "/ys-map",
    component: _96aa0f68,
    name: "ys-map"
  }, {
    path: "/ys-policy",
    component: _10f8757a,
    name: "ys-policy"
  }, {
    path: "/ys-product",
    component: _6ed817d9,
    name: "ys-product"
  }, {
    path: "/ys-production",
    component: _da09a2da,
    name: "ys-production"
  }, {
    path: "/ys-quality",
    component: _050ef9c9,
    name: "ys-quality"
  }, {
    path: "/",
    component: _66847e95,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
