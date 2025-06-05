self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('vehicle-consumption-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/styles/App.css',
                '/src/main.jsx',
                '/src/App.jsx',
                '/src/components/VehicleForm.jsx',
                '/src/components/ConsumptionHistory.jsx',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['vehicle-consumption-cache'];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});