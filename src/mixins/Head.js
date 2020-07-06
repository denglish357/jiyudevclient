module.exports  = {
  data: function () {
    return {

    }
  },
  head: {
    title: {
      inner: 'JiyuDev'
    },
    // Meta tags
    meta: [
      { name: 'application-name', content: 'Jiyu Dev' },
      { name: 'description', content: 'A FreeLance Web Developer Barcelona Spain', id: 'desc' }
    ],
    // link tags
    /*link: [
      { rel: '', href: 'http://example.com/#!/contact/', id: 'canonical' },
      { rel: 'author', href: 'author', undo: false }, // undo property - not to remove the element
      { rel: 'icon', href: require('./path/to/icon-16.png'), sizes: '16x16', type: 'image/png' },
      // with shorthand
      { r: 'icon', h: 'path/to/icon-32.png', sz: '32x32', t: 'image/png' },
      // ...
    ],*/
    script: [
        { type: 'text/javascript', src: './assets/js/jquery-2.2.4.min.js', async: true, body: true},
        { type: 'text/javascript', src: './assets/js/vendor/popper.min.js', async: true, body: true},
        { type: 'text/javascript', src: './assets/js/vendor/bootstrap.min.js', async: true, body: true},
        { type: 'text/javascript', src: './assets/js/vendor/owl.carousel.min.js', async: true, body: true},
        { type: 'text/javascript', src: './assets/js/vendor/isotope.pkgd.min.js', async: true, body: true},
        { type: 'text/javascript', src: './assets/js/vendor/jquery.barfiller.js', async: true, body: true},
        { type: 'text/javascript', src: './assets/js/vendor/loopcounter.js', async: true, body: true},
        { type: 'text/javascript', src: './assets/js/vendor/slicknav.min.js', async: true, body: true},
        { type: 'text/javascript', src: './assets/js/active.js', async: true, body: true},
    ],
    style: [
      { type: 'text/css', inner: 'body { background-color: #000; color: #fff}', undo: false },
      // ...
    ]
  }
  }
