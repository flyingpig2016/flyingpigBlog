/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cde5e29164b9d8402e24ff8a6aed0ccb"
  },
  {
    "url": "assets/css/0.styles.cf1837d1.css",
    "revision": "df86c337c9fe982064db6baac4042572"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.b450a5ed.js",
    "revision": "2eedea34763bb819ef0f8a183c6fd39b"
  },
  {
    "url": "assets/js/3.39104db2.js",
    "revision": "441613c5c7c838fd2019f10350e05b97"
  },
  {
    "url": "assets/js/4.2176f0d8.js",
    "revision": "6ae5f3b6927975e2a0cc84197db42f0e"
  },
  {
    "url": "assets/js/5.42cca8c0.js",
    "revision": "1dd38a7534ef5f257249451a421832bc"
  },
  {
    "url": "assets/js/6.537e369f.js",
    "revision": "3448c311b3b98ceae6104a27fb874610"
  },
  {
    "url": "assets/js/7.79f9507b.js",
    "revision": "d7e3d49262c946d4bb0d023bcd5e24e5"
  },
  {
    "url": "assets/js/8.ee1e2496.js",
    "revision": "52d33a9c8cdd09a39bf810c75ce02845"
  },
  {
    "url": "assets/js/9.e1b83305.js",
    "revision": "4a25039b7c2f0d0f888f91061db3d96f"
  },
  {
    "url": "assets/js/app.f5ef5044.js",
    "revision": "8d25928194f56d6fcc3f2b2870758260"
  },
  {
    "url": "flyingpig.png",
    "revision": "4e91371ffd5a2403ef5cbaf8ae3aecfc"
  },
  {
    "url": "index.html",
    "revision": "4f25f61a5c8077fb90e4cbe47ee16ce4"
  },
  {
    "url": "javaWeb/service/nginx.html",
    "revision": "35ddad93660e17efa89cce9f0687db7c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
