const cacheName = 'time-recorder-cache-v1';
const assetsToCache = [
  './index.html',
  './manifest.json',
  // 如果有额外的CSS、JS或图片文件，也请在这里列出
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
