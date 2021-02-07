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
    "revision": "1d4003ae3a237acaf5426408415cdbad"
  },
  {
    "url": "assets/css/0.styles.45a1cc08.css",
    "revision": "ed1786c6800f1d1c086ae83e8cca65e3"
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
    "url": "assets/js/10.09e45792.js",
    "revision": "31df95e5154b94c709491e611e7d00be"
  },
  {
    "url": "assets/js/100.59eac556.js",
    "revision": "0303f87cb04450c0f92454b932d8500f"
  },
  {
    "url": "assets/js/101.fbf382d5.js",
    "revision": "f87b5ff64093e19fd9af3313aaa49bc9"
  },
  {
    "url": "assets/js/102.82986f97.js",
    "revision": "d1b2696cc7315ea89928c6df619618b9"
  },
  {
    "url": "assets/js/11.fce9dcfa.js",
    "revision": "c78adb35b300b0c098ef2a51bd38b3c0"
  },
  {
    "url": "assets/js/12.16a8809a.js",
    "revision": "872f67d112a14d6311a5edc687e242b9"
  },
  {
    "url": "assets/js/13.d32067d2.js",
    "revision": "633330fbea5e2749551b14cbfd7b542f"
  },
  {
    "url": "assets/js/14.a77faa5f.js",
    "revision": "b15f93aa5947f397ebfdfdd68b05103d"
  },
  {
    "url": "assets/js/15.5c1dfef0.js",
    "revision": "3f1acb5732ea9275c44edfb6d1c8273d"
  },
  {
    "url": "assets/js/16.57c206cd.js",
    "revision": "c46add044ef25e96419fa4ef80372c9a"
  },
  {
    "url": "assets/js/17.5965107d.js",
    "revision": "d064ace874b232b9dace77d4d3a0b9cb"
  },
  {
    "url": "assets/js/18.fc3f36ef.js",
    "revision": "cb9a7b46c5437685307a88b13c8cf860"
  },
  {
    "url": "assets/js/19.5fa49410.js",
    "revision": "f1e4200b1a0dcb8d6f23a8fd7a56dec7"
  },
  {
    "url": "assets/js/2.b9b9e76b.js",
    "revision": "5d00d5a587aae842baa4648bffd9ae56"
  },
  {
    "url": "assets/js/20.896c5ef9.js",
    "revision": "4f999832fe28c2ae7608bcbe5e15e38e"
  },
  {
    "url": "assets/js/21.31f9be3e.js",
    "revision": "f10f001aacbc184373e1d9cc4b2684e3"
  },
  {
    "url": "assets/js/22.f76d2fdc.js",
    "revision": "154d44b43fb8f8c32c6eb10bd5f880c5"
  },
  {
    "url": "assets/js/23.da50feff.js",
    "revision": "6ddec458d76fc36ff3aeba632d76cb30"
  },
  {
    "url": "assets/js/24.a9127fa7.js",
    "revision": "a14314edf3b3376ea58b7afb331cfa70"
  },
  {
    "url": "assets/js/25.eebfd469.js",
    "revision": "74355de8977f7ccc28da716a3412b91b"
  },
  {
    "url": "assets/js/26.b9ccf030.js",
    "revision": "8008278f3dedf8cddb266a42063fbfaa"
  },
  {
    "url": "assets/js/27.ffd46cec.js",
    "revision": "a09cb6bdcebffd49927af4942dd6060c"
  },
  {
    "url": "assets/js/28.e5fc88b3.js",
    "revision": "a63007739740e9579cac76d9a92b7f3a"
  },
  {
    "url": "assets/js/29.794aacee.js",
    "revision": "54e6e856f81f50f627fda2134bdd3804"
  },
  {
    "url": "assets/js/3.0ffa468c.js",
    "revision": "c202d7af49caf9126410dc493806232e"
  },
  {
    "url": "assets/js/30.ce30b25e.js",
    "revision": "a98a37a7232ad3cd147109bab6338c30"
  },
  {
    "url": "assets/js/31.69be381a.js",
    "revision": "659895a4b81f3d1edf9f16ebd3b38994"
  },
  {
    "url": "assets/js/32.a621958e.js",
    "revision": "a8b20f96bbc5721523f8213c047c4b63"
  },
  {
    "url": "assets/js/33.9f0c3215.js",
    "revision": "c09b8da96590d59260aa427e5d8eea52"
  },
  {
    "url": "assets/js/34.e6e1bcad.js",
    "revision": "8ad62fcb6b0e3767551cc77c9821657f"
  },
  {
    "url": "assets/js/35.0e362097.js",
    "revision": "31167975f28b48fa652e0d0fa2715202"
  },
  {
    "url": "assets/js/36.30d61206.js",
    "revision": "379aa39f34253661b3c0ff5e34184c59"
  },
  {
    "url": "assets/js/37.6c4eb20e.js",
    "revision": "3a2871b5ae4e370a7a0a4f239b2ff5aa"
  },
  {
    "url": "assets/js/38.0ddaad97.js",
    "revision": "3de940423bb0890ea45e33bf294e476d"
  },
  {
    "url": "assets/js/39.6317ac76.js",
    "revision": "cba13e0b27003fe8230468e8ed03deb7"
  },
  {
    "url": "assets/js/4.2aa1000c.js",
    "revision": "62116f7cfbbc6887accd92c5f179fc0f"
  },
  {
    "url": "assets/js/40.2dacc560.js",
    "revision": "b85c0ad891eabba582c75c3edd7f1da6"
  },
  {
    "url": "assets/js/41.6495b223.js",
    "revision": "99e8f00653be9d16c4836afad2ad95a0"
  },
  {
    "url": "assets/js/42.6f3e5c9b.js",
    "revision": "a1fc624ea6b4310c383805f60a8b48e9"
  },
  {
    "url": "assets/js/43.578facf5.js",
    "revision": "1aa2aecda27577be6d99fc5e98f6c884"
  },
  {
    "url": "assets/js/44.3bd0ba46.js",
    "revision": "d76c5568a322b239a9f0238aef3e667e"
  },
  {
    "url": "assets/js/45.d7674f37.js",
    "revision": "98525ac06eeca092867031874c9e76b5"
  },
  {
    "url": "assets/js/46.ae3361c7.js",
    "revision": "5d1a731be91ea16d6570ddc0cbd08c62"
  },
  {
    "url": "assets/js/47.9b2c9e62.js",
    "revision": "95d92681698b8d765698c05399f6716d"
  },
  {
    "url": "assets/js/48.d546f16c.js",
    "revision": "d4b73ba69bfe0bb0f66817fcfa3e9d9b"
  },
  {
    "url": "assets/js/49.cb35e9ca.js",
    "revision": "d26b01c7eec26cfd61c6fa9378ec62fd"
  },
  {
    "url": "assets/js/50.ddd40a54.js",
    "revision": "50e397e76f460af666a3cac688107021"
  },
  {
    "url": "assets/js/51.c9a1b160.js",
    "revision": "c52f752aa91cba94ea70dc3fc435322e"
  },
  {
    "url": "assets/js/52.545390b2.js",
    "revision": "2034b91d4aa037cf251453a262972a13"
  },
  {
    "url": "assets/js/53.606608ac.js",
    "revision": "9184931b96e40e9641aa8cc579cbd53c"
  },
  {
    "url": "assets/js/54.cc81a030.js",
    "revision": "9ba363e3e9bfb7b46089001fab2d5604"
  },
  {
    "url": "assets/js/55.ec57965d.js",
    "revision": "b5e359a53a0636338361ba6246a0dccc"
  },
  {
    "url": "assets/js/56.030bcbf9.js",
    "revision": "eb6048eb487a63407e385d27b445e6e2"
  },
  {
    "url": "assets/js/57.8a889f16.js",
    "revision": "9156b8c464cfc6ec6019e8e9c4d798a1"
  },
  {
    "url": "assets/js/58.48ca4bb2.js",
    "revision": "d32a2eeb75c5fbe4c42e45a492db4de1"
  },
  {
    "url": "assets/js/59.d7b26032.js",
    "revision": "56d5d2ec8ee054ec776b4e8f962ac200"
  },
  {
    "url": "assets/js/6.0f2e084f.js",
    "revision": "4098c71b8f05987acd09bfff5a2edbae"
  },
  {
    "url": "assets/js/60.65159793.js",
    "revision": "16e8f6fa1d0a78a90f1541e9dfd45b0a"
  },
  {
    "url": "assets/js/61.376ca942.js",
    "revision": "1321b509440afa4d2ec3314426937c95"
  },
  {
    "url": "assets/js/62.32a1f2ed.js",
    "revision": "e86791dfeb8e5fed6fecf3f00b55462a"
  },
  {
    "url": "assets/js/63.0a8975db.js",
    "revision": "736780135454ed31bcf5bffdd2b189c1"
  },
  {
    "url": "assets/js/64.3146480a.js",
    "revision": "d350c4f78f94f03571b1d647a3d17852"
  },
  {
    "url": "assets/js/65.7de14eeb.js",
    "revision": "12f5519811715609d522c1addd2158a6"
  },
  {
    "url": "assets/js/66.392d1fef.js",
    "revision": "be9436a0d0f1f15bdac4e8525b20955d"
  },
  {
    "url": "assets/js/67.722aaba1.js",
    "revision": "53f0557938abe3e3e5869620ec72edb5"
  },
  {
    "url": "assets/js/68.500ed100.js",
    "revision": "ae6ed853294ffc8943fcbcb896a4177f"
  },
  {
    "url": "assets/js/69.1bc0783e.js",
    "revision": "074f545ba6df639f18e31c2ff287c073"
  },
  {
    "url": "assets/js/7.81c062fd.js",
    "revision": "a5881ab7ba69fb670213c67e0cfaa0ef"
  },
  {
    "url": "assets/js/70.6202a077.js",
    "revision": "ab02cb65f33595a7c21eb992d809e2ef"
  },
  {
    "url": "assets/js/71.683d1a57.js",
    "revision": "e5761d96d46271038f2bcfe7fb96f1c1"
  },
  {
    "url": "assets/js/72.977dae28.js",
    "revision": "66eeeb618900bc50ce4b335ad637a2b1"
  },
  {
    "url": "assets/js/73.e4489e57.js",
    "revision": "8d87ee38294c6d55a0ac7dd269b339e4"
  },
  {
    "url": "assets/js/74.2c752335.js",
    "revision": "7c479b9d20047014b8c850224a28cbdc"
  },
  {
    "url": "assets/js/75.a7d94e51.js",
    "revision": "62a0e2687e281287c128b91de5ac4a0e"
  },
  {
    "url": "assets/js/76.fcde1f9b.js",
    "revision": "9bad1af100021d85442486202474061b"
  },
  {
    "url": "assets/js/77.227ca056.js",
    "revision": "6497766176168fa3a74252e70c38f67f"
  },
  {
    "url": "assets/js/78.b5779f5a.js",
    "revision": "cf3a549dddf3faf925f9dbf71497fe11"
  },
  {
    "url": "assets/js/79.61431914.js",
    "revision": "c0a725e6d61f25b564d7b92db595e3d6"
  },
  {
    "url": "assets/js/8.88821d9f.js",
    "revision": "b80a1c67c48fdbc88d6fced1c15e6a29"
  },
  {
    "url": "assets/js/80.efa4aa8c.js",
    "revision": "5e285f44740699bef27dfbe2d632debc"
  },
  {
    "url": "assets/js/81.f9b18998.js",
    "revision": "cb05caffcbb164dd3a3cd1548a8c1e8b"
  },
  {
    "url": "assets/js/82.4309548b.js",
    "revision": "d932e70dc8dfcee30db20fe6b11f6f68"
  },
  {
    "url": "assets/js/83.2e3e59ff.js",
    "revision": "e12d976b767d3acbc2ab3c8610008ce6"
  },
  {
    "url": "assets/js/84.c4b47bab.js",
    "revision": "8c3113a9679c01ce369d31295ddfe3ef"
  },
  {
    "url": "assets/js/85.15349a2d.js",
    "revision": "2a84afd38ebdfff6f2a293326f8087cc"
  },
  {
    "url": "assets/js/86.d6a58fe8.js",
    "revision": "6a2ef4ba0abb6bb151582968c9e8a2fa"
  },
  {
    "url": "assets/js/87.30a6fd38.js",
    "revision": "f44075ae172f8e0a854882f40aff5e49"
  },
  {
    "url": "assets/js/88.ae0d998b.js",
    "revision": "99981ca24c92ccea5830dc3627482cf3"
  },
  {
    "url": "assets/js/89.4a808984.js",
    "revision": "4fd58ee9dc6771a6e9dbc1eb41f36e18"
  },
  {
    "url": "assets/js/9.fc0e619b.js",
    "revision": "08966f608204f1c9766dafec8a79ac55"
  },
  {
    "url": "assets/js/90.efdf0e8e.js",
    "revision": "5671f3fcb0de20a627cee06d7843b37f"
  },
  {
    "url": "assets/js/91.ae30e563.js",
    "revision": "96223c44c173d19b1a8bfbc86d9e1198"
  },
  {
    "url": "assets/js/92.c73444a1.js",
    "revision": "b906f7dc267d3f83673108edf75e4cc5"
  },
  {
    "url": "assets/js/93.a49299dc.js",
    "revision": "b05c3ce51d3110f61aecd795fbddf10f"
  },
  {
    "url": "assets/js/94.0816900a.js",
    "revision": "92f71da3c9f2f82635500e51795c066b"
  },
  {
    "url": "assets/js/95.f2f2ab9b.js",
    "revision": "dd037e705c35dc45fdb0bc6bdf43be99"
  },
  {
    "url": "assets/js/96.657485a6.js",
    "revision": "f475b0f707024c20b4e36065944fa8f3"
  },
  {
    "url": "assets/js/97.ef835c27.js",
    "revision": "e96e1b1443075a97b43013d8448673e0"
  },
  {
    "url": "assets/js/98.b9a2fb9a.js",
    "revision": "1dfc9d66b6092457e7a401003fcd2d19"
  },
  {
    "url": "assets/js/99.d0a35cd8.js",
    "revision": "a18201e2db1e1f3083d15531198e28fe"
  },
  {
    "url": "assets/js/app.d6461e7d.js",
    "revision": "54709ab17c522aa32a4ff2dade4b3142"
  },
  {
    "url": "basic/drag.html",
    "revision": "04e60f1ee9dc70e93cc3893a83a359a3"
  },
  {
    "url": "basic/easing.html",
    "revision": "afcdd7443e32a4b5504d89fab7023975"
  },
  {
    "url": "basic/follow.html",
    "revision": "b2d89a4a08f4bd53e919aac8f55eb420"
  },
  {
    "url": "basic/gsap.html",
    "revision": "08de21fdb97885579743aafd93f0be2d"
  },
  {
    "url": "basic/hover.html",
    "revision": "d3ab4731f232b6fdab1a45f2d3f62466"
  },
  {
    "url": "basic/index.html",
    "revision": "43b25e5b0047aaa089c4e3aa3caeb033"
  },
  {
    "url": "basic/random.html",
    "revision": "4fb1a956fc23ec63d056736c1b255e71"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "63cc3f7f2243b363ddefd27b6da7140c"
  },
  {
    "url": "basic/scroll.html",
    "revision": "f4ed36c588465f257df9e454681388a7"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "fb67184b66acdf9afd283728bb9e59fc"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "0db4f077e641fd3e4ce994db5f5a6026"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "95a73b579ddc7ad1c9af29bd363c7485"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "4356fe0f61b763dde18a695d3e80b752"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "25b4437fe09aaf002c47e992ea53b61c"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "11e1ac829f15f1ba3c07a5882923977d"
  },
  {
    "url": "canvas/index.html",
    "revision": "71aefcb5b7cdd411ddc1b7c7ec1c8884"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "9d8acd179c0b973baf7c5da4e5afa209"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "198626e813e7877f8d88fa5184c6f90e"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "5b893426c9a34a70db9e14d0ea50ee1d"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "4dad555ed44fdfa5f66f145bb65f4f5a"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "893adf8a5e8ebf4f47820c718feb035e"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "ae8929bc6511fa6c2d4b049fff3f922a"
  },
  {
    "url": "effects/index.html",
    "revision": "7f4f11fdef6b285d9f710d9424ef139e"
  },
  {
    "url": "effects/mouse.html",
    "revision": "2547733c6982096627d9d7b7d9f22819"
  },
  {
    "url": "effects/reveal.html",
    "revision": "3be6be0e82178bef9177f2e300b4ebba"
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
    "revision": "65060842598d045915184013d2ea0972"
  },
  {
    "url": "info/index.html",
    "revision": "416f110f9d224bf2857d028252941607"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "31a2d0694ffe23c013cd577b92314eb3"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "dfe7a2d82b5b42095a80525b0e845ebb"
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
