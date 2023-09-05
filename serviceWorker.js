const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/",
    "/index.html",
    "/profile.html",
    "/notification.html",
    "/lightbox-plus-jquery.min.js",
    "/lightbox.min.css",
    "/style.css",
    "/portfolio/img1.jpg",
    "/portfolio/img2.jpg",
    "/portfolio/img3.jpg",
    "/portfolio/img4.jpg",
    "/portfolio/img5.jpg",
    "/portfolio/img6.jpg",
    "/portfolio/img7.jpg",
    "/portfolio/img8.jpg",
    "/portfolio/img9.jpg",
    "/portfolio/img10.jpg",
    "/portfolio/img11.jpg",
    "/portfolio/img12.jpg",
    "/img/adventure - alps - clouds - 2259810.jpg",
    "/img/aerial - view - architectural - design - buildings - 2228123.jpg",
    "/img/architectural - design - architecture - bridge - 2260784.jpg",
    "/img/art - artist - band - 2167166.jpg",
    "/img/avatar - dhg.jpeg",
    "/img/avatar - dhg.png",
    "/img/avatar - fat.jpg",
    "/img/avatar - mdo.png",
    "/img/banner.jpg",
    "/img/bodybuilding - exercise - fitness - 2294361.jpg",
    "/img/brand - white.png",
    "/img/brand.png",
    "/img/car.jpg",
    "/img/celebration - colored - smoke - dark - 2297472.jpg",
    "/img/left1.jpg",
    "/img/left2.jpg",
    "/img/left3.jpg",
    "/img/left4.jpg",
    "/img/left5.jpg",
    "/img/left6.jpg",
    "/img/mid1.jpg",
    "/img/mid2.jpg",
    "/img/mid3.jpg",
    "/img/mid4.jpg",
    "/img/mid5.jpg",
    "/img/photo - 1455448972184 - de647495d428.jpg",
    "/img/right1.jpg",
    "/img/senac - logo - 1 - 1.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})