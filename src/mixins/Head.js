




  export default {

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
      { name: 'description', content: 'A description of the page', id: 'desc' }
    ],
    // link tags
    link: [
      { rel: 'canonical', href: 'http://example.com/#!/contact/', id: 'canonical' },
      { rel: 'author', href: 'author', undo: false }, // undo property - not to remove the
    ],
    script: [
      { type: 'text/javascript', src: 'cdn/to/script.js', async: true, body: true}, // Insert in body
      // with shorthand
      { t: 'application/ld+json', i: '{ "@context": "http://schema.org" }' },
      // ...
    ],
    style: [
      { type: 'text/css', inner: 'body { background-color: #000; color: #fff}', undo: false },
      // ...
    ]
  }
  }
