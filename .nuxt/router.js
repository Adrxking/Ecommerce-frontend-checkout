import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _558448ee = () => interopDefault(import('..\\pages\\Error.vue' /* webpackChunkName: "pages/Error" */))
const _94748478 = () => interopDefault(import('..\\pages\\Success.vue' /* webpackChunkName: "pages/Success" */))
const _1bd04e6d = () => interopDefault(import('..\\pages\\_code.vue' /* webpackChunkName: "pages/_code" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Error",
    component: _558448ee,
    name: "Error"
  }, {
    path: "/Success",
    component: _94748478,
    name: "Success"
  }, {
    path: "/:code?",
    component: _1bd04e6d,
    name: "code"
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
