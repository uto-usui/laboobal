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
    "revision": "04e9ce4d2a7423892de76019d095f53e"
  },
  {
    "url": "assets/css/0.styles.76a0c157.css",
    "revision": "00d8a429a4bf0d3440e033e389ff5bac"
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
    "url": "assets/js/10.beb45c73.js",
    "revision": "23e3afebbca454c1f8af86b054879ed1"
  },
  {
    "url": "assets/js/11.679b4fdb.js",
    "revision": "105aae599cd935b9bc5cd06de2701cb4"
  },
  {
    "url": "assets/js/12.515b2f83.js",
    "revision": "79f91a1c55ec3723b8627dc93d03096f"
  },
  {
    "url": "assets/js/13.5dbf2602.js",
    "revision": "24e3db0b35d8defc322c53ecb928f664"
  },
  {
    "url": "assets/js/14.da5d8990.js",
    "revision": "cdd0ef1b6e069c563395215140e1747d"
  },
  {
    "url": "assets/js/15.f6cfac99.js",
    "revision": "2bc6e329224f3bafff1b2f49f68d2224"
  },
  {
    "url": "assets/js/16.27d1d8bd.js",
    "revision": "cdcd20ab9854cb02dd509bf99f989e23"
  },
  {
    "url": "assets/js/17.4d261f74.js",
    "revision": "ae70b5c6a58bf64cf956ada222a66b88"
  },
  {
    "url": "assets/js/18.7dd5a56c.js",
    "revision": "a3bf4d18f458a24dcfcec43d4e8e6105"
  },
  {
    "url": "assets/js/19.e4f8924f.js",
    "revision": "1dd27082ee9f72f1fa07d4ca595b3f72"
  },
  {
    "url": "assets/js/2.72f01270.js",
    "revision": "2d98de5053eaa45d3f94a3c366637049"
  },
  {
    "url": "assets/js/20.acc4f1c0.js",
    "revision": "8b585f8a1527a818cd62b079cd0adcbc"
  },
  {
    "url": "assets/js/21.6b2479a8.js",
    "revision": "cfe0918342a4b31bcb81ead8c5cbb8e6"
  },
  {
    "url": "assets/js/22.8af9241c.js",
    "revision": "fb36c72fb6d95b165357da66c3ea5654"
  },
  {
    "url": "assets/js/23.8a0c8d7b.js",
    "revision": "82da753a3a14144fb744675bcaf6a993"
  },
  {
    "url": "assets/js/24.cd525312.js",
    "revision": "d5a10c7b097840d405761eeffb28205b"
  },
  {
    "url": "assets/js/25.bfbeb606.js",
    "revision": "64c6ab5ead4d98a98814d71b71feb6ea"
  },
  {
    "url": "assets/js/26.8046ec87.js",
    "revision": "90e5e34edf8709fde0c7455daf60a4a6"
  },
  {
    "url": "assets/js/27.a40e395e.js",
    "revision": "dfef2b67f62567bc569fab5ec6b268b2"
  },
  {
    "url": "assets/js/28.6e76bf28.js",
    "revision": "b543ffafdcc4c2445df066550bcab77b"
  },
  {
    "url": "assets/js/29.cefe9564.js",
    "revision": "db5d607c84fe0a9000f0e0064764b193"
  },
  {
    "url": "assets/js/3.8611706c.js",
    "revision": "1cd27839b8c9ace42a89d2ec4b97203e"
  },
  {
    "url": "assets/js/30.a072cf4c.js",
    "revision": "398ace91af09e2e60673420547b89efe"
  },
  {
    "url": "assets/js/31.7185d95b.js",
    "revision": "51430e6413ed59790551625413e6669e"
  },
  {
    "url": "assets/js/32.7bf68525.js",
    "revision": "8336a80121996c5417673628fec2570f"
  },
  {
    "url": "assets/js/33.0163f6d2.js",
    "revision": "f6b4c95f2c5f8eb5767c7486570c16d2"
  },
  {
    "url": "assets/js/34.11707e18.js",
    "revision": "d93e391d622a8b85398c7f40a46c739b"
  },
  {
    "url": "assets/js/35.b8cb9e79.js",
    "revision": "0bfc00298676046feceaa4a5aebd44b5"
  },
  {
    "url": "assets/js/36.45e176b1.js",
    "revision": "c953e7bb62a32b032a52b004151c8c78"
  },
  {
    "url": "assets/js/37.6e9d402b.js",
    "revision": "1f896bdfd2f876f3747c12a166409f8f"
  },
  {
    "url": "assets/js/38.a939ec49.js",
    "revision": "6553cf838cedcef65b09ac3883949329"
  },
  {
    "url": "assets/js/39.6fdba60d.js",
    "revision": "d70721f338b1e4be0272b1d1542ccbc9"
  },
  {
    "url": "assets/js/4.fa9caaa3.js",
    "revision": "caa8a4bd291872046cec9055f68cf8e6"
  },
  {
    "url": "assets/js/40.a258d47c.js",
    "revision": "cb0ab8863a43d61ad39ec603faa8daad"
  },
  {
    "url": "assets/js/41.a2516aea.js",
    "revision": "8c40811cbc8949b58f586ea29b92ea5a"
  },
  {
    "url": "assets/js/42.a4199f89.js",
    "revision": "54ba329cb3bc4f2eb3ea62cb5e14efc2"
  },
  {
    "url": "assets/js/43.d5c906fb.js",
    "revision": "fc17781587091dcfc94576e2591b29f7"
  },
  {
    "url": "assets/js/44.a63d010c.js",
    "revision": "084278dce294afcbe25ac0fee82046dd"
  },
  {
    "url": "assets/js/45.3a141741.js",
    "revision": "c9525c373e0549ae65bf3b9f04133548"
  },
  {
    "url": "assets/js/46.3ed19fa3.js",
    "revision": "6670cb4fdd804b84ffd8f736cbc51a14"
  },
  {
    "url": "assets/js/47.08bbc671.js",
    "revision": "869256e29e97d2adb0e656ee5949a5f8"
  },
  {
    "url": "assets/js/48.80356e19.js",
    "revision": "59e15e02b0da6027cf6a00a8c835fa23"
  },
  {
    "url": "assets/js/49.0e492f3a.js",
    "revision": "dffcefc93bcd354b974cf1f80fe35148"
  },
  {
    "url": "assets/js/50.522b6611.js",
    "revision": "bff21e47b1861e26def11478be2d7e89"
  },
  {
    "url": "assets/js/51.f0f44e2d.js",
    "revision": "60440101596a7a45ede82d36abd96b2d"
  },
  {
    "url": "assets/js/52.bb6dfac4.js",
    "revision": "71ce4f2e1e45c4434344a9ca15228e41"
  },
  {
    "url": "assets/js/53.ce2dedfd.js",
    "revision": "925de8d21f764abebfd4317e969f5535"
  },
  {
    "url": "assets/js/54.264ff2a7.js",
    "revision": "94ab60ada3ed178552dc843670fb004c"
  },
  {
    "url": "assets/js/55.48b25ce0.js",
    "revision": "b0831b7ea6328194dfc470ff290c95eb"
  },
  {
    "url": "assets/js/56.a19ddde4.js",
    "revision": "61e4ba6466f031ac33b4605a1406df1f"
  },
  {
    "url": "assets/js/57.d5cfa920.js",
    "revision": "78269608d85f591f78de7c122fefdf46"
  },
  {
    "url": "assets/js/58.7b822253.js",
    "revision": "bc1d4014d9e0cb7736549c5602f6c7b4"
  },
  {
    "url": "assets/js/59.806ffc13.js",
    "revision": "8f12282610df2db4326b08157c18395d"
  },
  {
    "url": "assets/js/6.5e8367bc.js",
    "revision": "ba90ace123babf2f45e1a5c1f43e966b"
  },
  {
    "url": "assets/js/60.998279d1.js",
    "revision": "44390be38199feb7dbe8a2ab78aa6c66"
  },
  {
    "url": "assets/js/61.d3c4b3b7.js",
    "revision": "5a10fa52261cbaf974e185cd7e3cda4e"
  },
  {
    "url": "assets/js/62.940ee367.js",
    "revision": "88afadbf4337c9c30395bbb713eb3110"
  },
  {
    "url": "assets/js/63.3bca7fc1.js",
    "revision": "0863ea1984f519c000a4f97b79109562"
  },
  {
    "url": "assets/js/64.e6b5af64.js",
    "revision": "ce20e70c51794a0dadfa01782116d550"
  },
  {
    "url": "assets/js/65.927102e1.js",
    "revision": "1b8b89d5c0b0d66b1ddddd4a0b7c4893"
  },
  {
    "url": "assets/js/66.153d3c88.js",
    "revision": "fa56759e78facf0bfaf95269520cb1ee"
  },
  {
    "url": "assets/js/67.9c8d7e92.js",
    "revision": "23d6a8dc59b75f3a9cfce56349586acc"
  },
  {
    "url": "assets/js/68.29bd5d78.js",
    "revision": "d0f9a1e9a8423ce7231d03415d779171"
  },
  {
    "url": "assets/js/69.18714ef3.js",
    "revision": "beeb338ee657228b05bd3b24834fc400"
  },
  {
    "url": "assets/js/7.e575bdd6.js",
    "revision": "71642e38e6ee4cfbf54295b84dd925ef"
  },
  {
    "url": "assets/js/70.e3135244.js",
    "revision": "fcfadc1681ef21bf33c91bbf18e2d4b6"
  },
  {
    "url": "assets/js/71.b1cec5cd.js",
    "revision": "66da55d39c26ff18df04081eb43374af"
  },
  {
    "url": "assets/js/72.843dddfd.js",
    "revision": "55b8ca2acc6f467d6d99c5ab6b03aa38"
  },
  {
    "url": "assets/js/73.b88146a3.js",
    "revision": "898cc5ec78e8e25d03631cebe486f344"
  },
  {
    "url": "assets/js/74.869daa1e.js",
    "revision": "d2f6fe1edd9e408f48248a23cea83e59"
  },
  {
    "url": "assets/js/75.86a4916e.js",
    "revision": "d46ff01eb6cf5bc695584b56f989a206"
  },
  {
    "url": "assets/js/76.490571da.js",
    "revision": "e537615e0f327952f000bb900b9ddcf3"
  },
  {
    "url": "assets/js/77.0b08b703.js",
    "revision": "c89539f5fa7f4c7c4a0fa93b913c72cd"
  },
  {
    "url": "assets/js/78.e7e1f2e8.js",
    "revision": "3fca25e8ffe52f85742c243c5350ea8c"
  },
  {
    "url": "assets/js/79.66db436e.js",
    "revision": "992a2a2c4892c56b17f44f2324a3b6d1"
  },
  {
    "url": "assets/js/8.b4863164.js",
    "revision": "9b48b828d8cb30b2dbec0c15e948ba34"
  },
  {
    "url": "assets/js/80.e8a8205f.js",
    "revision": "9adc4c4fe3ae69ad779769ef762664fe"
  },
  {
    "url": "assets/js/81.6a57afa2.js",
    "revision": "cd9d5a7d0ed4199e0015642ff7b7c664"
  },
  {
    "url": "assets/js/82.185d26f6.js",
    "revision": "d5c9d751db42fcb843b37054b490bf72"
  },
  {
    "url": "assets/js/83.7a495db6.js",
    "revision": "2a0b8a154402265427d8df50e4c47fd2"
  },
  {
    "url": "assets/js/84.e8447cf5.js",
    "revision": "1292b731bb8367017946de3cd4c35bed"
  },
  {
    "url": "assets/js/85.88b0b894.js",
    "revision": "c15883f141d98687bb7342b2f1ea7979"
  },
  {
    "url": "assets/js/86.0c116ae9.js",
    "revision": "fae0f9f9167a96a4df360f518277d9b7"
  },
  {
    "url": "assets/js/87.90faee37.js",
    "revision": "51ddacf02f87430b8d1cdd20b1d1279e"
  },
  {
    "url": "assets/js/88.fb1fcb15.js",
    "revision": "22bc3be7d4256be3a5bb76d0d01317b6"
  },
  {
    "url": "assets/js/89.e450418b.js",
    "revision": "2a5a5b87916b7d9fd8d50da8db2dc8c6"
  },
  {
    "url": "assets/js/9.32ea8adc.js",
    "revision": "b0fa477869000220ee940da1d50efa53"
  },
  {
    "url": "assets/js/90.b4e49b5c.js",
    "revision": "9aeb4102ce0898b9865818a6ced0c6f0"
  },
  {
    "url": "assets/js/91.50ee2ef3.js",
    "revision": "487c10c1cdca2485cf20d9048e0039ff"
  },
  {
    "url": "assets/js/92.819ac09b.js",
    "revision": "e0539afc967201cb34b65c0e8f7c9bbc"
  },
  {
    "url": "assets/js/93.d5984262.js",
    "revision": "ea7a32a0edb112573012364945bf4fff"
  },
  {
    "url": "assets/js/94.61eca821.js",
    "revision": "5c318616a36f30a55f09a4c7e28a7db5"
  },
  {
    "url": "assets/js/app.1035eac9.js",
    "revision": "eeba20526300484ad437f60164e8061c"
  },
  {
    "url": "basic/drag.html",
    "revision": "2c804dda2fccc35314330c981cf4d3f7"
  },
  {
    "url": "basic/easing.html",
    "revision": "feb1cdac240c8b09574e3d0d7c4f80fb"
  },
  {
    "url": "basic/follow.html",
    "revision": "e4fd461bc9206e14bde75664b18f74d9"
  },
  {
    "url": "basic/gsap.html",
    "revision": "f13e6440dbda8e7e7c1bb35edb052c31"
  },
  {
    "url": "basic/hover.html",
    "revision": "89f7b6be304cc01640dd7c90561470ff"
  },
  {
    "url": "basic/index.html",
    "revision": "5f6e11d68f4b88710abcc9ea0154b66f"
  },
  {
    "url": "basic/random.html",
    "revision": "5f1b4cd2383a75c71f299ee89630f3d2"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "f41ea0980d0866942c50f74cb8386356"
  },
  {
    "url": "basic/scroll.html",
    "revision": "2ec0dfbff4d01ffc8b89d91a7b5ef809"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "502400ab2575833a9438919e51c298f4"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "1f6f1280556092c30d18abc9bd6b803f"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "51fdce1e7aa9bace45165345056d8ee7"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "c3f5a1481def821559bfe23f6b5023fd"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "8065a56cdac2723cdac6c5b31cc631fe"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "1905b2cc623286722863f3ca812cc3a2"
  },
  {
    "url": "canvas/index.html",
    "revision": "0d2f67256e709422eaf8028dbfc8236d"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "d6762e0c5aa50f7bb3c10dc3b2896cb5"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "014bbe112633ad1e3b3c816c3b950782"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "17478041f8f5723d659054b89543d86b"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "b1c9898b94cbf688660ee0bab5bff05e"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "6ee16001d4aa4e988a56358f7466e1fc"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "c6c8ba29b8c9bc1b02598047d93be054"
  },
  {
    "url": "effects/index.html",
    "revision": "75473534f3f22bd95698b575665a543c"
  },
  {
    "url": "effects/mouse.html",
    "revision": "1f0b4bf38d68c0755a7f0a1b4a785fb7"
  },
  {
    "url": "effects/reveal.html",
    "revision": "f0e2272e6ae3bfc525166f8b34764b34"
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
    "revision": "fcaa1db3ac1bf29416764a7a62710455"
  },
  {
    "url": "info/index.html",
    "revision": "83b2bf44b76c60f03797a4bede15d3c0"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "072ade5112d9a980f91d1d865c6ae6f1"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "ee4264a7eb21887f97160949e74245dd"
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
