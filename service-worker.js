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
    "revision": "a0f792fbf3b9115f782cd334973da0ae"
  },
  {
    "url": "assets/css/0.styles.7c2e22d8.css",
    "revision": "e1692a5746123e9a6ae3cc5b413b18d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.235ef367.js",
    "revision": "b6d92a586cff217f57296136e707e082"
  },
  {
    "url": "assets/js/10.1318e17b.js",
    "revision": "5bf1a1e09416eb2e7c5e9cb9af45836a"
  },
  {
    "url": "assets/js/11.247401ec.js",
    "revision": "299a342aef8323a72a4dd7538c4f54d5"
  },
  {
    "url": "assets/js/12.cf5b2065.js",
    "revision": "4bd87b163ee249a16ce58cd67d45ac82"
  },
  {
    "url": "assets/js/13.d7cd7102.js",
    "revision": "7857be7f47241463a02d1df32f22fd02"
  },
  {
    "url": "assets/js/14.779baaa0.js",
    "revision": "b2bef9b95c80828d668c821e0c9800c5"
  },
  {
    "url": "assets/js/15.f3fc4e2c.js",
    "revision": "db472c57a146797a3ce89bd5f87ba6bd"
  },
  {
    "url": "assets/js/16.f0590da0.js",
    "revision": "ee72828104fa98e0efc4a9f58efefb00"
  },
  {
    "url": "assets/js/17.2bf9dced.js",
    "revision": "fcb602a1a834eec1215a70e596222bd7"
  },
  {
    "url": "assets/js/18.e5a29f0a.js",
    "revision": "ca3cb9059c09f95690444932d4ef8fd5"
  },
  {
    "url": "assets/js/19.1a31b2d7.js",
    "revision": "9d20e28a09ca4a1c4951a647b3d8f114"
  },
  {
    "url": "assets/js/2.d625256c.js",
    "revision": "939564f89248044520013c25ba13ceaf"
  },
  {
    "url": "assets/js/20.1126b911.js",
    "revision": "a55b09c480177b1adf2ed772467f44cd"
  },
  {
    "url": "assets/js/21.43ef9daf.js",
    "revision": "c1ea43b41b2857929fb9c6a17888f5a9"
  },
  {
    "url": "assets/js/22.c28fac88.js",
    "revision": "8616a50412214adfa7b40b6cd87f42c3"
  },
  {
    "url": "assets/js/23.b562ced5.js",
    "revision": "35be7ef1f62c6e17e6ade0dcc11c3147"
  },
  {
    "url": "assets/js/24.41ca513b.js",
    "revision": "c46d531c0f52c8432a2cbe10a39596f6"
  },
  {
    "url": "assets/js/25.f9ab78d9.js",
    "revision": "c1cd730d2aa14a7882380d2c597b0fc2"
  },
  {
    "url": "assets/js/26.30ffb793.js",
    "revision": "28571b2521d936931fc7e8ca116e3525"
  },
  {
    "url": "assets/js/27.c0390431.js",
    "revision": "e2eee61e40c986f3eedf62f72ec87527"
  },
  {
    "url": "assets/js/28.7af38f7f.js",
    "revision": "3e91976a807fe6d2cd6e83e51da27695"
  },
  {
    "url": "assets/js/29.01dbf072.js",
    "revision": "3e082f37531ef993455a384769be188f"
  },
  {
    "url": "assets/js/3.a2a7a9a7.js",
    "revision": "f3c46246c4f7f0d4b4f3f8235eb42307"
  },
  {
    "url": "assets/js/30.064533da.js",
    "revision": "5582a103d493498c7e5d6eded6123826"
  },
  {
    "url": "assets/js/31.51217095.js",
    "revision": "2cdb6727a012a1f39889c5e7bb74fc90"
  },
  {
    "url": "assets/js/32.c56997de.js",
    "revision": "6a3d8d777779e115e71c0186b2f9d725"
  },
  {
    "url": "assets/js/33.ae941855.js",
    "revision": "d6203a8f46f6f7a9d050c34c24efc226"
  },
  {
    "url": "assets/js/34.9f154a29.js",
    "revision": "0235fbc86a5262cecfee619e707d8479"
  },
  {
    "url": "assets/js/35.ef5ebdf0.js",
    "revision": "c87f707063d0d19d535b66c9ac2743a4"
  },
  {
    "url": "assets/js/36.1df0092c.js",
    "revision": "ff0c892d46f77c1a15e13ea2400ac60c"
  },
  {
    "url": "assets/js/37.aca5482b.js",
    "revision": "18ba113560db503002683440d4aa318e"
  },
  {
    "url": "assets/js/38.71e9d683.js",
    "revision": "adefcf687814dfe72d0d90eed4ba10da"
  },
  {
    "url": "assets/js/39.5b32e13d.js",
    "revision": "94e606faaa9b9f0ca95f02fc18a62f4f"
  },
  {
    "url": "assets/js/4.0130e56b.js",
    "revision": "4219654330a8298b6439ad6dce570d66"
  },
  {
    "url": "assets/js/40.fabead94.js",
    "revision": "9e61e304126fb4f83f90bffcab53e2ab"
  },
  {
    "url": "assets/js/41.e8ea8b66.js",
    "revision": "9d427667a68e9a04ba0f97fe56a44fc2"
  },
  {
    "url": "assets/js/42.e4a78c20.js",
    "revision": "4ac74c89dc6d427c588f5e39a3db972e"
  },
  {
    "url": "assets/js/43.9a74753f.js",
    "revision": "4e428bf2add0bac7c8a313f126f4ce05"
  },
  {
    "url": "assets/js/44.388cc59c.js",
    "revision": "98545dbe0254840af0ac1c4263f0a413"
  },
  {
    "url": "assets/js/45.35e09610.js",
    "revision": "3165add5a09aec12c2b29fd13d3a8c3c"
  },
  {
    "url": "assets/js/46.d8bd1a76.js",
    "revision": "ed47046c823766015a1a2803bff84f78"
  },
  {
    "url": "assets/js/47.7c91ee86.js",
    "revision": "5b17752c08d8e6977371074445dbbfe4"
  },
  {
    "url": "assets/js/48.5d973cf1.js",
    "revision": "a8ca87df75783ba35a921014e3334611"
  },
  {
    "url": "assets/js/49.e2685e46.js",
    "revision": "f79e97a3dc9b46d486225a8495c72632"
  },
  {
    "url": "assets/js/5.720c72ec.js",
    "revision": "2a5c1f83cf9400d8abb6c9dd7eccdf70"
  },
  {
    "url": "assets/js/50.219c77cb.js",
    "revision": "5ad5d5efba530f2208ebc0cbb1799c96"
  },
  {
    "url": "assets/js/51.26af6bb0.js",
    "revision": "e84e4b92887b7528339127a13a48ab5d"
  },
  {
    "url": "assets/js/52.0fe8fd3f.js",
    "revision": "1efb5e414f0b714fe3761ac35e121638"
  },
  {
    "url": "assets/js/53.4d6acddd.js",
    "revision": "055cc059fe0e27a2fc04fcbbf7bf2aee"
  },
  {
    "url": "assets/js/54.c9374f4e.js",
    "revision": "6ca9c14f1e066251b30ed03561c46f25"
  },
  {
    "url": "assets/js/55.9783980b.js",
    "revision": "e254b563b893ce51cd9a6888c4af9706"
  },
  {
    "url": "assets/js/56.d40b8c80.js",
    "revision": "368e9046e08ffce1b7ad4c4f47eb4bb0"
  },
  {
    "url": "assets/js/57.889d67ed.js",
    "revision": "b62bfe80b1c0ecc011a65872fb088ec0"
  },
  {
    "url": "assets/js/58.bfc18a60.js",
    "revision": "48a29a020d76aaa9b8c8c1eadad637cf"
  },
  {
    "url": "assets/js/59.47cccdb8.js",
    "revision": "d586162cc47aaca26d02ed7fad53f081"
  },
  {
    "url": "assets/js/60.0ea9f06f.js",
    "revision": "24b23fd7d7347450a62a9b9baba08bb7"
  },
  {
    "url": "assets/js/61.c5a8834f.js",
    "revision": "fe0a06fff9ea049f053a0eb23bb9b7ad"
  },
  {
    "url": "assets/js/62.9206360e.js",
    "revision": "3bf63beb5519b426adbae06fd805aa24"
  },
  {
    "url": "assets/js/63.550eca1f.js",
    "revision": "75bd74f0c7bb5c90753376e37cc97bbf"
  },
  {
    "url": "assets/js/64.3f7921b2.js",
    "revision": "bc36fb562e053b9ec90d01a45f5bf691"
  },
  {
    "url": "assets/js/65.b634a98e.js",
    "revision": "035d5c0f49e3daeeff2c488682469ba4"
  },
  {
    "url": "assets/js/66.7bbdcc70.js",
    "revision": "dd345c5dfc9602be118f7106c1ff859a"
  },
  {
    "url": "assets/js/67.926350e1.js",
    "revision": "0a1b39a87a13a74906f28a50dc861c4c"
  },
  {
    "url": "assets/js/68.e39067d4.js",
    "revision": "acd4bbd20eddf963c0b30435e7985f13"
  },
  {
    "url": "assets/js/69.bac399d0.js",
    "revision": "db9fc3c4b35c15f7a45eba0818bee539"
  },
  {
    "url": "assets/js/7.876532e0.js",
    "revision": "6391f8f6e9356227d38b48175d2d7181"
  },
  {
    "url": "assets/js/70.13773064.js",
    "revision": "e767f5c0709d28145cd9527bb361f19d"
  },
  {
    "url": "assets/js/71.d0cd0d33.js",
    "revision": "1c6b19534621bedd9478fac7485dfce1"
  },
  {
    "url": "assets/js/72.968143fb.js",
    "revision": "a80e13d85a491763b37c873dd4114b96"
  },
  {
    "url": "assets/js/73.9da57882.js",
    "revision": "2ef7a31e4953c021b0ba45801e9b65a8"
  },
  {
    "url": "assets/js/74.e975e1df.js",
    "revision": "fa40599ce1291a523bfe73ac2935edcd"
  },
  {
    "url": "assets/js/75.6c7b1dda.js",
    "revision": "daa2a6f0593336406ccc9566b41fdb5d"
  },
  {
    "url": "assets/js/76.5d03dace.js",
    "revision": "531052db783052e5abd7ad728848ec4b"
  },
  {
    "url": "assets/js/77.4e7bbc0a.js",
    "revision": "47d43e3fbbdf19a19ef840520da6584f"
  },
  {
    "url": "assets/js/78.551776c2.js",
    "revision": "b5e303226e4fbc3ed24f76a55e9149dd"
  },
  {
    "url": "assets/js/79.7d526a3e.js",
    "revision": "89c5c4283c462927adbfdbdcc0a1f4d7"
  },
  {
    "url": "assets/js/8.4b9d9cad.js",
    "revision": "27f9abbfd89826d5fa9b89367366c187"
  },
  {
    "url": "assets/js/80.f36ac5f7.js",
    "revision": "beed3e6d3acaad6005fd3c357d2deb5a"
  },
  {
    "url": "assets/js/81.003a1ff2.js",
    "revision": "a67f8fc134bf6cbba047cf76c09d9e28"
  },
  {
    "url": "assets/js/82.3a1ac623.js",
    "revision": "4d16c00f0da4077146ec6f55344ac69a"
  },
  {
    "url": "assets/js/83.ba735648.js",
    "revision": "d51dcf653a4d0ecf31a5201aacbd36c2"
  },
  {
    "url": "assets/js/84.58000df8.js",
    "revision": "e1a1853232ac55cecb38c4e07804b47f"
  },
  {
    "url": "assets/js/85.013f444e.js",
    "revision": "613ba316ee106a1bebb60d4dbb3e297a"
  },
  {
    "url": "assets/js/86.0b26715b.js",
    "revision": "98178332f1d01e0547d3c8aad6a888ed"
  },
  {
    "url": "assets/js/9.b3049ea7.js",
    "revision": "bc03ab573c08b7e89a2440c6d688ed38"
  },
  {
    "url": "assets/js/app.b313a4b9.js",
    "revision": "43a77ae7e1498bfb3bbd0ecb302fb0fd"
  },
  {
    "url": "basic/drag.html",
    "revision": "d5ac2312615eaefbbe9db8114492e2de"
  },
  {
    "url": "basic/easing.html",
    "revision": "f4e684901fdfafd67a4481f2c21c7b5b"
  },
  {
    "url": "basic/follow.html",
    "revision": "0b9bce858e0e04bfaa8a59018e19af21"
  },
  {
    "url": "basic/hover.html",
    "revision": "57135a21f645b36d21f366b342a816b8"
  },
  {
    "url": "basic/index.html",
    "revision": "eb034c28ddaf5580c0e697f255b964b5"
  },
  {
    "url": "basic/random.html",
    "revision": "baa580d4d3b5a0c630e7afbda09353cd"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "01964bcec389d04b3528e1cc150289ff"
  },
  {
    "url": "basic/scroll.html",
    "revision": "a7e78ee47f0250f90e42c57b803ce5e5"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "341989605ba0a48d10a3ed817fc042d7"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "f3fdee1b9330159df1e8ea84824f0902"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "b4ade557ad52a1d00866c69166bc1478"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "a198752a86ce097bc1e4392590dcd9ca"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "168a65fde7810589e4c7e2c2abc86732"
  },
  {
    "url": "canvas/index.html",
    "revision": "57c150a33b2553d4ede8c831f3b91a3a"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "ea95c2f1b8271bcafb7c82a851e7cf19"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "8954fce64a219ac3c0d082c5116eaa21"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "b567ac0c58255f219f55ba6620221236"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "66ae06021a5e4e09227dd2817f2f4685"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "e0237fa43dce4943d1dd8cdc24fa46e9"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "c2598fbf6c15f88510ca7182a88990e8"
  },
  {
    "url": "effects/index.html",
    "revision": "db29d1dbd5f58c1ff42bbb4f963f8da8"
  },
  {
    "url": "effects/mouse.html",
    "revision": "1bdc6fa8c71cb31799b4d12edcf11989"
  },
  {
    "url": "effects/reveal.html",
    "revision": "20c13767b12a94798cfa9fee7411ba2a"
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
    "revision": "338146ca45fafb1f55a0827668804923"
  },
  {
    "url": "info/index.html",
    "revision": "1b1c01706a6a2d860c17c8c42d75c1a3"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "f48ad73236c9d9f244926a568e5fb735"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "9a47d08dfc40ead6428829b03357c6e6"
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
