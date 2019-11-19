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
    "revision": "05bf8a25a9697ac0b7fe18c3784e35a8"
  },
  {
    "url": "assets/css/0.styles.d2595992.css",
    "revision": "9ae1845616f8eb1d06dd0dc6479eae5e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.2644a9f1.js",
    "revision": "08c3043f6ad885dd151a4038683968d8"
  },
  {
    "url": "assets/js/10.c3c304ab.js",
    "revision": "639cbb6ab65f2ea5f702e5b0f512673d"
  },
  {
    "url": "assets/js/11.d4ac3218.js",
    "revision": "47fdd072b862c31c4f37681f76102e22"
  },
  {
    "url": "assets/js/12.ebbacc32.js",
    "revision": "aa8201073c17322cc560885dd0076ccf"
  },
  {
    "url": "assets/js/13.3e2241cc.js",
    "revision": "3498ca28a5e193f30574dcd9e827dd41"
  },
  {
    "url": "assets/js/14.c1889e16.js",
    "revision": "da99e6d35d0ef7156b0492ecd10e35e8"
  },
  {
    "url": "assets/js/15.3810fb84.js",
    "revision": "cc77481f841a199854a8336261ad64e3"
  },
  {
    "url": "assets/js/16.a6e8ffd9.js",
    "revision": "dcb615787646488e5e42e162630e3451"
  },
  {
    "url": "assets/js/17.5e170a8d.js",
    "revision": "c71d6a55a97bb3acbcf093deada42403"
  },
  {
    "url": "assets/js/18.578e183f.js",
    "revision": "79c246d99598e69e2d1e5d46ef1b4c28"
  },
  {
    "url": "assets/js/19.dcea812e.js",
    "revision": "33b87bf668bef24d7469c20069701362"
  },
  {
    "url": "assets/js/2.6bdbdeb8.js",
    "revision": "f78618b06025ca2b15edde7753d19c8a"
  },
  {
    "url": "assets/js/20.e3157f8d.js",
    "revision": "7cc0f152dceca0a7b15ca723b0886aa3"
  },
  {
    "url": "assets/js/21.c9edab71.js",
    "revision": "713874f346b02d7188c6eba18b2791fe"
  },
  {
    "url": "assets/js/22.7c68c05d.js",
    "revision": "1fe0617bc31fbbedd1dfac0fbbfacbd4"
  },
  {
    "url": "assets/js/23.f73ddb11.js",
    "revision": "03e7a0d1a4f49bba555729e39586ba1c"
  },
  {
    "url": "assets/js/24.0cfb0524.js",
    "revision": "bc27554a33470ab26eda04251d820829"
  },
  {
    "url": "assets/js/25.5a455816.js",
    "revision": "b6a9a392195814f852507ac0c22d3270"
  },
  {
    "url": "assets/js/26.8e63418c.js",
    "revision": "bbdcec9515ebaf64fdfc9ba51e00263c"
  },
  {
    "url": "assets/js/27.3a1fe764.js",
    "revision": "802debe73ff315e038eebe9e090d5404"
  },
  {
    "url": "assets/js/28.05331561.js",
    "revision": "01ce6b81f3d99434eb7c8d6fe5fb75e3"
  },
  {
    "url": "assets/js/29.4f3ba2aa.js",
    "revision": "2f7345a6363e3ae8a96d58b3cfcf72ce"
  },
  {
    "url": "assets/js/3.785db0b9.js",
    "revision": "2d8ed532590971fad24a93483ca0ebf6"
  },
  {
    "url": "assets/js/30.ff6b5167.js",
    "revision": "f179c03478bea873d304a469ac42ff22"
  },
  {
    "url": "assets/js/31.126e58e5.js",
    "revision": "7b2f05c6b8e93e906e855d8e4c5f410b"
  },
  {
    "url": "assets/js/32.193ac751.js",
    "revision": "09f8ad490ab7bfd213143a55d1c9f41e"
  },
  {
    "url": "assets/js/33.eac1054b.js",
    "revision": "112c42e38cdc6ce1d1ce1ee06536da7f"
  },
  {
    "url": "assets/js/34.e2ff92f3.js",
    "revision": "867a65d6b971e418fb59d10245b20609"
  },
  {
    "url": "assets/js/35.c9ca23cb.js",
    "revision": "78405fbf712d2f19fa22e0eee4c84556"
  },
  {
    "url": "assets/js/36.fd0a499e.js",
    "revision": "73cb319823bece0dfbaf88bba5d2187a"
  },
  {
    "url": "assets/js/37.2357d286.js",
    "revision": "11cc249934d9ab00619d988d22248e8e"
  },
  {
    "url": "assets/js/38.4cd5e032.js",
    "revision": "b4a6b48aff56209e7dd23a36dec0d7b1"
  },
  {
    "url": "assets/js/39.d4a83212.js",
    "revision": "0b8e28a04012ca5493e56ba2cdcda10e"
  },
  {
    "url": "assets/js/4.de20182e.js",
    "revision": "7aecf33b333ec6239f4dcdec61ad7815"
  },
  {
    "url": "assets/js/40.ce843565.js",
    "revision": "0719865db4dbcb9c6e8ebe16b11d401e"
  },
  {
    "url": "assets/js/41.c3cd44e8.js",
    "revision": "84847a94de7e13c02dfb8b191e2538e7"
  },
  {
    "url": "assets/js/42.cae98862.js",
    "revision": "8dbc26dc6ad5172a3809762406de3ec6"
  },
  {
    "url": "assets/js/43.efdc7de4.js",
    "revision": "f132a11caca816bce24f91e3a839ab6d"
  },
  {
    "url": "assets/js/44.a3baf6cd.js",
    "revision": "d7b8b699a818c24f756a9c58d0c6e307"
  },
  {
    "url": "assets/js/45.f8cccd34.js",
    "revision": "059188b364dba54ee0bf01b6eb67d5c2"
  },
  {
    "url": "assets/js/46.f0ae8a71.js",
    "revision": "f746bcb5681e5dc3eca975789a3a68e9"
  },
  {
    "url": "assets/js/47.f82dda61.js",
    "revision": "92e82bb6397bb0b709f647d026f1eb82"
  },
  {
    "url": "assets/js/48.192f9780.js",
    "revision": "60074fb2e3912755814df45821382388"
  },
  {
    "url": "assets/js/49.2d2a6c42.js",
    "revision": "b4832b688f8bd1e99b3e33dda3119055"
  },
  {
    "url": "assets/js/5.714bf9bd.js",
    "revision": "9ad31b6dc90c45c6e12315b8af85eaa3"
  },
  {
    "url": "assets/js/50.0374f3e9.js",
    "revision": "8dd87e4d34d4dcce20ec0833461ca758"
  },
  {
    "url": "assets/js/51.083d6ac1.js",
    "revision": "b6bfdb8e3fbcf92828e9bc51029a22af"
  },
  {
    "url": "assets/js/52.8e488952.js",
    "revision": "9001f4ab27a1f506b1099a9f70c4cd0d"
  },
  {
    "url": "assets/js/53.91cb9030.js",
    "revision": "a03b441952e5c8853c18985f533e8ed5"
  },
  {
    "url": "assets/js/54.d2b34c0f.js",
    "revision": "b349cb24ffbd1d9b50940a446e2dfeeb"
  },
  {
    "url": "assets/js/55.465170fd.js",
    "revision": "138b476ce28f7c0adf2c22383a3658cb"
  },
  {
    "url": "assets/js/56.6ce43c4e.js",
    "revision": "3a084bd3a096a2b8c0b311647f70520f"
  },
  {
    "url": "assets/js/57.0a500c94.js",
    "revision": "e5ed58e67787aa1ae5f40cbb0681f82f"
  },
  {
    "url": "assets/js/58.d40754ef.js",
    "revision": "508c7c179f86c80fc1be65c71aba485b"
  },
  {
    "url": "assets/js/59.c2da6386.js",
    "revision": "5dbac60f432a4b40a84a10324deaddd4"
  },
  {
    "url": "assets/js/6.2b173a38.js",
    "revision": "a94a024fd6f392d6020f8d388b592e22"
  },
  {
    "url": "assets/js/60.40048939.js",
    "revision": "61e072f15c533fa45061025e357b2c37"
  },
  {
    "url": "assets/js/61.bd84a129.js",
    "revision": "0b6cb8737dbfad291b0fb16254e5ca60"
  },
  {
    "url": "assets/js/62.cfab1072.js",
    "revision": "991a99c71780ce29c0b5aaffc5ccbdd4"
  },
  {
    "url": "assets/js/63.bfc22c6d.js",
    "revision": "afb623273f49924a5df8e07de6ea1bc6"
  },
  {
    "url": "assets/js/64.834088e9.js",
    "revision": "8da04d68a579358537d3e520188480d0"
  },
  {
    "url": "assets/js/65.07cff18c.js",
    "revision": "4f4597f471abd03d7e0cf98bdb0796bf"
  },
  {
    "url": "assets/js/66.7850949d.js",
    "revision": "50aff717b88cadf7294aae153459659f"
  },
  {
    "url": "assets/js/67.6e9e3456.js",
    "revision": "52f28afb28111cebe9bce8ff277fba4b"
  },
  {
    "url": "assets/js/68.2d3085bc.js",
    "revision": "a9365f3e7751bd449627b0bf8a75bf86"
  },
  {
    "url": "assets/js/69.fbeec93d.js",
    "revision": "93949d781f824d8f3e5d3de5be473424"
  },
  {
    "url": "assets/js/70.e4969bef.js",
    "revision": "248a96c30c53e3560178949a56585e6e"
  },
  {
    "url": "assets/js/71.aad7c370.js",
    "revision": "22381489132ed3658905dfe186be59a8"
  },
  {
    "url": "assets/js/72.f22f5bf2.js",
    "revision": "405137ccf4f8cb9f9139eca90ba999ad"
  },
  {
    "url": "assets/js/73.1d50b2dc.js",
    "revision": "1a446358726fbb69d6bcb536039099d8"
  },
  {
    "url": "assets/js/74.a779da5b.js",
    "revision": "99c0c72f8ac8380729c803964365c217"
  },
  {
    "url": "assets/js/75.b3e163c4.js",
    "revision": "c27443cdfb0737c53619a940c4027e0a"
  },
  {
    "url": "assets/js/76.bcaa438f.js",
    "revision": "6615d87097399bdaebee1d7fa9b5bac2"
  },
  {
    "url": "assets/js/77.f36d4c94.js",
    "revision": "3f86674cad23d1c920ff86ee6b90dfb7"
  },
  {
    "url": "assets/js/78.3a842a29.js",
    "revision": "5e86e4bb0461eb280e8fa5c373dd3d51"
  },
  {
    "url": "assets/js/79.db26d4d7.js",
    "revision": "d01bc7489c3501f1f46e921d918137bd"
  },
  {
    "url": "assets/js/8.39019ac2.js",
    "revision": "b4e5770badcc5ab281664fb6f1ce358c"
  },
  {
    "url": "assets/js/80.72b0bf27.js",
    "revision": "b253aadbb48735acafb0838ccd49d3b0"
  },
  {
    "url": "assets/js/81.cb382a1e.js",
    "revision": "6563120869eeb5674464ae990838cc71"
  },
  {
    "url": "assets/js/82.a1966fc7.js",
    "revision": "8f11ff39f621b8806cf8254016fd4ba8"
  },
  {
    "url": "assets/js/83.e6a8fe51.js",
    "revision": "e0da448775e4f1fc0af0e28e671b39e4"
  },
  {
    "url": "assets/js/84.e25b32dc.js",
    "revision": "dbbf8eb4836c675d617464b3ae632bc4"
  },
  {
    "url": "assets/js/85.02b197a3.js",
    "revision": "9789afa080f97070fa24c81744e8e0d3"
  },
  {
    "url": "assets/js/86.9235a20a.js",
    "revision": "29ceba8ac4fb92936a77a356b887586f"
  },
  {
    "url": "assets/js/87.fcd058df.js",
    "revision": "480f8a303c1b2c80f62fba68ff27908f"
  },
  {
    "url": "assets/js/88.edf421b0.js",
    "revision": "837495997abe18f0be323f7ea0a163c6"
  },
  {
    "url": "assets/js/89.a815d037.js",
    "revision": "f07b5cd7b47c7341158c4e1cd1c48f79"
  },
  {
    "url": "assets/js/9.1b9066c0.js",
    "revision": "1a9cfd8d8df6ad016ad7091946b68e51"
  },
  {
    "url": "assets/js/90.7b5e74aa.js",
    "revision": "380761b9efbb560fd776f315322b5130"
  },
  {
    "url": "assets/js/91.6d72e041.js",
    "revision": "e2e45f1c8e5ec0d0453f47eccf34f056"
  },
  {
    "url": "assets/js/92.1a165b04.js",
    "revision": "d34d086634fdfaf219023061ee76aaa3"
  },
  {
    "url": "assets/js/93.d5d4a2cd.js",
    "revision": "87a45a4c58951fded1742ce64d2016bb"
  },
  {
    "url": "assets/js/94.84ca6881.js",
    "revision": "6dc34be543a691112e575589de8640e7"
  },
  {
    "url": "assets/js/95.86ef821e.js",
    "revision": "24a051f7b9f31ffdd99d8ac0c2fd025b"
  },
  {
    "url": "assets/js/96.72ca6d2c.js",
    "revision": "9f20769ca3e955c8f324059fcefa7672"
  },
  {
    "url": "assets/js/97.7e06d0b7.js",
    "revision": "a2fef1647d8fbee283df1102348d5f59"
  },
  {
    "url": "assets/js/app.2c81259d.js",
    "revision": "9426b8077994d46e5034725c60f196b5"
  },
  {
    "url": "basic/drag.html",
    "revision": "d89683d4c8e3027f9ba2b5f12f3830bb"
  },
  {
    "url": "basic/easing.html",
    "revision": "fc965f3a6061bae1e58abba69457f3e1"
  },
  {
    "url": "basic/follow.html",
    "revision": "33683114a323aa984c10aca3b1c5f5fa"
  },
  {
    "url": "basic/gsap.html",
    "revision": "8cbd970e1cf0bc152a4fca1810962faa"
  },
  {
    "url": "basic/hover.html",
    "revision": "4d7950570a02ba603435fd58276f2f9d"
  },
  {
    "url": "basic/index.html",
    "revision": "ef528c9fc0dc35941d527dd88c649a74"
  },
  {
    "url": "basic/random.html",
    "revision": "b4c96de185604d1705fd57c41aa32343"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "f6a193a1f7b615d0ac87a500fbff6e08"
  },
  {
    "url": "basic/scroll.html",
    "revision": "843fb48be4637f1e6ce0df6a99f64f16"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "4d43cd79b448df6c8e1db3a5e1788a82"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "d5df4a0e89320e54af10cc8f7a885cbf"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "94b7b1efc3435332305df4218cefae77"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "cbe81146effdb8eae2adf13a96e162aa"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "8be199f6fde9ed20f07d0910be4ddf86"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "e13adc32d081d1e6be94b79e60aa6d7e"
  },
  {
    "url": "canvas/index.html",
    "revision": "5cae898a5e1f4eabb280d0ad5b9e7092"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "e5d0b61f3624512216518373aff22c3c"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "02b5d65c93688b2a87627e564c204d07"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "2077ceba4522e1a7dacbcd20ba5069da"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "11cafe524cfffc81031b28be117cbce9"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "c2cacd95723f5a0e04a0b6a103dc3779"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "83c239c68c0a5bb43f78cecf6220f491"
  },
  {
    "url": "effects/index.html",
    "revision": "cfab90a887ee19376dd7b62b990226a9"
  },
  {
    "url": "effects/mouse.html",
    "revision": "9862fc087b6e0367a08ec3457fc4a5d3"
  },
  {
    "url": "effects/reveal.html",
    "revision": "b100428a6cf7539c98733c2dbe934965"
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
    "revision": "58bd3df1a94fab21de296ab868c235f4"
  },
  {
    "url": "info/index.html",
    "revision": "cac452eead50de5169cda903de2e000a"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "d7b0b5db436e575ca762f8e09ee2c302"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "18d9c690a0686b39cb1a50c2b1ff02de"
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
