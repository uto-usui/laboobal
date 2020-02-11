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
    "revision": "2ecfa838e2cfb3c1b3f8f88de43ce9bf"
  },
  {
    "url": "assets/css/0.styles.7e01c0fd.css",
    "revision": "2772066dd269ac9a4e65cbabb7e5605c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.40f1e262.js",
    "revision": "9e4fe9dc77d0a9b9c49eedddce7e3b33"
  },
  {
    "url": "assets/js/10.f4b83f41.js",
    "revision": "b3652f3e0cb8a51a188a0952408d2c76"
  },
  {
    "url": "assets/js/11.06b81897.js",
    "revision": "79a020de3dbc828fd2309c42ce917fa7"
  },
  {
    "url": "assets/js/12.61e511fa.js",
    "revision": "9f3af28996c496299061a66b433a3f0d"
  },
  {
    "url": "assets/js/13.d87c7ee8.js",
    "revision": "680228938702869034f967179bfbfdaf"
  },
  {
    "url": "assets/js/14.333a0835.js",
    "revision": "dea38c88896b1f31a6034ccbf5724ffb"
  },
  {
    "url": "assets/js/15.58e204bf.js",
    "revision": "e3eda28a8e377b84273f04fb647a9eb2"
  },
  {
    "url": "assets/js/16.008bb63d.js",
    "revision": "bc109c0e113650d523472341d2ea697a"
  },
  {
    "url": "assets/js/17.17217f18.js",
    "revision": "63508fa822b7c0cde7c166bc3baf8117"
  },
  {
    "url": "assets/js/18.1636023d.js",
    "revision": "e93b44014da1181a3c4b98d2814a2fa5"
  },
  {
    "url": "assets/js/19.fd09d913.js",
    "revision": "b8e6dabc30257f0a04a3f91f4debf0be"
  },
  {
    "url": "assets/js/2.c476f288.js",
    "revision": "e45b0ac8e069b33cd1acb9a8d6d6a1ee"
  },
  {
    "url": "assets/js/20.4b1ba406.js",
    "revision": "91d827d2fc3cbaa939af95d9d542a1ac"
  },
  {
    "url": "assets/js/21.87625b1a.js",
    "revision": "7209463d00c6a217fd0df507537366bf"
  },
  {
    "url": "assets/js/22.74c27424.js",
    "revision": "70d74b459dac5316c61d1eae90d33272"
  },
  {
    "url": "assets/js/23.597331d6.js",
    "revision": "3ff202e908bf26225497c839c07dd4a9"
  },
  {
    "url": "assets/js/24.e439fedc.js",
    "revision": "891a251f646d54f3ecf3c900e136186c"
  },
  {
    "url": "assets/js/25.6a76aceb.js",
    "revision": "5c90e07b2396d8a6131cc907032869d9"
  },
  {
    "url": "assets/js/26.93fde881.js",
    "revision": "e5d7e285cf618d1a1e09874eb5697ada"
  },
  {
    "url": "assets/js/27.c4c77933.js",
    "revision": "1f862cae5c8a1e8e8bafb0cc8f15330c"
  },
  {
    "url": "assets/js/28.ea6d2822.js",
    "revision": "c1dc7d5a0defd9084c9f997f09f5c978"
  },
  {
    "url": "assets/js/29.0f55760a.js",
    "revision": "c75851837be0fb2ff864978d363f2380"
  },
  {
    "url": "assets/js/3.22723218.js",
    "revision": "3ecb70aa7d987bae23f530c0c6b3a01a"
  },
  {
    "url": "assets/js/30.de9cd0f8.js",
    "revision": "7a0e74fccf425d2c5597afd60732d0b0"
  },
  {
    "url": "assets/js/31.79584792.js",
    "revision": "7c00968ea06cd6b5a795cb1377ca1b69"
  },
  {
    "url": "assets/js/32.9313d2fa.js",
    "revision": "4d2d45588b1c705f6db309a21e3b31f2"
  },
  {
    "url": "assets/js/33.e6ab78be.js",
    "revision": "fa6e34a70ec45065c00725bc6820820c"
  },
  {
    "url": "assets/js/34.f8512033.js",
    "revision": "f01d26150eb53e327df739c460001d35"
  },
  {
    "url": "assets/js/35.4ba35b30.js",
    "revision": "bf67297c5d1c624194ae9746b9016aff"
  },
  {
    "url": "assets/js/36.baef13f2.js",
    "revision": "c94c0a653aedfaeca533aaa04fb5863f"
  },
  {
    "url": "assets/js/37.7ad50bac.js",
    "revision": "1cfb3ece60d297d72ab65d5bb7c1f763"
  },
  {
    "url": "assets/js/38.b0766715.js",
    "revision": "bbc66dcd7b79a1d048e24380d3c9c977"
  },
  {
    "url": "assets/js/39.fd3d23ea.js",
    "revision": "1714f8feb24198f6f71e65f8728bf334"
  },
  {
    "url": "assets/js/4.5be5d782.js",
    "revision": "b1ed491ae4ecf77ea1a72ee22c9c7bcf"
  },
  {
    "url": "assets/js/40.37913172.js",
    "revision": "983a051658411b76f2879dacec861c0f"
  },
  {
    "url": "assets/js/41.9efd1c75.js",
    "revision": "1184d9f04f534c2d060b2424890c50b3"
  },
  {
    "url": "assets/js/42.81bff70d.js",
    "revision": "3b2415d97d71af794f7af6d7fd4f5de2"
  },
  {
    "url": "assets/js/43.a30818e2.js",
    "revision": "71c7037c65040543e920f4e21a46faf4"
  },
  {
    "url": "assets/js/44.3ea86584.js",
    "revision": "cc3ff998955d454d8b9857078215f1e2"
  },
  {
    "url": "assets/js/45.10827b28.js",
    "revision": "82ca0390c4963b12701c21bf734e0328"
  },
  {
    "url": "assets/js/46.5780441f.js",
    "revision": "f1554a52227bd70cb914874d840bc535"
  },
  {
    "url": "assets/js/47.5b81dce7.js",
    "revision": "7982845217510bdfe0b906bd926312cd"
  },
  {
    "url": "assets/js/48.629765be.js",
    "revision": "dfdaa4a40f4c04736c2b289a3f4c6d77"
  },
  {
    "url": "assets/js/49.cffeefd1.js",
    "revision": "b038ce34769901f5b5091ceecc4404ef"
  },
  {
    "url": "assets/js/5.d79313f0.js",
    "revision": "03b85bf5d6f3201b68e2f6ace980f635"
  },
  {
    "url": "assets/js/50.da39184c.js",
    "revision": "fc9995ffe40d2f1ed6511eff3e57753b"
  },
  {
    "url": "assets/js/51.ebf4c97a.js",
    "revision": "15e4c7782fb0c74e69b901f89fe9733d"
  },
  {
    "url": "assets/js/52.329bc752.js",
    "revision": "d695dc2fefc41d604835bce682511f1e"
  },
  {
    "url": "assets/js/53.f3d1ef3c.js",
    "revision": "4ae908ae31cee421215cd4b697903011"
  },
  {
    "url": "assets/js/54.690a3a2c.js",
    "revision": "e8a68f9e2ed31d222a33fadb2a6bc60a"
  },
  {
    "url": "assets/js/55.f1516c43.js",
    "revision": "a9eadbbcfa24d9b35e81af5791438b94"
  },
  {
    "url": "assets/js/56.72e9c059.js",
    "revision": "565a69a43da77b3f881783cbf0b2aaf6"
  },
  {
    "url": "assets/js/57.c4ab4256.js",
    "revision": "c30f9f024007e82e105070026e1951fe"
  },
  {
    "url": "assets/js/58.10d77e26.js",
    "revision": "4dbda7563b7cb720f17685f8fd7600e3"
  },
  {
    "url": "assets/js/59.8818316d.js",
    "revision": "fcb719a000cd6d56cb05cfda5968793a"
  },
  {
    "url": "assets/js/6.2782c76f.js",
    "revision": "d7b6b78793eef936f126f3b1799f83f8"
  },
  {
    "url": "assets/js/60.4d821669.js",
    "revision": "413eec9a04f57d9e7a0db03f7a04bdf0"
  },
  {
    "url": "assets/js/61.a8b23b3a.js",
    "revision": "8d248c5dd3bc1e6a08867c8ae29007f9"
  },
  {
    "url": "assets/js/62.73440bfe.js",
    "revision": "c1b810c208ff4f7e81c69c5620547c42"
  },
  {
    "url": "assets/js/63.7b43cfdd.js",
    "revision": "94765a04ef82bffa0ebdd3f55ecc7165"
  },
  {
    "url": "assets/js/64.f7920386.js",
    "revision": "7c00215d976f1c3e8243418aced24eb6"
  },
  {
    "url": "assets/js/65.408f26a9.js",
    "revision": "33f8d4e746fecde457da15779ce4eb1e"
  },
  {
    "url": "assets/js/66.d13dc103.js",
    "revision": "2eaf0b4d008bc41b0049d3614197e7f2"
  },
  {
    "url": "assets/js/67.1843662f.js",
    "revision": "592f47f6e132d62ea5d8008c7b158d08"
  },
  {
    "url": "assets/js/68.761d4a9c.js",
    "revision": "b3d1cb6587b258c8b509a830c1f67097"
  },
  {
    "url": "assets/js/69.60b3b845.js",
    "revision": "551b0bd041fc7012b2ca647dc7870711"
  },
  {
    "url": "assets/js/70.e33cf0fb.js",
    "revision": "248a96c30c53e3560178949a56585e6e"
  },
  {
    "url": "assets/js/71.996bfac0.js",
    "revision": "2623228e4c5833879e2a7ed3cdcc5162"
  },
  {
    "url": "assets/js/72.c92d78b5.js",
    "revision": "49113d99f6fd7608d415890dabe283e4"
  },
  {
    "url": "assets/js/73.c6150efe.js",
    "revision": "ce9f615cfefdccb5eeb2e28d81ecb759"
  },
  {
    "url": "assets/js/74.a47b26ac.js",
    "revision": "943b5ee80f260e24ed0b4affd44a5bc4"
  },
  {
    "url": "assets/js/75.c8c994f7.js",
    "revision": "7de40def4afd62b5fbb7e480b9d7e1df"
  },
  {
    "url": "assets/js/76.8a1815a4.js",
    "revision": "eb2aafcba0696f1dd9bcb1fc04d2c365"
  },
  {
    "url": "assets/js/77.69207b4b.js",
    "revision": "e3b9ac9592e9c4930bb5b51b0be7ae9f"
  },
  {
    "url": "assets/js/78.cb76ffc3.js",
    "revision": "5fe5e1de1006b1aae57327b454b3ce67"
  },
  {
    "url": "assets/js/79.00e60ba3.js",
    "revision": "cc78f1a731f1649b6a53223b3f1b12f4"
  },
  {
    "url": "assets/js/8.a39a3df3.js",
    "revision": "ecee3448e6b32f55a2f8ce6e399d1ea4"
  },
  {
    "url": "assets/js/80.d6dc2eef.js",
    "revision": "4ce1e44e31f3c5b8f4a37a20e743f93a"
  },
  {
    "url": "assets/js/81.08c56275.js",
    "revision": "f2347738503c0c2a5f3572016d2235a3"
  },
  {
    "url": "assets/js/82.a54ce314.js",
    "revision": "4fa7448e6db0ef38e9e7fbee504fbdfa"
  },
  {
    "url": "assets/js/83.cc258cfc.js",
    "revision": "e0da448775e4f1fc0af0e28e671b39e4"
  },
  {
    "url": "assets/js/84.7bb023ae.js",
    "revision": "dbbf8eb4836c675d617464b3ae632bc4"
  },
  {
    "url": "assets/js/85.69da1c6e.js",
    "revision": "7c5e5bbe96537f8393648369204232c0"
  },
  {
    "url": "assets/js/86.cfc16b62.js",
    "revision": "84fcb534db33f45291019cf1328bffa5"
  },
  {
    "url": "assets/js/87.5c7091bb.js",
    "revision": "2168a9ce8c7a650befc99200ec43aa21"
  },
  {
    "url": "assets/js/88.6e7c83bc.js",
    "revision": "7e713e145f4e10678b7fd0fd85fe3483"
  },
  {
    "url": "assets/js/89.1db2800b.js",
    "revision": "273839d5ce01bfb6eb22c282c6450ba7"
  },
  {
    "url": "assets/js/9.ed121bec.js",
    "revision": "b24928c71b794ab992fbf45af5d85280"
  },
  {
    "url": "assets/js/90.9832283b.js",
    "revision": "dad252aa4e646987ceb2bf5209187f74"
  },
  {
    "url": "assets/js/91.9916a004.js",
    "revision": "e2e45f1c8e5ec0d0453f47eccf34f056"
  },
  {
    "url": "assets/js/92.bed58a68.js",
    "revision": "a2d74437513a666d5f6730ac0db675e8"
  },
  {
    "url": "assets/js/93.5d47b719.js",
    "revision": "b102a80868dfe27d540a7d5af3010359"
  },
  {
    "url": "assets/js/94.d084bf23.js",
    "revision": "1633656a09802825193a3df01398326b"
  },
  {
    "url": "assets/js/95.37774a8a.js",
    "revision": "d5ddd98ac7bf32c75cf96597404633c9"
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
    "url": "assets/js/app.4886b408.js",
    "revision": "2195b10802c0bbfe2abe120879273097"
  },
  {
    "url": "basic/drag.html",
    "revision": "a9f92737ab96c28d286b2a5a4826ae8a"
  },
  {
    "url": "basic/easing.html",
    "revision": "ac1667fb073260fa34f990a4eb412037"
  },
  {
    "url": "basic/follow.html",
    "revision": "03abb1e463fa965ae99032732d632aa5"
  },
  {
    "url": "basic/gsap.html",
    "revision": "692f0e6759a9923b15ed5935bc31b70c"
  },
  {
    "url": "basic/hover.html",
    "revision": "cad8f881f5102893df974c2ec859ef84"
  },
  {
    "url": "basic/index.html",
    "revision": "ab09d71f5ac45c2298d7fbd6038611ad"
  },
  {
    "url": "basic/random.html",
    "revision": "77f2ccdc13a5a7a739734a5919a7a149"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "cfa88a1021b52ba7583ba2ce3d32f96e"
  },
  {
    "url": "basic/scroll.html",
    "revision": "2a840e72c1f5f46a80bef63d85a1d8e4"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "7b9efc980c718053ec28dc53a0682f98"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "c7df91c550b5b7c72ab21103ff5a451b"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "728f1b6d6dc648919799a3bd54ed815f"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "8a77c05a4c07811b251de5b100fb49fe"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "8f29ad0c919dfce59ab5511f030d94f5"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "620c9c089e56cce6439440bab0f6e6bc"
  },
  {
    "url": "canvas/index.html",
    "revision": "ee788a3ce1f54dbc3fe3078d60cfe4d2"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "d753640d7355ef0e7b1cfb01b5ceb7ed"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "bb440b1b251b258116c8f3ceaee19383"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "c245201a3b36c0f40a230b37cdb67cb9"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "f3eca5739993cf41f5fcb8f157d77b59"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "d3c78f104e719a24b3f6773fef13a44a"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "1dcaf9a126dce710c2e0dd97605657a8"
  },
  {
    "url": "effects/index.html",
    "revision": "017ed2fc325017894a42558d816b4a95"
  },
  {
    "url": "effects/mouse.html",
    "revision": "df062afce6b0d853a76ff0b6680e0b05"
  },
  {
    "url": "effects/reveal.html",
    "revision": "c0c10b2a4128184b8bf13c278a619138"
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
    "revision": "b7f0404eeb5d9aa3ad96ac892cf18987"
  },
  {
    "url": "info/index.html",
    "revision": "ee6cabc8bfa77100a5731ff94b13b656"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "35834e01c3082f9a14fb8f366a9eb10b"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "0498dee2bbe54a80df0971a167f99441"
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
