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
const _eff7a49e = () => interopDefault(import('..\\pages\\home-it-solutions-onePage\\index.vue' /* webpackChunkName: "pages/home-it-solutions-onePage/index" */))
const _3197656e = () => interopDefault(import('..\\pages\\home-it-solutions2\\index.vue' /* webpackChunkName: "pages/home-it-solutions2/index" */))
const _45b8bcad = () => interopDefault(import('..\\pages\\home-marketing-startup\\index.vue' /* webpackChunkName: "pages/home-marketing-startup/index" */))
const _d50a3136 = () => interopDefault(import('..\\pages\\home-marketing-startup-onePage\\index.vue' /* webpackChunkName: "pages/home-marketing-startup-onePage/index" */))
const _2f4872ee = () => interopDefault(import('..\\pages\\home-nft-marketplace\\index.vue' /* webpackChunkName: "pages/home-nft-marketplace/index" */))
const _d6977160 = () => interopDefault(import('..\\pages\\home-payment-solutions\\index.vue' /* webpackChunkName: "pages/home-payment-solutions/index" */))
const _45b272ea = () => interopDefault(import('..\\pages\\home-saas-technology\\index.vue' /* webpackChunkName: "pages/home-saas-technology/index" */))
const _f0a5debc = () => interopDefault(import('..\\pages\\home-saas-technology-onePage\\index.vue' /* webpackChunkName: "pages/home-saas-technology-onePage/index" */))
const _1531836d = () => interopDefault(import('..\\pages\\home-shop-modern\\index.vue' /* webpackChunkName: "pages/home-shop-modern/index" */))
const _2c6d7fba = () => interopDefault(import('..\\pages\\home-software-company\\index.vue' /* webpackChunkName: "pages/home-software-company/index" */))
const _30364d72 = () => interopDefault(import('..\\pages\\home-software-company-onePage\\index.vue' /* webpackChunkName: "pages/home-software-company-onePage/index" */))
const _0afc281b = () => interopDefault(import('..\\pages\\page-404\\index.vue' /* webpackChunkName: "pages/page-404/index" */))
const _24a7c2a1 = () => interopDefault(import('..\\pages\\page-about-2\\index.vue' /* webpackChunkName: "pages/page-about-2/index" */))
const _3bbcb2be = () => interopDefault(import('..\\pages\\page-about-5\\index.vue' /* webpackChunkName: "pages/page-about-5/index" */))
const _58eae712 = () => interopDefault(import('..\\pages\\page-about-app\\index.vue' /* webpackChunkName: "pages/page-about-app/index" */))
const _141d2452 = () => interopDefault(import('..\\pages\\page-blog-5\\index.vue' /* webpackChunkName: "pages/page-blog-5/index" */))
const _007414fa = () => interopDefault(import('..\\pages\\page-blog-5-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-blog-5-left-sidebar/index" */))
const _6a6468c6 = () => interopDefault(import('..\\pages\\page-blog-5-wide\\index.vue' /* webpackChunkName: "pages/page-blog-5-wide/index" */))
const _58dd3feb = () => interopDefault(import('..\\pages\\page-blog-app\\index.vue' /* webpackChunkName: "pages/page-blog-app/index" */))
const _efbd7934 = () => interopDefault(import('..\\pages\\page-blog-app-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-blog-app-left-sidebar/index" */))
const _02d3b3ee = () => interopDefault(import('..\\pages\\page-blog-app-wide\\index.vue' /* webpackChunkName: "pages/page-blog-app-wide/index" */))
const _9f1fcde4 = () => interopDefault(import('..\\pages\\page-career-details\\index.vue' /* webpackChunkName: "pages/page-career-details/index" */))
const _4d8ff856 = () => interopDefault(import('..\\pages\\page-careers-5\\index.vue' /* webpackChunkName: "pages/page-careers-5/index" */))
const _1f4895b2 = () => interopDefault(import('..\\pages\\page-comming-soon-5\\index.vue' /* webpackChunkName: "pages/page-comming-soon-5/index" */))
const _4c48e2cb = () => interopDefault(import('..\\pages\\page-contact-5\\index.vue' /* webpackChunkName: "pages/page-contact-5/index" */))
const _772b47df = () => interopDefault(import('..\\pages\\page-contact-app\\index.vue' /* webpackChunkName: "pages/page-contact-app/index" */))
const _651db815 = () => interopDefault(import('..\\pages\\page-faq-5\\index.vue' /* webpackChunkName: "pages/page-faq-5/index" */))
const _97dfc73a = () => interopDefault(import('..\\pages\\page-portfolio-5\\index.vue' /* webpackChunkName: "pages/page-portfolio-5/index" */))
const _0a0a7b77 = () => interopDefault(import('..\\pages\\page-portfolio-app\\index.vue' /* webpackChunkName: "pages/page-portfolio-app/index" */))
const _5c4d7b48 = () => interopDefault(import('..\\pages\\page-product-5\\index.vue' /* webpackChunkName: "pages/page-product-5/index" */))
const _4bbbf1a0 = () => interopDefault(import('..\\pages\\page-product-app\\index.vue' /* webpackChunkName: "pages/page-product-app/index" */))
const _e3ae69ca = () => interopDefault(import('..\\pages\\page-services-5\\index.vue' /* webpackChunkName: "pages/page-services-5/index" */))
const _7e9b47a2 = () => interopDefault(import('..\\pages\\page-services-app\\index.vue' /* webpackChunkName: "pages/page-services-app/index" */))
const _370b5a74 = () => interopDefault(import('..\\pages\\page-services-details-5\\index.vue' /* webpackChunkName: "pages/page-services-details-5/index" */))
const _888469fa = () => interopDefault(import('..\\pages\\page-shop-5\\index.vue' /* webpackChunkName: "pages/page-shop-5/index" */))
const _45f1fbd2 = () => interopDefault(import('..\\pages\\page-shop-app\\index.vue' /* webpackChunkName: "pages/page-shop-app/index" */))
const _8c557d04 = () => interopDefault(import('..\\pages\\page-sign-in\\index.vue' /* webpackChunkName: "pages/page-sign-in/index" */))
const _3fb5f8f4 = () => interopDefault(import('..\\pages\\page-single-post-5\\index.vue' /* webpackChunkName: "pages/page-single-post-5/index" */))
const _03d118aa = () => interopDefault(import('..\\pages\\page-single-post-5-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-single-post-5-left-sidebar/index" */))
const _95a12964 = () => interopDefault(import('..\\pages\\page-single-post-5-wide\\index.vue' /* webpackChunkName: "pages/page-single-post-5-wide/index" */))
const _f6fbb44c = () => interopDefault(import('..\\pages\\page-single-post-app\\index.vue' /* webpackChunkName: "pages/page-single-post-app/index" */))
const _ab308c52 = () => interopDefault(import('..\\pages\\page-single-post-app-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-single-post-app-left-sidebar/index" */))
const _51e2c50c = () => interopDefault(import('..\\pages\\page-single-post-app-wide\\index.vue' /* webpackChunkName: "pages/page-single-post-app-wide/index" */))
const _b2247936 = () => interopDefault(import('..\\pages\\page-single-project-5\\index.vue' /* webpackChunkName: "pages/page-single-project-5/index" */))
const _87cb2c0e = () => interopDefault(import('..\\pages\\page-single-project-app\\index.vue' /* webpackChunkName: "pages/page-single-project-app/index" */))
const _ff719fe6 = () => interopDefault(import('..\\pages\\rtl-home-app-landing-onePage\\index.vue' /* webpackChunkName: "pages/rtl-home-app-landing-onePage/index" */))
const _3861488a = () => interopDefault(import('..\\pages\\rtl-home-marketing-startup\\index.vue' /* webpackChunkName: "pages/rtl-home-marketing-startup/index" */))
const _f107737c = () => interopDefault(import('..\\pages\\rtl-home-marketing-startup-onePage\\index.vue' /* webpackChunkName: "pages/rtl-home-marketing-startup-onePage/index" */))
const _0c136fc3 = () => interopDefault(import('..\\pages\\rtl-page-about\\index.vue' /* webpackChunkName: "pages/rtl-page-about/index" */))
const _f3de427c = () => interopDefault(import('..\\pages\\rtl-page-blog\\index.vue' /* webpackChunkName: "pages/rtl-page-blog/index" */))
const _4167dbd0 = () => interopDefault(import('..\\pages\\rtl-page-contact\\index.vue' /* webpackChunkName: "pages/rtl-page-contact/index" */))
const _b483efb0 = () => interopDefault(import('..\\pages\\rtl-page-portfolio\\index.vue' /* webpackChunkName: "pages/rtl-page-portfolio/index" */))
const _17fceba1 = () => interopDefault(import('..\\pages\\rtl-page-product\\index.vue' /* webpackChunkName: "pages/rtl-page-product/index" */))
const _14d08386 = () => interopDefault(import('..\\pages\\rtl-page-services\\index.vue' /* webpackChunkName: "pages/rtl-page-services/index" */))
const _3b6a96ee = () => interopDefault(import('..\\pages\\rtl-page-shop\\index.vue' /* webpackChunkName: "pages/rtl-page-shop/index" */))
const _0264ce6a = () => interopDefault(import('..\\pages\\rtl-page-single-post\\index.vue' /* webpackChunkName: "pages/rtl-page-single-post/index" */))
const _c193cfe0 = () => interopDefault(import('..\\pages\\rtl-page-single-project\\index.vue' /* webpackChunkName: "pages/rtl-page-single-project/index" */))
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
    path: "/home-it-solutions-onePage",
    component: _eff7a49e,
    name: "home-it-solutions-onePage"
  }, {
    path: "/home-it-solutions2",
    component: _3197656e,
    name: "home-it-solutions2"
  }, {
    path: "/home-marketing-startup",
    component: _45b8bcad,
    name: "home-marketing-startup"
  }, {
    path: "/home-marketing-startup-onePage",
    component: _d50a3136,
    name: "home-marketing-startup-onePage"
  }, {
    path: "/home-nft-marketplace",
    component: _2f4872ee,
    name: "home-nft-marketplace"
  }, {
    path: "/home-payment-solutions",
    component: _d6977160,
    name: "home-payment-solutions"
  }, {
    path: "/home-saas-technology",
    component: _45b272ea,
    name: "home-saas-technology"
  }, {
    path: "/home-saas-technology-onePage",
    component: _f0a5debc,
    name: "home-saas-technology-onePage"
  }, {
    path: "/home-shop-modern",
    component: _1531836d,
    name: "home-shop-modern"
  }, {
    path: "/home-software-company",
    component: _2c6d7fba,
    name: "home-software-company"
  }, {
    path: "/home-software-company-onePage",
    component: _30364d72,
    name: "home-software-company-onePage"
  }, {
    path: "/page-404",
    component: _0afc281b,
    name: "page-404"
  }, {
    path: "/page-about-2",
    component: _24a7c2a1,
    name: "page-about-2"
  }, {
    path: "/page-about-5",
    component: _3bbcb2be,
    name: "page-about-5"
  }, {
    path: "/page-about-app",
    component: _58eae712,
    name: "page-about-app"
  }, {
    path: "/page-blog-5",
    component: _141d2452,
    name: "page-blog-5"
  }, {
    path: "/page-blog-5-left-sidebar",
    component: _007414fa,
    name: "page-blog-5-left-sidebar"
  }, {
    path: "/page-blog-5-wide",
    component: _6a6468c6,
    name: "page-blog-5-wide"
  }, {
    path: "/page-blog-app",
    component: _58dd3feb,
    name: "page-blog-app"
  }, {
    path: "/page-blog-app-left-sidebar",
    component: _efbd7934,
    name: "page-blog-app-left-sidebar"
  }, {
    path: "/page-blog-app-wide",
    component: _02d3b3ee,
    name: "page-blog-app-wide"
  }, {
    path: "/page-career-details",
    component: _9f1fcde4,
    name: "page-career-details"
  }, {
    path: "/page-careers-5",
    component: _4d8ff856,
    name: "page-careers-5"
  }, {
    path: "/page-comming-soon-5",
    component: _1f4895b2,
    name: "page-comming-soon-5"
  }, {
    path: "/page-contact-5",
    component: _4c48e2cb,
    name: "page-contact-5"
  }, {
    path: "/page-contact-app",
    component: _772b47df,
    name: "page-contact-app"
  }, {
    path: "/page-faq-5",
    component: _651db815,
    name: "page-faq-5"
  }, {
    path: "/page-portfolio-5",
    component: _97dfc73a,
    name: "page-portfolio-5"
  }, {
    path: "/page-portfolio-app",
    component: _0a0a7b77,
    name: "page-portfolio-app"
  }, {
    path: "/page-product-5",
    component: _5c4d7b48,
    name: "page-product-5"
  }, {
    path: "/page-product-app",
    component: _4bbbf1a0,
    name: "page-product-app"
  }, {
    path: "/page-services-5",
    component: _e3ae69ca,
    name: "page-services-5"
  }, {
    path: "/page-services-app",
    component: _7e9b47a2,
    name: "page-services-app"
  }, {
    path: "/page-services-details-5",
    component: _370b5a74,
    name: "page-services-details-5"
  }, {
    path: "/page-shop-5",
    component: _888469fa,
    name: "page-shop-5"
  }, {
    path: "/page-shop-app",
    component: _45f1fbd2,
    name: "page-shop-app"
  }, {
    path: "/page-sign-in",
    component: _8c557d04,
    name: "page-sign-in"
  }, {
    path: "/page-single-post-5",
    component: _3fb5f8f4,
    name: "page-single-post-5"
  }, {
    path: "/page-single-post-5-left-sidebar",
    component: _03d118aa,
    name: "page-single-post-5-left-sidebar"
  }, {
    path: "/page-single-post-5-wide",
    component: _95a12964,
    name: "page-single-post-5-wide"
  }, {
    path: "/page-single-post-app",
    component: _f6fbb44c,
    name: "page-single-post-app"
  }, {
    path: "/page-single-post-app-left-sidebar",
    component: _ab308c52,
    name: "page-single-post-app-left-sidebar"
  }, {
    path: "/page-single-post-app-wide",
    component: _51e2c50c,
    name: "page-single-post-app-wide"
  }, {
    path: "/page-single-project-5",
    component: _b2247936,
    name: "page-single-project-5"
  }, {
    path: "/page-single-project-app",
    component: _87cb2c0e,
    name: "page-single-project-app"
  }, {
    path: "/rtl-home-app-landing-onePage",
    component: _ff719fe6,
    name: "rtl-home-app-landing-onePage"
  }, {
    path: "/rtl-home-marketing-startup",
    component: _3861488a,
    name: "rtl-home-marketing-startup"
  }, {
    path: "/rtl-home-marketing-startup-onePage",
    component: _f107737c,
    name: "rtl-home-marketing-startup-onePage"
  }, {
    path: "/rtl-page-about",
    component: _0c136fc3,
    name: "rtl-page-about"
  }, {
    path: "/rtl-page-blog",
    component: _f3de427c,
    name: "rtl-page-blog"
  }, {
    path: "/rtl-page-contact",
    component: _4167dbd0,
    name: "rtl-page-contact"
  }, {
    path: "/rtl-page-portfolio",
    component: _b483efb0,
    name: "rtl-page-portfolio"
  }, {
    path: "/rtl-page-product",
    component: _17fceba1,
    name: "rtl-page-product"
  }, {
    path: "/rtl-page-services",
    component: _14d08386,
    name: "rtl-page-services"
  }, {
    path: "/rtl-page-shop",
    component: _3b6a96ee,
    name: "rtl-page-shop"
  }, {
    path: "/rtl-page-single-post",
    component: _0264ce6a,
    name: "rtl-page-single-post"
  }, {
    path: "/rtl-page-single-project",
    component: _c193cfe0,
    name: "rtl-page-single-project"
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
