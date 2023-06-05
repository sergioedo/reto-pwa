const filesToCache = [
    '/',
    '/index.html',
    '/img/abuela-cascos.svg'
];
const cacheName = 'pwa-abuela-cache';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                // Cachear los archivos al instalar el Service Worker
                return cache.addAll(filesToCache);
            })
    );
});

// Stale while revalidate strategy: https://web.dev/learn/pwa/serving/#stale-while-revalidate
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
          const networkFetch = fetch(event.request).then(response => {
            // update the cache with a clone of the network response
            const responseClone = response.clone()
            caches.open(cacheName).then(cache => {
              cache.put(event.request, responseClone)
            })
            return response
          }).catch(function (reason) {
            console.error('ServiceWorker fetch failed: ', reason)
          })
          // prioritize cached response over network
          return cachedResponse || networkFetch
        }
      )
    )
  })
