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
    "revision": "e4e4d8ec56edbf0886406a848609a110"
  },
  {
    "url": "assets/css/0.styles.b7593e03.css",
    "revision": "7ae591f0733dbcc05c116119da09b730"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8ca90658.js",
    "revision": "2e6a26335ea4a3b027d4f417f02c9ecf"
  },
  {
    "url": "assets/js/10.9afe7aa7.js",
    "revision": "fb8e439b602aa2dea2fb0c03dccd4b12"
  },
  {
    "url": "assets/js/11.29613b60.js",
    "revision": "7b4a5b783c779dac493079fbe9d3b987"
  },
  {
    "url": "assets/js/12.882971e1.js",
    "revision": "4c1ce62e2b6b1a813632989f69a966c4"
  },
  {
    "url": "assets/js/13.2d2c4f25.js",
    "revision": "f036698efae79a63fa14104e6e601f12"
  },
  {
    "url": "assets/js/14.9cfee90c.js",
    "revision": "3c31919a28115801c20ebe45f3e8d50a"
  },
  {
    "url": "assets/js/15.7f1ce1aa.js",
    "revision": "16e237d53d2894030be9ab6c4f8c2df6"
  },
  {
    "url": "assets/js/16.7671a1df.js",
    "revision": "f8b73dd2dda6e4530cbbdf615a1fa798"
  },
  {
    "url": "assets/js/17.0fb142a8.js",
    "revision": "72a56f01914003b47738b3db10b880ad"
  },
  {
    "url": "assets/js/18.d3eff9f1.js",
    "revision": "a2866c963180e97af4c3891d22a22b69"
  },
  {
    "url": "assets/js/19.97a2b198.js",
    "revision": "4f96d817798cce2fd768e9caf6b0a614"
  },
  {
    "url": "assets/js/2.c9c2aadb.js",
    "revision": "df0789a09624e990ad59df64c85c26ac"
  },
  {
    "url": "assets/js/20.9039b2a4.js",
    "revision": "7e73d6075a8208662dbbcad9d21f56d4"
  },
  {
    "url": "assets/js/21.537e35d8.js",
    "revision": "dd09a494b0b7368b923a20df772bb4df"
  },
  {
    "url": "assets/js/22.d1ffe89d.js",
    "revision": "ce9870c92f31514dc753f94ba2a6961f"
  },
  {
    "url": "assets/js/23.d6260ada.js",
    "revision": "ab08d3ea452d7aa7332ae5047b7d02ce"
  },
  {
    "url": "assets/js/24.35989bb0.js",
    "revision": "8fa9f01d33fd81d1a0e34481fc7c39ed"
  },
  {
    "url": "assets/js/25.4647084e.js",
    "revision": "a02773d40d9cd084ab6fae77000e4de9"
  },
  {
    "url": "assets/js/26.4b97a81b.js",
    "revision": "c3caf45f83aa61e7206948e0f86ee25d"
  },
  {
    "url": "assets/js/27.99d124d5.js",
    "revision": "0a755d099d21a19e01a5a7bdb755a235"
  },
  {
    "url": "assets/js/28.56163189.js",
    "revision": "cf2a3797641e5fe57dc3111cf17d833f"
  },
  {
    "url": "assets/js/29.6771add3.js",
    "revision": "ab215fc26b0c9d6a63cb7ffedacf8629"
  },
  {
    "url": "assets/js/3.a2a7a9a7.js",
    "revision": "f3c46246c4f7f0d4b4f3f8235eb42307"
  },
  {
    "url": "assets/js/30.8ea6b9d2.js",
    "revision": "26749d2b65cfa7edbf74d04c8540f6cc"
  },
  {
    "url": "assets/js/31.0d44b2c4.js",
    "revision": "61049375b38ed0ad8b47e84b06122cbe"
  },
  {
    "url": "assets/js/32.c673830b.js",
    "revision": "75a00a31c92df5497b613410f20d2390"
  },
  {
    "url": "assets/js/33.b33a664a.js",
    "revision": "f0f145226781248ccf51e21d04366e82"
  },
  {
    "url": "assets/js/34.b910f0aa.js",
    "revision": "defd87c8a23cb732bb6a49f82afa4632"
  },
  {
    "url": "assets/js/35.8e217c27.js",
    "revision": "2506549912a369c19ab49b82f9b7d47f"
  },
  {
    "url": "assets/js/36.0eafb46d.js",
    "revision": "5fd3f7b6042d7a75b4fdf464c8598162"
  },
  {
    "url": "assets/js/37.d8a92de8.js",
    "revision": "347e2d2f8585c5c769dae08c41e6a7fa"
  },
  {
    "url": "assets/js/38.9221c30b.js",
    "revision": "a4cd5e9463b6692d0b4481db384fd135"
  },
  {
    "url": "assets/js/39.fc43e0cf.js",
    "revision": "199d06d01c962bad02396a5e6dd05f7e"
  },
  {
    "url": "assets/js/4.4ceec30f.js",
    "revision": "09093bd4a5c30dbded4e3c52301f5eda"
  },
  {
    "url": "assets/js/40.95c14702.js",
    "revision": "352fe2fb9001c902ac962b8bd043a6ca"
  },
  {
    "url": "assets/js/41.04b6950d.js",
    "revision": "595c2b8276eeeef71557b3d180f222bf"
  },
  {
    "url": "assets/js/42.1671f83a.js",
    "revision": "f78f00ea00070c6b5a06fc9619e22b08"
  },
  {
    "url": "assets/js/43.57b2105a.js",
    "revision": "273ea410b09d6d28276d421bf7f31da2"
  },
  {
    "url": "assets/js/44.46622475.js",
    "revision": "de80b2fe61077cecf9aed2a17b0ad336"
  },
  {
    "url": "assets/js/45.9a4efe1e.js",
    "revision": "3e64766fa34816fb337957538f5679ac"
  },
  {
    "url": "assets/js/46.b3203f0a.js",
    "revision": "002b2a3972c6053e2eb71b1bf4e03a54"
  },
  {
    "url": "assets/js/47.724006e2.js",
    "revision": "ee3eb9d7fd4a97c54b768cc52716278a"
  },
  {
    "url": "assets/js/48.074afc08.js",
    "revision": "0e3fd754d31fbf4f5af73b4770f3302c"
  },
  {
    "url": "assets/js/49.b9809b57.js",
    "revision": "00bc4fce1971fbceace300bfc3d3b7b9"
  },
  {
    "url": "assets/js/5.858b7143.js",
    "revision": "ba6cb65d792d585094010a418116aaea"
  },
  {
    "url": "assets/js/50.02533343.js",
    "revision": "0308d80950d6f5242f740533db43429b"
  },
  {
    "url": "assets/js/51.5d57fe20.js",
    "revision": "0aad5b3fa15f8aa5a689d412b3ece2b2"
  },
  {
    "url": "assets/js/52.dfe44ebd.js",
    "revision": "2424376ba26171a9adfefc20ef337a7b"
  },
  {
    "url": "assets/js/53.d87056c7.js",
    "revision": "ae7ff5559dfd2935f03b21b353afe125"
  },
  {
    "url": "assets/js/54.8d2c9470.js",
    "revision": "2f42abe2703591728385085292606caa"
  },
  {
    "url": "assets/js/55.40d140b0.js",
    "revision": "2229725721efa6204e987c5bcfffefba"
  },
  {
    "url": "assets/js/56.a1940ea1.js",
    "revision": "a98f03fdf23635e5bc28def6667d6a8c"
  },
  {
    "url": "assets/js/57.7102dfad.js",
    "revision": "90c4cdd222a6fa685905846daffe329c"
  },
  {
    "url": "assets/js/58.7c9b915c.js",
    "revision": "530974bcfd4cf441832834ea94baa637"
  },
  {
    "url": "assets/js/59.8cfb18a5.js",
    "revision": "87fad95292d2392ade9cfa005c09dce3"
  },
  {
    "url": "assets/js/60.223d2875.js",
    "revision": "5c67fdf2ef3ab1f24dc20f3b65408910"
  },
  {
    "url": "assets/js/61.17b8a15f.js",
    "revision": "9224ddf6aad18f288e79f226cc761113"
  },
  {
    "url": "assets/js/62.2012fe2f.js",
    "revision": "06d080e011a2211299b62160da101679"
  },
  {
    "url": "assets/js/63.f6ee62b9.js",
    "revision": "28e4913f768933ca2115ec9d49c7d5a4"
  },
  {
    "url": "assets/js/64.3bfdc85f.js",
    "revision": "91624d072a27b36f2fb8548672babc87"
  },
  {
    "url": "assets/js/65.4e250885.js",
    "revision": "ccafaae6d08f16eefbdcbb3eb03dedfe"
  },
  {
    "url": "assets/js/66.3d229005.js",
    "revision": "337748b41a9f95da019e94b7c4069ed8"
  },
  {
    "url": "assets/js/67.9ffe1b48.js",
    "revision": "16704746f6f4c736e7a527eb6e1d64fb"
  },
  {
    "url": "assets/js/68.f7c3fe97.js",
    "revision": "37861dd2bef048b73d4e178f9abb024d"
  },
  {
    "url": "assets/js/69.efd2e24c.js",
    "revision": "18220347f37dfcd95c3eed2a09a5cb8e"
  },
  {
    "url": "assets/js/7.db41d831.js",
    "revision": "d957105a24cf6fef792fde516d8cf9d4"
  },
  {
    "url": "assets/js/70.077d0ae4.js",
    "revision": "b988f897721386256e3a1b2c0516b5d7"
  },
  {
    "url": "assets/js/71.dd00f891.js",
    "revision": "79779dad1e5b78c81bfea4336fb2833e"
  },
  {
    "url": "assets/js/72.b9231d2e.js",
    "revision": "7d3bc1acab18d616085421d77bbdd063"
  },
  {
    "url": "assets/js/73.c2873e67.js",
    "revision": "01899121251d2308b86b2a06b9bf177b"
  },
  {
    "url": "assets/js/74.55fc741e.js",
    "revision": "086e76627314f51eef69750af6a82071"
  },
  {
    "url": "assets/js/75.468293b4.js",
    "revision": "ecfdd0bb36158532e70a153fb6cd39dd"
  },
  {
    "url": "assets/js/76.a333135b.js",
    "revision": "fc0050247665816e748bb4707f6f12d1"
  },
  {
    "url": "assets/js/77.008e25d2.js",
    "revision": "ab0c3d29789b94250e6b9fc3dec3af02"
  },
  {
    "url": "assets/js/78.ac49c0f7.js",
    "revision": "1e9b2616109372d20a2cca39c9b1ecb4"
  },
  {
    "url": "assets/js/79.b22a5335.js",
    "revision": "ee7f4005ac7d8f6a981f9461e3f1d505"
  },
  {
    "url": "assets/js/8.0d19d23c.js",
    "revision": "229daf6449200549063314a1fc706a49"
  },
  {
    "url": "assets/js/80.8a74f15e.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/81.ea48394f.js",
    "revision": "574c03546a48659b56b3ca347a56d5b1"
  },
  {
    "url": "assets/js/9.57784771.js",
    "revision": "e7a5d4789e4334e5a2368d12a0f7b6e8"
  },
  {
    "url": "assets/js/app.29726a84.js",
    "revision": "e34a3d23beffaa4d64163c9d1c4c8bb9"
  },
  {
    "url": "basic/drag.html",
    "revision": "492230374b49dfc29e4ecb00b6630a3a"
  },
  {
    "url": "basic/easing.html",
    "revision": "7d2ae573547d3772b8429a8cffb25fb5"
  },
  {
    "url": "basic/follow.html",
    "revision": "5f9dde01c998e00ebdddd9f7b2ddd6c4"
  },
  {
    "url": "basic/hover.html",
    "revision": "5ad1e79851efabe9c4014d10a75d83d0"
  },
  {
    "url": "basic/index.html",
    "revision": "7be53f7e8227a0ce52691fe9d9ff0cb2"
  },
  {
    "url": "basic/random.html",
    "revision": "f1264baa79dcdb822cc105c8e95818c7"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "eda2f3df19ce9b5de9834d8daee914de"
  },
  {
    "url": "basic/scroll.html",
    "revision": "f6a8ade61f7a4cc6114089c6f5fadd74"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "6a4675f8f9062fbb950ac1e03d3a583f"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "80c9883be9e2ea75866c148d9bc205ac"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "3187be873d9b20ee4a15489f2ebc4695"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "8b948f9900e4a617c50567ecfa7b11d4"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "37b48c4569722af29f2d540b52da8666"
  },
  {
    "url": "canvas/index.html",
    "revision": "5edd42ff87d11714b0c0c6c2489abb1c"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "2f0eef347b316222844c7a19ca6f55cb"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "9633879cb41a20cd5c3df01b33ef4a37"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "7e24abdad017a2dd05a132bd716d4986"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "16b55007a81ba2ccf071179746e91e21"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "8c554b2317713695d1288a56d071bdb5"
  },
  {
    "url": "effects/index.html",
    "revision": "c26519424a3adee63d9b2cc66ef3d020"
  },
  {
    "url": "effects/mouse.html",
    "revision": "f8358f727e76ee55cd4677374c4490d4"
  },
  {
    "url": "effects/reveal.html",
    "revision": "93fb54818a9ee40d9d9daeb759c26a11"
  },
  {
    "url": "favicon.png",
    "revision": "cf75785b2334d026fc678b53776ac38f"
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
    "revision": "b2119351e4b4dc6db731c60c68b49526"
  },
  {
    "url": "info/index.html",
    "revision": "6bd93424fab3a1599dd9953f84406e7b"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
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