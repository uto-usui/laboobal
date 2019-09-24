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
    "revision": "7f241f696ae591647206a552d55a6cc1"
  },
  {
    "url": "assets/css/0.styles.410900da.css",
    "revision": "949695db4fa9f83f3dc848784ba6aafd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.7a8388ed.js",
    "revision": "676aaaa33950282702258ccd251bbe73"
  },
  {
    "url": "assets/js/10.bbf20b82.js",
    "revision": "aab5d6a9b7012cc66c3cb41d353f975e"
  },
  {
    "url": "assets/js/11.3fc49f56.js",
    "revision": "3cbceb1b915d62193dbd4baccfb52535"
  },
  {
    "url": "assets/js/12.f69a688c.js",
    "revision": "ed87bf7ee93f898db92de621b60fd3c0"
  },
  {
    "url": "assets/js/13.21912b91.js",
    "revision": "f618573094b09cc4bc1b7f8878c7e854"
  },
  {
    "url": "assets/js/14.d8dab71c.js",
    "revision": "3ae3a8d81bfe39606a8f2ac037ccc2f3"
  },
  {
    "url": "assets/js/15.5a69afe8.js",
    "revision": "609549b33f86070fcc066224c3a0cb0c"
  },
  {
    "url": "assets/js/16.28e9d8ba.js",
    "revision": "65abb32ba5ec860aa1aeb5d92d61b4bd"
  },
  {
    "url": "assets/js/17.d8279203.js",
    "revision": "ec5ddcaa33b0937d5176ce40a7af6b3f"
  },
  {
    "url": "assets/js/18.68c4dbe9.js",
    "revision": "1ec42c09545605165b974954410f432f"
  },
  {
    "url": "assets/js/19.41e0ed20.js",
    "revision": "ac7c2e2a27e552e4b8d2c0b46027c89f"
  },
  {
    "url": "assets/js/2.640484ff.js",
    "revision": "abbb79aada8a2b6885d8dda848a96513"
  },
  {
    "url": "assets/js/20.b588044e.js",
    "revision": "4d224d23884bb2dd97bebcce4e3b822d"
  },
  {
    "url": "assets/js/21.34122ce8.js",
    "revision": "c275d34257c32a2e231238b5bb8232de"
  },
  {
    "url": "assets/js/22.c420c62e.js",
    "revision": "00193b832fd367bdb3fd9bd38f94e9c2"
  },
  {
    "url": "assets/js/23.4a399c48.js",
    "revision": "c24c0e824add4fef596a1ce42945767f"
  },
  {
    "url": "assets/js/24.bf8a4f50.js",
    "revision": "75e32229c7d8a26d3e7b66426c6b1d7c"
  },
  {
    "url": "assets/js/25.a2e0c6d5.js",
    "revision": "cb7cea78a145576fc8b217a5ac8615c8"
  },
  {
    "url": "assets/js/26.9c62790c.js",
    "revision": "158dbef9d117364a3156da808e2c44e8"
  },
  {
    "url": "assets/js/27.306c9717.js",
    "revision": "2e14d77bc82cfbb89b462fe1ae5e6818"
  },
  {
    "url": "assets/js/28.99d5dded.js",
    "revision": "f7ca60ebcc4cf44dba40b6d038eb7bcb"
  },
  {
    "url": "assets/js/29.871c6d91.js",
    "revision": "093a67ae9308ce646e281a2a9e99129c"
  },
  {
    "url": "assets/js/3.efc94a0c.js",
    "revision": "186d494523b2e808131f595dbd58b909"
  },
  {
    "url": "assets/js/30.3a871bda.js",
    "revision": "0f5b3dc0c644c18d5e7467b75769c72d"
  },
  {
    "url": "assets/js/31.c51195f8.js",
    "revision": "2ecbbb9bb5e6e5b7a1c21f79519f8599"
  },
  {
    "url": "assets/js/32.ec6b4baf.js",
    "revision": "cd48c3005fb51a7bb9e22168ab8be5a2"
  },
  {
    "url": "assets/js/33.c8c20348.js",
    "revision": "de02bdac179b1ca396030682e23aaf4c"
  },
  {
    "url": "assets/js/34.d9cba272.js",
    "revision": "59d54c4a0658454deb2082db5f35ec43"
  },
  {
    "url": "assets/js/35.79b846ce.js",
    "revision": "df8847f55da0cfc8e51a4273f37a7a4b"
  },
  {
    "url": "assets/js/36.f8af1134.js",
    "revision": "2e049e9f198f4862042c317266d9752d"
  },
  {
    "url": "assets/js/37.e06bcced.js",
    "revision": "6e7f5515257d427077f07127c29130f1"
  },
  {
    "url": "assets/js/38.e21990e8.js",
    "revision": "d464be47fb39263166f5c460cae81d4d"
  },
  {
    "url": "assets/js/39.94ad65af.js",
    "revision": "3da1fdb1f92fdf5747ec07f5bf0936cf"
  },
  {
    "url": "assets/js/40.8752c578.js",
    "revision": "7a66450d31a5af8604cb5b301bae0e12"
  },
  {
    "url": "assets/js/41.a5488e2f.js",
    "revision": "9b39876d62e371a8160f0ae1a3a8e555"
  },
  {
    "url": "assets/js/42.4d10af92.js",
    "revision": "5b5e971688bc4b053dc93c7d1887d89e"
  },
  {
    "url": "assets/js/43.568ef9d4.js",
    "revision": "40d8cee3f4c4497a1e959aa32ccd16ff"
  },
  {
    "url": "assets/js/44.b7d6c64e.js",
    "revision": "cdc8aa00aaaed4eabcba1a4569525c44"
  },
  {
    "url": "assets/js/45.004578c4.js",
    "revision": "e762747881be8fa263003a7b3d3440e6"
  },
  {
    "url": "assets/js/46.a78d3814.js",
    "revision": "e4dd39c3adcb44dbf50c9ada7634f4cb"
  },
  {
    "url": "assets/js/47.e5d72211.js",
    "revision": "47c5693baee1ac46463b883327f9a7a4"
  },
  {
    "url": "assets/js/48.284bd604.js",
    "revision": "c8acaa4dd1b4f6164e626772bcf9625f"
  },
  {
    "url": "assets/js/49.1a4c9183.js",
    "revision": "60de74e4ac47e20bf4d27c8e15323402"
  },
  {
    "url": "assets/js/5.b6aadea4.js",
    "revision": "b20548640979487906b55c6c0847f1cb"
  },
  {
    "url": "assets/js/50.20f71a71.js",
    "revision": "fcea51eaf3c61b72bb3cc3ac1b07fb7a"
  },
  {
    "url": "assets/js/51.149ea28a.js",
    "revision": "8fafc2009213f95d4e029c4eab8de008"
  },
  {
    "url": "assets/js/52.6fc1ed32.js",
    "revision": "1345fe7a2a1f34ef6ca0434c5ce6360e"
  },
  {
    "url": "assets/js/53.1e8796fd.js",
    "revision": "643241b292ba809c27bdc4e5f95f55da"
  },
  {
    "url": "assets/js/54.d9588f97.js",
    "revision": "2c078e903c3d482ec11a7751776a6a8b"
  },
  {
    "url": "assets/js/55.ea87d6b3.js",
    "revision": "9b043d53f79d2ead8e97fa7be8b0d5ec"
  },
  {
    "url": "assets/js/56.6c48c21e.js",
    "revision": "72d72ec2541dc54b5b3547b2c58ac6b6"
  },
  {
    "url": "assets/js/57.96867532.js",
    "revision": "c678f32faa262de3a1323a18e3c9d2f7"
  },
  {
    "url": "assets/js/58.19cb5c38.js",
    "revision": "0756ef61f0558cb2f9edf47eb13f922d"
  },
  {
    "url": "assets/js/59.2f512e3e.js",
    "revision": "c2ffc9269313886fc5d05a9c59cbc928"
  },
  {
    "url": "assets/js/6.058065f7.js",
    "revision": "9095d12f7d9e1662b06df6f8e98665de"
  },
  {
    "url": "assets/js/60.662f6fa1.js",
    "revision": "3182365956d4ce143b1974a4262bfa42"
  },
  {
    "url": "assets/js/61.74d51b52.js",
    "revision": "e14d85dee93560afc726a26ae0486a7a"
  },
  {
    "url": "assets/js/62.11f3a6ec.js",
    "revision": "3f39b9e91b9724909420c436c0fd1a5e"
  },
  {
    "url": "assets/js/63.7f36fe44.js",
    "revision": "8afb82adcf7f1c980e26c0b7b644c1c6"
  },
  {
    "url": "assets/js/64.9dd889fb.js",
    "revision": "26be4bd9c785bbab2f179d0a92a9bf0e"
  },
  {
    "url": "assets/js/65.50b151b7.js",
    "revision": "82e66672f8469833b3a266dba45cc4d5"
  },
  {
    "url": "assets/js/66.6fd75447.js",
    "revision": "ebf13124ff79e2691a8ecf66be8697d7"
  },
  {
    "url": "assets/js/67.020ba87d.js",
    "revision": "695b73165a843578970560719dbc7593"
  },
  {
    "url": "assets/js/68.45a0f10f.js",
    "revision": "8ca7c9e739092ad84064284175bc70e1"
  },
  {
    "url": "assets/js/69.f9f0b526.js",
    "revision": "cfba5825d05f3883d864cbcababde48b"
  },
  {
    "url": "assets/js/7.7691a11f.js",
    "revision": "527e622be5a49f3407962c63b72626b7"
  },
  {
    "url": "assets/js/70.3b930ade.js",
    "revision": "99aeac5b595d2ae9ecfba7b8e7004dc8"
  },
  {
    "url": "assets/js/71.4359cfa1.js",
    "revision": "662e78c2fc97f99612fb19dd73e10d92"
  },
  {
    "url": "assets/js/72.67817b8d.js",
    "revision": "71e7cdb5af82f0f89942b7ea9476c432"
  },
  {
    "url": "assets/js/73.b1c66c59.js",
    "revision": "05bb33d44d7e63dc09a4f552f3c4cdb4"
  },
  {
    "url": "assets/js/74.1ed63336.js",
    "revision": "46cbe89f798d74d32ace8e262eeed43d"
  },
  {
    "url": "assets/js/75.06b44568.js",
    "revision": "630185b76da5e36c6d52c3b942cd3bfd"
  },
  {
    "url": "assets/js/76.10c2a942.js",
    "revision": "ec69faa4b814a6042fd362fdad0f7b00"
  },
  {
    "url": "assets/js/8.a7f0a225.js",
    "revision": "f0a173a1b480e6fadc8b2a8a770555c9"
  },
  {
    "url": "assets/js/9.c0bc78ee.js",
    "revision": "9c89e63d10fde182ddb22ae7d416bca5"
  },
  {
    "url": "assets/js/app.115fae3e.js",
    "revision": "6e31e2e5bbc56e39ea5c31081b9889f0"
  },
  {
    "url": "basic/drag.html",
    "revision": "e6f3af84f0556fc3a04102211a9757a1"
  },
  {
    "url": "basic/easing.html",
    "revision": "36467d0021392a74f6eeeb23ff4170ca"
  },
  {
    "url": "basic/follow.html",
    "revision": "e52c07b993cceae557b1c1703c492b62"
  },
  {
    "url": "basic/hover.html",
    "revision": "f1721b4338fefe2f0bfacaec42584f53"
  },
  {
    "url": "basic/index.html",
    "revision": "dcff70f8fbdc358677195f5d4ece4137"
  },
  {
    "url": "basic/random.html",
    "revision": "5b7d841b2eb6095bb6e63a7d44efc5e2"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "ca20c01b7170052deade49f1d7eafec5"
  },
  {
    "url": "basic/scroll.html",
    "revision": "732aa87c7c808189f307ae99310ca274"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "903b1926ec08d643713b515198ca1a87"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "7639ab8a05c9cfc061e6920f020f5be8"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "c25c75b57de52b3e43b2ab826939acd8"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "cd85de5d1c42a8b739198d3e0c396245"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "bb6a19c2c22029cd5d8f00dbadc4a769"
  },
  {
    "url": "canvas/index.html",
    "revision": "815f6d9b7f79456f9a3c45cece1218de"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "fe4d5dfd55268b746fe0c6c056d700f4"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "0b00e044b83bc65c85556575f16ffb21"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "ca23c5cd1cfc28e38e0e92e7b703055e"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "b6b69a1123a6d57784017d271dda0269"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "3738d6201a9408d7bc4cc1a99869119a"
  },
  {
    "url": "effects/index.html",
    "revision": "4126ebb69bc84b61393f91e838f2c082"
  },
  {
    "url": "effects/mouse.html",
    "revision": "0efde1b09b4c1c06c3f6df926b4cacf8"
  },
  {
    "url": "effects/reveal.html",
    "revision": "f786edb5e264623b2f2a1d62e862b656"
  },
  {
    "url": "favicon.png",
    "revision": "cf75785b2334d026fc678b53776ac38f"
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
    "revision": "7c0d4663348eedd74ec7d2fdaeb92928"
  },
  {
    "url": "info/index.html",
    "revision": "c3e0c3a888e3454ce216f956b1f32e9a"
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
