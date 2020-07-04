export default {

data: function () {
   return {
      title: 'My Title'
    }
  },
  head: {
    title: {
      inner: 'It will be a pleasure'
    },
    // Meta tags
    meta: [
      { name: 'application-name', content: 'Name of my application' },
      { name: 'description', content: 'A fucking description of the page', id: 'desc' }
    ],
    // link tags
    link: [
      { rel: 'text/css', href: '@assets/css/bootstrap.min.css', },
      { rel: 'text/css', href: '@assets/css/main.css', }
    ],
    script: [
      { type: 'text/javascript', src: 'assets/js/active.js', async: true, body: true}, // Insert in body
      // with shorthand
      { t: 'application/ld+json', i: '{ "@context": "http://schema.org" }' },
      // ...
    ],
    style: [
      { type: 'text/css', inner: 'body { background-color: #fff; color: #fff}', undo: false },
      // ...
    ]
  }
  }
