import async from '~/components/async'

// object key must match chunk name
export default {
  homepage: async('app', () => import(/* webpackChunkName: "homepage" */'./components/App')),
  
}