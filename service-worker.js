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
    "revision": "14d5bef7afac6b9609cb254d24fe3be4"
  },
  {
    "url": "assets/css/0.styles.9cefc348.css",
    "revision": "e68d195685cd7e8fedf9dce484e64a95"
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
    "url": "assets/js/10.091d1032.js",
    "revision": "f6d9d001b295e2643196e0de565123bd"
  },
  {
    "url": "assets/js/11.56491034.js",
    "revision": "91c9a5e03fe6546fb238e849de5de69c"
  },
  {
    "url": "assets/js/12.1bb5b904.js",
    "revision": "1d328b7510df6395afc13ddfe4d046dd"
  },
  {
    "url": "assets/js/13.59eed593.js",
    "revision": "8f6c8a58e91db973a1427716021b0a03"
  },
  {
    "url": "assets/js/14.963c4bd5.js",
    "revision": "5d322b681badb3054adbbe92393810c0"
  },
  {
    "url": "assets/js/15.9836ddff.js",
    "revision": "48f6cadfd1d63bae865793a2dc7b1c27"
  },
  {
    "url": "assets/js/16.27265e93.js",
    "revision": "209dba4f661ce07eb451ef41b2571537"
  },
  {
    "url": "assets/js/17.281e93f6.js",
    "revision": "a7e7f43d23e504d4efbac9940c705785"
  },
  {
    "url": "assets/js/18.69413eae.js",
    "revision": "de7080af7396fd48d509b33626c4b6cb"
  },
  {
    "url": "assets/js/19.46f3c94b.js",
    "revision": "52df23f7dd08d0c0f55af7a8dd487446"
  },
  {
    "url": "assets/js/2.72f01270.js",
    "revision": "2d98de5053eaa45d3f94a3c366637049"
  },
  {
    "url": "assets/js/20.7415fbb9.js",
    "revision": "61221753e44b31ee42aab9ebd7ab7684"
  },
  {
    "url": "assets/js/21.1497a06a.js",
    "revision": "2948b454ba34cc971b2fe21d9eb8485d"
  },
  {
    "url": "assets/js/22.292eb61d.js",
    "revision": "b86a432c81352fea4e24e38225cc8efb"
  },
  {
    "url": "assets/js/23.492fa270.js",
    "revision": "c78d489f9b5bc269cc70d98a3976dca9"
  },
  {
    "url": "assets/js/24.cb691682.js",
    "revision": "fcb56e729d9ed86229d9e0edf610d424"
  },
  {
    "url": "assets/js/25.aee1f427.js",
    "revision": "36cf81a0c2e102f26961c017b572c8ee"
  },
  {
    "url": "assets/js/26.028db669.js",
    "revision": "4e49dc36bb8e8afe2add14d164b31e76"
  },
  {
    "url": "assets/js/27.b1d42ed3.js",
    "revision": "e61550b3ff789bc3004224af5aea6efb"
  },
  {
    "url": "assets/js/28.772ed480.js",
    "revision": "d2b438742dbf6864ec65d190df8a55ab"
  },
  {
    "url": "assets/js/29.4f8bbf89.js",
    "revision": "aba03b54e0bac8cf8872d5da02ded7ff"
  },
  {
    "url": "assets/js/3.8611706c.js",
    "revision": "1cd27839b8c9ace42a89d2ec4b97203e"
  },
  {
    "url": "assets/js/30.818abc7a.js",
    "revision": "a0c8169b33778024bc421090c9688de1"
  },
  {
    "url": "assets/js/31.2b6c5ee1.js",
    "revision": "f3d54f30f8809a7dc7c6711a3306e4eb"
  },
  {
    "url": "assets/js/32.bd3e3944.js",
    "revision": "a67c9482efe39e447e33456d8c09403e"
  },
  {
    "url": "assets/js/33.95f6347d.js",
    "revision": "70958f310c4b88051827c4a7a892f033"
  },
  {
    "url": "assets/js/34.8001bd4c.js",
    "revision": "d31a776a43327399217b6ec00a6094d2"
  },
  {
    "url": "assets/js/35.5e1582ac.js",
    "revision": "eac566f9fce27b9bc7b0d69675acbe24"
  },
  {
    "url": "assets/js/36.ea699524.js",
    "revision": "1466bc266527fd33b43c2b7d8e3d0d50"
  },
  {
    "url": "assets/js/37.0fd3432a.js",
    "revision": "76083937195049938d2ac5f59a1f577a"
  },
  {
    "url": "assets/js/38.47a74fe1.js",
    "revision": "4e2aa1ee6d3dc00d484bfbedf626223b"
  },
  {
    "url": "assets/js/39.5c51290b.js",
    "revision": "ec5cd33f04faef0ba7452bc885e4f0d3"
  },
  {
    "url": "assets/js/4.c9f50542.js",
    "revision": "cadb231b3da07d08325e4192b8056d86"
  },
  {
    "url": "assets/js/40.133cd641.js",
    "revision": "4ea00960b5c98b64e23860c08428c02b"
  },
  {
    "url": "assets/js/41.50c1769b.js",
    "revision": "c15253d00ff8f2fc6cfdd4870e163be1"
  },
  {
    "url": "assets/js/42.f7fe223e.js",
    "revision": "aea7b9482ac9db7bde2dd3140d43b00a"
  },
  {
    "url": "assets/js/43.f4af420b.js",
    "revision": "edf32020d02ee072977436d70134a322"
  },
  {
    "url": "assets/js/44.3c1714f7.js",
    "revision": "32a2ffc362e81347c208e9598c05fe2f"
  },
  {
    "url": "assets/js/45.e374dc12.js",
    "revision": "cc0cffc002951a89ce461fb34ec3418c"
  },
  {
    "url": "assets/js/46.d194ba9e.js",
    "revision": "d2b98aff4044993e84c28cdf37f603a7"
  },
  {
    "url": "assets/js/47.c64c5068.js",
    "revision": "51314b586b0f343491b5bc6073711ba5"
  },
  {
    "url": "assets/js/48.78528c38.js",
    "revision": "1afe22886f6f5945f2944e07037cb15e"
  },
  {
    "url": "assets/js/49.b5269998.js",
    "revision": "72cd4d71cde4fba3cd41f099044ae7af"
  },
  {
    "url": "assets/js/50.be0b5699.js",
    "revision": "2a60dc35dedbc0df0c1fd2e9f36381e8"
  },
  {
    "url": "assets/js/51.70a7343d.js",
    "revision": "b19071c375a0d1c5662560400c376fe2"
  },
  {
    "url": "assets/js/52.a60ed105.js",
    "revision": "bce3999ec972ee4059db56a2ec31f55e"
  },
  {
    "url": "assets/js/53.2167fb40.js",
    "revision": "37f7729d718982f4d9d4489e5d6e76a2"
  },
  {
    "url": "assets/js/54.447d8c4c.js",
    "revision": "5edaba4b933bb085c01e852f5fa3ac8c"
  },
  {
    "url": "assets/js/55.b44c6986.js",
    "revision": "6218fa31edc6b5a9ebb0a64878b03097"
  },
  {
    "url": "assets/js/56.8d609bce.js",
    "revision": "65e4abb1186222e33c15a4f155f27f12"
  },
  {
    "url": "assets/js/57.da465bfc.js",
    "revision": "d2d9d5809f41a8fcc8cb8b886e299fb1"
  },
  {
    "url": "assets/js/58.f2fdd268.js",
    "revision": "7fc105cc0ca78c7effa6a41e547a0ba7"
  },
  {
    "url": "assets/js/59.1abdc520.js",
    "revision": "af25865041cc95a9cb081c506d9c5c09"
  },
  {
    "url": "assets/js/6.e07145c1.js",
    "revision": "7c0e25c0a111e57cb48cc8fe3695a937"
  },
  {
    "url": "assets/js/60.05e06dec.js",
    "revision": "1b3e01375b4eb5d6e7ee14970df0e255"
  },
  {
    "url": "assets/js/61.8474e8f8.js",
    "revision": "8536ff23fa466f0240327077a7f426e4"
  },
  {
    "url": "assets/js/62.ffa50207.js",
    "revision": "404b37f2d976b3b29b9a958bc27d9e7c"
  },
  {
    "url": "assets/js/63.1a92b95d.js",
    "revision": "08c0331e73fbb2bdf6deb6abebd6947d"
  },
  {
    "url": "assets/js/64.c885ca0a.js",
    "revision": "40f371b20937798c38d1ef6a137c2f98"
  },
  {
    "url": "assets/js/65.0791a21d.js",
    "revision": "d1a2bd5b8a8009fbdcbadfd1b366c0ce"
  },
  {
    "url": "assets/js/66.233812ee.js",
    "revision": "e2dba9a74be69ff4f3608ea102786560"
  },
  {
    "url": "assets/js/67.128f24c0.js",
    "revision": "dfd5631240d8ad003dd10b556ff390d7"
  },
  {
    "url": "assets/js/68.4c608faf.js",
    "revision": "9ca63d47926e3b30dcd55af0fd927764"
  },
  {
    "url": "assets/js/69.e6c3a0ca.js",
    "revision": "f9966f680ea0d28b7e85b83dbbebffe0"
  },
  {
    "url": "assets/js/7.0d6d0fc9.js",
    "revision": "acbc29df2c03b9bcc020de6e05508ff8"
  },
  {
    "url": "assets/js/70.654495b1.js",
    "revision": "1614471e52bfee0cc1d8f6409dc304aa"
  },
  {
    "url": "assets/js/71.a00203f7.js",
    "revision": "d9b99bc79f7b4c20ef465acd84dddf6e"
  },
  {
    "url": "assets/js/72.abbc5f8c.js",
    "revision": "c3c8bcb831abdba5081d23e6a5f6ecd3"
  },
  {
    "url": "assets/js/73.90c567e2.js",
    "revision": "a0e81f3cbd1fb46eb1eeefc08134c45e"
  },
  {
    "url": "assets/js/74.1a91fafa.js",
    "revision": "a11746692caf9ec671169feea7778b73"
  },
  {
    "url": "assets/js/75.0c23e227.js",
    "revision": "2040f7f64a7cc6c39b57ce37cf619990"
  },
  {
    "url": "assets/js/76.b2811cf4.js",
    "revision": "265e293b2c4f9300797810f716c9ed20"
  },
  {
    "url": "assets/js/77.19142baf.js",
    "revision": "e1d95288e39511b3100a5221b1677354"
  },
  {
    "url": "assets/js/78.ee12ceb0.js",
    "revision": "06615f9a0023f7a9e125ab0990952cb6"
  },
  {
    "url": "assets/js/79.cf60c45b.js",
    "revision": "52d4c46663ae9773287b95859d653988"
  },
  {
    "url": "assets/js/8.286747ca.js",
    "revision": "5f2a2d293bd7076b5a38fce4035e4a4a"
  },
  {
    "url": "assets/js/80.fb692612.js",
    "revision": "25a5accc940defce8a84fee82b7b7a12"
  },
  {
    "url": "assets/js/81.ad8b63ea.js",
    "revision": "6ef4a6b1f95bd82e9bdc8b646cec0b35"
  },
  {
    "url": "assets/js/82.0837d85f.js",
    "revision": "d29d12b31cf3354bb6f188cbcc128bed"
  },
  {
    "url": "assets/js/83.b705b310.js",
    "revision": "92f4c49c440663cea4b70475de1fa9b8"
  },
  {
    "url": "assets/js/84.c7492fdb.js",
    "revision": "7e957c5886534e45319ce09cece30836"
  },
  {
    "url": "assets/js/85.eed130ca.js",
    "revision": "4a49511c4a2ef0eb30ab05b4e91f1533"
  },
  {
    "url": "assets/js/86.5175275c.js",
    "revision": "c29ec48d21aafb981b32c7ec78f4d940"
  },
  {
    "url": "assets/js/87.8e55701f.js",
    "revision": "9b9fbac73a0ca3c972cc9a81159ae295"
  },
  {
    "url": "assets/js/88.9a6c3e02.js",
    "revision": "8a35729d2f08f8a699c6b846baf22dca"
  },
  {
    "url": "assets/js/89.23931f03.js",
    "revision": "3b6dca73d05cec93f7b4e874a0e3b145"
  },
  {
    "url": "assets/js/9.ed9332a3.js",
    "revision": "c35ffc7b0e7d60fc7f5c8b9c6d92f428"
  },
  {
    "url": "assets/js/90.92bfde7d.js",
    "revision": "b190d27d58c18c89b11d8b89301bb7ab"
  },
  {
    "url": "assets/js/91.c2641a58.js",
    "revision": "422532fc8cf434ed136906be651370dd"
  },
  {
    "url": "assets/js/92.8b5b3e2a.js",
    "revision": "69aada16495f909fff380da5d703ce8e"
  },
  {
    "url": "assets/js/93.0245c299.js",
    "revision": "26bc3993c8bafd959bdfb0f7158126dd"
  },
  {
    "url": "assets/js/94.f97590a0.js",
    "revision": "15b6c5d9f2b7f226d717e46223719ef3"
  },
  {
    "url": "assets/js/95.0e214d4c.js",
    "revision": "67e713b26ff45a902fc8b24f664769bb"
  },
  {
    "url": "assets/js/app.b5597091.js",
    "revision": "bdc029b372d18a6a7b4af19bfac385a6"
  },
  {
    "url": "basic/drag.html",
    "revision": "ee4d1dc740c9c4256cb847e4250ac302"
  },
  {
    "url": "basic/easing.html",
    "revision": "f9f78a34c1bb2f74d7f217432e9c6cd4"
  },
  {
    "url": "basic/follow.html",
    "revision": "b57d2fbcceb3b27b3f34a77da06e59b3"
  },
  {
    "url": "basic/gsap.html",
    "revision": "cd9873edd46978621698a526187d7737"
  },
  {
    "url": "basic/hover.html",
    "revision": "92641a4a5806913b2407505aba44a9a0"
  },
  {
    "url": "basic/index.html",
    "revision": "0864282a83d48594e12289f075ee0338"
  },
  {
    "url": "basic/random.html",
    "revision": "63f8dcc2978d185eae5f380939822da4"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "ac09bc55456b27b0962a54cfef848fb7"
  },
  {
    "url": "basic/scroll.html",
    "revision": "47e0977c5bc479b2ac1f5afae7e28b04"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "557a55db27bae8ed99bf0e17787ae942"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "d8905555d6e31ebffb319fa7332884d7"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "ab3b25e1d78c9482a29e28684c3818a8"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "e84672abee78ec36dd687da4188db1b5"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "e37f1a6cdc1860161e38f54bb5222f63"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "d96c90ab7f7d01244ea1c7b71680d00d"
  },
  {
    "url": "canvas/index.html",
    "revision": "7d1c4552f2529dfeee8ae9281a40fd1e"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "39a4a1e95cb66c08063cb1da16c70aa1"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "f67a02f3dd59ad2e6fe43e8e571946da"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "b4df8a345047874b16445f98a4dec64d"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "10476dad9f47af9cccfb640a97ef22be"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "7e6775e848f7acf2b374a9f8d293f798"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "e18dd56a66f9b681bed6970ddaa361d2"
  },
  {
    "url": "effects/index.html",
    "revision": "dc3cd7cde580452b9c80a6a9fb8951bc"
  },
  {
    "url": "effects/mouse.html",
    "revision": "a3142cd4d0d726ac2c615b0a45b32272"
  },
  {
    "url": "effects/reveal.html",
    "revision": "f617a32abb735fe33becab541e3dca52"
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
    "revision": "4ec12dd2f26feb19b9f7f6c6763f40df"
  },
  {
    "url": "info/index.html",
    "revision": "7246ccf2d8b68bad09965bede6343a88"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "49eb423c2a42301f4bea2840f320383e"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "4c977addf00b734443da2c4fc2849c1b"
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
