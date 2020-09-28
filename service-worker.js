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
    "revision": "a3de772312f8df047d26a0cc11c6f9d4"
  },
  {
    "url": "assets/css/0.styles.ffde49e2.css",
    "revision": "6bfff67e93de425e1d8d8203b643ae1a"
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
    "url": "assets/js/10.135276c8.js",
    "revision": "04b42e4bf30a8c37eea7168fb91a551e"
  },
  {
    "url": "assets/js/11.17d97fda.js",
    "revision": "454b5133d937bcc51493784c0a8bd242"
  },
  {
    "url": "assets/js/12.25322baa.js",
    "revision": "233755b2b59b029a2dbf309c7ece8b68"
  },
  {
    "url": "assets/js/13.7d0c47bf.js",
    "revision": "0bfff7ef9fcfb392b76cda452bfe08e2"
  },
  {
    "url": "assets/js/14.5fabec49.js",
    "revision": "1fd85344fb8295d6f6a3dafd877e2ff2"
  },
  {
    "url": "assets/js/15.9a268869.js",
    "revision": "0d39fc8b936e93c1ddf03668236d526d"
  },
  {
    "url": "assets/js/16.0b12b889.js",
    "revision": "e2cca7e7c7c7d9d94f269c50b757ceb2"
  },
  {
    "url": "assets/js/17.e0d20670.js",
    "revision": "b0ac8041ecc3b4f4fec7061cbbf35b36"
  },
  {
    "url": "assets/js/18.fb74ef72.js",
    "revision": "c5c53797bcf30dea8e822316fa4b2884"
  },
  {
    "url": "assets/js/19.a2e0e316.js",
    "revision": "0c2c6fe12e3da23b364b464589b0a67b"
  },
  {
    "url": "assets/js/2.72f01270.js",
    "revision": "2d98de5053eaa45d3f94a3c366637049"
  },
  {
    "url": "assets/js/20.d7f2c79c.js",
    "revision": "7a54faa061577295f3ebf0c032f5f62e"
  },
  {
    "url": "assets/js/21.e4974549.js",
    "revision": "03438b883c3278937d09fcdc074d0ad1"
  },
  {
    "url": "assets/js/22.8c69b82a.js",
    "revision": "416daa17eb54b2b078b083a3c9f2c45a"
  },
  {
    "url": "assets/js/23.93bf7d14.js",
    "revision": "9535beb43ecad2c13fb6ad1078a23a11"
  },
  {
    "url": "assets/js/24.ef12b5ab.js",
    "revision": "16fa1418e0f8b11c4e575d3dba2e66ef"
  },
  {
    "url": "assets/js/25.9c67a260.js",
    "revision": "2c59c8ffb4485a60bea625ee64c91ac7"
  },
  {
    "url": "assets/js/26.260fac94.js",
    "revision": "f1ec33a84246693128600c32f57b2dce"
  },
  {
    "url": "assets/js/27.bca3e1f5.js",
    "revision": "1d95d0023f72f3285c492c30c0fa2223"
  },
  {
    "url": "assets/js/28.7f4f11c8.js",
    "revision": "40abf0f48014e38445c0e82a765e6ca7"
  },
  {
    "url": "assets/js/29.aa403da7.js",
    "revision": "6d14ca6a076f3585f10bb4ee5e8b1e42"
  },
  {
    "url": "assets/js/3.8611706c.js",
    "revision": "1cd27839b8c9ace42a89d2ec4b97203e"
  },
  {
    "url": "assets/js/30.b77b4ec2.js",
    "revision": "8ea965ae1a33773b346503cb84566368"
  },
  {
    "url": "assets/js/31.92033ab5.js",
    "revision": "f00c7e4358e503ec09b9dbe2e0a74a51"
  },
  {
    "url": "assets/js/32.f6bcf44b.js",
    "revision": "dc487541855d30cbf178eca53b3cdbd6"
  },
  {
    "url": "assets/js/33.7ba9fb47.js",
    "revision": "c945aa561249ba417f68b41a94820701"
  },
  {
    "url": "assets/js/34.5724b4d5.js",
    "revision": "8ce344ca2f6c73957095ce4a297a25a8"
  },
  {
    "url": "assets/js/35.e53b3c75.js",
    "revision": "2e61b79cdccd1f68688d5c1189e157da"
  },
  {
    "url": "assets/js/36.0cb418aa.js",
    "revision": "851826d9866a720f0aa2dd6007303fc5"
  },
  {
    "url": "assets/js/37.db69ae27.js",
    "revision": "652f5c90cf663cff43ec1fc69d155d9a"
  },
  {
    "url": "assets/js/38.9149a980.js",
    "revision": "69e70aafb11fc6fe3d95261b15a1d96e"
  },
  {
    "url": "assets/js/39.dfa5c83f.js",
    "revision": "ea772efa49bacd178dd7927dfce2bde8"
  },
  {
    "url": "assets/js/4.f89c69ef.js",
    "revision": "6266a8e0f56ceb7865cd9bd0acd6166a"
  },
  {
    "url": "assets/js/40.7d4601d7.js",
    "revision": "31c37c667fc649f112aa6dd3354d7a0c"
  },
  {
    "url": "assets/js/41.955dc16e.js",
    "revision": "2d0ff01000ed3ed86a0105e000e87226"
  },
  {
    "url": "assets/js/42.88ee5fe8.js",
    "revision": "c4dd2f950822c758664168f6f660e2d6"
  },
  {
    "url": "assets/js/43.b3f22989.js",
    "revision": "1a5c53e3ee80e26b586860cf19626e48"
  },
  {
    "url": "assets/js/44.4717deed.js",
    "revision": "0eb445c845d757c9344568791cc42436"
  },
  {
    "url": "assets/js/45.c6a8af01.js",
    "revision": "598daadadfed1ec2dc64d034c9371968"
  },
  {
    "url": "assets/js/46.820f52e4.js",
    "revision": "cb4152b75932150484e35ec9bbe08310"
  },
  {
    "url": "assets/js/47.61b75fdd.js",
    "revision": "147db5655fd2f752fe796cfef2be3090"
  },
  {
    "url": "assets/js/48.1ea58888.js",
    "revision": "cd9733a9192d81c9c2eebdbb3be81cac"
  },
  {
    "url": "assets/js/49.e0bb46a7.js",
    "revision": "fcad49877c582e5e583869717d7a6074"
  },
  {
    "url": "assets/js/50.1d74e3ab.js",
    "revision": "7fed1bb1c08620c0a7b3ca092e531c56"
  },
  {
    "url": "assets/js/51.6d84707d.js",
    "revision": "a2b140b4d7b68a38da09b80fe203f897"
  },
  {
    "url": "assets/js/52.511a6e44.js",
    "revision": "e7538502b8a86badf5598d4b5c9fffb7"
  },
  {
    "url": "assets/js/53.3b8ab004.js",
    "revision": "57a5ee8548cc54d1acc18b582958e5d7"
  },
  {
    "url": "assets/js/54.57c4f293.js",
    "revision": "e1b9ae7364bfafc5d2cd5b0687211530"
  },
  {
    "url": "assets/js/55.ea2bd083.js",
    "revision": "518698c81635379223302b4cf1ba9f0d"
  },
  {
    "url": "assets/js/56.11735d34.js",
    "revision": "7dbbfddb4453394d01de94af79c34072"
  },
  {
    "url": "assets/js/57.5fb3c1e2.js",
    "revision": "5d94d43dfcef182c0b8fa540b9970420"
  },
  {
    "url": "assets/js/58.2826a6d6.js",
    "revision": "27dfa08b8dddbe782109fc62ac38e6cb"
  },
  {
    "url": "assets/js/59.10fcec8f.js",
    "revision": "eb157f6ce6dcc708c98bb159b2436b88"
  },
  {
    "url": "assets/js/6.66c5170b.js",
    "revision": "c3db66b7fb37af079ec080c2cdc53b44"
  },
  {
    "url": "assets/js/60.30992d13.js",
    "revision": "20857a3de60b1c3e39d3548be88c332a"
  },
  {
    "url": "assets/js/61.2c9fe2d7.js",
    "revision": "22838b2ce1f7618df488b589b32e2fd5"
  },
  {
    "url": "assets/js/62.611911f4.js",
    "revision": "ffbf0f5aa41bcf27fec165cd521707bd"
  },
  {
    "url": "assets/js/63.2fec497c.js",
    "revision": "1812b4dd472e5b0a542c24ad72b3904a"
  },
  {
    "url": "assets/js/64.0ec95d81.js",
    "revision": "351e777ad7dd258b9eb60c7c38e84161"
  },
  {
    "url": "assets/js/65.85c3d317.js",
    "revision": "5dcd4e51a6d0ca22266ffcc13ddb58a5"
  },
  {
    "url": "assets/js/66.f44f5264.js",
    "revision": "d259ffde332e502e96114317f5275497"
  },
  {
    "url": "assets/js/67.965ee954.js",
    "revision": "53f1518e61dd4b5b2d01a426e7cc3f0d"
  },
  {
    "url": "assets/js/68.ff9d1ca3.js",
    "revision": "7c76a3e25dda672dcf071708aa3a3d73"
  },
  {
    "url": "assets/js/69.0bca0baf.js",
    "revision": "b539b0a64b63471ecf3dd59cce490763"
  },
  {
    "url": "assets/js/7.6ae871f0.js",
    "revision": "bf1535044db57eff3abc3e1b869e7a84"
  },
  {
    "url": "assets/js/70.df74101f.js",
    "revision": "ac50747a5253ab193ad368644cc207a4"
  },
  {
    "url": "assets/js/71.8f34c6bd.js",
    "revision": "c8d3222fc7581dc18ab5567b7108e61a"
  },
  {
    "url": "assets/js/72.ed965743.js",
    "revision": "2c72f7f1d135662180cc145d55208183"
  },
  {
    "url": "assets/js/73.f4114e8c.js",
    "revision": "c3e1205bde05ca0f17f3339a33758405"
  },
  {
    "url": "assets/js/74.5681fa7f.js",
    "revision": "7606dd93dbac7f2a2ee702d04bbf0f1f"
  },
  {
    "url": "assets/js/75.3788b1d7.js",
    "revision": "92498e02645bedabfd3e4986732f528b"
  },
  {
    "url": "assets/js/76.99e02765.js",
    "revision": "02d8330d0728dc6fcedb25c9b52a47ff"
  },
  {
    "url": "assets/js/77.fd50e9bd.js",
    "revision": "db3570b9d010add2c1922959944d99ab"
  },
  {
    "url": "assets/js/78.387f5103.js",
    "revision": "22efa90501b6e31e76bcefc92a5fedb0"
  },
  {
    "url": "assets/js/79.c1452949.js",
    "revision": "1689483d465ffc463941d45781e5f658"
  },
  {
    "url": "assets/js/8.04def914.js",
    "revision": "f2f7981eba257db0a5dba19ed8477fc5"
  },
  {
    "url": "assets/js/80.ff9e51eb.js",
    "revision": "2b5654346c0bb9f8fd97b64a8ec6f9ae"
  },
  {
    "url": "assets/js/81.adb6e2f5.js",
    "revision": "a3db9756c4df606273fe8c8e7e3f3c18"
  },
  {
    "url": "assets/js/82.ed0b7ecd.js",
    "revision": "624ef69e27a7caeb4a9cb8b55d4319fd"
  },
  {
    "url": "assets/js/83.33bc9058.js",
    "revision": "3843ea691d7b978ed52a37b489239f75"
  },
  {
    "url": "assets/js/84.70f95940.js",
    "revision": "012bb13808c8d6a77f71662579aea2e6"
  },
  {
    "url": "assets/js/85.96b5d0b4.js",
    "revision": "bee6b8ed5c0e6e725597018fc2d0119f"
  },
  {
    "url": "assets/js/86.22544b94.js",
    "revision": "9e300c4a2207505d3ef37516f1d571ea"
  },
  {
    "url": "assets/js/87.4840ab11.js",
    "revision": "2287772c8c77989d28a69cdcac0bd0dc"
  },
  {
    "url": "assets/js/88.347ca572.js",
    "revision": "1f86bda35c63ad147d652be450ef8289"
  },
  {
    "url": "assets/js/89.157c01f8.js",
    "revision": "738c6041f591d5e2a6ad0ec1999b987a"
  },
  {
    "url": "assets/js/9.6bce4954.js",
    "revision": "969b66c35b9b5bedece8ee3e4d81a080"
  },
  {
    "url": "assets/js/90.041db881.js",
    "revision": "31006d82ff0ed302655d9c1d7395b54e"
  },
  {
    "url": "assets/js/91.79abcf95.js",
    "revision": "c12bebc8f095f6a894c346796bb88afc"
  },
  {
    "url": "assets/js/92.faeff1d8.js",
    "revision": "d7ee862a1b4c32a679bd47d0e5635cd4"
  },
  {
    "url": "assets/js/93.73d21b69.js",
    "revision": "cbbd833b7fadba8c4da1d23d5ebd2cc6"
  },
  {
    "url": "assets/js/94.856b3851.js",
    "revision": "ad5b1c8165b01b9af0873be502e694a6"
  },
  {
    "url": "assets/js/95.e3071f20.js",
    "revision": "8294f9a5af67aefb2a0e7cd5ffedf90d"
  },
  {
    "url": "assets/js/96.215ff7d1.js",
    "revision": "ff4ef9286afa6762222522a1163c2885"
  },
  {
    "url": "assets/js/app.351d7079.js",
    "revision": "3caa0a899f280e02701e94fdf430d8e1"
  },
  {
    "url": "basic/drag.html",
    "revision": "b4abe15fbe6dc489ea70f21245c60fa2"
  },
  {
    "url": "basic/easing.html",
    "revision": "191ee4a2dcf6467548b07bdc625977ac"
  },
  {
    "url": "basic/follow.html",
    "revision": "67bf2c57d60fbbcd00fb5fd6f7e238c7"
  },
  {
    "url": "basic/gsap.html",
    "revision": "ee58b658a533cc315e40fc7b0ca0f0f8"
  },
  {
    "url": "basic/hover.html",
    "revision": "acbe23e51012db310d79659bba1d9b77"
  },
  {
    "url": "basic/index.html",
    "revision": "547874261722494076d32a40f17ed877"
  },
  {
    "url": "basic/random.html",
    "revision": "73d784ec3eeb50f6fc6157b1394063bc"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "688b39910cf6b7e82ba49eebe938a5a2"
  },
  {
    "url": "basic/scroll.html",
    "revision": "1a0a046a1238cdea9a79b53df017b5b7"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "f38a39093ce2f235c165d73394853f8b"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "5dec61ededc4423799aadfa76f529d71"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "8f8716a306aac3c408d63ddd84392a98"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "fe5fb138426f1d26543dcce71cf974d9"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "ead93cbc966cd02488afd6c1e2f6eb7e"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "e39d788276ecf74694f5aeeaff103b8a"
  },
  {
    "url": "canvas/index.html",
    "revision": "e2a53fbb27d2ec8d32b3e81feaaa54af"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "511d3990779b08fb0ce548936cd0663f"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "a5de256cbdacd6d1bee155884d089537"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "a7c05cb7ffb4bb0b9dc03d26e2befb75"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "6bcc4300cf6fe429b36f00d835a8dc88"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "5de166d9f994e39477d7a40135a0ef72"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "02b947bd32ce46e35d30cb78da804d49"
  },
  {
    "url": "effects/index.html",
    "revision": "7985d3f63fcd6023b152f425b03ebd4a"
  },
  {
    "url": "effects/mouse.html",
    "revision": "ad18339ad7902045a236d74d336a639e"
  },
  {
    "url": "effects/reveal.html",
    "revision": "0466ac3b8319ed6422e4c73d11f48064"
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
    "revision": "eadbfc33b28c633648ba38f27b8df000"
  },
  {
    "url": "info/index.html",
    "revision": "e22fd14a8e14eba19aca2e7adb5a8715"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "adc7efdeeef9e9036b1668b414c2cd2c"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "59450388bea8ed4c80e2c39686ebb544"
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
