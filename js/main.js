/* jshint esnext: true, browser: true, easy: true */
(function(window) {
    'use strict';
    // Prefetch it to cache, then change location.
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'http://m.20minutos.es/');
    iframe.classList.add('hidden');
    iframe.addEventListener('load', function() {
        document.location = 'http://m.20minutos.es/';
    });
    document.body.appendChild(iframe);
})(this);
