"use strict";var precacheConfig=[["/love180808/index.html","fd8ce767232b4bf8252aa2a663865299"],["/love180808/static/css/main.2459fc6b.css","2e130e10d6166610fb666dc67b9788ab"],["/love180808/static/js/main.18338f80.js","1f5462fd184fd1689b7088f6ab79686b"],["/love180808/static/media/1.2603689c.jpg","2603689cebdaf0be3b25e587976fd1cd"],["/love180808/static/media/2.75657b18.jpg","75657b18c900debf4560a71251e0ed17"],["/love180808/static/media/3.caaab09e.jpg","caaab09e016f3a13ac19863752679234"],["/love180808/static/media/4.840522cb.jpg","840522cbe3a94daeb102f07d41f1218a"],["/love180808/static/media/5_anniversary.d3199f49.jpg","d3199f497ca608df3fa98be8f5d36beb"],["/love180808/static/media/6.950a62d3.jpg","950a62d3f4ce2a893ea21ba7695d8b9b"],["/love180808/static/media/7.8b7689b2.jpg","8b7689b257aa7427fb56a8ec4005d550"],["/love180808/static/media/8.16b0b95a.jpg","16b0b95a7d13542d92cb2e89af67561a"],["/love180808/static/media/9.d50bd16b.jpg","d50bd16b092c73afbada68c63977f2f7"],["/love180808/static/media/heart2.4d81cdb9.png","4d81cdb99b80d1d68b435375047134d6"],["/love180808/static/media/phuket.8d0249a4.jpg","8d0249a4c6f9807d5c3a6dbd528af6f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/love180808/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});