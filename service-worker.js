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
    "revision": "31bb4f5eb521fe893a41b49f5e3cd2f4"
  },
  {
    "url": "assets/css/0.styles.f059a649.css",
    "revision": "90b24c1acc8703656b209d5c9d11489d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c079f03c.js",
    "revision": "bd66a12c31d661ccbf2bb271b7b71f42"
  },
  {
    "url": "assets/js/10.0963f920.js",
    "revision": "3d57562281e5535b97152b5aa306835a"
  },
  {
    "url": "assets/js/11.daa875d9.js",
    "revision": "a0ea6249670f5b4c1a2b5855184cea3c"
  },
  {
    "url": "assets/js/12.6e9f4d6f.js",
    "revision": "4d8b71f499ddbbfe09d937d284db4dfe"
  },
  {
    "url": "assets/js/13.7a116d66.js",
    "revision": "f29d55e30337aba001ab8946babf19ba"
  },
  {
    "url": "assets/js/14.d865c36b.js",
    "revision": "8228ce22ec06c7b62da52765aa8aaaab"
  },
  {
    "url": "assets/js/15.905f138b.js",
    "revision": "6615b3c14dd9601150ecce2dd06c29df"
  },
  {
    "url": "assets/js/16.2efe8b4d.js",
    "revision": "df0a2655668ae0f14e90c6d9f568affa"
  },
  {
    "url": "assets/js/17.844e36bc.js",
    "revision": "54a4efb524afbdab815aea3966e59b22"
  },
  {
    "url": "assets/js/18.042a22b1.js",
    "revision": "a37e63bc9303c65dbf43d2c5944b728b"
  },
  {
    "url": "assets/js/19.0f414c8a.js",
    "revision": "bcac49d398a01ea2a21e2688eef2e076"
  },
  {
    "url": "assets/js/2.503e0a97.js",
    "revision": "cecb8c68f5b399ad6b190de12b07a01f"
  },
  {
    "url": "assets/js/20.ef0dfafb.js",
    "revision": "a70f2dca6addca8b7c01407680e4ba03"
  },
  {
    "url": "assets/js/21.6a26ca99.js",
    "revision": "b8ff010a9d702b93834b28d3e294a14d"
  },
  {
    "url": "assets/js/22.1ae61896.js",
    "revision": "9781d8eeb4ebd8d7f24e9e0fd6946cc5"
  },
  {
    "url": "assets/js/23.3368f0f9.js",
    "revision": "97c3d60c0c0162329160927eca823342"
  },
  {
    "url": "assets/js/24.c309bf89.js",
    "revision": "5141d88ad83b78f025bd38e8db9f2517"
  },
  {
    "url": "assets/js/25.32d18bec.js",
    "revision": "19e071343e242f8ca4dcd91d3e1c2cd0"
  },
  {
    "url": "assets/js/26.2650aba7.js",
    "revision": "432e39f0aa1b61771db303622e431314"
  },
  {
    "url": "assets/js/27.e42e833c.js",
    "revision": "8efc58eb444aa8e1845c7bbc19decc3e"
  },
  {
    "url": "assets/js/28.fabbd4e5.js",
    "revision": "646879cded69e40f9bf71fe8f5a0aeef"
  },
  {
    "url": "assets/js/29.27280aac.js",
    "revision": "d28eda0185aa9971ded377b66622a214"
  },
  {
    "url": "assets/js/3.9936e6de.js",
    "revision": "b3a1b3897c35e61a3c39bd96b594a13c"
  },
  {
    "url": "assets/js/30.f564869b.js",
    "revision": "d863ed66ec480ba7871b1afcc99dbb2e"
  },
  {
    "url": "assets/js/31.06c46cbe.js",
    "revision": "0f30530d4b3082f5f6e07126253707cd"
  },
  {
    "url": "assets/js/32.8b74cf28.js",
    "revision": "7f006d2e2185b58249194626c86043d2"
  },
  {
    "url": "assets/js/33.a22a3460.js",
    "revision": "8b695694f9246aa65aca7447c144f97e"
  },
  {
    "url": "assets/js/34.0d608bb3.js",
    "revision": "d29607fa52efec7d02361066bb914ada"
  },
  {
    "url": "assets/js/35.5af95014.js",
    "revision": "5cdceb17df7efa633ec8938d3a993226"
  },
  {
    "url": "assets/js/36.3ceeafd7.js",
    "revision": "d07b8a322e570065270b957004a0b813"
  },
  {
    "url": "assets/js/37.f108d351.js",
    "revision": "96f12687d8bd5fccef723c5ab7f06abd"
  },
  {
    "url": "assets/js/38.aba91ef1.js",
    "revision": "87d3e6053c2afc34faab065f1f67d670"
  },
  {
    "url": "assets/js/39.2f622a58.js",
    "revision": "e25ef8383267bf12b35cfb45adc62f6c"
  },
  {
    "url": "assets/js/4.fab04816.js",
    "revision": "f93973bc4d6c4ddd41076a9c11cf3314"
  },
  {
    "url": "assets/js/40.2c211ab2.js",
    "revision": "7a484fef44cbcbd3d3136bbc2d5a8dfb"
  },
  {
    "url": "assets/js/41.afe17a49.js",
    "revision": "f486868fbf28c42b81c97c8e679aef1f"
  },
  {
    "url": "assets/js/42.53086ff7.js",
    "revision": "9f42bcd507a36d723c5dd1711eb95d00"
  },
  {
    "url": "assets/js/43.6a839165.js",
    "revision": "5b8e0455bf861b3b9b60256ba5d3c182"
  },
  {
    "url": "assets/js/44.05239456.js",
    "revision": "90d59c73c4dec338d96d74cee1fa3ba3"
  },
  {
    "url": "assets/js/45.6760a250.js",
    "revision": "158614dc31a2545a562f33cc4acc712f"
  },
  {
    "url": "assets/js/46.a5dbbef7.js",
    "revision": "38248e41847822b563d97b2b8fd7bf92"
  },
  {
    "url": "assets/js/47.ba7fcb7a.js",
    "revision": "9584c3c0e0154256de22fd16e226c3ed"
  },
  {
    "url": "assets/js/48.efe16da0.js",
    "revision": "aff0a5115a38f599bd08632f28e81828"
  },
  {
    "url": "assets/js/49.ab87fd03.js",
    "revision": "fc749759df77fb2f0dfaa279e218728a"
  },
  {
    "url": "assets/js/50.9bf4b834.js",
    "revision": "c1dd9b489322672df697720671bff139"
  },
  {
    "url": "assets/js/51.a0009289.js",
    "revision": "734da0745b20d63bc7aa1cba555409ba"
  },
  {
    "url": "assets/js/52.a6148c72.js",
    "revision": "ec67cac0b5cd7665e527bfa4c907b142"
  },
  {
    "url": "assets/js/53.39436ca1.js",
    "revision": "9c87e75ec631631b57c6e4d41dd646a1"
  },
  {
    "url": "assets/js/54.fbbcce5e.js",
    "revision": "2dc93702fac120c304bc5c4cbd387262"
  },
  {
    "url": "assets/js/55.f56aad75.js",
    "revision": "213b7e807af4891e513e7b1ccb24ec25"
  },
  {
    "url": "assets/js/56.96c84432.js",
    "revision": "0a1e46bf552c295180db3dba9df45e67"
  },
  {
    "url": "assets/js/57.2866073e.js",
    "revision": "d5edd9ba4ebf05addf2e96b19a2a80bc"
  },
  {
    "url": "assets/js/58.b26b6050.js",
    "revision": "3e0f023b3b9b816331ac33f5b1d32b94"
  },
  {
    "url": "assets/js/59.3c8ba209.js",
    "revision": "4104d9b129b765be4cee86c4475fd1bd"
  },
  {
    "url": "assets/js/6.2325f96b.js",
    "revision": "1d31b8e0d8a3abdf6bfe6bacf3b8035d"
  },
  {
    "url": "assets/js/60.7808ecc0.js",
    "revision": "8567b2240520addd450efcaf5fd6691f"
  },
  {
    "url": "assets/js/61.5537338e.js",
    "revision": "8989376b21e70a1564f234d82ca4e9b3"
  },
  {
    "url": "assets/js/62.8fe7dd03.js",
    "revision": "c98cfa5bde9f3451e166da23063203ee"
  },
  {
    "url": "assets/js/63.761b2e06.js",
    "revision": "35cdd17cd149fe82f47677edbaa4d192"
  },
  {
    "url": "assets/js/64.5e6eff2b.js",
    "revision": "5bb7e57d6df4ba8e576acb8c502987ee"
  },
  {
    "url": "assets/js/65.c9a48a70.js",
    "revision": "e01e08265ab232f1806b7c8796a4a94b"
  },
  {
    "url": "assets/js/66.1cb20df3.js",
    "revision": "78c818833d6aa15fdb683ee3e6e9775a"
  },
  {
    "url": "assets/js/67.892dd2ca.js",
    "revision": "694a02e74172b11b08b00b634e601882"
  },
  {
    "url": "assets/js/68.3bd4ca5e.js",
    "revision": "d3646d82168d9e7c45216047041d2fdb"
  },
  {
    "url": "assets/js/69.ec12b461.js",
    "revision": "3870ee94752ec376a3f9393430c35fb1"
  },
  {
    "url": "assets/js/7.303a27c2.js",
    "revision": "a5142ff71698f9d3ef90c144cd602e31"
  },
  {
    "url": "assets/js/70.81d991bc.js",
    "revision": "640bcf8b56080b61c0213548b0a38f0d"
  },
  {
    "url": "assets/js/71.66818c6d.js",
    "revision": "f8a57e45c9423c36ca9d96998ae5a314"
  },
  {
    "url": "assets/js/72.63548286.js",
    "revision": "13649e8fb8ce369276c4f201e62999c8"
  },
  {
    "url": "assets/js/73.9a8e2853.js",
    "revision": "9b257fdb7b68d504369ddd4362cc4204"
  },
  {
    "url": "assets/js/74.f718649c.js",
    "revision": "f4b32f9717e6887e230d8b40d2fea3a5"
  },
  {
    "url": "assets/js/75.f97808a2.js",
    "revision": "10fd743a29d18fa520b8ffc90a71f07a"
  },
  {
    "url": "assets/js/76.956e28a7.js",
    "revision": "a80119ac5d9517ed98b864d08c9c29ca"
  },
  {
    "url": "assets/js/77.e5a2ce32.js",
    "revision": "3f7d04992b4986309aacc5cd5a4312f9"
  },
  {
    "url": "assets/js/78.98122adb.js",
    "revision": "efc450284a0b0ef8747e6f41cbd7fe16"
  },
  {
    "url": "assets/js/79.a7abe74f.js",
    "revision": "7ed4f4556f1880e2ba292d90d6ae4419"
  },
  {
    "url": "assets/js/8.19008487.js",
    "revision": "1b21228f835a471638bb52399d87dbb9"
  },
  {
    "url": "assets/js/80.77e382e0.js",
    "revision": "97ce480fa753d7e42edb6db6895bc0c6"
  },
  {
    "url": "assets/js/81.3bcdc3e8.js",
    "revision": "033020effcec359f6cfdfc4919400f65"
  },
  {
    "url": "assets/js/82.38f789bd.js",
    "revision": "5d8710d96fc0aa696e1df7a488e1bfca"
  },
  {
    "url": "assets/js/83.3425ecf0.js",
    "revision": "cf8bafbb46deb54364176631bb1f49ca"
  },
  {
    "url": "assets/js/84.4699f30e.js",
    "revision": "b2fe84b7970aeae0e976f4182b2d8317"
  },
  {
    "url": "assets/js/85.1fe299e7.js",
    "revision": "9a565ca38444f950f18752d981cc9869"
  },
  {
    "url": "assets/js/86.e3c90e54.js",
    "revision": "31e1e7ea5eb5905ec0fb319d8644c2d0"
  },
  {
    "url": "assets/js/87.a2b85c47.js",
    "revision": "50495a18311f601fb91f7d5bd59bdacb"
  },
  {
    "url": "assets/js/88.92c9b83f.js",
    "revision": "d988754f28cae31c623414d7e9b12c1f"
  },
  {
    "url": "assets/js/89.aeb1f391.js",
    "revision": "c26ca5c6bd712e5f1929a5a38329063b"
  },
  {
    "url": "assets/js/9.f49b558b.js",
    "revision": "18b276268487cb2af46f313f7aa44bbd"
  },
  {
    "url": "assets/js/90.b7893c78.js",
    "revision": "05d353297ce8beb5c7ee02eaccf016c6"
  },
  {
    "url": "assets/js/91.2e351b82.js",
    "revision": "336a6557938744c93a780abd68a8cb35"
  },
  {
    "url": "assets/js/92.f0602b07.js",
    "revision": "8a24a33d999e433a800621726585f1d8"
  },
  {
    "url": "assets/js/93.378f105a.js",
    "revision": "508bd3faf65203f3d4319887e025f223"
  },
  {
    "url": "assets/js/94.c4b751d3.js",
    "revision": "c3fe0cb4975a5a94b9d365f20ac59270"
  },
  {
    "url": "assets/js/95.0b41d1e0.js",
    "revision": "a4dcd5abbbe0ce5a06da29c7dec1820a"
  },
  {
    "url": "assets/js/96.7c567368.js",
    "revision": "35bfe2a6f7449c020dcd134ceb4c6f84"
  },
  {
    "url": "assets/js/97.2554c867.js",
    "revision": "605f16022e8c16a3bc2351d780b408f4"
  },
  {
    "url": "assets/js/98.5b5f6b92.js",
    "revision": "57fcaaf69313328121ff4912eacead17"
  },
  {
    "url": "assets/js/app.6e3612ae.js",
    "revision": "c54fd7496ae07a1fea2d890bcaf88af5"
  },
  {
    "url": "basic/drag.html",
    "revision": "161dc6eb1c27c0a8f46785367c276ea6"
  },
  {
    "url": "basic/easing.html",
    "revision": "f18324bcbcaee777ba0de9b047a59b1e"
  },
  {
    "url": "basic/follow.html",
    "revision": "d37f5fc5d4dd0e0fd56be66aae56352b"
  },
  {
    "url": "basic/gsap.html",
    "revision": "6b325ea6113f0a2559659d0aabe10e43"
  },
  {
    "url": "basic/hover.html",
    "revision": "840800f904748691226951e0af0a36bd"
  },
  {
    "url": "basic/index.html",
    "revision": "ff32e60ea2d93805ab85f634e010b7bc"
  },
  {
    "url": "basic/random.html",
    "revision": "66b5bf2e474b485b054abcab66a7d233"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "b3e71c4544ae5173d88651a9dc91cecc"
  },
  {
    "url": "basic/scroll.html",
    "revision": "0cf15bd23a71ba10e4fec4d6dd597b43"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "67d585a6a05bfee7a3594941594dbf21"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "ac32480511988b1f54cea6f7e3087637"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "bc0b9226121f95eb1134bc9a5920085d"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "864de66c33352fc3ed2e81602aae647f"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "2fef9cf3f44b2847dcfe2e6453d851a7"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "03d9adcbde946d2e8b066501e0b03431"
  },
  {
    "url": "canvas/index.html",
    "revision": "48de83fcb5334d093c2e2f8ab4ddfebc"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "b3624e3ec72b7dca4cb3f2a539b72f29"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "f0b141b6154b7233ed60bc194a4e4b76"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "06c76e0449f9748f36ff5ef60c697be2"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "7a9c2245f4c3db774e1fc6fc1d5ea861"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "e494b8e49726b89cc1c55624be1d34a8"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "53c1e84e56e8ca5ad097d21dcd8aee3e"
  },
  {
    "url": "effects/index.html",
    "revision": "0a84bf6fc3f5818bbc25b9ab144e2c33"
  },
  {
    "url": "effects/mouse.html",
    "revision": "8734703e971654d50864e853fc18b3d2"
  },
  {
    "url": "effects/reveal.html",
    "revision": "d3d7b747ffa21d9346a85b827296803f"
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
    "revision": "a83ac1b9e02c6bb21e5af3f0cbb4930f"
  },
  {
    "url": "info/index.html",
    "revision": "e3cceb45f0388265a590495b137b80c6"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "cd3049597c9ebc2b994bddde8d38b98c"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "bf6ea77790ed98cb864e03911d9b5b26"
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
