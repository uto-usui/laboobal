<template>
  <div class="wrap" ref="wrap">
    <canvas class="canvas" id="canvas"></canvas>
  </div>
</template>

<script>

  import * as THREE from 'three';
  import GlitchBgImageMesh from './GlitchBgImageMesh';
  import GlitchEffectMesh from './GlitchEffectMesh';

  export default {
    name: 'GlitchImage',
    data() {
      return {};
    },
    mounted() {

      const wrapperW = this.$refs.wrap.offsetWidth;
      const wrapperH = this.$refs.wrap.offsetHeight;

      const debounce = (callback, duration) => {
        var timer;
        return function (event) {
          clearTimeout(timer);
          timer = setTimeout(function () {
            callback(event);
          }, duration);
        };
      };

      const canvas = document.getElementById('canvas');
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        canvas: canvas,
      });
      const renderBack1 = new THREE.WebGLRenderTarget(wrapperW, wrapperH);
      const scene = new THREE.Scene();
      const sceneBack = new THREE.Scene();
      // 平行投影で遠近感がないカメラ
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      // 遠近感のあるカメラ
      const cameraBack = new THREE.PerspectiveCamera(45, wrapperW / wrapperH, 1, 10000);
      // 時間の値
      const clock = new THREE.Clock();

//
// process for this sketch.
//

      /**
       * GlitchBgImageMesh の インスタンス
       * @type {BackgroundImage}
       */
      const bgImg = new GlitchBgImageMesh(wrapperW, wrapperH)
      /**
       * PostEffect の インスタンス
       * @type {PostEffect}
       */
      const postEffect = new GlitchEffectMesh(renderBack1.texture, wrapperW, wrapperH);

//
// common process
//
      const resizeWindow = () => {
        canvas.width = wrapperW;
        canvas.height = wrapperH;
        cameraBack.aspect = wrapperW / wrapperH;
        cameraBack.updateProjectionMatrix();
        bgImg.resize();
        postEffect.resize();
        renderBack1.setSize(wrapperW, wrapperH);
        renderer.setSize(wrapperW, wrapperH);
      };
      const render = () => {
        const time = clock.getDelta();
        renderer.render(sceneBack, cameraBack, renderBack1);
        postEffect.render(time);
        renderer.render(scene, camera);
      };
      const renderLoop = () => {
        render();
        requestAnimationFrame(renderLoop);
      };

      const event = () => {
        window.addEventListener('resize', debounce(() => {
          resizeWindow();
        }), 1000);
      };

      const init = () => {
        renderer.setSize(wrapperW, wrapperH);
        renderer.setClearColor(0x111111, 1.0);
        cameraBack.position.set(0, 0, 100);
        cameraBack.lookAt(new THREE.Vector3());

        bgImg.init('https://images.unsplash.com/photo-1547962041-6d2d7c4bdf6e', () => {
          // add meth
          sceneBack.add(bgImg.mesh);
          scene.add(postEffect.mesh);
        });

        event();
        resizeWindow();
        renderLoop();
      };
      init();

    },
    destroyed() {
    },
  };

</script>

<style scoped lang="scss">
  .wrap {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    font-family: 'helvetica neue', helvetica, sans-serif;
    background-color: #111;
  }

  .canvas {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>
