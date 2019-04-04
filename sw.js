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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

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
    "url": "audio/whip.mp3",
    "revision": "8780de8e6c35de5f9194b60eecb73442"
  },
  {
    "url": "images/favicon.ico",
    "revision": "6c962c501c87ef2316a2e81cde25bd4c"
  },
  {
    "url": "images/github.svg",
    "revision": "ea8bb7f4b65e7f8b2438d45463270d82"
  },
  {
    "url": "images/google.svg",
    "revision": "b990e10a7ce6807be25f91756a47a62c"
  },
  {
    "url": "images/manifest/icon-144x144.png",
    "revision": "1b681fa5ce5661f6330c78538e31f954"
  },
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "d31e018b6e3a121ca262933b46a4e98c"
  },
  {
    "url": "images/manifest/icon-48x48.png",
    "revision": "733a72514f0d0e81ba7caf074bf6baf4"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "ac29fe3591dc24a6658d9c55cc7266e9"
  },
  {
    "url": "images/manifest/icon-72x72.png",
    "revision": "d1bfb08fd77a65729820c8809f0888d3"
  },
  {
    "url": "images/manifest/icon-96x96.png",
    "revision": "502bed5c60b540479eb288f50e445978"
  },
  {
    "url": "images/twitter.svg",
    "revision": "93a9fd6aa377d5fe5cb299c3927b8a15"
  },
  {
    "url": "images/whip_placeholder.png",
    "revision": "303be7f4d2bd224ef4a2fb8b44e4b7fe"
  },
  {
    "url": "images/whip.png",
    "revision": "fec092af7f641ef2b36f57bacba83ebe"
  },
  {
    "url": "images/whip.svg",
    "revision": "042a3fe42001e41066052fcb450b27b7"
  },
  {
    "url": "index.html",
    "revision": "ad42188ebdd5ddce192a9c2c89593c29"
  },
  {
    "url": "manifest.json",
    "revision": "ddb0995f5995226dd075b0737f088468"
  },
  {
    "url": "package-lock.json",
    "revision": "7568e8fc97c5f8b76e9bf2547490d0d9"
  },
  {
    "url": "package.json",
    "revision": "25bc572ad936f1ef6a3e9d778f72a81d"
  },
  {
    "url": "src/el-audio.js",
    "revision": "457dbe858da2794213e46c5d38978702"
  },
  {
    "url": "src/el-gyroscope.js",
    "revision": "b5e594d450170a152ecb403caab0c8ec"
  },
  {
    "url": "src/whip-app.js",
    "revision": "3cf86dd10b50d87fe8c23a9933fe6a2c"
  },
  {
    "url": "static/fonts/RNS-B.ttf",
    "revision": "51b87cd186b5ab4b81ac7da38384df8d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
