const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
registerRoute();



    // // below is chatGPT respone for asset caching.

    // importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

    // const CACHE_NAME = 'my-cache';
    // const urlsToCache = [
    //   '/',
    //   '/styles.css',
    //   '/script.js'
    // ];

    // // Cache assets when the service worker is installed
    // self.addEventListener('install', event => {
    //   event.waitUntil(
    //     caches.open(CACHE_NAME)
    //       .then(cache => cache.addAll(urlsToCache))
    //   );
    // });

    // // Serve assets from the cache when possible
    // self.addEventListener('fetch', event => {
    //   event.respondWith(
    //     caches.match(event.request)
    //       .then(response => response || fetch(event.request))
    //   );
    // });

    // // Delete old caches when the service worker is activated
    // self.addEventListener('activate', event => {
    //   event.waitUntil(
    //     caches.keys()
    //       .then(cacheNames => {
    //         return Promise.all(
    //           cacheNames.filter(cacheName => {
    //             return cacheName.startsWith('my-') && cacheName !== CACHE_NAME;
    //           }).map(cacheName => {
    //             return caches.delete(cacheName);
    //           })
    //         );
    //       })
    //   );
    // });
