module.exports = {
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
            {
                name: 'application-name',
                content: 'Jiyu Dev'
            },
            {
                name: 'description',
                content: 'A FreeLance Web Developer Barcelona Spain',
                id: 'desc'
            }
    ],
        // link tags
        link: [
          { rel: 'stylesheet', href: 'https://friconix.com/cdn/friconix.js', id: 'friconix' }
          // ...
        ],
        script: [
            {
                type: 'text/javascript',
                src: './assets/js/jquery-2.2.4.min.js',
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: './assets/js/vendor/popper.min.js',
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: './assets/js/vendor/bootstrap.min.js',
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: './assets/js/vendor/owl.carousel.min.js',
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: './assets/js/vendor/isotope.pkgd.min.js',
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: './assets/js/vendor/jquery.barfiller.js',
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: './assets/js/vendor/loopcounter.js',
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: './assets/js/vendor/slicknav.min.js',
                async: true,
                body: true
            },
            {
                type: 'text/javascript',
                src: './assets/js/active.js',
                async: true,
                body: true
            },
    ],
        style: [
            {
                type: 'text/css',
                inner: 'body { background-color: #fff; color: #000}',
                undo: false
            },
      // ...
    ]
    }
}
