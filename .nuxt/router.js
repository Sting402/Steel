import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _668a37b8 = () => interopDefault(import('..\\pages\\home-app-landing\\index.vue' /* webpackChunkName: "pages/home-app-landing/index" */))
const _d4dbb120 = () => interopDefault(import('..\\pages\\home-app-landing-onePage\\index.vue' /* webpackChunkName: "pages/home-app-landing-onePage/index" */))
const _6c8d05e1 = () => interopDefault(import('..\\pages\\home-cloud-hosting\\index.vue' /* webpackChunkName: "pages/home-cloud-hosting/index" */))
const _5c14c060 = () => interopDefault(import('..\\pages\\home-crypto\\index.vue' /* webpackChunkName: "pages/home-crypto/index" */))
const _c0886d06 = () => interopDefault(import('..\\pages\\home-cyber-security\\index.vue' /* webpackChunkName: "pages/home-cyber-security/index" */))
const _2ec8edc4 = () => interopDefault(import('..\\pages\\home-data-analysis\\index.vue' /* webpackChunkName: "pages/home-data-analysis/index" */))
const _fadebad2 = () => interopDefault(import('..\\pages\\home-digital-agency\\index.vue' /* webpackChunkName: "pages/home-digital-agency/index" */))
const _6da97962 = () => interopDefault(import('..\\pages\\home-digital-agency-onePage\\index.vue' /* webpackChunkName: "pages/home-digital-agency-onePage/index" */))
const _27d30c73 = () => interopDefault(import('..\\pages\\home-freelance-personal\\index.vue' /* webpackChunkName: "pages/home-freelance-personal/index" */))
const _f5779304 = () => interopDefault(import('..\\pages\\home-help-desk\\index.vue' /* webpackChunkName: "pages/home-help-desk/index" */))
const _db39e20e = () => interopDefault(import('..\\pages\\home-it-solutions\\index.vue' /* webpackChunkName: "pages/home-it-solutions/index" */))
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
    path: "/home-app-landing",
    component: _668a37b8,
    name: "home-app-landing"
  }, {
    path: "/home-app-landing-onePage",
    component: _d4dbb120,
    name: "home-app-landing-onePage"
  }, {
    path: "/home-cloud-hosting",
    component: _6c8d05e1,
    name: "home-cloud-hosting"
  }, {
    path: "/home-crypto",
    component: _5c14c060,
    name: "home-crypto"
  }, {
    path: "/home-cyber-security",
    component: _c0886d06,
    name: "home-cyber-security"
  }, {
    path: "/home-data-analysis",
    component: _2ec8edc4,
    name: "home-data-analysis"
  }, {
    path: "/home-digital-agency",
    component: _fadebad2,
    name: "home-digital-agency"
  }, {
    path: "/home-digital-agency-onePage",
    component: _6da97962,
    name: "home-digital-agency-onePage"
  }, {
    path: "/home-freelance-personal",
    component: _27d30c73,
    name: "home-freelance-personal"
  }, {
    path: "/home-help-desk",
    component: _f5779304,
    name: "home-help-desk"
  }, {
    path: "/home-it-solutions",
    component: _db39e20e,
    name: "home-it-solutions"
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
