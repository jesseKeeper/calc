self.addEventListener("install", e => {
    console.log("Caching resources..");
    e.waitUntil(
        caches.open("static").then(cache => {
        return cache.addAll([
            "./", 
            "./src/manifest.json",
            "./src/images/calc.png"
        ]);
    })
    );
    console.log("Resources in cache. Done");
})