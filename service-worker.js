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
    "revision": "29ca1538cee8696389f29ee992f93191"
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
    "url": "assets/js/10.65865111.js",
    "revision": "4709471c461fdd5c7cf8fa46490d2fa8"
  },
  {
    "url": "assets/js/11.d16e65f6.js",
    "revision": "9940dc7f70ae0b1ba85240b470665703"
  },
  {
    "url": "assets/js/12.c908a798.js",
    "revision": "8eb6b631eef3ea390ccec59a53e00de6"
  },
  {
    "url": "assets/js/13.a979f806.js",
    "revision": "942efecc31389b935e0b4e7fb9fa9173"
  },
  {
    "url": "assets/js/14.f4e6766c.js",
    "revision": "2b947a63ef562482206619274d8902c9"
  },
  {
    "url": "assets/js/15.b74f2b49.js",
    "revision": "f2f7e168dba391df4306e6957d981357"
  },
  {
    "url": "assets/js/16.ab10095d.js",
    "revision": "61f20159041e2963c43b2aeaba92debf"
  },
  {
    "url": "assets/js/17.1c000ff6.js",
    "revision": "9c3a44e7582a990025acdb7f7eb54130"
  },
  {
    "url": "assets/js/18.578e183f.js",
    "revision": "79c246d99598e69e2d1e5d46ef1b4c28"
  },
  {
    "url": "assets/js/19.807c9037.js",
    "revision": "1dab8283a20628401abb6a49a5c6a5a7"
  },
  {
    "url": "assets/js/2.19e14b3b.js",
    "revision": "473949106d7602415b4cbec5c3d83e25"
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
    "url": "assets/js/23.cb0068f4.js",
    "revision": "e8127e719b9347a7096667da336656e1"
  },
  {
    "url": "assets/js/24.bfbce58e.js",
    "revision": "e2586343bda7923a1ab25c2713440ded"
  },
  {
    "url": "assets/js/25.fd58f8ad.js",
    "revision": "326ec282208ab003e7c3eb274d6f47de"
  },
  {
    "url": "assets/js/26.99b86b8a.js",
    "revision": "eddd43b405623657954b2f65b0d5d819"
  },
  {
    "url": "assets/js/27.28e54d29.js",
    "revision": "0a7b4b519bbf755d1e46d8b51b2bc7cf"
  },
  {
    "url": "assets/js/28.feb851c6.js",
    "revision": "44452de5eeef69d2569ce154531a1e8c"
  },
  {
    "url": "assets/js/29.3273ab3f.js",
    "revision": "6f9e24d1dd2498c3d48a7c0d69797149"
  },
  {
    "url": "assets/js/3.785db0b9.js",
    "revision": "2d8ed532590971fad24a93483ca0ebf6"
  },
  {
    "url": "assets/js/30.cf5a37f6.js",
    "revision": "e7bb946da25dd56689d76cac30212caa"
  },
  {
    "url": "assets/js/31.63a8ed6b.js",
    "revision": "f10abfb537cadf112a29d1184f723a8c"
  },
  {
    "url": "assets/js/32.76c0f345.js",
    "revision": "0540ec5d6d6e3998ed4456726a66b17a"
  },
  {
    "url": "assets/js/33.a07f68ef.js",
    "revision": "7d5c2bf090897d2e00a1b61b7a754193"
  },
  {
    "url": "assets/js/34.e65023d0.js",
    "revision": "dbdc2e0210065c1798f25adc93ace8cd"
  },
  {
    "url": "assets/js/35.701bddb4.js",
    "revision": "c4cd1f9f26212f4027ce86d5e12ac2e3"
  },
  {
    "url": "assets/js/36.cad1f4e5.js",
    "revision": "609700fb988d65a093c591e2514baf16"
  },
  {
    "url": "assets/js/37.e3db682d.js",
    "revision": "c9b2ea86b552e0922cb8f6ef313cde95"
  },
  {
    "url": "assets/js/38.0b81f3b1.js",
    "revision": "3790b64d6c4ee571e3f78d365cf29396"
  },
  {
    "url": "assets/js/39.5ec462bb.js",
    "revision": "7c234f1b6b77a49a58c6f2117a051e0d"
  },
  {
    "url": "assets/js/4.088d16cd.js",
    "revision": "2e6ef15df57bcacae7313d02f426ca25"
  },
  {
    "url": "assets/js/40.7ed56322.js",
    "revision": "3e0c716a4f5d85c417c0c646a3f5dc31"
  },
  {
    "url": "assets/js/41.1c68079e.js",
    "revision": "a724f4be474a343922b0801261e6eac4"
  },
  {
    "url": "assets/js/42.b26844c2.js",
    "revision": "ee6d61f97b93720c3fe88d3216afc50e"
  },
  {
    "url": "assets/js/43.12f1f5aa.js",
    "revision": "eca1d6d7aad383e2a6ecbcb7e7370a9f"
  },
  {
    "url": "assets/js/44.9cbcd8bf.js",
    "revision": "37fa75b4e657ee8b830d9057386510a6"
  },
  {
    "url": "assets/js/45.a0ff35b0.js",
    "revision": "be534f7154dc34acce0f2944376ea799"
  },
  {
    "url": "assets/js/46.ff89d4d8.js",
    "revision": "fe2aba03c5268a4e5d0fba19df6fb7fc"
  },
  {
    "url": "assets/js/47.b933c7dc.js",
    "revision": "06da9843e1cf4a88a6b5a3ff5da1facd"
  },
  {
    "url": "assets/js/48.9da54184.js",
    "revision": "70647fdc8ece6b24482dec9a5dd44884"
  },
  {
    "url": "assets/js/49.182e493c.js",
    "revision": "222ce510f011cc47643e172d3e63a634"
  },
  {
    "url": "assets/js/5.79b98a47.js",
    "revision": "2b78f8a0775391f7949b19e58860ceeb"
  },
  {
    "url": "assets/js/50.0374f3e9.js",
    "revision": "8dd87e4d34d4dcce20ec0833461ca758"
  },
  {
    "url": "assets/js/51.9ea3e50b.js",
    "revision": "9438fe47dd92a1b04adc9057792aeb0f"
  },
  {
    "url": "assets/js/52.3e5bb11a.js",
    "revision": "3ee7c9cd4d9fa966cc4dab688a639693"
  },
  {
    "url": "assets/js/53.22724ebe.js",
    "revision": "b8cc1a9f773eab8893ac45294163cf19"
  },
  {
    "url": "assets/js/54.603b595a.js",
    "revision": "97c64bbdefba5223173c5b347100d848"
  },
  {
    "url": "assets/js/55.773246a5.js",
    "revision": "9849cab524fead243dbae2c6c1d2a9d4"
  },
  {
    "url": "assets/js/56.3694ef3d.js",
    "revision": "26891c37af6d43962e7cdee16d547d64"
  },
  {
    "url": "assets/js/57.fc6c82eb.js",
    "revision": "0c0cb97aabfb90997f5bf92bd3aa4493"
  },
  {
    "url": "assets/js/58.091d9099.js",
    "revision": "b42187ec14558e37ffa3a9742e94a594"
  },
  {
    "url": "assets/js/59.1bd49326.js",
    "revision": "7955af4c8c76998e3a74f94e698d5d2c"
  },
  {
    "url": "assets/js/6.7cb8b4c8.js",
    "revision": "7917dede84d1533a6f6b72b19650c06e"
  },
  {
    "url": "assets/js/60.f87c6e84.js",
    "revision": "b3af5f83771980def1cf2e206d865742"
  },
  {
    "url": "assets/js/61.c14c1553.js",
    "revision": "8d248c5dd3bc1e6a08867c8ae29007f9"
  },
  {
    "url": "assets/js/62.694275cb.js",
    "revision": "a688f44f957a78e7c075b5f02f05d2ea"
  },
  {
    "url": "assets/js/63.bfc22c6d.js",
    "revision": "afb623273f49924a5df8e07de6ea1bc6"
  },
  {
    "url": "assets/js/64.a20dc278.js",
    "revision": "d006aabf862a50bd0868cfd4574dda75"
  },
  {
    "url": "assets/js/65.bc711bfe.js",
    "revision": "184c356507a9110e608c8150205c1c5a"
  },
  {
    "url": "assets/js/66.1cd1a183.js",
    "revision": "2eaf0b4d008bc41b0049d3614197e7f2"
  },
  {
    "url": "assets/js/67.2822dd6e.js",
    "revision": "592f47f6e132d62ea5d8008c7b158d08"
  },
  {
    "url": "assets/js/68.11cf311f.js",
    "revision": "b3d1cb6587b258c8b509a830c1f67097"
  },
  {
    "url": "assets/js/69.c45d56b5.js",
    "revision": "551b0bd041fc7012b2ca647dc7870711"
  },
  {
    "url": "assets/js/70.e4969bef.js",
    "revision": "248a96c30c53e3560178949a56585e6e"
  },
  {
    "url": "assets/js/71.1affe0be.js",
    "revision": "2623228e4c5833879e2a7ed3cdcc5162"
  },
  {
    "url": "assets/js/72.3d6b2ec6.js",
    "revision": "49113d99f6fd7608d415890dabe283e4"
  },
  {
    "url": "assets/js/73.df6e8158.js",
    "revision": "ce9f615cfefdccb5eeb2e28d81ecb759"
  },
  {
    "url": "assets/js/74.bef8ec41.js",
    "revision": "e650c77373f838077fe7c0b2f2a2018d"
  },
  {
    "url": "assets/js/75.b261cfb8.js",
    "revision": "7de40def4afd62b5fbb7e480b9d7e1df"
  },
  {
    "url": "assets/js/76.a2ad9a39.js",
    "revision": "23d9d827fd96871801232f7b56fbdf91"
  },
  {
    "url": "assets/js/77.85389dec.js",
    "revision": "e3b9ac9592e9c4930bb5b51b0be7ae9f"
  },
  {
    "url": "assets/js/78.4cdb7389.js",
    "revision": "05de541c25b7bd46875a093e5083f11d"
  },
  {
    "url": "assets/js/79.ea4bf00f.js",
    "revision": "cc78f1a731f1649b6a53223b3f1b12f4"
  },
  {
    "url": "assets/js/8.87dabd2f.js",
    "revision": "ce2974e4a6207d548727b55917b9f7bd"
  },
  {
    "url": "assets/js/80.c42efec4.js",
    "revision": "4ce1e44e31f3c5b8f4a37a20e743f93a"
  },
  {
    "url": "assets/js/81.7d07bf6f.js",
    "revision": "f2347738503c0c2a5f3572016d2235a3"
  },
  {
    "url": "assets/js/82.380411ea.js",
    "revision": "4fa7448e6db0ef38e9e7fbee504fbdfa"
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
    "url": "assets/js/85.9c63a859.js",
    "revision": "7c5e5bbe96537f8393648369204232c0"
  },
  {
    "url": "assets/js/86.6fb21ee5.js",
    "revision": "84fcb534db33f45291019cf1328bffa5"
  },
  {
    "url": "assets/js/87.43e3c6ea.js",
    "revision": "2168a9ce8c7a650befc99200ec43aa21"
  },
  {
    "url": "assets/js/88.718b3134.js",
    "revision": "7e713e145f4e10678b7fd0fd85fe3483"
  },
  {
    "url": "assets/js/89.e0183116.js",
    "revision": "273839d5ce01bfb6eb22c282c6450ba7"
  },
  {
    "url": "assets/js/9.2682f111.js",
    "revision": "b387f8ec4be6301fdf78ea943477e79b"
  },
  {
    "url": "assets/js/90.f9e62b0a.js",
    "revision": "dad252aa4e646987ceb2bf5209187f74"
  },
  {
    "url": "assets/js/91.6d72e041.js",
    "revision": "e2e45f1c8e5ec0d0453f47eccf34f056"
  },
  {
    "url": "assets/js/92.8f06e829.js",
    "revision": "d85e4f61bbb53fbcc079624e968d5d63"
  },
  {
    "url": "assets/js/93.2c425bd7.js",
    "revision": "b102a80868dfe27d540a7d5af3010359"
  },
  {
    "url": "assets/js/94.1c8a7469.js",
    "revision": "1633656a09802825193a3df01398326b"
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
    "url": "assets/js/app.a02fd651.js",
    "revision": "393c9313d44e1508e680465eb189e8a0"
  },
  {
    "url": "basic/drag.html",
    "revision": "b01d976cc840b03743a25616f7dec2e7"
  },
  {
    "url": "basic/easing.html",
    "revision": "ea48ed3654e9ccb79018c974ad9bab92"
  },
  {
    "url": "basic/follow.html",
    "revision": "909ed993f3dd1379eb069ffa8f435955"
  },
  {
    "url": "basic/gsap.html",
    "revision": "3f54cbc9fe9c13cce57529cc21a22f27"
  },
  {
    "url": "basic/hover.html",
    "revision": "d8215f6db6b42c6ee1e702073ae6f651"
  },
  {
    "url": "basic/index.html",
    "revision": "687fb82c5d6bee1b6006eedff521dffb"
  },
  {
    "url": "basic/random.html",
    "revision": "1ae8ae20371eb171bd0cc7b0e11a58d5"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "df1316b8a2a643aa1fd56adf2802499a"
  },
  {
    "url": "basic/scroll.html",
    "revision": "5c8550e4df1fdd1e48089b67ee42c746"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "0f0f5163ac3b13a28910c1379862b52e"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "cd57ef84ca7e38f9487115e117b0c3fa"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "b360d0b3f6cedfdfc8fceaa8e29c86af"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "8296d6c4d2628f9ba58dbc77d7998134"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "4cc35d34e50c52661d937818fae68986"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "c97c1bcff8e7f9edecccb98b0d25962b"
  },
  {
    "url": "canvas/index.html",
    "revision": "2363c1e9d7f013497ec5adab11dae525"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "288164a5461e2b921d894ccb7b5e0ab6"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "65b0a951cc118bde617293a33ec1e934"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "1a0f3bc464284972274c1748c21b10db"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "745ccc1d5e6fe0fe2d265351621ac3f4"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "2baf5ca8c08a082dbe48f12c15139558"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "c33e76db698b7e07e7633e3d4600e529"
  },
  {
    "url": "effects/index.html",
    "revision": "7fd907a6b5f950f84d0bc3fb388fc85c"
  },
  {
    "url": "effects/mouse.html",
    "revision": "dea1310ebeb219aab480b6d6414ae4a0"
  },
  {
    "url": "effects/reveal.html",
    "revision": "e161dd69600b7f03bf39f6c0264d62c2"
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
    "revision": "e72c942b8cfb6f7b9056cfcf638fa49c"
  },
  {
    "url": "info/index.html",
    "revision": "e27091f5c201b1faeab46b1fd0a7f7c1"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "4615479bed280e96cc0db64ce4b61891"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "a62324b96ae19754584d005ffadc010b"
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
