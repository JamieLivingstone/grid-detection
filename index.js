(function detectGridSupport() {
    var mockEl = document.createElement('div');
    var fullGridSupport = typeof mockEl.style.gridTemplateRows === 'string';

    // URLs to be loaded
    var urlsToLoad = {
        supportsGrid: ['/css/grid.css'],
        fallbackUrls: ['/css/no-grid.css']
    };

    // Iterate over an array of urls and append them to the DOM in a link tag (css)
    function loadAndAppendCss(urls) {
        for(var i = 0; i < urls.length; i++) {
            var styleTag = document.createElement('link');
            styleTag.setAttribute('type', 'text/css');
            styleTag.setAttribute('href', urls[i]);
            document.head.appendChild(styleTag);
         }
    }

    // Feature detections
    loadAndAppendCss(fullGridSupport ? urlsToLoad.supportsGrid : urlsToLoad.fallbackUrls);
})();