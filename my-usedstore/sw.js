const CACHE_NAME = "ibrazaoui-cache-v1";
const urlsToCache = [
  "/my-usedstore/",
  "/my-usedstore/index.html",
  "/my-usedstore/manifest.json",
  "/my-usedstore/sw.js",
  "/my-usedstore/icon-192.png",
  "/my-usedstore/icon-512.png"
  // أضف هنا المزيد من الملفات (CSS, JS, صور) إذا كانت موجودة
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
