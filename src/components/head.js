import Vue from '../main.js'

var myComponent = Vue.extend({
  data: function () {
    return {
    }
  },
  head: {
    title: {
      inner: 'It will be a pleasure'
    },
    // Meta tags
    meta: [
      { name: 'application-name', content: 'Name of my application' },
      { name: 'description', content: 'A f ffdescription of the page', id: 'desc' }, // id to
    ],
    // link tags
    link: [
      { rel: 'stylesheet', href: '@/assets/css/main.css' }
    ],
    script: [
      { type: 'text/javascript', src: '@/assets/js/active.js', async: true, body: true}
    ],
    style: [
      { type: 'text/css', inner: 'body { background-color: #000; color: #fff}', undo: false },
      // ...
    ]
  }
})

module.exports = myComponent;
