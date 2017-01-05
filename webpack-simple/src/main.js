var Vue = require('vue')
var VueEui = require('vue-eui')
var App = require('./App.vue')
require('vue-eui/dist/vue-ui.css')

Vue.use(VueEui)
var app = new Vue({
  el: '#app',
  render: function (h) {
    return h(App);
  }
});
