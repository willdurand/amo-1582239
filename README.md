# test-project

```
yarn install && node server.js
```

```
$ curl http://localhost:6000/config
{
    "directives": {
        "defaultSrc": [
            "https://addons.cdn.mozilla.net"
        ],
        "baseUri": [
            "\"self\""
        ],
        "childSrc": [
            "\"none\""
        ],
        "connectSrc": [
            "https://addons.mozilla.org",
            "https://sentry.prod.mozaws.net"
        ],
        "formAction": [
            "\"self\""
        ],
        "frameSrc": [
            "\"none\""
        ],
        "imgSrc": [
            "\"self\"",
            "data:",
            "https://addons.cdn.mozilla.net",
            "https://addons-amo.cdn.mozilla.net",
            "https://www.google-analytics.com"
        ],
        "manifestSrc": [
            "\"none\""
        ],
        "mediaSrc": [
            "\"none\""
        ],
        "objectSrc": [
            "\"none\""
        ],
        "scriptSrc": [
            "https://addons-amo.cdn.mozilla.net",
            "https://www.google-analytics.com/analytics.js"
        ],
        "styleSrc": [
            "https://addons-amo.cdn.mozilla.net"
        ],
        "workerSrc": [
            "\"none\""
        ],
        "reportUri": "/__cspreport__",
        "fontSrc": [
            "https://addons-amo.cdn.mozilla.net"
        ],
        "prefetchSrc": [
            "https://addons.cdn.mozilla.net"
        ]
    },
    "reportOnly": false,
    "setAllHeaders": false,
    "disableAndroid": false
}
```

```
$ curl -I http://localhost:6000/
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Security-Policy: default-src https://addons.cdn.mozilla.net; base-uri "self"; child-src "none"; connect-src https://addons.mozilla.org https://sentry.prod.mozaws.net; form-action "self"; frame-src "none"; img-src "self" data: https://addons.cdn.mozilla.net https://addons-amo.cdn.mozilla.net https://www.google-analytics.com; manifest-src "none"; media-src "none"; object-src "none"; script-src https://addons-amo.cdn.mozilla.net https://www.google-analytics.com/analytics.js; style-src https://addons-amo.cdn.mozilla.net; worker-src "none"; report-uri /__cspreport__; font-src https://addons-amo.cdn.mozilla.net; prefetch-src https://addons.cdn.mozilla.net
X-Content-Security-Policy: default-src https://addons.cdn.mozilla.net; base-uri "self"; child-src "none"; connect-src https://addons.mozilla.org https://sentry.prod.mozaws.net; form-action "self"; frame-src "none"; img-src "self" data: https://addons.cdn.mozilla.net https://addons-amo.cdn.mozilla.net https://www.google-analytics.com; manifest-src "none"; media-src "none"; object-src "none"; script-src https://addons-amo.cdn.mozilla.net https://www.google-analytics.com/analytics.js; style-src https://addons-amo.cdn.mozilla.net; worker-src "none"; report-uri /__cspreport__; font-src https://addons-amo.cdn.mozilla.net; prefetch-src https://addons.cdn.mozilla.net
X-WebKit-CSP: default-src https://addons.cdn.mozilla.net; base-uri "self"; child-src "none"; connect-src https://addons.mozilla.org https://sentry.prod.mozaws.net; form-action "self"; frame-src "none"; img-src "self" data: https://addons.cdn.mozilla.net https://addons-amo.cdn.mozilla.net https://www.google-analytics.com; manifest-src "none"; media-src "none"; object-src "none"; script-src https://addons-amo.cdn.mozilla.net https://www.google-analytics.com/analytics.js; style-src https://addons-amo.cdn.mozilla.net; worker-src "none"; report-uri /__cspreport__; font-src https://addons-amo.cdn.mozilla.net; prefetch-src https://addons.cdn.mozilla.net
Content-Type: application/json; charset=utf-8
Content-Length: 814
ETag: W/"32e-M5KLA5neAoFJDMxKqlbASL9SYHA"
Date: Fri, 20 Sep 2019 15:53:19 GMT
Connection: keep-alive
```

