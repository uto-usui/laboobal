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
    "revision": "662278dc72a9618ad882af9fa0f7c767"
  },
  {
    "url": "assets/css/0.styles.cfe6f6c4.css",
    "revision": "ca86ae27bfa5a28241cd3fe5f500a740"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4226a525.js",
    "revision": "b1757b146fc6ee19fdd5dfb37a3aa186"
  },
  {
    "url": "assets/js/10.b99c4d86.js",
    "revision": "1aa97706c0a3263e80a61bdb7b15d88e"
  },
  {
    "url": "assets/js/100.0cf7dc85.js",
    "revision": "2b233eb55f3881e4e09aacacb7d44771"
  },
  {
    "url": "assets/js/101.48904ccf.js",
    "revision": "82bfeadd3709a21e3036d3f8379446a4"
  },
  {
    "url": "assets/js/102.c8c9661a.js",
    "revision": "dfe193dc318dfda1b35afca07a46a662"
  },
  {
    "url": "assets/js/103.d4cb8ffc.js",
    "revision": "9f904cf287866cb77747c8f184bc3b0b"
  },
  {
    "url": "assets/js/104.42d6e6f6.js",
    "revision": "0dc10290aaa3953dec33562152358b91"
  },
  {
    "url": "assets/js/11.33ffe5f5.js",
    "revision": "08c02d93cdb1c80d381ff6ffa573babe"
  },
  {
    "url": "assets/js/12.efd01b7b.js",
    "revision": "bf01d53f3156cf799f9f2095ffa9a12e"
  },
  {
    "url": "assets/js/13.e346dec0.js",
    "revision": "713c3e4a1947be8ae6bc978a2ef2ba99"
  },
  {
    "url": "assets/js/14.a183d2da.js",
    "revision": "2c60acdf425b37b26ec2ea13d79121b7"
  },
  {
    "url": "assets/js/15.a1a2c62c.js",
    "revision": "b3516ffb6183a481c65612fc1cc2b578"
  },
  {
    "url": "assets/js/16.74378a3d.js",
    "revision": "7c338f498b57cb591e641625f9673f20"
  },
  {
    "url": "assets/js/17.89767462.js",
    "revision": "cf91b6f9572e1d7c6df0e4cac5afedd9"
  },
  {
    "url": "assets/js/18.562ff3f4.js",
    "revision": "618a954cb66d2e76df2297b8e2653de0"
  },
  {
    "url": "assets/js/19.bacbfda9.js",
    "revision": "23163b58f20042860b6e333c4a9da05b"
  },
  {
    "url": "assets/js/2.b9b9e76b.js",
    "revision": "5d00d5a587aae842baa4648bffd9ae56"
  },
  {
    "url": "assets/js/20.da50c161.js",
    "revision": "6cad1881bd4d29fabf40b59f151f5979"
  },
  {
    "url": "assets/js/21.c8fa072b.js",
    "revision": "9c2b1cb29b5399f3d525f7d720ddcb34"
  },
  {
    "url": "assets/js/22.21c93dfd.js",
    "revision": "fa51319b906fe966e40d01366281d949"
  },
  {
    "url": "assets/js/23.f2e14ca4.js",
    "revision": "13c7b05dde5947fededc6dc35201f78e"
  },
  {
    "url": "assets/js/24.3f3a381b.js",
    "revision": "11514ba9c641a035875d6c646c7653ea"
  },
  {
    "url": "assets/js/25.243d0693.js",
    "revision": "29e62df0eb488913358b5cb0ce2e41a9"
  },
  {
    "url": "assets/js/26.8ab7e44e.js",
    "revision": "84b99b03127bf72f95d74b508977690e"
  },
  {
    "url": "assets/js/27.302eefdb.js",
    "revision": "745ce9fbd75d64481907685cbd413ec7"
  },
  {
    "url": "assets/js/28.26403ce7.js",
    "revision": "0d06ae710d4abecb045350eb309f5e74"
  },
  {
    "url": "assets/js/29.4b2a1e2a.js",
    "revision": "36d481bc7b7ccfe7ee132180d3d5a163"
  },
  {
    "url": "assets/js/3.0ffa468c.js",
    "revision": "c202d7af49caf9126410dc493806232e"
  },
  {
    "url": "assets/js/30.6a63ba04.js",
    "revision": "7212e3aef41ab9b08392108f55982ccc"
  },
  {
    "url": "assets/js/31.b654d852.js",
    "revision": "2d3ac99346d17fedf6938f179e5df39e"
  },
  {
    "url": "assets/js/32.73210f62.js",
    "revision": "15f28029a2efe82083a0138c65257b0d"
  },
  {
    "url": "assets/js/33.e49686ec.js",
    "revision": "2c6ae89d4287c60ab82b53ee80e036ef"
  },
  {
    "url": "assets/js/34.cfb6b138.js",
    "revision": "1976961297c31ad51857d36d109382e1"
  },
  {
    "url": "assets/js/35.1d7ff3f1.js",
    "revision": "cc2b81c145b439fb6587151243ba0967"
  },
  {
    "url": "assets/js/36.785b8d37.js",
    "revision": "530637578c70edddbd9b0f9e9cc46264"
  },
  {
    "url": "assets/js/37.262e785e.js",
    "revision": "ead21fd4ae7546a5ab5c0c210637eefa"
  },
  {
    "url": "assets/js/38.bc738f07.js",
    "revision": "cd67c1511d06037383cf5841564ff36f"
  },
  {
    "url": "assets/js/39.33f13438.js",
    "revision": "da6daf8ac150e57cf3b6ce1d963e5870"
  },
  {
    "url": "assets/js/4.2aa1000c.js",
    "revision": "62116f7cfbbc6887accd92c5f179fc0f"
  },
  {
    "url": "assets/js/40.85ec5a91.js",
    "revision": "c0afffb7a6bca45802da5d640ee284ac"
  },
  {
    "url": "assets/js/41.bf3e2fc2.js",
    "revision": "0a0bc1bc32144438fbf2813b1b966c6d"
  },
  {
    "url": "assets/js/42.379d9138.js",
    "revision": "4f20627a8a894a1cabfaa435e446308c"
  },
  {
    "url": "assets/js/43.c9ebcbfb.js",
    "revision": "c3c260d39dbcd36002f71c993c8bb456"
  },
  {
    "url": "assets/js/44.81e402be.js",
    "revision": "7badca30b2bff47a68d02ee07489b5d3"
  },
  {
    "url": "assets/js/45.3a38cc7b.js",
    "revision": "7e4280348922f0c33dd184355aeb1706"
  },
  {
    "url": "assets/js/46.a9a9ee6e.js",
    "revision": "cf7bdb9daa95f62ac57b26b8cd3e7ef3"
  },
  {
    "url": "assets/js/47.2aba0b0b.js",
    "revision": "7d63b773f5cb95dbc6a4120be8c89b76"
  },
  {
    "url": "assets/js/48.7cae05bd.js",
    "revision": "4c0d86c603b83f01e323f9c1079c5c3a"
  },
  {
    "url": "assets/js/49.08c51453.js",
    "revision": "028ed6b588910973cf6bc9f05d6fa155"
  },
  {
    "url": "assets/js/50.08bbb09a.js",
    "revision": "d645f5a0bddefc176e6914c5b9a8fc63"
  },
  {
    "url": "assets/js/51.68e6733c.js",
    "revision": "31cc80923c2caca1b85e5fee8d451064"
  },
  {
    "url": "assets/js/52.9e9fc659.js",
    "revision": "80781fdf9fc03a24c26b223d4907052a"
  },
  {
    "url": "assets/js/53.5889b798.js",
    "revision": "48f8877f9ba0be49016206d6a6cf23e7"
  },
  {
    "url": "assets/js/54.6d1384e7.js",
    "revision": "fd04394fa083ce036f90f1194e341a88"
  },
  {
    "url": "assets/js/55.25c6a386.js",
    "revision": "33188ddb69fca12a5106c5f1a178c63d"
  },
  {
    "url": "assets/js/56.13c290e0.js",
    "revision": "58c521cb375c21919ce57e643a6b1ade"
  },
  {
    "url": "assets/js/57.83517f86.js",
    "revision": "f1c8b49533e55599fafd1fa525eca60e"
  },
  {
    "url": "assets/js/58.7ce30043.js",
    "revision": "52594539d4dc69ad0538490bd24da319"
  },
  {
    "url": "assets/js/59.3ac25c39.js",
    "revision": "54312a112fd7bc6de1da4db0302c3063"
  },
  {
    "url": "assets/js/6.8e2f4600.js",
    "revision": "700dcf43f8f4e3c79a595e1756775089"
  },
  {
    "url": "assets/js/60.52079fc2.js",
    "revision": "6f9a1483a20a9d1bb1d8c7a522fa6383"
  },
  {
    "url": "assets/js/61.b9f8f53b.js",
    "revision": "8cab7c1e15e77e72bfcc15cc238658db"
  },
  {
    "url": "assets/js/62.d787edae.js",
    "revision": "4b7a41bfea73bb7e16f2029c29e84397"
  },
  {
    "url": "assets/js/63.3a29ef8e.js",
    "revision": "fe10c496f6be0ebe3cfdb4cccd74c737"
  },
  {
    "url": "assets/js/64.60b00377.js",
    "revision": "6289c7fa41bd6d5f531129ec9ad655a1"
  },
  {
    "url": "assets/js/65.4ae48add.js",
    "revision": "f6bb533bf31048686d6f8829047b7667"
  },
  {
    "url": "assets/js/66.b750d752.js",
    "revision": "a66fe89c3b614b550326bf1021c088a9"
  },
  {
    "url": "assets/js/67.b8d51dbd.js",
    "revision": "e7ae03d849efab252239b0a401afb468"
  },
  {
    "url": "assets/js/68.1b56c213.js",
    "revision": "9a7e50092edd3c61a06800b18890d8a4"
  },
  {
    "url": "assets/js/69.2bd7822b.js",
    "revision": "bd56b42c15c33c5aa3b6d99817fe046b"
  },
  {
    "url": "assets/js/7.e42f5591.js",
    "revision": "9ff768ed487b781de7ff61e0a43bbbe3"
  },
  {
    "url": "assets/js/70.e7d2cd29.js",
    "revision": "17b573cd13ba7b3e8889e1316adc906e"
  },
  {
    "url": "assets/js/71.50007a4e.js",
    "revision": "979904d51d94a4d670a8f7d14b4ec583"
  },
  {
    "url": "assets/js/72.29390ae2.js",
    "revision": "e17bb7345947acc1212ed447ae58bd1a"
  },
  {
    "url": "assets/js/73.2c833b85.js",
    "revision": "7d88c9238ad83eb22f62d7e0791eb020"
  },
  {
    "url": "assets/js/74.d398e75a.js",
    "revision": "4a7ecb2d4b51e730fed23dac16ed0aec"
  },
  {
    "url": "assets/js/75.2bae666c.js",
    "revision": "6cd3c6ea931f07ac8caf14e6f62c910b"
  },
  {
    "url": "assets/js/76.1b02064f.js",
    "revision": "44fac0b087677498d1002f7230cfb8db"
  },
  {
    "url": "assets/js/77.16c44080.js",
    "revision": "268174d0c90e6eb686c26b7ed0f79e6e"
  },
  {
    "url": "assets/js/78.a328ec4d.js",
    "revision": "4360567d45f1f3612267de4cdd8cc323"
  },
  {
    "url": "assets/js/79.5dfc8441.js",
    "revision": "a8428a9bbf1191d5cc71620090e2faca"
  },
  {
    "url": "assets/js/8.6af3e077.js",
    "revision": "07ef72f2b845115377fd78559ff42582"
  },
  {
    "url": "assets/js/80.4a6ff2b2.js",
    "revision": "480c33438006ce56313c864c9c7054bf"
  },
  {
    "url": "assets/js/81.ea4c8b64.js",
    "revision": "4358c161a0e738b055ac7426be1e4779"
  },
  {
    "url": "assets/js/82.de3108de.js",
    "revision": "a0f3dda1eb27cb956810b182f7cce9fa"
  },
  {
    "url": "assets/js/83.bd453be7.js",
    "revision": "f56f2f20ca12d98d4168cd1459a42dc7"
  },
  {
    "url": "assets/js/84.efcbd765.js",
    "revision": "249a8b8153ef19de78144a4e09bbb01e"
  },
  {
    "url": "assets/js/85.724908bf.js",
    "revision": "89c3cdb3bb425b49f02ca5128c7b73b9"
  },
  {
    "url": "assets/js/86.7488a3b8.js",
    "revision": "08b6c26fd4c31dc95572b52ac58e115d"
  },
  {
    "url": "assets/js/87.dd238ee2.js",
    "revision": "790cc48a3ece25b114a8cd5713e797ec"
  },
  {
    "url": "assets/js/88.8161b56b.js",
    "revision": "087261c28dba0d91d8fd82512519e3e4"
  },
  {
    "url": "assets/js/89.7f5a0ce9.js",
    "revision": "96c34b6e164414cb80aa51751f873076"
  },
  {
    "url": "assets/js/9.5ff1dd29.js",
    "revision": "eb69c76e0a2381ffad086490bede011a"
  },
  {
    "url": "assets/js/90.603ed2a5.js",
    "revision": "002b37b9a86ab3b9077e5a690edb28e7"
  },
  {
    "url": "assets/js/91.9d507208.js",
    "revision": "b5109eb1a4a7807f4cb4421765ce1194"
  },
  {
    "url": "assets/js/92.578cd7d5.js",
    "revision": "24e21cb90e8643ac16fe0037001d7d92"
  },
  {
    "url": "assets/js/93.fad35c7a.js",
    "revision": "a77ce0f111526fad36135baf67e13f5b"
  },
  {
    "url": "assets/js/94.60723ffe.js",
    "revision": "8387cb3a024a3a16b6a540f3edb657ae"
  },
  {
    "url": "assets/js/95.844eb0eb.js",
    "revision": "05b455cc983b99677faed7e744b4d8ab"
  },
  {
    "url": "assets/js/96.35c11c4e.js",
    "revision": "270443d092bafd7cdbc95ed682fb5148"
  },
  {
    "url": "assets/js/97.9393043a.js",
    "revision": "8fc66c8a16768ace0fd39e3651249567"
  },
  {
    "url": "assets/js/98.87c2d0e5.js",
    "revision": "1620b807531aeb5acb7b4145c538ba43"
  },
  {
    "url": "assets/js/99.e8320639.js",
    "revision": "6baba2b13d26195575e1daca8f3c0699"
  },
  {
    "url": "assets/js/app.b9c20227.js",
    "revision": "205aa8b1520d31de7ff0772c45de399f"
  },
  {
    "url": "basic/drag.html",
    "revision": "ed4f767e5957378c1ff97314849a050a"
  },
  {
    "url": "basic/easing.html",
    "revision": "66f8b5adb40d04cfe6bb8e13e14cc905"
  },
  {
    "url": "basic/follow.html",
    "revision": "3e0afb7b3ba12b5d23279f0f3f2f5a40"
  },
  {
    "url": "basic/gsap.html",
    "revision": "48f30367020ae2daeabeb16113965b29"
  },
  {
    "url": "basic/hover.html",
    "revision": "ab7c25e362d6ea45a9f1226c0e32665a"
  },
  {
    "url": "basic/index.html",
    "revision": "064b2a8216cae249487270d45ae3cc51"
  },
  {
    "url": "basic/random.html",
    "revision": "e664a8f2f84df66aae70330155c1af7e"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "55b3c1dc364876fbfeced1e220b5df47"
  },
  {
    "url": "basic/scroll.html",
    "revision": "b3d053f15b754300077f3d6c0b363dce"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "577fe87e595b1be101cc94b86eb29903"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "fbe2c02899a9a58a1cbc1498c86456db"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "c21802d7cc484cec9d9988457085f3ec"
  },
  {
    "url": "canvas/drawImage.html",
    "revision": "312c4e3a7718e1aeacbcdf7d2eae064f"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "41a174b144d049840b1edf2d35702691"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "46e15cc3b0c6a74beb859b87473d6d87"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "589aaff9317ca5fd41248f12bdd0fe94"
  },
  {
    "url": "canvas/index.html",
    "revision": "21b6958e97785b305d49c231fce7fa63"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "556fd499ea7ef35bbb8a802321af6ae0"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "19f210819f40b3db668bee142f812aeb"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "b531e0a7533ac7cec59dbebec49d9b28"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "96d956c144f46927b67f85016e96c492"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "aa8bb31df23b3d0561bd138e2471b2af"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "85197030422a22c2a765c0250f8b7339"
  },
  {
    "url": "effects/index.html",
    "revision": "ca06465dc3dcbadd2ea58361a420a7b7"
  },
  {
    "url": "effects/mouse.html",
    "revision": "1ab74c40f0afa3b3e7786945e777e939"
  },
  {
    "url": "effects/reveal.html",
    "revision": "72ed204e867d135449d14c312925d88d"
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
    "revision": "4132119d75968ef461a59cc6390c2413"
  },
  {
    "url": "info/index.html",
    "revision": "489aabdf467b744565a993f7947bb382"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "87aed690bb3045e219e94d1e17106bb5"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "ee63fc0b9440ee2175585af21209699f"
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
