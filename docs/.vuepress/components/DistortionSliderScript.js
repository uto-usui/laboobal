import * as THREE from 'three';
import {TweenMax} from 'gsap';

const vertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `;

const fragmentDefault = `
  varying vec2 vUv;

  // images
  uniform sampler2D texture1;
  uniform sampler2D texture2;
  uniform sampler2D disp;

  uniform float dispPower; // 0 ~ 1
  uniform float intensity;

  void main() {
    vec2 uv = vUv;

    vec4 disp = texture2D(disp, uv);
    vec2 dispVec = vec2(disp.x, disp.y);

    // naname 1
    vec2 distPos1 = uv + (dispVec * intensity * dispPower);
    vec2 distPos2 = uv + (dispVec * -(intensity * (1.0 - dispPower)));

    vec4 _texture1 = texture2D(texture1, distPos1);
    vec4 _texture2 = texture2D(texture2, distPos2);

    gl_FragColor = mix(_texture1, _texture2, dispPower);
  }
  `;

class DistortionSlider {

  constructor(el, {images, texture, deep, speed, fragment}) {

    // bind this
    this.bindAll(['render', 'nextSlide', 'timer']);

    this.vertex = vertex;

    this.fragment = fragment ? fragment : fragmentDefault;

    this.el = el;
    this.inner = this.el.querySelector('.js-slider__inner');
    this.bullets = [...this.el.querySelectorAll('.js-slider-bullet')];

    this.renderer = null;
    this.scene = null;
    this.clock = null;
    this.camera = null;

    /**
     * Array of images to apply the effect
     * @type {string[]}
     */
    this.images = images;

    /**
     * distortion texture
     * @type {string}
     */
    this.texture = texture;

    this.counter = {
      current: 0,
      prev: this.images.length - 1,
      next: 1,
      total: this.images.length - 1,
    };

    this.state = {
      animating: false,
      initial: true,
    };

    /**
     * @type {{
     *  deep: number, エフェクトのかかり具合
     *  speed: number 切り替えの速度 sec
     *  }}
     */
    this.effect = {
      deep: deep ? deep : .5,
      speed: speed ? speed : 2.5,
    };

    this.bg = null;

    this.init();
  }

  /**
   * event bind
   * @param nameArr {Array}
   */
  bindAll(nameArr) {
    nameArr.forEach(func => this[func] = this[func].bind(this));
  }

  /**
   * init style
   */
  setStyles() {

    this.bullets.forEach((bullet, index) => {
      if (index === 0) return;

      const text = bullet.querySelector('.js-slider-bullet__text');
      const line = bullet.querySelector('.js-slider-bullet__line');

      TweenMax.set(text, {
        alpha: 0.25,
      });
      TweenMax.set(line, {
        scaleX: 0,
        transformOrigin: 'left',
      });
    });

  }

  /**
   * setting camera
   */
  cameraSetup() {

    // 平行投影で遠近感がないカメラ
    this.camera = new THREE.OrthographicCamera(
      this.el.offsetWidth / -2,
      this.el.offsetWidth / 2,
      this.el.offsetHeight / 2,
      this.el.offsetHeight / -2,
      1,
      1000,
    );

    this.camera.lookAt(this.scene.position);
    this.camera.position.z = 1;

  }

  /**
   * scene
   * renderer
   * append canvas
   */
  setup() {

    this.scene = new THREE.Scene();

    // tracking time - performance.now()
    // https://threejs.org/docs/#api/en/core/Clock
    this.clock = new THREE.Clock(true);

    // init renderer
    this.renderer = new THREE.WebGLRenderer({alpha: true});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.el.offsetWidth, this.el.offsetHeight);

    this.inner.appendChild(this.renderer.domElement);

  }

  /**
   * set texture and images
   */
  loadTextures() {

    // loading a texture uses the ImageLoader
    // Texture object - https://threejs.org/docs/#api/en/textures/Texture
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = '';

    // background images
    this.bg = [];
    this.images.forEach(image => {

      const img = loader.load(`${image}?v=${Date.now()}`, this.render);
      // リピートしないように
      img.wrapS = THREE.ClampToEdgeWrapping;
      img.wrapT = THREE.ClampToEdgeWrapping;
      // いい感じに縮小 (ノイズ少ない)
      img.minFilter = THREE.LinearFilter;
      this.bg.push(img);

    });

    // texture for distortion
    this.disp = loader.load(this.texture, this.render);
    // いい感じに拡大
    this.disp.magFilter = this.disp.minFilter = THREE.LinearFilter;
    // リピートさせる
    this.disp.wrapS = this.disp.wrapT = THREE.RepeatWrapping;
  }

  /**
   * create Mesh
   */
  createMesh() {

    // create material
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        dispPower: {type: 'f', value: 0.0},
        intensity: {type: 'f', value: this.effect.deep},
        texture1: {type: 't', value: this.bg[0]},
        texture2: {type: 't', value: this.bg[1]},
        disp: {type: 't', value: this.disp},
      },
      transparent: true,
      vertexShader: this.vertex,
      fragmentShader: this.fragment,
    });

    // create geometry
    const geometry = new THREE.PlaneBufferGeometry(
      this.el.offsetWidth,
      this.el.offsetHeight,
      1,
    );

    // create mesh
    const mesh = new THREE.Mesh(geometry, this.material);

    this.scene.add(mesh);
  }

  transitionPrev() {
  }

  /**
   * インクリメント時のアニメーション
   */
  transitionNext() {

    TweenMax.to(this.material.uniforms.dispPower, this.effect.speed, {
      value: 1,
      ease: Expo.easeInOut,
      onUpdate: this.render,
      onComplete: () => {
        // init
        this.material.uniforms.dispPower.value = 0.0;
        this.changeTexture();
        this.state.animating = false;
      },
    });

    this.updateControler('next');
  }

  /**
   * コントローラーのアップデート
   * @param direction {string} next or prev
   */
  updateControler(direction) {
    const tl = new TimelineMax({paused: true});

    const current = this.bullets[this.counter.current];
    const next = (direction === 'next') ? this.bullets[this.counter.next] : this.bullets[this.counter.prev];

    const currentText = current.querySelectorAll('.js-slider-bullet__text');
    const nextText = next.querySelectorAll('.js-slider-bullet__text');

    const currentLine = current.querySelectorAll('.js-slider-bullet__line');
    const nextLine = next.querySelectorAll('.js-slider-bullet__line');

    tl
      .to(currentText, 1, {
        alpha: .25,
        ease: Linear.easeNone,
      }, 0)
      .set(currentLine, {
        transformOrigin: 'right',
      }, 0)
      .to(currentLine, 1, {
        scaleX: 0,
        ease: Expo.easeInOut,
      }, 0);

    tl
      .to(nextText, 1, {
        alpha: 1,
        ease: Linear.easeNone,
      }, 1)
      .set(nextLine, {
        transformOrigin: 'left',
      }, 1)
      .to(nextLine, 1, {
        scaleX: 1,
        ease: Expo.easeInOut,
      }, 1);

    tl.play();
  }

  prevSlide() {
    if (this.state.animating) return;

    this.state.animating = true;

    // start animation
    this.transitionPrev();

    // カウンターを進める
    this.counter.current = this.counter.current === this.counter.total ? 0 : this.counter.current - 1;
    this.counter.prev = this.counter.current === this.counter.total ? 0 : this.counter.current - 1;
  }

  nextSlide() {
    if (this.state.animating) return;

    this.state.animating = true;

    // start animation
    this.transitionNext();

    // カウンターを進める
    this.counter.current = this.counter.current === this.counter.total ? 0 : this.counter.current + 1;
    this.counter.next = this.counter.current === this.counter.total ? 0 : this.counter.current + 1;
  }

  /**
   * update texture
   */
  changeTexture() {
    this.material.uniforms.texture1.value = this.bg[this.counter.current];
    this.material.uniforms.texture2.value = this.bg[this.counter.next];
  }

  /**
   * set wheel event
   */
  listeners() {
    window.addEventListener('wheel', this.nextSlide, {passive: true});
  }

  /**
   * autoplay timer
   */
  timer() {
    setInterval(this.nextSlide, 3000);
  }

  /**
   * update render
   * called tweenMax update
   */
  render() {
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * init
   */
  init() {
    this.setup();
    this.cameraSetup();
    this.loadTextures();
    this.createMesh();
    this.setStyles();
    this.render();
    this.listeners();
    this.timer();
  }
}

export default DistortionSlider;
