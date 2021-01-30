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
    "revision": "e786ad7cda2743db64a8d92869646230"
  },
  {
    "url": "assets/css/0.styles.eaa2c1a3.css",
    "revision": "bdbff2afaa2901243741a76f4e152da1"
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
    "url": "assets/js/10.d3607aac.js",
    "revision": "4de12a13325d8270f3cf765e9f665b8d"
  },
  {
    "url": "assets/js/100.b6024063.js",
    "revision": "345b7528273f0503d125db438e84a121"
  },
  {
    "url": "assets/js/101.20e46127.js",
    "revision": "366ec04db95bd94443027d2d0b1a0f22"
  },
  {
    "url": "assets/js/11.8482c9c7.js",
    "revision": "66b4f3f78d872f2f942eb1af269a1fa8"
  },
  {
    "url": "assets/js/12.a494cb3c.js",
    "revision": "63b2ede02db2f8baf874cf5d0064a15a"
  },
  {
    "url": "assets/js/13.3633a0c2.js",
    "revision": "69f8a8d56304da3d2b8c0b46bcb2db37"
  },
  {
    "url": "assets/js/14.aa78eb06.js",
    "revision": "8b56bf715bf1d6be6a6c09281cbdab4a"
  },
  {
    "url": "assets/js/15.958822d7.js",
    "revision": "c4b803f35e49128c974e63a65cfaab2f"
  },
  {
    "url": "assets/js/16.e6a56cea.js",
    "revision": "e81476a4464467722c59a2e3a4d53cba"
  },
  {
    "url": "assets/js/17.71291790.js",
    "revision": "a46b331d4bf778fb1d73d64a330d5fdf"
  },
  {
    "url": "assets/js/18.faa04563.js",
    "revision": "a414ae4f4bdb54fb7e4e858076093bd6"
  },
  {
    "url": "assets/js/19.b58429f2.js",
    "revision": "e95bd4106121924a92838a16036d4dad"
  },
  {
    "url": "assets/js/2.503e0a97.js",
    "revision": "cecb8c68f5b399ad6b190de12b07a01f"
  },
  {
    "url": "assets/js/20.8d1486bc.js",
    "revision": "4b27539f365dc28bead5e3336f78a23d"
  },
  {
    "url": "assets/js/21.db962178.js",
    "revision": "4e0bc8b647c590ba87970b74b9dcf906"
  },
  {
    "url": "assets/js/22.c21b8e68.js",
    "revision": "1d02f401a2b3073ec02f78325d711930"
  },
  {
    "url": "assets/js/23.d3fdf4b7.js",
    "revision": "b6c526c0fd2c9cd95e475c143bc80d3f"
  },
  {
    "url": "assets/js/24.36533762.js",
    "revision": "c137d1fff474ae0e12850e0622b9817f"
  },
  {
    "url": "assets/js/25.15f48a9a.js",
    "revision": "85c2be113b99872c42d1525e266e6890"
  },
  {
    "url": "assets/js/26.68741e72.js",
    "revision": "804f0ed446ebaec8ec3c0d3b67ff9a3f"
  },
  {
    "url": "assets/js/27.bfcd6770.js",
    "revision": "8974ee5b993672065e444680ecefccf2"
  },
  {
    "url": "assets/js/28.dcbe344c.js",
    "revision": "e1909319a00e74478932c3fb0e22099b"
  },
  {
    "url": "assets/js/29.7d7f15f9.js",
    "revision": "e790b597851b6b1184628dcf27c3acf0"
  },
  {
    "url": "assets/js/3.9936e6de.js",
    "revision": "b3a1b3897c35e61a3c39bd96b594a13c"
  },
  {
    "url": "assets/js/30.5d7926d5.js",
    "revision": "096f6613a93f1e9d68756151367b4479"
  },
  {
    "url": "assets/js/31.a6fde0fa.js",
    "revision": "c1a8a52afe3e1cc5d618d27b2fa458a8"
  },
  {
    "url": "assets/js/32.73132d54.js",
    "revision": "1b6b20417aae1bcb9e6e2e65aaad2cf1"
  },
  {
    "url": "assets/js/33.16842f08.js",
    "revision": "025b235aa515e9a4967a1e1a45b609b5"
  },
  {
    "url": "assets/js/34.a030cf76.js",
    "revision": "745bf4886b307d9d6aa873ca4ab401f0"
  },
  {
    "url": "assets/js/35.4f34b5d7.js",
    "revision": "78fd5eff894bdad8f973f3451e694b9f"
  },
  {
    "url": "assets/js/36.0cc7ed9e.js",
    "revision": "0654383b692d3f1c946253e236ec2ef0"
  },
  {
    "url": "assets/js/37.f474cc27.js",
    "revision": "9dd5c35f1e9621824ea38927cd5a7edb"
  },
  {
    "url": "assets/js/38.41af6f29.js",
    "revision": "7141712bc8b1bb6918362aa3049f63f1"
  },
  {
    "url": "assets/js/39.798ea977.js",
    "revision": "54dc06d28ee5be6e085aedffcd6f94ce"
  },
  {
    "url": "assets/js/4.109e126b.js",
    "revision": "a130d79e61619c02abf2e27b1ef73ed5"
  },
  {
    "url": "assets/js/40.a5453f85.js",
    "revision": "f1c6f3963b7b51ccfb9938157f6b1ffc"
  },
  {
    "url": "assets/js/41.1693a9f7.js",
    "revision": "be59e959a312b092230403872344019d"
  },
  {
    "url": "assets/js/42.a9cde39b.js",
    "revision": "61c4b45061ee240ec7fc852cb7e18909"
  },
  {
    "url": "assets/js/43.65d7fdd1.js",
    "revision": "ce2d99456989264db82a5326c0ee6d9c"
  },
  {
    "url": "assets/js/44.0fc8e52d.js",
    "revision": "4af251c9f02c35feec24457d2b5046c6"
  },
  {
    "url": "assets/js/45.ae371484.js",
    "revision": "50b52ffc672d96a20c96d0d74dde3c79"
  },
  {
    "url": "assets/js/46.cc330d69.js",
    "revision": "7083ab7f734b6f4674f3e130a1ac436c"
  },
  {
    "url": "assets/js/47.696e3540.js",
    "revision": "bf4fc3734b5b5e05790768e7655a7b73"
  },
  {
    "url": "assets/js/48.317a48f7.js",
    "revision": "34a167b9bebdea76720bd5c6f2ba2294"
  },
  {
    "url": "assets/js/49.3ca7fcb7.js",
    "revision": "6153ccdb29001d5abd91d8890f713616"
  },
  {
    "url": "assets/js/50.26e455b2.js",
    "revision": "08856684390beccbbae16785a5e98617"
  },
  {
    "url": "assets/js/51.dd538076.js",
    "revision": "da00cf033071eb161863cc1507ba6ab3"
  },
  {
    "url": "assets/js/52.144526c3.js",
    "revision": "e0a3db775c936c8fe91686e9afdf6cb7"
  },
  {
    "url": "assets/js/53.caa74980.js",
    "revision": "3c129bcead69649ca1fc6f557ebf37c0"
  },
  {
    "url": "assets/js/54.26865589.js",
    "revision": "b78859a28087a103ee672ba881efcca0"
  },
  {
    "url": "assets/js/55.6f2fceb3.js",
    "revision": "96a873ee623b92978fc492c2d658aa71"
  },
  {
    "url": "assets/js/56.505eede6.js",
    "revision": "6f71c3b60a0c81c13c982312df674cec"
  },
  {
    "url": "assets/js/57.99dc1796.js",
    "revision": "b6d45b94547476af8a6e133ff8f68877"
  },
  {
    "url": "assets/js/58.0869c9a5.js",
    "revision": "21888e46a627c817b79aeb91384a12a9"
  },
  {
    "url": "assets/js/59.fa41e4f3.js",
    "revision": "270af81320cb361a589d36c2f8e069aa"
  },
  {
    "url": "assets/js/6.f33f8a6a.js",
    "revision": "c111ad42e719135a27afc6efc9873104"
  },
  {
    "url": "assets/js/60.e8af82e0.js",
    "revision": "eedea2f33939d3128ed1c1d7df7f516a"
  },
  {
    "url": "assets/js/61.7dfb5169.js",
    "revision": "754806004e022b0afe5b6db840bdb3d4"
  },
  {
    "url": "assets/js/62.065ad4fb.js",
    "revision": "3b4c8b7ad1df2cfc4a8953acce731180"
  },
  {
    "url": "assets/js/63.ba05ab5a.js",
    "revision": "4cd621f8ac7f74f7eb7cc5e69647efc5"
  },
  {
    "url": "assets/js/64.76aeca0e.js",
    "revision": "5d6e5d2d8d5e1ed3a678cfd4cc511dbc"
  },
  {
    "url": "assets/js/65.f5298eb0.js",
    "revision": "b94edf2884a6fc845fa65bf4ac38bbd5"
  },
  {
    "url": "assets/js/66.da9f905f.js",
    "revision": "f2e4fc536c66436302ecaed9a27a3243"
  },
  {
    "url": "assets/js/67.840ef6a7.js",
    "revision": "a49400ef93885dd65389087bede02dad"
  },
  {
    "url": "assets/js/68.032e7930.js",
    "revision": "9d0e53f8ff28d262ac1f0b2215ac9fad"
  },
  {
    "url": "assets/js/69.19073c0e.js",
    "revision": "701a53e673383d331e87d7cdee60d3f3"
  },
  {
    "url": "assets/js/7.f65f8a0d.js",
    "revision": "aa132bcee8e76d9345c5a2af4265b3c4"
  },
  {
    "url": "assets/js/70.bc62fa19.js",
    "revision": "ff98160dfd93e93a9f4a27540e2a3e28"
  },
  {
    "url": "assets/js/71.904b5984.js",
    "revision": "0a4c496e98178d250677528bd5cbda8f"
  },
  {
    "url": "assets/js/72.972b38e0.js",
    "revision": "6c37ad08a4f03a96628a97f6236b2cf0"
  },
  {
    "url": "assets/js/73.bd7babbc.js",
    "revision": "ac9447ff6d765e30b700796d850922f9"
  },
  {
    "url": "assets/js/74.7a55cec2.js",
    "revision": "62aacaab07e25cad086e3a66f0311243"
  },
  {
    "url": "assets/js/75.bb12989d.js",
    "revision": "d81e4c9d16755e7bc786b831a9283feb"
  },
  {
    "url": "assets/js/76.768b21d4.js",
    "revision": "0c4ace395037bf879ee67e2eaf77a5ff"
  },
  {
    "url": "assets/js/77.cb44b8ee.js",
    "revision": "c5833c1249a7faacde6511bf43dd7156"
  },
  {
    "url": "assets/js/78.331f5b7b.js",
    "revision": "934d304856d17640ce0ff80ece2358c5"
  },
  {
    "url": "assets/js/79.70b51a17.js",
    "revision": "0bd657a9d3bdc6348f2b8b6b0b06695e"
  },
  {
    "url": "assets/js/8.803bed27.js",
    "revision": "3dc8a9e387251e968ebd0130a88b6f82"
  },
  {
    "url": "assets/js/80.08d2c1ed.js",
    "revision": "f6efa2df0d50d9c19f23f3b828f5a5c6"
  },
  {
    "url": "assets/js/81.c403fa60.js",
    "revision": "eb33a7d2cca854c6ae08a28c6fc53bee"
  },
  {
    "url": "assets/js/82.83e8dcc3.js",
    "revision": "cc0141459e89936a412b649e84dd3641"
  },
  {
    "url": "assets/js/83.cc42c5ac.js",
    "revision": "316e47f24b69cdbf2c557dd7a9287838"
  },
  {
    "url": "assets/js/84.9653f864.js",
    "revision": "9b557dc360952bf98aed5bf57f70a7ab"
  },
  {
    "url": "assets/js/85.1134eda1.js",
    "revision": "021809ecbc91c4c13b48b3e9fa1f9762"
  },
  {
    "url": "assets/js/86.acb18d34.js",
    "revision": "316d1d3f026dfeb2cf183ba20e08bff2"
  },
  {
    "url": "assets/js/87.b6803a0b.js",
    "revision": "58f5a510149ed75035f0b56131bb57a6"
  },
  {
    "url": "assets/js/88.eedc1a65.js",
    "revision": "4c88b0f3b234cb2536c0a9af3d437cf4"
  },
  {
    "url": "assets/js/89.85e885aa.js",
    "revision": "b445905a7c24f7c3fc1691a7e478c364"
  },
  {
    "url": "assets/js/9.da913859.js",
    "revision": "bd803ef567bdb7f46db1b8b409cb8ca7"
  },
  {
    "url": "assets/js/90.74dfdff6.js",
    "revision": "fc579acde8ad634091fe8fb1011388ee"
  },
  {
    "url": "assets/js/91.d290bd27.js",
    "revision": "008822a0eda82005826a17ae1776df5c"
  },
  {
    "url": "assets/js/92.63d0a9b2.js",
    "revision": "b68df82d762713ca97e4dfe8afbb52a2"
  },
  {
    "url": "assets/js/93.55662721.js",
    "revision": "c880996e9e10cb0d28a18147fafc1bc3"
  },
  {
    "url": "assets/js/94.ded93901.js",
    "revision": "8bf14406118f5913de6588deffdafc4d"
  },
  {
    "url": "assets/js/95.7332db71.js",
    "revision": "edab895533e11b89f6f238f910401280"
  },
  {
    "url": "assets/js/96.ea71893d.js",
    "revision": "9d69e9baa4ef78fdf072bafa68cdf3ec"
  },
  {
    "url": "assets/js/97.8db633d4.js",
    "revision": "30a754446eec74173344372d5172a635"
  },
  {
    "url": "assets/js/98.9916e658.js",
    "revision": "aa88ba0d92577847eda09c1a5c024f59"
  },
  {
    "url": "assets/js/99.ff72b3a2.js",
    "revision": "41da06fa3c7a8e1e4924547636835519"
  },
  {
    "url": "assets/js/app.478b3fb1.js",
    "revision": "6e08496b6d44c98cde537ed8f8e1f519"
  },
  {
    "url": "basic/drag.html",
    "revision": "edb2fd527f33e8e3949c3a04136c4613"
  },
  {
    "url": "basic/easing.html",
    "revision": "4b1129dbda11c45577ad31730ce0505e"
  },
  {
    "url": "basic/follow.html",
    "revision": "ca8956d07238669eadb92e4bf0a5a9d1"
  },
  {
    "url": "basic/gsap.html",
    "revision": "a18138873205fa285c41af9c842634d6"
  },
  {
    "url": "basic/hover.html",
    "revision": "ef863c22f2621d676353b028dc3ae62d"
  },
  {
    "url": "basic/index.html",
    "revision": "c95279e738d455f52735581a6603e555"
  },
  {
    "url": "basic/random.html",
    "revision": "ea13e9d8633245167a7912d253e333a4"
  },
  {
    "url": "basic/rotate3d.html",
    "revision": "d2ab51c8448d801486072c2a97d4ef36"
  },
  {
    "url": "basic/scroll.html",
    "revision": "9c8a208a70d049d67fa5bbedcf5ef92e"
  },
  {
    "url": "basic/trigonometry.html",
    "revision": "9f0f98d44df2ffbb6becf664254f71fa"
  },
  {
    "url": "canvas/distortion.html",
    "revision": "a6a5501c9fff905db54f83317deb1537"
  },
  {
    "url": "canvas/distortion2.html",
    "revision": "bd54208e71dad35501fcc1a4e90c6e01"
  },
  {
    "url": "canvas/fake3d.html",
    "revision": "54636bce3e6c05cf4c93307e671dcc0d"
  },
  {
    "url": "canvas/fillText.html",
    "revision": "f9df3610595e58932d9d17e020f69c30"
  },
  {
    "url": "canvas/glitchImage.html",
    "revision": "427f3937e86222bfb830227bab0f9f5f"
  },
  {
    "url": "canvas/index.html",
    "revision": "a3feed1dc2530201501103a7fc4daf42"
  },
  {
    "url": "canvas/P5/index.html",
    "revision": "9d8bf376b99aa9dd6de1f82efdbb8585"
  },
  {
    "url": "canvas/shiftImage.html",
    "revision": "235cf1c5a50122273c0df80c32670674"
  },
  {
    "url": "canvas/three/index.html",
    "revision": "8834163b14fe862427ed4da76b65e148"
  },
  {
    "url": "canvas/three/scale.html",
    "revision": "3656a1c098034c3daf8ba02e5972fd96"
  },
  {
    "url": "canvas/three/typo.html",
    "revision": "68de2cfcb791d3adbbb765e764ec086f"
  },
  {
    "url": "canvas/three/video.html",
    "revision": "db2e54da8e6ec72b400e7c13e97e8011"
  },
  {
    "url": "effects/index.html",
    "revision": "15f86398c48e2fdbb3bd766103ef56da"
  },
  {
    "url": "effects/mouse.html",
    "revision": "78f11af19a6311613cacffef35a0ae7e"
  },
  {
    "url": "effects/reveal.html",
    "revision": "8495d38f6397c17751470d86bf6e5969"
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
    "revision": "f8b638f20bbc83a77df42cba0ea0730c"
  },
  {
    "url": "info/index.html",
    "revision": "4bb4a2f24df8933448ad9933e6a09053"
  },
  {
    "url": "logo.svg",
    "revision": "90793fdb3767e1fb260b394ebe4d92cb"
  },
  {
    "url": "UI/index.html",
    "revision": "497800a542e78a771ae0c848eacad313"
  },
  {
    "url": "UI/virtualScroll.html",
    "revision": "07faf62812b4969cd196303d639ee4d7"
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
