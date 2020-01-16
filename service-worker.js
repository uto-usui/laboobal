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
    "revision": "f9d3a6332f22954a02e09d4fbca9a4c0"
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
    "url": "assets/js/10.869a4040.js",
    "revision": "a3abee4cecfe649904e212974b35b3f4"
  },
  {
    "url": "assets/js/11.c74cc94d.js",
    "revision": "26fdccc108a585e3fe42c77dcf0ef3c3"
  },
  {
    "url": "assets/js/12.364f58f9.js",
    "revision": "423820cb5f71f5d542027a6e309c911a"
  },
  {
    "url": "assets/js/13.21b9e04e.js",
    "revision": "de5710fa61b6cdfdde03d60b4a922553"
  },
  {
    "url": "assets/js/14.4b179f62.js",
    "revision": "b0c24fc7e774f08697a12b16460f6d49"
  },
  {
    "url": "assets/js/15.1686be12.js",
    "revision": "1395d767734f18a8ef0ffe534b40bb6d"
  },
  {
    "url": "assets/js/16.11851251.js",
    "revision": "86ff935b7a2adf5cc7fa6cd0b7ae7cec"
  },
  {
    "url": "assets/js/17.3ea06dd6.js",
    "revision": "e39db8370a49f4870afdf277372a91c4"
  },
  {
    "url": "assets/js/18.ea0e13d5.js",
    "revision": "8b4f51e545cde6fe14879487b33f092a"
  },
  {
    "url": "assets/js/19.01fa8ea8.js",
    "revision": "35a3e3015f573fb39a509e74146dc5a9"
  },
  {
    "url": "assets/js/2.a64abead.js",
    "revision": "7c49d6f78511ffd7d420e1c4c8eb96ce"
  },
  {
    "url": "assets/js/20.35fbbaf6.js",
    "revision": "ee953d6b4eaae6441d5ebde58de8af73"
  },
  {
    "url": "assets/js/21.ea86afd3.js",
    "revision": "657ccd1b016aa964c14e744f14e5f204"
  },
  {
    "url": "assets/js/22.3e9e527f.js",
    "revision": "4b717e7c1de5f73fc09a664882b73b1c"
  },
  {
    "url": "assets/js/23.0e715d86.js",
    "revision": "73508d2b0ce2866331eb2d5430291a89"
  },
  {
    "url": "assets/js/24.2cb59344.js",
    "revision": "a4fd191b8e365ab2ed11702b8423cb68"
  },
  {
    "url": "assets/js/25.eac7b754.js",
    "revision": "11542ed1d14d803b6fd9811b92116147"
  },
  {
    "url": "assets/js/26.892b30a2.js",
    "revision": "a4e9664ca765d83e3390d1404a6effe5"
  },
  {
    "url": "assets/js/27.11e4ae7d.js",
    "revision": "89ef86da245dfd5253647f57d0597d1b"
  },
  {
    "url": "assets/js/28.506cdc49.js",
    "revision": "6f6529dca9d89e535b52112e79908880"
  },
  {
    "url": "assets/js/29.4149277d.js",
    "revision": "6fd331d13af74992a4c290dce1eee26b"
  },
  {
    "url": "assets/js/3.01d6470c.js",
    "revision": "f6ed0d9855a8b6537972920f8235d205"
  },
  {
    "url": "assets/js/30.742dccec.js",
    "revision": "98d50a13635dcf4dca674e89db1b600b"
  },
  {
    "url": "assets/js/31.3bf11d31.js",
    "revision": "df57bc30b1aa010db8662406e3015b50"
  },
  {
    "url": "assets/js/32.e4ff0ef4.js",
    "revision": "cedc6cdbcbbea968f7588018f64c7c5b"
  },
  {
    "url": "assets/js/33.c484f0b6.js",
    "revision": "507d282228224f934e6e2450e3075d92"
  },
  {
    "url": "assets/js/34.8fe9a359.js",
    "revision": "260dadbdfa72e4d2ed11ea5def43ca18"
  },
  {
    "url": "assets/js/35.6740e649.js",
    "revision": "fda94bcb802890d555b0302e86e7595c"
  },
  {
    "url": "assets/js/36.3b59b834.js",
    "revision": "56f2b09885bca8394cb2df345180bcfe"
  },
  {
    "url": "assets/js/37.ad5b0972.js",
    "revision": "d0a8e36d46c1efb7d729fe9f89cb0239"
  },
  {
    "url": "assets/js/38.144fddd6.js",
    "revision": "d81669db4428fafe1c3edec9e3be094d"
  },
  {
    "url": "assets/js/39.b5a6c18d.js",
    "revision": "9840b7e4b7982b3d9d90d7c72fbe7aad"
  },
  {
    "url": "assets/js/4.07db5b0a.js",
    "revision": "f4976f63358215988b656b57c4105f35"
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
    "url": "assets/js/42.a67abeeb.js",
    "revision": "d85454efd99e19d48b6fab3f2437c732"
  },
  {
    "url": "assets/js/43.612f42d1.js",
    "revision": "c6c8de68bea95fb3f721c1bdbd42d7e7"
  },
  {
    "url": "assets/js/44.67d7a8e2.js",
    "revision": "f54a978ebc8d749d906949294173e9da"
  },
  {
    "url": "assets/js/45.524b7e74.js",
    "revision": "e1810a06c24850f2503802e8d28d251c"
  },
  {
    "url": "assets/js/46.3e96b9e7.js",
    "revision": "84a0ebd3b82b058283f7c9ed48ca450f"
  },
  {
    "url": "assets/js/47.25052922.js",
    "revision": "a5ec0bc50e2c143fe6969258b0efe5df"
  },
  {
    "url": "assets/js/48.133480c3.js",
    "revision": "6d4b2d13c300efa7d7e17ba2cd4b2be8"
  },
  {
    "url": "assets/js/49.3e916796.js",
    "revision": "a1ce531da642f9eefab0ebda57691e2b"
  },
  {
    "url": "assets/js/5.241ceffc.js",
    "revision": "d6f5c5ea07cd2aea4bbbea19718e0718"
  },
  {
    "url": "assets/js/50.5ca83174.js",
    "revision": "984041642c511f0b1dd40272f582f1e5"
  },
  {
    "url": "assets/js/51.d92d7cca.js",
    "revision": "ffc7b42dde5d3d655d312b5e025ed246"
  },
  {
    "url": "assets/js/52.6233ccda.js",
    "revision": "77d470dda6bc8135a7e149701ef564c8"
  },
  {
    "url": "assets/js/53.358cd8b7.js",
    "revision": "6e7447b59f96943493e54e5ba50de610"
  },
  {
    "url": "assets/js/54.7d000770.js",
    "revision": "c6b68a740863b8dc81bdca705103e4ef"
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
    "url": "assets/js/57.c7ba6f6a.js",
    "revision": "28724285a2ae820ce9c64f00313d8307"
  },
  {
    "url": "assets/js/58.8bc35c56.js",
    "revision": "a39edc29052190a7a90e0e95b6c04507"
  },
  {
    "url": "assets/js/59.2b69cd88.js",
    "revision": "9e185d21479ce6550d91277be447a214"
  },
  {
    "url": "assets/js/6.4fcfe883.js",
    "revision": "fdde0f23a96775257f1376dd21912799"
  },
  {
    "url": "assets/js/60.42739287.js",
    "revision": "3012d27bf2fd3655671cb38eb93557de"
  },
  {
    "url": "assets/js/61.0030f229.js",
    "revision": "aaf39c494a84635f2a5c3e3d2bec9d2f"
  },
  {
    "url": "assets/js/62.d8fa71fb.js",
    "revision": "3a7372ac160cbf6c52b2b7a7cbd5a0e0"
  },
  {
    "url": "assets/js/63.33fa77bc.js",
    "revision": "f7459c3e8256db6f1b1ad3ee7f72a2de"
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
    "url": "assets/js/77.a27dca85.js",
    "revision": "38b039e81b73ff46977e8dec6a08b635"
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
    "url": "assets/js/8.f1cda587.js",
    "revision": "477ccf3a3474f0331dc7c4b46f801aad"
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
    "url": "assets/js/9.078ac97a.js",
    "revision": "3efff4b2b16439ba2f08c14b1f4ff4c9"
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
    "url": "assets/js/94.1891f12e.js",
    "revision": "a5465f320d58b3d753da8844dc1af1bb"
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
    "url": "assets/js/app.5aa726c5.js",
    "revision": "00d42e397ed32b9110cf67bd32ae0ab2"
  },
  {
    "url": "basic/drag.html",
    "revision": "fbcda5229b56cae5ca8fcfb7a26ce965"
  },
  {
    "url": "basic/easing.html",
    "revision": "b7801751ee68ce48626c85d0ca5c951d"
  },
  {
    "url": "basic/follow.html",
    "revision": "2dcdecd7dd390027bb0f8d016e398df0"
  },
  {
    "url": "basic/gsap.html",
    "revision": "318133b85cf46958f0570c314a7cf0d9"
  },
  {
    "url": "basic/hover.html",
    "revision": "1e6c7c86026e0dcedaff7c6077e0993e"
  },
  {
    "url": "basic/index.html",
    "revision": "fc7a898a7212799db2593081192e2ef9"
  },
  {
    "url": "basic/random.html",
    "revision": "9dba91c0bacee57b9fc03ec98c744761"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "e1f45184368b30ec2b2be254df006d89"
  },
  {
    "url": "basic/scroll.html",
    "revision": "3582de676bbca81e89193629e7ae8a10"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "79c4ff6e50467ff909191d9add9dc30b"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "c3b15454aa9bd1fc37b1323d0f084092"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "67f7e693e0d357ac8a20f66782f954b3"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "fdd869b721f0a67202c512cc6d1aec22"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "e7fcdedd15a03a55778e9ff51830207c"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "6ef666c46a499d0fbc9afa551b4834f9"
  },
  {
    "url": "canvas/index.html",
    "revision": "45e212436ba0cf3f96a8d67f509e992b"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "8e38e0e42d9005e85a1fe20cdf42b772"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "700951bbd374b91d16b5c6a40930bfdc"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "e74de742c4396934561d83ce71d6f940"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "3c20e770f342a433c20f9af4c3f40147"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "de12e62df555394b1cc57fd59c11f15b"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "5a9dcb9ced24568652f0610db8e7a7cd"
  },
  {
    "url": "effects/index.html",
    "revision": "35c0fdb4cb4fdf6711b9c41feca63214"
  },
  {
    "url": "effects/mouse.html",
    "revision": "735f3f14e13085794c24d0dbb9c49a34"
  },
  {
    "url": "effects/reveal.html",
    "revision": "0db3dd03b5a4472e31dc24d3ab717b03"
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
    "revision": "1573a25c2037e0a7edb144d952740cec"
  },
  {
    "url": "info/index.html",
    "revision": "4cc68242f1d56e16b92e62d4b1172fcb"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "4f95485079d576f71c3108a037e56f6a"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "3952266ee44731f61b84c11dc8c45f44"
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
