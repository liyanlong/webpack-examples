import * as core from './core'
export default {
  get (url) {
    console.log(core)
    console.log('get', url)
  },
  post () {
    console.log('post', url)
  },
  head () {
    console.log('head', url)
  }
}
