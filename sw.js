// 1. **CRITICAL CHANGE:** Increment the version name for every new deployment.
// Changing this string forces the browser to treat it as a new service worker.
const CACHE_NAME = 'hex-editor-v1.0.0_r2'; // Updated from 'hex-editor-v1'

const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon.svg',
    `./icon-192x192.png`,
    `./icon-512x512.png`,
    // Ensure all new assets (like new JS/CSS bundles) are listed here
];

self.addEventListener('install', (e) => {
    console.log('Service Worker: Installing new version', CACHE_NAME);
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Service Worker: Caching assets');
            return cache.addAll(ASSETS);
        })
    );
    // Optional: Use skipWaiting() to activate the new SW immediately after installation
    self.skipWaiting(); 
});

self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activating new version', CACHE_NAME);
    // 2. Add logic to delete old caches (cleanup step)
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Delete any cache that does *not* match the current CACHE_NAME
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Optional: Use clients.claim() to control current open pages immediately
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
