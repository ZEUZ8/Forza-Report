const staticCacheName = "site-static-v2";
const dynamicCacheName = "site-dynamic-v1";
const assests = ["/", "/index.html", "/index.js", "/App.css"];

// // service function installation
self.addEventListener("install", (evnt) => {
  evnt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching cell assets");
      cache.addAll(assests);
    })
  );
});

self.addEventListener("activate", (evnt) => {
  caches.keys().then((res) => console.log(res));
  evnt.waitUntil(
    caches.keys().then((key) => {
      return Promise.all(
        key
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (evnt) => {
  evnt.respondWith(
    caches.match(evnt.request).then((cache) => {
      return (
        cache ||
        fetch(evnt.request).then((response) => {
          return caches.open(dynamicCacheName).then((cache) => {
            cache.put(evnt.request.url, response.clone());
            return response;
          });
        })
      );
    })
  );
});