(The request above changes the config)

```
$ curl http://localhost:6000/config
{
    "directives": {
        "defaultSrc": null,
        "baseUri": [
            "\"self\""
        ],
        "childSrc": [
            "\"none\""
        ],
        "connectSrc": [
            "https://addons.mozilla.org",
            "https://sentry.prod.mozaws.net"
        ],
        "formAction": [
            "\"self\""
        ],
        "frameSrc": [
            "\"none\""
        ],
        "imgSrc": [
            "\"self\"",
            "data:",
            "https://addons.cdn.mozilla.net",
            "https://addons-amo.cdn.mozilla.net",
            "https://www.google-analytics.com"
        ],
        "manifestSrc": [
            "\"none\""
        ],
        "mediaSrc": [
            "\"none\""
        ],
        "objectSrc": [
            "\"none\""
        ],
        "scriptSrc": [
            "https://addons-amo.cdn.mozilla.net",
            "https://www.google-analytics.com/analytics.js"
        ],
        "styleSrc": [
            "https://addons-amo.cdn.mozilla.net"
        ],
        "workerSrc": [
            "\"none\""
        ],
        "reportUri": "/__cspreport__",
        "fontSrc": [
            "https://addons-amo.cdn.mozilla.net"
        ],
        "prefetchSrc": [
            "https://addons.cdn.mozilla.net"
        ]
    },
    "reportOnly": false,
    "setAllHeaders": false,
    "disableAndroid": false
}
```

```
$ curl -I http://localhost:6000/
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Security-Policy: default-src https://addons.cdn.mozilla.net; base-uri "self"; child-src "none"; connect-src https://addons.mozilla.org https://sentry.prod.mozaws.net; form-action "self"; frame-src "none"; img-src "self" data: https://addons.cdn.mozilla.net https://addons-amo.cdn.mozilla.net https://www.google-analytics.com; manifest-src "none"; media-src "none"; object-src "none"; script-src https://addons-amo.cdn.mozilla.net https://www.google-analytics.com/analytics.js; style-src https://addons-amo.cdn.mozilla.net; worker-src "none"; report-uri /__cspreport__; font-src https://addons-amo.cdn.mozilla.net; prefetch-src https://addons.cdn.mozilla.net
X-Content-Security-Policy: default-src https://addons.cdn.mozilla.net; base-uri "self"; child-src "none"; connect-src https://addons.mozilla.org https://sentry.prod.mozaws.net; form-action "self"; frame-src "none"; img-src "self" data: https://addons.cdn.mozilla.net https://addons-amo.cdn.mozilla.net https://www.google-analytics.com; manifest-src "none"; media-src "none"; object-src "none"; script-src https://addons-amo.cdn.mozilla.net https://www.google-analytics.com/analytics.js; style-src https://addons-amo.cdn.mozilla.net; worker-src "none"; report-uri /__cspreport__; font-src https://addons-amo.cdn.mozilla.net; prefetch-src https://addons.cdn.mozilla.net
X-WebKit-CSP: default-src https://addons.cdn.mozilla.net; base-uri "self"; child-src "none"; connect-src https://addons.mozilla.org https://sentry.prod.mozaws.net; form-action "self"; frame-src "none"; img-src "self" data: https://addons.cdn.mozilla.net https://addons-amo.cdn.mozilla.net https://www.google-analytics.com; manifest-src "none"; media-src "none"; object-src "none"; script-src https://addons-amo.cdn.mozilla.net https://www.google-analytics.com/analytics.js; style-src https://addons-amo.cdn.mozilla.net; worker-src "none"; report-uri /__cspreport__; font-src https://addons-amo.cdn.mozilla.net; prefetch-src https://addons.cdn.mozilla.net
Content-Type: text/html; charset=utf-8
Content-Length: 2
ETag: W/"2-eoX0dku9ba8cNUXvu/DyeabcC+s"
Date: Fri, 20 Sep 2019 15:56:25 GMT
Connection: keep-alive
```
