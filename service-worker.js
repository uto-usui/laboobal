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
    "revision": "5933b060a1730a1bf81daefdeb766536"
  },
  {
    "url": "assets/css/0.styles.bc0d2895.css",
    "revision": "d2edf8f79d9c0d934e45aa6c677e092a"
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
    "url": "assets/js/10.2feb8547.js",
    "revision": "46fcddc9c986681973f4ae0b79afe7ef"
  },
  {
    "url": "assets/js/11.0e77f809.js",
    "revision": "fabb1a8f4bcd646ed85c1654d26dfe82"
  },
  {
    "url": "assets/js/12.b31aec48.js",
    "revision": "5782f1f7e31454b269f0a69e69895ce0"
  },
  {
    "url": "assets/js/13.cfd7a4bc.js",
    "revision": "8fd2fd62ef471e865b28cd9e648414be"
  },
  {
    "url": "assets/js/14.a4691924.js",
    "revision": "2b9eadc3bfe949a19950747e1a73d4f8"
  },
  {
    "url": "assets/js/15.55fc2796.js",
    "revision": "b1c596d9231a7c3fa6721482a8eb2936"
  },
  {
    "url": "assets/js/16.705de514.js",
    "revision": "881dcf7112f320b746ffa296def622fa"
  },
  {
    "url": "assets/js/17.893db548.js",
    "revision": "7be9e28c7e042c0b2ae9e7bd76e3395a"
  },
  {
    "url": "assets/js/18.33f596bb.js",
    "revision": "9949d6136d7722480cef2cc78f06d189"
  },
  {
    "url": "assets/js/19.4f2f439d.js",
    "revision": "6d51a36316f0db84be52b10060b9fed0"
  },
  {
    "url": "assets/js/2.72f01270.js",
    "revision": "2d98de5053eaa45d3f94a3c366637049"
  },
  {
    "url": "assets/js/20.6e7affa1.js",
    "revision": "267617aed2226cb15b9720b76f2d1940"
  },
  {
    "url": "assets/js/21.d4d45446.js",
    "revision": "ac962d911b2018f6b6b062245beca407"
  },
  {
    "url": "assets/js/22.ea2cf7ab.js",
    "revision": "68b85428ef5240c77a1a1353d2862945"
  },
  {
    "url": "assets/js/23.3af25bfd.js",
    "revision": "77899da4464e57fc31f8d61c2b46703e"
  },
  {
    "url": "assets/js/24.26f30298.js",
    "revision": "1df87ccd39e268509c8bb379e201708b"
  },
  {
    "url": "assets/js/25.24cfd788.js",
    "revision": "8e73b675806d4d6ba73a00192c3cdd7c"
  },
  {
    "url": "assets/js/26.5d887dee.js",
    "revision": "0c689945e697482ab533647eec91c250"
  },
  {
    "url": "assets/js/27.8cd72a06.js",
    "revision": "31ff1dd0c1edfd7081983917e7c9f591"
  },
  {
    "url": "assets/js/28.e3e1f902.js",
    "revision": "462bb25a82defc5a250db7637fcacb34"
  },
  {
    "url": "assets/js/29.6e492d1b.js",
    "revision": "f6d595db80111d4addb4e3abe7eee741"
  },
  {
    "url": "assets/js/3.8611706c.js",
    "revision": "1cd27839b8c9ace42a89d2ec4b97203e"
  },
  {
    "url": "assets/js/30.393810cc.js",
    "revision": "4d7328439dea94725b541186de06ba00"
  },
  {
    "url": "assets/js/31.be51fa04.js",
    "revision": "d57ae68767caa716d2b1047d492e6009"
  },
  {
    "url": "assets/js/32.5e411b07.js",
    "revision": "c1d231feef7eb5581c579b60d6522535"
  },
  {
    "url": "assets/js/33.2c42f8bd.js",
    "revision": "4fc8488ccc70d16f8adfdec75c38e696"
  },
  {
    "url": "assets/js/34.1437d69d.js",
    "revision": "4d7469b852ad543bc5461f68fefeb8b9"
  },
  {
    "url": "assets/js/35.8fdb97d0.js",
    "revision": "b1a923c59737cab82b10baa3c76ee608"
  },
  {
    "url": "assets/js/36.7694bbe6.js",
    "revision": "f15770a24e12fb9aec0f40b13ea12f90"
  },
  {
    "url": "assets/js/37.65708641.js",
    "revision": "76083937195049938d2ac5f59a1f577a"
  },
  {
    "url": "assets/js/38.615d48b1.js",
    "revision": "4e2aa1ee6d3dc00d484bfbedf626223b"
  },
  {
    "url": "assets/js/39.64dcf8b9.js",
    "revision": "9f1286fadb0ba9d265e61cf55db1cd7a"
  },
  {
    "url": "assets/js/4.c9f50542.js",
    "revision": "cadb231b3da07d08325e4192b8056d86"
  },
  {
    "url": "assets/js/40.63b54861.js",
    "revision": "93d4a5b8595c5f24a9e6b8a7117779e1"
  },
  {
    "url": "assets/js/41.018422c5.js",
    "revision": "33db3f5fbd551ffbf91e5b673127b6eb"
  },
  {
    "url": "assets/js/42.d5e3da65.js",
    "revision": "503a1960e63b3347fef898dd32f9eb8c"
  },
  {
    "url": "assets/js/43.10a3f11c.js",
    "revision": "204b2df7336bd705713c615bd05868f5"
  },
  {
    "url": "assets/js/44.72ae81d9.js",
    "revision": "4e4e713915005243dbbd1ffb63c8e586"
  },
  {
    "url": "assets/js/45.fd708531.js",
    "revision": "cb37585a15801ea54a004194c020fc37"
  },
  {
    "url": "assets/js/46.6f4ad0fa.js",
    "revision": "66c4331a764a4f82ce96aada419195c0"
  },
  {
    "url": "assets/js/47.236ccdcc.js",
    "revision": "3b32694b6e255641c94ee8e0b30d6806"
  },
  {
    "url": "assets/js/48.b0604fce.js",
    "revision": "8690af3bdcac3551254b4d6d26e3ce8a"
  },
  {
    "url": "assets/js/49.d07d7ae4.js",
    "revision": "27958fb82cdc69015f5317c6f54530b5"
  },
  {
    "url": "assets/js/50.4ae2fc2c.js",
    "revision": "e7b0dc1cf481f5e5d1bc87b8bd26007a"
  },
  {
    "url": "assets/js/51.50ca75ac.js",
    "revision": "1266422fde29e0532a146865d9015810"
  },
  {
    "url": "assets/js/52.4b3524de.js",
    "revision": "46e88b01d12d4923b54a02e696835de5"
  },
  {
    "url": "assets/js/53.e6dc7bd7.js",
    "revision": "c60e208c87d504a2ef0a6eff76c6b066"
  },
  {
    "url": "assets/js/54.f0ff7636.js",
    "revision": "2161cd6eccab120ea2fb6a5a8cbc1a7f"
  },
  {
    "url": "assets/js/55.cb55e6b9.js",
    "revision": "6218fa31edc6b5a9ebb0a64878b03097"
  },
  {
    "url": "assets/js/56.68f34694.js",
    "revision": "f114fcbcc81b6752173900f8b76835ca"
  },
  {
    "url": "assets/js/57.df148e0b.js",
    "revision": "a4cd3c1b0ab064fbea100746bc366bca"
  },
  {
    "url": "assets/js/58.bc881df4.js",
    "revision": "7fc105cc0ca78c7effa6a41e547a0ba7"
  },
  {
    "url": "assets/js/59.139e293f.js",
    "revision": "adea3d2eb56ea7e1493775719a736892"
  },
  {
    "url": "assets/js/6.fac873d4.js",
    "revision": "7c0e25c0a111e57cb48cc8fe3695a937"
  },
  {
    "url": "assets/js/60.46f4940b.js",
    "revision": "469468b9c773b2cfea9373fea3a2af32"
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
    "url": "assets/js/63.c9cf0382.js",
    "revision": "2e9083b8416018e4998b5589459bd0c4"
  },
  {
    "url": "assets/js/64.014f61bb.js",
    "revision": "d5b2bfd973882572e47bb843efb40579"
  },
  {
    "url": "assets/js/65.3108f222.js",
    "revision": "6ac9cbc746b4409d5c622cfedab0cbf0"
  },
  {
    "url": "assets/js/66.0275e201.js",
    "revision": "6522a38e36f383bbcba9ef8d8cbf05e5"
  },
  {
    "url": "assets/js/67.5f2b01d5.js",
    "revision": "dcecc37f7e2842a2100252daa4d12701"
  },
  {
    "url": "assets/js/68.5bc3dfcf.js",
    "revision": "5c3d2b6e30444d865baa492dabd870ec"
  },
  {
    "url": "assets/js/69.bdfc8999.js",
    "revision": "dcb4045b5c95d25e994b23ad0970329e"
  },
  {
    "url": "assets/js/7.0d6d0fc9.js",
    "revision": "acbc29df2c03b9bcc020de6e05508ff8"
  },
  {
    "url": "assets/js/70.32044551.js",
    "revision": "8e9dc59f31e01e646c92bdc384914c24"
  },
  {
    "url": "assets/js/71.4a10e490.js",
    "revision": "b5ae7540acec08ff961923a64c8f5e8a"
  },
  {
    "url": "assets/js/72.73bd842f.js",
    "revision": "5dfc40f15a24c5ed39f605c528fd0d77"
  },
  {
    "url": "assets/js/73.2e6f1938.js",
    "revision": "4d5f8cea38940f88bf7820aef147b089"
  },
  {
    "url": "assets/js/74.5e4c92d6.js",
    "revision": "551a2a390ac62a2f83a66add4753a6d3"
  },
  {
    "url": "assets/js/75.99c2da35.js",
    "revision": "578908dd5ee59fd5a1c40d902dae3479"
  },
  {
    "url": "assets/js/76.6f34090b.js",
    "revision": "2fb962b86f0c44381fd0cdd0b06c84b8"
  },
  {
    "url": "assets/js/77.f60374b3.js",
    "revision": "b027c5e4719a1500800099f1e763705f"
  },
  {
    "url": "assets/js/78.838cbafe.js",
    "revision": "06615f9a0023f7a9e125ab0990952cb6"
  },
  {
    "url": "assets/js/79.06a40c75.js",
    "revision": "a0af578839362b3c4b131c5422a5941a"
  },
  {
    "url": "assets/js/8.1820dc7c.js",
    "revision": "f49986e3f22a102587abb2a50c373163"
  },
  {
    "url": "assets/js/80.13197e8b.js",
    "revision": "25a5accc940defce8a84fee82b7b7a12"
  },
  {
    "url": "assets/js/81.3857a967.js",
    "revision": "500c706cd454feb50f702b48901de3f1"
  },
  {
    "url": "assets/js/82.2a801ff4.js",
    "revision": "d18490ce664cac8bee9308ff7674c6b6"
  },
  {
    "url": "assets/js/83.d74c79bc.js",
    "revision": "3bae85613f0adf6400a6da7e4ef3115b"
  },
  {
    "url": "assets/js/84.90c8951b.js",
    "revision": "e482aee49f3391cc32d68f1e90db999f"
  },
  {
    "url": "assets/js/85.632d1913.js",
    "revision": "0ab9f1e298884d66c8bebc4288d8e08e"
  },
  {
    "url": "assets/js/86.92aa4d81.js",
    "revision": "02a8ce6f9668e53f8aea79364ddcff77"
  },
  {
    "url": "assets/js/87.aeb5fd37.js",
    "revision": "c7b4b387e0e9b18fbd0ef3e49845f2cb"
  },
  {
    "url": "assets/js/88.337ef6ae.js",
    "revision": "ff18ba979ba883eb9bf86d6e4db8518e"
  },
  {
    "url": "assets/js/89.8afcfa55.js",
    "revision": "3b6dca73d05cec93f7b4e874a0e3b145"
  },
  {
    "url": "assets/js/9.82667bc2.js",
    "revision": "5ef201e280e2127b2a6551d1b8cd9f51"
  },
  {
    "url": "assets/js/90.eceae3c3.js",
    "revision": "8eee7bc47c29861242d79d4870400d01"
  },
  {
    "url": "assets/js/91.284b4943.js",
    "revision": "83a16a42a28b1b53d6928ed8ba1b1b7e"
  },
  {
    "url": "assets/js/92.ed062cec.js",
    "revision": "6d015f96c59aa2044ae423de238f1d91"
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
    "url": "assets/js/app.7ea1f465.js",
    "revision": "02fb4529c31fb3d30b1fd1fdcbee5d11"
  },
  {
    "url": "basic/drag.html",
    "revision": "1e01fcb2e26d7cfb346097b634b6a859"
  },
  {
    "url": "basic/easing.html",
    "revision": "0a6eecc0c89a040fed4c84821a903de7"
  },
  {
    "url": "basic/follow.html",
    "revision": "2da26d0d1cd2707a4c8a3d2483d09cca"
  },
  {
    "url": "basic/gsap.html",
    "revision": "02a768c72c423cdc578be429e75feab9"
  },
  {
    "url": "basic/hover.html",
    "revision": "c7998ec3d9fd8b54bbe5e58d182ed97f"
  },
  {
    "url": "basic/index.html",
    "revision": "137844845d2b4571a911772277f61e89"
  },
  {
    "url": "basic/random.html",
    "revision": "febf2254f418c477622b2834bf05eaee"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "cb6e9c0dcb918596b473e0baa0d150b1"
  },
  {
    "url": "basic/scroll.html",
    "revision": "0b60e8b9ada879e3b51dd0710f973102"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "2823f2094b414d8809ca63144d641e6b"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "6d5ec3c7eb4b1199aa59fe2622d22c79"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "b95a79e7f129b3e744ca058e6ebc8fe3"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "28f78eca399b62ab2d0732782714044c"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "495750d4da37611fbf61d80dacb30635"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "6864366669e8dcc59361605c2f4c45fe"
  },
  {
    "url": "canvas/index.html",
    "revision": "cc2eaa223377605c16c1286c19886eec"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "13223936b1f2452a04363ca3741417b0"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "c2af1b0b73cef51a702bff974c16989e"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "82d46d439ac44d01014deec0f139ffcf"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "660effd2a149187a8b6e630690a5dd3a"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "d7c8be652f5a90e17697321bc523c1b9"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "6da193b0efdec850b20e0c3bbb981255"
  },
  {
    "url": "effects/index.html",
    "revision": "32db1555b1bfbba51958641b424e4ce9"
  },
  {
    "url": "effects/mouse.html",
    "revision": "3602ba6a8b319767053b6870d7f182fb"
  },
  {
    "url": "effects/reveal.html",
    "revision": "5f1f864488abcbd82c01ee15f0854613"
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
    "revision": "75077853dda95e69ba3aa259c50876e0"
  },
  {
    "url": "info/index.html",
    "revision": "44714de9414482cecedd2c86cf383c31"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "57325fb3d8313d8e226d765ba187688b"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "46ca1925465d63fe0c89eae0b67e416f"
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
