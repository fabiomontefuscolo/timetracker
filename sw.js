this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/sw.js',
                '/libs/vendor/bootstrap/dist/css/bootstrap.min.css',
                '/libs/vendor/bootstrap/dist/css/bootstrap-theme.min.css',
                '/libs/vendor/moment/min/moment.min.js',
                '/libs/vendor/handlebars/handlebars.min.js',
                '/libs/vendor/jquery/dist/jquery.min.js',
                '/libs/vendor/bootstrap/dist/js/bootstrap.min.js',
                '/libs/js/timetracker.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});