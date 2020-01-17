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
    "revision": "6c41a1d1f2b693fd21a15e3be72a9004"
  },
  {
    "url": "assets/css/0.styles.72227de9.css",
    "revision": "9c4c406f0eca1280a46cb5762a4fdcd3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.76cafbb7.js",
    "revision": "2dce119839bf9cf132290fb638fd5077"
  },
  {
    "url": "assets/js/10.73c494b8.js",
    "revision": "28d06d8d04cbeeea8c0f1e8069863acc"
  },
  {
    "url": "assets/js/11.58dc21a4.js",
    "revision": "83495a4344bfee13d2c8ce29ceb493d0"
  },
  {
    "url": "assets/js/12.6e9727ca.js",
    "revision": "d6e3a75d6452a6360a1f68b92820e3cf"
  },
  {
    "url": "assets/js/13.e429a93f.js",
    "revision": "9c04a3cbe275d84439f472b7fed6015c"
  },
  {
    "url": "assets/js/14.b34afc2d.js",
    "revision": "07b99cb5bf94b204bd421fa5bde3e0df"
  },
  {
    "url": "assets/js/15.ba0295be.js",
    "revision": "2c4a226b9598ea748e4c0981bc37294d"
  },
  {
    "url": "assets/js/16.f1fe2b81.js",
    "revision": "d81e0b36e490efb0d7dca43ef4589866"
  },
  {
    "url": "assets/js/17.75fcf5ce.js",
    "revision": "11eb0a1030488975a7650cb966aa7174"
  },
  {
    "url": "assets/js/18.2ef4c4df.js",
    "revision": "2d3b5b2296eb3122098374a9e66c3ee7"
  },
  {
    "url": "assets/js/19.e989e2f3.js",
    "revision": "e8bab911887b2c13747dce1ecc66fd41"
  },
  {
    "url": "assets/js/2.7efeed98.js",
    "revision": "6b1900b157c89bdfa59767aa979afe41"
  },
  {
    "url": "assets/js/20.154c1d5d.js",
    "revision": "21c480bf07ed28f6bc4905fc51cbc342"
  },
  {
    "url": "assets/js/21.f60aa330.js",
    "revision": "182692855a3b3399b3bc68dd47f565e2"
  },
  {
    "url": "assets/js/22.445242ac.js",
    "revision": "06115f2633ec3f34c901ac2eaadeadc6"
  },
  {
    "url": "assets/js/23.714cd250.js",
    "revision": "0744a4a4225ef38353c9d5a98c3b1587"
  },
  {
    "url": "assets/js/24.08090255.js",
    "revision": "a4fd191b8e365ab2ed11702b8423cb68"
  },
  {
    "url": "assets/js/25.33a0b568.js",
    "revision": "0b37bb7839cf012ba6b1bac9735d9e42"
  },
  {
    "url": "assets/js/26.65786183.js",
    "revision": "db730a7e47abd87aa790eebf17c5ba5f"
  },
  {
    "url": "assets/js/27.d66bd3e0.js",
    "revision": "89ef86da245dfd5253647f57d0597d1b"
  },
  {
    "url": "assets/js/28.e9659fc5.js",
    "revision": "362b745afefb0ad0e1a7f30f8cd80228"
  },
  {
    "url": "assets/js/29.ad652507.js",
    "revision": "1762cc51b549ac16e526c1823fe79634"
  },
  {
    "url": "assets/js/3.3b32deaf.js",
    "revision": "70950f077fa8c82b29584bf7477f7058"
  },
  {
    "url": "assets/js/30.c9491b79.js",
    "revision": "b7b06ece782edfba4142b3b49cc49a5c"
  },
  {
    "url": "assets/js/31.294f7c5e.js",
    "revision": "40a9e3d7cf39b947241cfd48cc0da69d"
  },
  {
    "url": "assets/js/32.87d7f4a8.js",
    "revision": "cf2d6773bd7137821563c4b5ff7a38fe"
  },
  {
    "url": "assets/js/33.cf43e11f.js",
    "revision": "97502a1f73ef5997b8a013c1569ac10d"
  },
  {
    "url": "assets/js/34.e80227a6.js",
    "revision": "500c9dd05fff5bcb85318ab36b8d4239"
  },
  {
    "url": "assets/js/35.03fd448a.js",
    "revision": "fda94bcb802890d555b0302e86e7595c"
  },
  {
    "url": "assets/js/36.6a8a58f9.js",
    "revision": "56f2b09885bca8394cb2df345180bcfe"
  },
  {
    "url": "assets/js/37.c7108544.js",
    "revision": "f2c634950a240951994ebf0cf1b7776d"
  },
  {
    "url": "assets/js/38.50f7c80d.js",
    "revision": "4f8a2585170bbe4a8817db959fe964a8"
  },
  {
    "url": "assets/js/39.a51b59d4.js",
    "revision": "d18e567f7aa6d88246bcbf9a39983f2b"
  },
  {
    "url": "assets/js/4.b4e60ea2.js",
    "revision": "60574a5b0c8bb1372313976032667041"
  },
  {
    "url": "assets/js/40.a5e0f4ad.js",
    "revision": "026f1ee45bb6ebee9998c12af5a5d181"
  },
  {
    "url": "assets/js/41.9b7d1c6f.js",
    "revision": "7a16d3f2fe85a21ef9c10a6a367e0353"
  },
  {
    "url": "assets/js/42.2564ac83.js",
    "revision": "63441c7114d08967b2b7c6ca849f0e17"
  },
  {
    "url": "assets/js/43.0977e173.js",
    "revision": "bb1f85b0bfdd96e1ed856b07f6a252be"
  },
  {
    "url": "assets/js/44.9d3b9946.js",
    "revision": "e8ee8143cd09c558ade7d1771abc024c"
  },
  {
    "url": "assets/js/45.9223d643.js",
    "revision": "5addfffeb9762c6f9de4285f4060e2af"
  },
  {
    "url": "assets/js/46.87473a05.js",
    "revision": "0cfba7caef1809382056b16f5ccc869e"
  },
  {
    "url": "assets/js/47.ede90543.js",
    "revision": "a5ec0bc50e2c143fe6969258b0efe5df"
  },
  {
    "url": "assets/js/48.95a2329a.js",
    "revision": "6d4b2d13c300efa7d7e17ba2cd4b2be8"
  },
  {
    "url": "assets/js/49.371e426c.js",
    "revision": "a1ce531da642f9eefab0ebda57691e2b"
  },
  {
    "url": "assets/js/5.6a8c2f95.js",
    "revision": "840312ec28cd8fc8cfee1f7828e93560"
  },
  {
    "url": "assets/js/50.5ca83174.js",
    "revision": "984041642c511f0b1dd40272f582f1e5"
  },
  {
    "url": "assets/js/51.c5ed80cd.js",
    "revision": "32d250317fe7077a15e02959ed1e47ed"
  },
  {
    "url": "assets/js/52.b6139369.js",
    "revision": "abe0a9a4da4e9be51c0a058076516784"
  },
  {
    "url": "assets/js/53.5ffc9e82.js",
    "revision": "7f1619fd607e0ca65fec0b70729a7e1f"
  },
  {
    "url": "assets/js/54.4158e5a0.js",
    "revision": "f77e71903a60f8a165b906776965e80c"
  },
  {
    "url": "assets/js/55.eb32fab6.js",
    "revision": "89dd98809fc73585e57df6908c0a7206"
  },
  {
    "url": "assets/js/56.5a888fe3.js",
    "revision": "1a119e04698e496ded60c14accc01bde"
  },
  {
    "url": "assets/js/57.d10f113f.js",
    "revision": "61800a68403360b311c68bf9b468cf10"
  },
  {
    "url": "assets/js/58.8bc35c56.js",
    "revision": "a39edc29052190a7a90e0e95b6c04507"
  },
  {
    "url": "assets/js/59.c0619441.js",
    "revision": "36781e2677a363d41f221dd9c6ee2dc8"
  },
  {
    "url": "assets/js/6.6bbd2cff.js",
    "revision": "7cc50e56b11e37402435d014436b9d63"
  },
  {
    "url": "assets/js/60.19a52f7e.js",
    "revision": "5bb4dd223d4e93e42ee7f26695a47bcc"
  },
  {
    "url": "assets/js/61.f50e1c6e.js",
    "revision": "cb593805bbdd6802b2fd18a32ee91282"
  },
  {
    "url": "assets/js/62.cabdf515.js",
    "revision": "a13da5225a24f06578263c31317ac272"
  },
  {
    "url": "assets/js/63.a6e2dfdc.js",
    "revision": "b12e1a7bbcf5a2d3bf271527a3fd172a"
  },
  {
    "url": "assets/js/64.2fa42011.js",
    "revision": "1a55e3e75acb2f53c26be01c4fd3cce4"
  },
  {
    "url": "assets/js/65.82d79d42.js",
    "revision": "2dbff8ffe61c8962ca8d654c363a58ec"
  },
  {
    "url": "assets/js/66.2eb42a46.js",
    "revision": "2e91bb5576b2f6500497416c3ae0ab94"
  },
  {
    "url": "assets/js/67.3e775a10.js",
    "revision": "a8f733481fd13efe91a7483eb8ff94a6"
  },
  {
    "url": "assets/js/68.5a59a583.js",
    "revision": "ed6aa9d350678b89384fcba9904370d5"
  },
  {
    "url": "assets/js/69.ecbeab9d.js",
    "revision": "eb758fab1097c48ab925302e92a2cefd"
  },
  {
    "url": "assets/js/70.206283c0.js",
    "revision": "b081d998728a4531f3b82f2455dcbc2d"
  },
  {
    "url": "assets/js/71.ccd95e67.js",
    "revision": "3ee90d8497a8246b7315b05c6473d947"
  },
  {
    "url": "assets/js/72.0c14355d.js",
    "revision": "e5fe8d1e74416b4e957aec7d5bc57578"
  },
  {
    "url": "assets/js/73.8075b6c9.js",
    "revision": "7fdcbe088531d6a97821cfbdb929503f"
  },
  {
    "url": "assets/js/74.50c2bbda.js",
    "revision": "8cb9aabf464105a984df8b71fdadd0e7"
  },
  {
    "url": "assets/js/75.8bfb39c7.js",
    "revision": "e4b8b0c13564fb43de62c849bff167c6"
  },
  {
    "url": "assets/js/76.d5199d05.js",
    "revision": "f6e91a628a60875c536e15817ece556d"
  },
  {
    "url": "assets/js/77.8758e070.js",
    "revision": "033a6f82bd9bd84b6b4c0b4c645703d5"
  },
  {
    "url": "assets/js/78.67912767.js",
    "revision": "f615f560278460373725cf959aba5b7c"
  },
  {
    "url": "assets/js/79.1f644f8d.js",
    "revision": "809648d0dd109e9711a5387f5db2fc55"
  },
  {
    "url": "assets/js/8.908dc809.js",
    "revision": "18821c6c1dd1b04c95358d86817d9765"
  },
  {
    "url": "assets/js/80.75432622.js",
    "revision": "26d74057582cdcb236480db78ae28255"
  },
  {
    "url": "assets/js/81.7f4bec40.js",
    "revision": "7ba41cd7826bba7576b9e2ccb6b7648f"
  },
  {
    "url": "assets/js/82.5a75af2f.js",
    "revision": "67b6afce4fd80d261de6686533a09746"
  },
  {
    "url": "assets/js/83.952ec94d.js",
    "revision": "e4bcf663dd73ff424f374562581ed43c"
  },
  {
    "url": "assets/js/84.a1fb6188.js",
    "revision": "639a8351e1918f361f9c2631ad7ee580"
  },
  {
    "url": "assets/js/85.f57b809e.js",
    "revision": "bbc3550b94f20581558e0d45b21d3cf3"
  },
  {
    "url": "assets/js/86.dd0973f6.js",
    "revision": "8288b8e0ef14279cec06fc0780a55664"
  },
  {
    "url": "assets/js/87.05f38c38.js",
    "revision": "241080ed89bcf01e9e396b2a9cbcd266"
  },
  {
    "url": "assets/js/88.606a56c4.js",
    "revision": "9250723341f6b6e284055b5273a53e85"
  },
  {
    "url": "assets/js/89.8988dd8f.js",
    "revision": "dd7e0faf0c1afd06205dbf745a640b0c"
  },
  {
    "url": "assets/js/9.9d53703f.js",
    "revision": "056758287b2fdd123e3c39736f08aad2"
  },
  {
    "url": "assets/js/90.7c0995fb.js",
    "revision": "9e40329e82c3abc29e710f0205cad43e"
  },
  {
    "url": "assets/js/91.d466be81.js",
    "revision": "b9aa7de76f1afedc7f380b542878c2f6"
  },
  {
    "url": "assets/js/92.74ff9357.js",
    "revision": "6e97641d40a41487d67f8868c058d9fc"
  },
  {
    "url": "assets/js/93.b4927918.js",
    "revision": "6796f389fe4866e7b44184fecf25847f"
  },
  {
    "url": "assets/js/94.0d7a3eea.js",
    "revision": "7bb58d9f84f9df6bc6b5b85583ead6d6"
  },
  {
    "url": "assets/js/95.dc853485.js",
    "revision": "16044429e4e2c205ab8dab493269e86c"
  },
  {
    "url": "assets/js/96.72ca6d2c.js",
    "revision": "9f20769ca3e955c8f324059fcefa7672"
  },
  {
    "url": "assets/js/97.c28d0508.js",
    "revision": "a432297c43279f0c153e40a1cdabe5ed"
  },
  {
    "url": "assets/js/app.234717e4.js",
    "revision": "681e55a2ace51e64dbb8957ab78f50a3"
  },
  {
    "url": "basic/drag.html",
    "revision": "790e4cc2836de09f9a5b3d9ea241a355"
  },
  {
    "url": "basic/easing.html",
    "revision": "990fcf1a39562b061c3b67550c69f3ba"
  },
  {
    "url": "basic/follow.html",
    "revision": "64dc14e8294d56ccb79efb058541aaad"
  },
  {
    "url": "basic/gsap.html",
    "revision": "297625df2bc3214af0797a361fc36d75"
  },
  {
    "url": "basic/hover.html",
    "revision": "82e9ca770aa7c7a75816794e8e99dfa4"
  },
  {
    "url": "basic/index.html",
    "revision": "88e2d59a821ea6452db0f930e610bb90"
  },
  {
    "url": "basic/random.html",
    "revision": "8861aa5ed04b240351c122c8ee2ab62e"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "9054d5adea80453d038755082c8a7b90"
  },
  {
    "url": "basic/scroll.html",
    "revision": "b409555caa184a2f847064a6aaf92cfa"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "59d68aefb0b136eb08b665eaaad32df4"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "1ed37b202cee17ce5bd92f2e31c58524"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "33b44efcfc30d1b8be55fe19d029822b"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "9193bb248eb4a8b181d6b7bad2d7755d"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "c95d714a1ff0def814f0454866bbbf18"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "12bdb55298d8b00bea72c6c88a1b0bce"
  },
  {
    "url": "canvas/index.html",
    "revision": "1b9dc64819bb506b3ef50a0237847bf5"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "2ab5f0a7ca905e54eb265bb41c887357"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "c3fe48fd3473c98826d76065e68e68f1"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "7b6f60b4ea966fef6bcc9181497d4a6a"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "a4ed2bfb4a3602ac275054f188d36d3e"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "41568c61e0afd3dfbf7360afb57fe1ce"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "2b0a41f5e09832a8180c5a168ed7883a"
  },
  {
    "url": "effects/index.html",
    "revision": "996b7bf0807e8af9ad1a8624aba2820b"
  },
  {
    "url": "effects/mouse.html",
    "revision": "a8a448ee0818d9bab60af1c8d498ec9b"
  },
  {
    "url": "effects/reveal.html",
    "revision": "9618f75684fc1f36a8ca0d955d465bf1"
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
    "revision": "a809f5406ce997153da3b48810ee0248"
  },
  {
    "url": "info/index.html",
    "revision": "02234770c14590911cc053603651fbff"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "12c5265368fd7f6de25cd1e6d390eeeb"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "9629972d78813577452e6b03a68edfd5"
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
