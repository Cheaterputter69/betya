self.addEventListener("install", e => {
  console.log("Service Worker installed");
});

self.addEventListener("activate", e => {
  console.log("Service Worker activated");
});

self.addEventListener("fetch", e => {
  // Right now this just passes requests through
  // Later you can add caching here if you want offline features
});
