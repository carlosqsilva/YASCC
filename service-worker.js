"use strict";var precacheConfig=[["/YASCC/index.html","d7fc1ad4923c40bacb8e5f5cd2d31e61"],["/YASCC/static/js/main.0ecc0884.js","520c9834bc4c0820a28accffbe8050a6"],["/YASCC/static/media/add.720728f6.svg","720728f648c007254a78ccda1291b7d0"],["/YASCC/static/media/back.0176b60f.svg","0176b60fe93f9db4ecaa7a0e9fb80b41"],["/YASCC/static/media/github.9de88d7b.svg","9de88d7b151d9ac59de39d3c8bc3d524"],["/YASCC/static/media/icon.37b6e71c.svg","37b6e71cb21976ea31d4099bfa265ee1"],["/YASCC/static/media/logo.5b5dca3b.svg","5b5dca3bb6a6e1c0652e686532a3c19b"],["/YASCC/static/media/menu.626fc043.svg","626fc0431a33a5d9fb6d31c6497030be"],["/YASCC/static/media/next.fb7519d8.svg","fb7519d826a8e3fc5a1cced1d475dd48"],["/YASCC/static/media/pause.94724fb9.svg","94724fb9f45abaa1b318642a244f5551"],["/YASCC/static/media/play.711d8b49.svg","711d8b49324e64511b376c65d3de7f53"],["/YASCC/static/media/play.daa63bca.svg","daa63bcab20ed6cb2ca09559eb16decc"],["/YASCC/static/media/playlist.4b6c45cc.svg","4b6c45cc27dd65d805bf58f08e2772c0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));var n="/YASCC/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});