/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6bd7f5cab9c3a0b6bab14f12d55e7268"
  },
  {
    "url": "assets/css/0.styles.a8c71384.css",
    "revision": "ac365705a4ff9ded356a9dba49769a27"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8493495e.js",
    "revision": "3a2baf1758b2e8b6aedd4390645d5114"
  },
  {
    "url": "assets/js/10.3ed391e4.js",
    "revision": "e1a8b5ca708f55096014026096e01654"
  },
  {
    "url": "assets/js/11.70b981ba.js",
    "revision": "a23f0bb6fdd4f85b0a2427f35644d4b4"
  },
  {
    "url": "assets/js/12.89c903f8.js",
    "revision": "7a6d7ad72e11d9944e8b0dc138b42942"
  },
  {
    "url": "assets/js/13.b3d2eded.js",
    "revision": "26c3144ce62a470a1694bc775a4a8fc2"
  },
  {
    "url": "assets/js/14.ac87e025.js",
    "revision": "e4541d42d65c88328fc41b90a03490f7"
  },
  {
    "url": "assets/js/15.25d858a5.js",
    "revision": "bf2e6dfe519892ed75cd8b87640ebdf8"
  },
  {
    "url": "assets/js/16.758f11f8.js",
    "revision": "0cb688d01f3a5082459baad7311598e4"
  },
  {
    "url": "assets/js/17.b54f6e9c.js",
    "revision": "1d7deb444a6c092066d06b26511b839b"
  },
  {
    "url": "assets/js/18.045f6580.js",
    "revision": "f094e23b3949b1d7de47dd7f1208bacd"
  },
  {
    "url": "assets/js/19.e6b046a3.js",
    "revision": "804217ab65d05bd92c512fff10fdeeb4"
  },
  {
    "url": "assets/js/2.72f01270.js",
    "revision": "2d98de5053eaa45d3f94a3c366637049"
  },
  {
    "url": "assets/js/20.05a2384d.js",
    "revision": "79e0ced71001ab52f858e7b1bb872402"
  },
  {
    "url": "assets/js/21.3c59ad77.js",
    "revision": "b946c2f19372da4463930e77a86db67d"
  },
  {
    "url": "assets/js/22.7915c074.js",
    "revision": "4393f2c93ca24296b228bc61a88a793c"
  },
  {
    "url": "assets/js/23.f005ae79.js",
    "revision": "9578095259ef7569ac71b590ef0a5c9c"
  },
  {
    "url": "assets/js/24.60dc5a21.js",
    "revision": "ef612c2ed26e9a695d9fa36f410bd9a9"
  },
  {
    "url": "assets/js/25.2fbef0a9.js",
    "revision": "a6bd0d069cd38efc77a10dcf4bd057d2"
  },
  {
    "url": "assets/js/26.8f521fda.js",
    "revision": "342fabd94e5bedcf225d9c8af92bd157"
  },
  {
    "url": "assets/js/27.f545fbc4.js",
    "revision": "ee283d6e5848a2e7809341847cceb76c"
  },
  {
    "url": "assets/js/28.d90fd4fb.js",
    "revision": "c7044f616349f680140039e84d6310be"
  },
  {
    "url": "assets/js/29.da4f8664.js",
    "revision": "affaa90a53b50fdc58d782744c62def5"
  },
  {
    "url": "assets/js/3.8611706c.js",
    "revision": "1cd27839b8c9ace42a89d2ec4b97203e"
  },
  {
    "url": "assets/js/30.da407ff8.js",
    "revision": "682791c1b5e1c164e5e3035c75a806a2"
  },
  {
    "url": "assets/js/31.d82ee435.js",
    "revision": "07225a278428d960f0066e5c52892ee5"
  },
  {
    "url": "assets/js/32.6ed04b4d.js",
    "revision": "2663ded332ee82e59e54c290164866e9"
  },
  {
    "url": "assets/js/33.2298ea68.js",
    "revision": "9d8ed4fe88f78752925283f168a71016"
  },
  {
    "url": "assets/js/34.34078720.js",
    "revision": "9976c4238690d275afa66ba056575404"
  },
  {
    "url": "assets/js/35.a86e2055.js",
    "revision": "d1217d756ea9436a57815d1be319d216"
  },
  {
    "url": "assets/js/36.2c98744e.js",
    "revision": "af4ab7a65839cd858e4f9d69f9f2e3e8"
  },
  {
    "url": "assets/js/37.fe9101b9.js",
    "revision": "b550929ef597ba2f5bf599bf6568b30a"
  },
  {
    "url": "assets/js/38.614b606a.js",
    "revision": "17387b3a7d0973ee40ee6e1b79991eb6"
  },
  {
    "url": "assets/js/39.43baddf1.js",
    "revision": "839318c1e4a747e6ff9570e7bb160cfa"
  },
  {
    "url": "assets/js/4.d965c2ae.js",
    "revision": "5574920c2d25e2e54c41911a3862381a"
  },
  {
    "url": "assets/js/40.1cc7b3f3.js",
    "revision": "86e44da73f8d27395f1513db6a986021"
  },
  {
    "url": "assets/js/41.7444b4be.js",
    "revision": "d4dcd2376a9d2ec1fc46de832cbba2fd"
  },
  {
    "url": "assets/js/42.93b40fe1.js",
    "revision": "6439461745ce1b44649aadd119719188"
  },
  {
    "url": "assets/js/43.27a2ec91.js",
    "revision": "1580f00326b4fe693ecc2d81253a338f"
  },
  {
    "url": "assets/js/44.6089d365.js",
    "revision": "2a8401216c66013c331bd325081c6a03"
  },
  {
    "url": "assets/js/45.6f1bc81e.js",
    "revision": "a8d3ee46d406b6c2fc868b9197fe5801"
  },
  {
    "url": "assets/js/46.697671a3.js",
    "revision": "b03945fe5a4421c600fb978f3a2e1a80"
  },
  {
    "url": "assets/js/47.f70833af.js",
    "revision": "b78b01a9794adca6ae3f00aee209a524"
  },
  {
    "url": "assets/js/48.c7f97d74.js",
    "revision": "dec6930413dd707aa7c4f829fff5a457"
  },
  {
    "url": "assets/js/49.5aad3ae3.js",
    "revision": "af75b3206b3e00c0f69fa223597a0b8a"
  },
  {
    "url": "assets/js/50.3213688a.js",
    "revision": "28f5d9abb1d5b67f2f4f2cdff36b0878"
  },
  {
    "url": "assets/js/51.54ecc089.js",
    "revision": "b6d0216803a229ef6a359104b781ff64"
  },
  {
    "url": "assets/js/52.1d82322a.js",
    "revision": "b0da49bb8d145ecb1fdecc69f153fcf9"
  },
  {
    "url": "assets/js/53.7a428791.js",
    "revision": "6b7d2ac07e998a93ad6ef767a8be3599"
  },
  {
    "url": "assets/js/54.2bf4990e.js",
    "revision": "3afb69f5fb51a9918b42769d95e1d84c"
  },
  {
    "url": "assets/js/55.d16b8421.js",
    "revision": "47d3ea86cd89a5bcac4b675c9785a4a4"
  },
  {
    "url": "assets/js/56.766ea5e5.js",
    "revision": "b6dc78458435d0c8a6b1b01678217c29"
  },
  {
    "url": "assets/js/57.257ea55a.js",
    "revision": "bb0dfb926d0e6afca03e4ced2c326568"
  },
  {
    "url": "assets/js/58.118460ec.js",
    "revision": "5a1b4ed6b4ccaa7e57443464f2640117"
  },
  {
    "url": "assets/js/59.e8207456.js",
    "revision": "fa5658822664a30f9293dca919f6a4ec"
  },
  {
    "url": "assets/js/6.ca45195c.js",
    "revision": "d39d0c82a6748400c213df559232025e"
  },
  {
    "url": "assets/js/60.46a1c981.js",
    "revision": "1fee0ea95947622ec7651c5c73b6325c"
  },
  {
    "url": "assets/js/61.e9b63931.js",
    "revision": "084dd9f251e14785a848cdc6279e2254"
  },
  {
    "url": "assets/js/62.34265bf5.js",
    "revision": "b7c21ed976c3f0aec362582d66ae4626"
  },
  {
    "url": "assets/js/63.aa6529af.js",
    "revision": "ee139099afd647d229abd01a44e3b289"
  },
  {
    "url": "assets/js/64.eaaeafe0.js",
    "revision": "59913879870ef88ca01b8c8537d05384"
  },
  {
    "url": "assets/js/65.90978b52.js",
    "revision": "6a8e3e52246a2b1a38017c72fea12078"
  },
  {
    "url": "assets/js/66.7f82fcbc.js",
    "revision": "03c2836152e60406b63c2f76be88363c"
  },
  {
    "url": "assets/js/67.8767c78f.js",
    "revision": "fc352a0917bde7d1e57eba641b415048"
  },
  {
    "url": "assets/js/68.1763b6ea.js",
    "revision": "cb146622a44256ffe336fac9812e0caa"
  },
  {
    "url": "assets/js/69.60096856.js",
    "revision": "e215f0331b44fb1f8258e49a64526ab9"
  },
  {
    "url": "assets/js/7.e1bd62f6.js",
    "revision": "d56eb74afad62c5165c7272a58ecf1c5"
  },
  {
    "url": "assets/js/70.81b475e9.js",
    "revision": "7e45100eeb6b75697f5a2a35c71953ef"
  },
  {
    "url": "assets/js/71.f81c355d.js",
    "revision": "64d4a9c7a267255ea0802e34d3b11d58"
  },
  {
    "url": "assets/js/72.19c90a38.js",
    "revision": "2f266419040b8ff6faf98ed6b1e5e0f2"
  },
  {
    "url": "assets/js/73.d5fe247f.js",
    "revision": "4cb2ffa41e8b4a8a0071be24d324f258"
  },
  {
    "url": "assets/js/74.9b146713.js",
    "revision": "184292bc8203dc9c4ba6080656735595"
  },
  {
    "url": "assets/js/75.e50d5b07.js",
    "revision": "6207c0425e5966c94535cf7a0aa99557"
  },
  {
    "url": "assets/js/76.49711fba.js",
    "revision": "ec7c2f26b6531eb59178e53c0a776f5d"
  },
  {
    "url": "assets/js/77.30277f41.js",
    "revision": "5898217915fbeb4e8fd1f0d66a03e090"
  },
  {
    "url": "assets/js/78.27fdec5a.js",
    "revision": "7ce14149929e239dc58ddd7e19ec5a06"
  },
  {
    "url": "assets/js/79.980ce853.js",
    "revision": "11bdbbfcc637ec7d08e9edab5489adb8"
  },
  {
    "url": "assets/js/8.e719cf19.js",
    "revision": "610c988186ed368405e6e9ce106da98f"
  },
  {
    "url": "assets/js/80.918e092d.js",
    "revision": "e68ae928aa8afd8880be3a24d9fea708"
  },
  {
    "url": "assets/js/81.392ec823.js",
    "revision": "624122b7d88f3967e3b46a87b9a3627f"
  },
  {
    "url": "assets/js/82.285f9f6c.js",
    "revision": "482ecd21af27b55ea13a20bc03a217d2"
  },
  {
    "url": "assets/js/83.a479fe24.js",
    "revision": "853f28a64a6d4d9b92fb42e06470959c"
  },
  {
    "url": "assets/js/84.f53086a6.js",
    "revision": "775eaf888164eb600edf19f55017d4c0"
  },
  {
    "url": "assets/js/85.73f1f1b6.js",
    "revision": "359cc18afd6ca0dedb2ac0befe9bc492"
  },
  {
    "url": "assets/js/86.d35f7254.js",
    "revision": "6962e0190d5f696e570265d210fe8c1e"
  },
  {
    "url": "assets/js/87.352edacb.js",
    "revision": "60b0ab05936f9792fbf0ba6693e90d77"
  },
  {
    "url": "assets/js/88.18595589.js",
    "revision": "754587a3adbe988bb4d56a6216cc7bf2"
  },
  {
    "url": "assets/js/89.d078afe2.js",
    "revision": "044f6d3fd1ac0b057fe5eb767f525334"
  },
  {
    "url": "assets/js/9.d94a74df.js",
    "revision": "3192568f99568e31a7e4b8eb9323577e"
  },
  {
    "url": "assets/js/90.4339437b.js",
    "revision": "c335bdd230ebfd1359fda02911683a2d"
  },
  {
    "url": "assets/js/91.364f9397.js",
    "revision": "4669f49ef6a2bfbaffb8a0481f622601"
  },
  {
    "url": "assets/js/92.ef270ca2.js",
    "revision": "12bce32335f94baa8a558cfefa9ccba7"
  },
  {
    "url": "assets/js/93.7e4b1342.js",
    "revision": "a4e31eaef4407aebad3124c9cb25110e"
  },
  {
    "url": "assets/js/94.2979badb.js",
    "revision": "11def144df0e767b03c8e796c4c6b24f"
  },
  {
    "url": "assets/js/95.7217b2c5.js",
    "revision": "ccf996f1bf3dde0106b92782e760bc45"
  },
  {
    "url": "assets/js/96.53ddd130.js",
    "revision": "6af9c307598cbb64cf0ae25908beb3df"
  },
  {
    "url": "assets/js/97.c317a511.js",
    "revision": "0112666101de440a9a6567d82d40c8ee"
  },
  {
    "url": "assets/js/app.38af9f92.js",
    "revision": "c130215284c4d197e42d4553463bd64e"
  },
  {
    "url": "basic/drag.html",
    "revision": "58c175713bd8853a7f839af0df07e0fb"
  },
  {
    "url": "basic/easing.html",
    "revision": "f1e6d69c7022fb7dce445effc073c4cf"
  },
  {
    "url": "basic/follow.html",
    "revision": "b2a4ba77c7e3ac5840024db556f34802"
  },
  {
    "url": "basic/gsap.html",
    "revision": "92c64c183a36467435e6501ee127f95e"
  },
  {
    "url": "basic/hover.html",
    "revision": "1984b0df036158161652cff33115dcaa"
  },
  {
    "url": "basic/index.html",
    "revision": "893de4e7ddff712620813316cdb52257"
  },
  {
    "url": "basic/random.html",
    "revision": "5ce1c97801b0a117d1635f1fa9e939cf"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "024a2861dcd106f44bb05ea250bafae0"
  },
  {
    "url": "basic/scroll.html",
    "revision": "180825d9dadad53a7506632758f0f847"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "c888356895e55de1a0969e8e4f43bafb"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "7d489a29e5ce7ef4fe8d27de6b4615ab"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "7635c92545999213665b10c5664d2f31"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "96facfaa9d9d15b226f9ad250a3765c1"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "5f303c81d681c33a83f3ab8524a6cd6f"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "73925e07d9746c14646aa4c339b5ae73"
  },
  {
    "url": "canvas/index.html",
    "revision": "85c6cf8278005455bb1c7b5083167edf"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "733b5bd17d315ca7423e4fc4a7765a1a"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "e20639460cea84a8bf9c73ad8b467141"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "30033519f39b62a843ec3e31d85bc135"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "50a4acb8b91d9f17cf90911ae2e3950f"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "393ffd2f75bedab113b7c2a4a7fb32d9"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "487d46c289f2de06165a1c60629a4345"
  },
  {
    "url": "effects/index.html",
    "revision": "1c2643fe6badc24778cab4afb640958c"
  },
  {
    "url": "effects/mouse.html",
    "revision": "dbc80bf72863f24c50bc2ceea2615d43"
  },
  {
    "url": "effects/reveal.html",
    "revision": "8c283c56064b99551007d96e2cf99178"
  },
  {
    "url": "favicon.png",
    "revision": "cf75785b2334d026fc678b53776ac38f"
  },
  {
    "url": "images/canvas/rose-map.jpg",
    "revision": "04fbfd1c75df3b186821be2536cffde9"
  },
  {
    "url": "images/canvas/rose.jpg",
    "revision": "d95edc45077b0116c4e8d3203ac35e5b"
  },
  {
    "url": "images/logo/vogue.svg",
    "revision": "a4a776e562e933f55a59c01d8c687f21"
  },
  {
    "url": "images/texture/01.png",
    "revision": "56f91b11024e0b5c653645872ecd0fd6"
  },
  {
    "url": "images/texture/02.png",
    "revision": "bc847b1791487dd353792f5a449773e8"
  },
  {
    "url": "images/texture/03.jpg",
    "revision": "dabcb515ba176f7033a0783a1b4bcd3f"
  },
  {
    "url": "images/texture/04.jpg",
    "revision": "8a81a5e080830a21d44097e35d1e99ce"
  },
  {
    "url": "index.html",
    "revision": "e9b034b4b483f00ba2770dc0ac561f2d"
  },
  {
    "url": "info/index.html",
    "revision": "ced27411780e685579c57f46f3ce7300"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "b2cd091e7c76b35974aa792b035432ad"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "75632bb593cb6f43c8d681c188aa4f88"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
