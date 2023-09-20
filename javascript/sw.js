// Change this to your repository name
var GHPATH = '/atividade-01-senac';
 
// Choose a different app prefix name
var APP_PREFIX = 'mysenac_';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS  = [
    `${GHPATH}/`,
    `${GHPATH}/index.html`,
    `${GHPATH}/manifest.json`,
    `${GHPATH}/pages/profile.html`,
    `${GHPATH}/pages/notification.html`,
    `${GHPATH}/javascript/lightbox-plus-jquery.min.js`,
    `${GHPATH}/styles/lightbox.min.css`,
    `${GHPATH}/styles/style.css`,
    `${GHPATH}/portfolio/img1.jpg`,
    `${GHPATH}/portfolio/img2.jpg`,
    `${GHPATH}/portfolio/img3.jpg`,
    `${GHPATH}/portfolio/img4.jpg`,
    `${GHPATH}/portfolio/img5.jpg`,
    `${GHPATH}/portfolio/img6.jpg`,
    `${GHPATH}/portfolio/img7.jpg`,
    `${GHPATH}/portfolio/img8.jpg`,
    `${GHPATH}/portfolio/img9.jpg`,
    `${GHPATH}/portfolio/img10.jpg`,
    `${GHPATH}/portfolio/img11.jpg`,
    `${GHPATH}/portfolio/img12.jpg`,
    `${GHPATH}/img/adventure - alps - clouds - 2259810.jpg`,
    `${GHPATH}/img/aerial - view - architectural - design - buildings - 2228123.jpg`,
    `${GHPATH}/img/architectural - design - architecture - bridge - 2260784.jpg`,
    `${GHPATH}/img/art - artist - band - 2167166.jpg`,
    `${GHPATH}/img/avatar - dhg.jpeg`,
    `${GHPATH}/img/avatar - dhg.png`,
    `${GHPATH}/img/avatar - fat.jpg`,
    `${GHPATH}/img/avatar - mdo.png`,
    `${GHPATH}/img/banner.jpg`,
    `${GHPATH}/img/bodybuilding - exercise - fitness - 2294361.jpg`,
    `${GHPATH}/img/brand - white.png`,
    `${GHPATH}/img/brand.png`,
    `${GHPATH}/img/car.jpg`,
    `${GHPATH}/img/celebration - colored - smoke - dark - 2297472.jpg`,
    `${GHPATH}/img/left1.jpg`,
    `${GHPATH}/img/left2.jpg`,
    `${GHPATH}/img/left3.jpg`,
    `${GHPATH}/img/left4.jpg`,
    `${GHPATH}/img/left5.jpg`,
    `${GHPATH}/img/left6.jpg`,
    `${GHPATH}/img/mid1.jpg`,
    `${GHPATH}/img/mid2.jpg`,
    `${GHPATH}/img/mid3.jpg`,
    `${GHPATH}/img/mid4.jpg`,
    `${GHPATH}/img/mid5.jpg`,
    `${GHPATH}/img/photo - 1455448972184 - de647495d428.jpg`,
    `${GHPATH}/img/right1.jpg`,
    `${GHPATH}/img/senac - logo - 1 - 1.png`,
]