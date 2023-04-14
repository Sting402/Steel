import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _23554282 = () => interopDefault(import('..\\pages\\home-app-landing\\index.vue' /* webpackChunkName: "pages/home-app-landing/index" */))
const _c5b55112 = () => interopDefault(import('..\\pages\\home-app-landing-onePage\\index.vue' /* webpackChunkName: "pages/home-app-landing-onePage/index" */))
const _2e2a8728 = () => interopDefault(import('..\\pages\\home-cloud-hosting\\index.vue' /* webpackChunkName: "pages/home-cloud-hosting/index" */))
const _ff1c1f2e = () => interopDefault(import('..\\pages\\home-crypto\\index.vue' /* webpackChunkName: "pages/home-crypto/index" */))
const _11ce7116 = () => interopDefault(import('..\\pages\\home-cyber-security\\index.vue' /* webpackChunkName: "pages/home-cyber-security/index" */))
const _1f3321ea = () => interopDefault(import('..\\pages\\home-data-analysis\\index.vue' /* webpackChunkName: "pages/home-data-analysis/index" */))
const _16b96ba0 = () => interopDefault(import('..\\pages\\home-digital-agency\\index.vue' /* webpackChunkName: "pages/home-digital-agency/index" */))
const _4a8d41e8 = () => interopDefault(import('..\\pages\\home-digital-agency-onePage\\index.vue' /* webpackChunkName: "pages/home-digital-agency-onePage/index" */))
const _7aa63f8c = () => interopDefault(import('..\\pages\\home-freelance-personal\\index.vue' /* webpackChunkName: "pages/home-freelance-personal/index" */))
const _cc291976 = () => interopDefault(import('..\\pages\\home-help-desk\\index.vue' /* webpackChunkName: "pages/home-help-desk/index" */))
const _03fcc8d2 = () => interopDefault(import('..\\pages\\home-it-solutions\\index.vue' /* webpackChunkName: "pages/home-it-solutions/index" */))
const _72d6fe8a = () => interopDefault(import('..\\pages\\home-it-solutions-onePage\\index.vue' /* webpackChunkName: "pages/home-it-solutions-onePage/index" */))
const _ae5c62e0 = () => interopDefault(import('..\\pages\\home-it-solutions2\\index.vue' /* webpackChunkName: "pages/home-it-solutions2/index" */))
const _0e964274 = () => interopDefault(import('..\\pages\\home-marketing-startup\\index.vue' /* webpackChunkName: "pages/home-marketing-startup/index" */))
const _0035b62c = () => interopDefault(import('..\\pages\\home-marketing-startup-onePage\\index.vue' /* webpackChunkName: "pages/home-marketing-startup-onePage/index" */))
const _8ec3dbe0 = () => interopDefault(import('..\\pages\\home-nft-marketplace\\index.vue' /* webpackChunkName: "pages/home-nft-marketplace/index" */))
const _5d91cd17 = () => interopDefault(import('..\\pages\\home-payment-solutions\\index.vue' /* webpackChunkName: "pages/home-payment-solutions/index" */))
const _15f4be71 = () => interopDefault(import('..\\pages\\home-saas-technology\\index.vue' /* webpackChunkName: "pages/home-saas-technology/index" */))
const _328ae529 = () => interopDefault(import('..\\pages\\home-saas-technology-onePage\\index.vue' /* webpackChunkName: "pages/home-saas-technology-onePage/index" */))
const _c606ab18 = () => interopDefault(import('..\\pages\\home-shop-modern\\index.vue' /* webpackChunkName: "pages/home-shop-modern/index" */))
const _6474a513 = () => interopDefault(import('..\\pages\\home-software-company\\index.vue' /* webpackChunkName: "pages/home-software-company/index" */))
const _3dd9ec6a = () => interopDefault(import('..\\pages\\home-software-company-onePage\\index.vue' /* webpackChunkName: "pages/home-software-company-onePage/index" */))
const _09e64622 = () => interopDefault(import('..\\pages\\page-404\\index.vue' /* webpackChunkName: "pages/page-404/index" */))
const _45b58528 = () => interopDefault(import('..\\pages\\page-about-2\\index.vue' /* webpackChunkName: "pages/page-about-2/index" */))
const _5cca7545 = () => interopDefault(import('..\\pages\\page-about-5\\index.vue' /* webpackChunkName: "pages/page-about-5/index" */))
const _6d9223d9 = () => interopDefault(import('..\\pages\\page-about-app\\index.vue' /* webpackChunkName: "pages/page-about-app/index" */))
const _b7248320 = () => interopDefault(import('..\\pages\\page-blog-5\\index.vue' /* webpackChunkName: "pages/page-blog-5/index" */))
const _08074501 = () => interopDefault(import('..\\pages\\page-blog-5-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-blog-5-left-sidebar/index" */))
const _5298f2a4 = () => interopDefault(import('..\\pages\\page-blog-5-wide\\index.vue' /* webpackChunkName: "pages/page-blog-5-wide/index" */))
const _5987ce44 = () => interopDefault(import('..\\pages\\page-blog-app\\index.vue' /* webpackChunkName: "pages/page-blog-app/index" */))
const _10aee4a6 = () => interopDefault(import('..\\pages\\page-blog-app-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-blog-app-left-sidebar/index" */))
const _7f98b160 = () => interopDefault(import('..\\pages\\page-blog-app-wide\\index.vue' /* webpackChunkName: "pages/page-blog-app-wide/index" */))
const _2282c0a7 = () => interopDefault(import('..\\pages\\page-career-details\\index.vue' /* webpackChunkName: "pages/page-career-details/index" */))
const _6237351d = () => interopDefault(import('..\\pages\\page-careers-5\\index.vue' /* webpackChunkName: "pages/page-careers-5/index" */))
const _626e5cc0 = () => interopDefault(import('..\\pages\\page-comming-soon-5\\index.vue' /* webpackChunkName: "pages/page-comming-soon-5/index" */))
const _60f01f92 = () => interopDefault(import('..\\pages\\page-contact-5\\index.vue' /* webpackChunkName: "pages/page-contact-5/index" */))
const _02132234 = () => interopDefault(import('..\\pages\\page-contact-app\\index.vue' /* webpackChunkName: "pages/page-contact-app/index" */))
const _51f8705c = () => interopDefault(import('..\\pages\\page-faq-5\\index.vue' /* webpackChunkName: "pages/page-faq-5/index" */))
const _3bdb436a = () => interopDefault(import('..\\pages\\page-portfolio-5\\index.vue' /* webpackChunkName: "pages/page-portfolio-5/index" */))
const _68b00684 = () => interopDefault(import('..\\pages\\page-portfolio-app\\index.vue' /* webpackChunkName: "pages/page-portfolio-app/index" */))
const _32ff01ba = () => interopDefault(import('..\\pages\\page-product-5\\index.vue' /* webpackChunkName: "pages/page-product-5/index" */))
const _61ed2e37 = () => interopDefault(import('..\\pages\\page-product-app\\index.vue' /* webpackChunkName: "pages/page-product-app/index" */))
const _0e692734 = () => interopDefault(import('..\\pages\\page-services-5\\index.vue' /* webpackChunkName: "pages/page-services-5/index" */))
const _324c1608 = () => interopDefault(import('..\\pages\\page-services-app\\index.vue' /* webpackChunkName: "pages/page-services-app/index" */))
const _374d85df = () => interopDefault(import('..\\pages\\page-services-details-5\\index.vue' /* webpackChunkName: "pages/page-services-details-5/index" */))
const _6a3a1b9c = () => interopDefault(import('..\\pages\\page-shop-5\\index.vue' /* webpackChunkName: "pages/page-shop-5/index" */))
const _449cdf20 = () => interopDefault(import('..\\pages\\page-shop-app\\index.vue' /* webpackChunkName: "pages/page-shop-app/index" */))
const _4a39f7f6 = () => interopDefault(import('..\\pages\\page-sign-in\\index.vue' /* webpackChunkName: "pages/page-sign-in/index" */))
const _bc7af666 = () => interopDefault(import('..\\pages\\page-single-post-5\\index.vue' /* webpackChunkName: "pages/page-single-post-5/index" */))
const _2a930478 = () => interopDefault(import('..\\pages\\page-single-post-5-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-single-post-5-left-sidebar/index" */))
const _08029e67 = () => interopDefault(import('..\\pages\\page-single-post-5-wide\\index.vue' /* webpackChunkName: "pages/page-single-post-5-wide/index" */))
const _54c47161 = () => interopDefault(import('..\\pages\\page-single-post-app\\index.vue' /* webpackChunkName: "pages/page-single-post-app/index" */))
const _2926bca0 = () => interopDefault(import('..\\pages\\page-single-post-app-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-single-post-app-left-sidebar/index" */))
const _7c3d235a = () => interopDefault(import('..\\pages\\page-single-post-app-wide\\index.vue' /* webpackChunkName: "pages/page-single-post-app-wide/index" */))
const _42162e84 = () => interopDefault(import('..\\pages\\page-single-project-5\\index.vue' /* webpackChunkName: "pages/page-single-project-5/index" */))
const _0eed9d12 = () => interopDefault(import('..\\pages\\page-single-project-app\\index.vue' /* webpackChunkName: "pages/page-single-project-app/index" */))
const _2b250494 = () => interopDefault(import('..\\pages\\rtl-home-app-landing-onePage\\index.vue' /* webpackChunkName: "pages/rtl-home-app-landing-onePage/index" */))
const _b02eda5e = () => interopDefault(import('..\\pages\\rtl-home-marketing-startup\\index.vue' /* webpackChunkName: "pages/rtl-home-marketing-startup/index" */))
const _67145989 = () => interopDefault(import('..\\pages\\rtl-home-marketing-startup-onePage\\index.vue' /* webpackChunkName: "pages/rtl-home-marketing-startup-onePage/index" */))
const _20baac8a = () => interopDefault(import('..\\pages\\rtl-page-about\\index.vue' /* webpackChunkName: "pages/rtl-page-about/index" */))
const _f28925ca = () => interopDefault(import('..\\pages\\rtl-page-blog\\index.vue' /* webpackChunkName: "pages/rtl-page-blog/index" */))
const _6d99fa52 = () => interopDefault(import('..\\pages\\rtl-page-contact\\index.vue' /* webpackChunkName: "pages/rtl-page-contact/index" */))
const _675b896f = () => interopDefault(import('..\\pages\\rtl-page-portfolio\\index.vue' /* webpackChunkName: "pages/rtl-page-portfolio/index" */))
const _c06fdab0 = () => interopDefault(import('..\\pages\\rtl-page-product\\index.vue' /* webpackChunkName: "pages/rtl-page-product/index" */))
const _f32b8542 = () => interopDefault(import('..\\pages\\rtl-page-services\\index.vue' /* webpackChunkName: "pages/rtl-page-services/index" */))
const _3c152547 = () => interopDefault(import('..\\pages\\rtl-page-shop\\index.vue' /* webpackChunkName: "pages/rtl-page-shop/index" */))
const _61e0375c = () => interopDefault(import('..\\pages\\rtl-page-single-post\\index.vue' /* webpackChunkName: "pages/rtl-page-single-post/index" */))
const _1bed69ae = () => interopDefault(import('..\\pages\\rtl-page-single-project\\index.vue' /* webpackChunkName: "pages/rtl-page-single-project/index" */))
const _37b4295c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _23554282,
    name: "home-app-landing"
  }, {
    path: "/home-app-landing-onePage",
    component: _c5b55112,
    name: "home-app-landing-onePage"
  }, {
    path: "/home-cloud-hosting",
    component: _2e2a8728,
    name: "home-cloud-hosting"
  }, {
    path: "/home-crypto",
    component: _ff1c1f2e,
    name: "home-crypto"
  }, {
    path: "/home-cyber-security",
    component: _11ce7116,
    name: "home-cyber-security"
  }, {
    path: "/home-data-analysis",
    component: _1f3321ea,
    name: "home-data-analysis"
  }, {
    path: "/home-digital-agency",
    component: _16b96ba0,
    name: "home-digital-agency"
  }, {
    path: "/home-digital-agency-onePage",
    component: _4a8d41e8,
    name: "home-digital-agency-onePage"
  }, {
    path: "/home-freelance-personal",
    component: _7aa63f8c,
    name: "home-freelance-personal"
  }, {
    path: "/home-help-desk",
    component: _cc291976,
    name: "home-help-desk"
  }, {
    path: "/home-it-solutions",
    component: _03fcc8d2,
    name: "home-it-solutions"
  }, {
    path: "/home-it-solutions-onePage",
    component: _72d6fe8a,
    name: "home-it-solutions-onePage"
  }, {
    path: "/home-it-solutions2",
    component: _ae5c62e0,
    name: "home-it-solutions2"
  }, {
    path: "/home-marketing-startup",
    component: _0e964274,
    name: "home-marketing-startup"
  }, {
    path: "/home-marketing-startup-onePage",
    component: _0035b62c,
    name: "home-marketing-startup-onePage"
  }, {
    path: "/home-nft-marketplace",
    component: _8ec3dbe0,
    name: "home-nft-marketplace"
  }, {
    path: "/home-payment-solutions",
    component: _5d91cd17,
    name: "home-payment-solutions"
  }, {
    path: "/home-saas-technology",
    component: _15f4be71,
    name: "home-saas-technology"
  }, {
    path: "/home-saas-technology-onePage",
    component: _328ae529,
    name: "home-saas-technology-onePage"
  }, {
    path: "/home-shop-modern",
    component: _c606ab18,
    name: "home-shop-modern"
  }, {
    path: "/home-software-company",
    component: _6474a513,
    name: "home-software-company"
  }, {
    path: "/home-software-company-onePage",
    component: _3dd9ec6a,
    name: "home-software-company-onePage"
  }, {
    path: "/page-404",
    component: _09e64622,
    name: "page-404"
  }, {
    path: "/page-about-2",
    component: _45b58528,
    name: "page-about-2"
  }, {
    path: "/page-about-5",
    component: _5cca7545,
    name: "page-about-5"
  }, {
    path: "/page-about-app",
    component: _6d9223d9,
    name: "page-about-app"
  }, {
    path: "/page-blog-5",
    component: _b7248320,
    name: "page-blog-5"
  }, {
    path: "/page-blog-5-left-sidebar",
    component: _08074501,
    name: "page-blog-5-left-sidebar"
  }, {
    path: "/page-blog-5-wide",
    component: _5298f2a4,
    name: "page-blog-5-wide"
  }, {
    path: "/page-blog-app",
    component: _5987ce44,
    name: "page-blog-app"
  }, {
    path: "/page-blog-app-left-sidebar",
    component: _10aee4a6,
    name: "page-blog-app-left-sidebar"
  }, {
    path: "/page-blog-app-wide",
    component: _7f98b160,
    name: "page-blog-app-wide"
  }, {
    path: "/page-career-details",
    component: _2282c0a7,
    name: "page-career-details"
  }, {
    path: "/page-careers-5",
    component: _6237351d,
    name: "page-careers-5"
  }, {
    path: "/page-comming-soon-5",
    component: _626e5cc0,
    name: "page-comming-soon-5"
  }, {
    path: "/page-contact-5",
    component: _60f01f92,
    name: "page-contact-5"
  }, {
    path: "/page-contact-app",
    component: _02132234,
    name: "page-contact-app"
  }, {
    path: "/page-faq-5",
    component: _51f8705c,
    name: "page-faq-5"
  }, {
    path: "/page-portfolio-5",
    component: _3bdb436a,
    name: "page-portfolio-5"
  }, {
    path: "/page-portfolio-app",
    component: _68b00684,
    name: "page-portfolio-app"
  }, {
    path: "/page-product-5",
    component: _32ff01ba,
    name: "page-product-5"
  }, {
    path: "/page-product-app",
    component: _61ed2e37,
    name: "page-product-app"
  }, {
    path: "/page-services-5",
    component: _0e692734,
    name: "page-services-5"
  }, {
    path: "/page-services-app",
    component: _324c1608,
    name: "page-services-app"
  }, {
    path: "/page-services-details-5",
    component: _374d85df,
    name: "page-services-details-5"
  }, {
    path: "/page-shop-5",
    component: _6a3a1b9c,
    name: "page-shop-5"
  }, {
    path: "/page-shop-app",
    component: _449cdf20,
    name: "page-shop-app"
  }, {
    path: "/page-sign-in",
    component: _4a39f7f6,
    name: "page-sign-in"
  }, {
    path: "/page-single-post-5",
    component: _bc7af666,
    name: "page-single-post-5"
  }, {
    path: "/page-single-post-5-left-sidebar",
    component: _2a930478,
    name: "page-single-post-5-left-sidebar"
  }, {
    path: "/page-single-post-5-wide",
    component: _08029e67,
    name: "page-single-post-5-wide"
  }, {
    path: "/page-single-post-app",
    component: _54c47161,
    name: "page-single-post-app"
  }, {
    path: "/page-single-post-app-left-sidebar",
    component: _2926bca0,
    name: "page-single-post-app-left-sidebar"
  }, {
    path: "/page-single-post-app-wide",
    component: _7c3d235a,
    name: "page-single-post-app-wide"
  }, {
    path: "/page-single-project-5",
    component: _42162e84,
    name: "page-single-project-5"
  }, {
    path: "/page-single-project-app",
    component: _0eed9d12,
    name: "page-single-project-app"
  }, {
    path: "/rtl-home-app-landing-onePage",
    component: _2b250494,
    name: "rtl-home-app-landing-onePage"
  }, {
    path: "/rtl-home-marketing-startup",
    component: _b02eda5e,
    name: "rtl-home-marketing-startup"
  }, {
    path: "/rtl-home-marketing-startup-onePage",
    component: _67145989,
    name: "rtl-home-marketing-startup-onePage"
  }, {
    path: "/rtl-page-about",
    component: _20baac8a,
    name: "rtl-page-about"
  }, {
    path: "/rtl-page-blog",
    component: _f28925ca,
    name: "rtl-page-blog"
  }, {
    path: "/rtl-page-contact",
    component: _6d99fa52,
    name: "rtl-page-contact"
  }, {
    path: "/rtl-page-portfolio",
    component: _675b896f,
    name: "rtl-page-portfolio"
  }, {
    path: "/rtl-page-product",
    component: _c06fdab0,
    name: "rtl-page-product"
  }, {
    path: "/rtl-page-services",
    component: _f32b8542,
    name: "rtl-page-services"
  }, {
    path: "/rtl-page-shop",
    component: _3c152547,
    name: "rtl-page-shop"
  }, {
    path: "/rtl-page-single-post",
    component: _61e0375c,
    name: "rtl-page-single-post"
  }, {
    path: "/rtl-page-single-project",
    component: _1bed69ae,
    name: "rtl-page-single-project"
  }, {
    path: "/",
    component: _37b4295c,
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
