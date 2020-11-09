var static = "Grocc";
var cacheassets = [
    "card.html",
    "buttons.html",
    "drawer.html",
    "/assts/css/style.min.css",
    "/assts/js/jquery-3.3.1.min.js",
    "/assts/vendors/bootstrap/js/bootstrap.min.js",
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(static).then(function (cache) {
            cache.addAll(cacheassets);
        }).then(function () {
            return self.skipWaiting();
        })
    );
});
self.addEventListener("activate", function (event) {
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request)
        })
    );
});
