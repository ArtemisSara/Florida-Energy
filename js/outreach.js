Vue.component('app-header', {
  props: ['text'],
  template: ''
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})