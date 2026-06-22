const CACHE_NAME = 'lumen-cache-v1';
const ASSETS = [
  '/',
  '/index.html'
];

// ইনস্টল এবং ক্যাশ করা
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// ক্যাশ থেকে ফাইল রিড করা
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
