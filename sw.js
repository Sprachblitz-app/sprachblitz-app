// ===== SPRACHBLITZ SERVICE WORKER =====
// Enables offline mode, caching, and PWA installation

const CACHE_VERSION = 'sprachblitz-v28';
const CACHE_URLS = [
  './',
  './index.html',
  './sb-auth.js',
  './manifest.json',
  './sw.js',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'
];

// ===== INSTALL EVENT =====
self.addEventListener('install', event => {
  console.log('🔧 Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      console.log('📦 Caching app files...');
      return cache.addAll([
        './',
        './index.html',
        './sb-auth.js',
        './manifest.json'
      ]).catch(err => {
        console.warn('⚠️ Cache error:', err);
        // Don't fail install if cache fails
      });
    }).then(() => {
      console.log('✅ Service Worker installed');
      return self.skipWaiting();
    })
  );
});

// ===== ACTIVATE EVENT =====
self.addEventListener('activate', event => {
  console.log('🚀 Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_VERSION) {
            console.log('🗑️ Removing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker activated');
      return self.clients.claim();
    })
  );
});

// ===== FETCH EVENT - NETWORK FIRST STRATEGY =====
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  // Network first for app files (get fresh version)
  if (event.request.url.includes('index.html') || 
      event.request.url.includes('sb-auth.js') ||
      event.request.url.includes('manifest.json') ||
      event.request.url.includes('sw.js')) {
    
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache successful responses
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_VERSION).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Fall back to cache if offline
          return caches.match(event.request);
        })
    );
    return;
  }

  // Cache first for everything else (CDN, Firebase, fonts)
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then(response => {
            // Don't cache failed responses
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Clone and cache successful responses
            const responseClone = response.clone();
            caches.open(CACHE_VERSION).then(cache => {
              cache.put(event.request, responseClone);
            });

            return response;
          })
          .catch(error => {
            console.log('❌ Fetch failed for:', event.request.url, error);
            // Return a generic offline response
            return new Response('Offline - unable to fetch resource', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// ===== MESSAGE EVENT - For update notifications =====
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('⚡ Service Worker: Skipping waiting');
    self.skipWaiting();
  }
});

console.log('✅ Service Worker loaded');
