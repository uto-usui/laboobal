import isMobile from 'ismobilejs';
import {TweenMax} from 'gsap';
import math from './math';
import chroma from 'chroma-js';

class DragPinch {

  /**
   * マウスオーバーした時のインタラクションのコントロール
   * アニメーションを必ず100%の進捗率まで進める
   *
   * @param target {HTMLElement}
   */
  constructor(target, wrapper = window, friction = .3, ease = 0.1) {

    /**
     * ターゲット要素
     * @type {HTMLElement}
     */
    this.target = target;

    /**
     * ラッパー要素
     * @type {HTMLElement}
     */
    this.wrapper = wrapper;

    /**
     * 摩擦係数
     * @type {number}
     */
    this.friction = friction;

    /**
     * イージング量
     * @type {number}
     */
    this.ease = ease;

    // ターゲットの移動量
    this.param = {
      x: 0,
      y: 0,
    };

    // マウス
    this.mouse = {
      isDown: false, // マウスダウンの真偽値
      x: 0, // マウス位置 X
      y: 0, // マウス位置 Y
      start: { // マウスダウン座標
        x: 0,
        y: 0,
      },
      dist: { // ドラッグ距離
        x: 0,
        y: 0,
      },
    };

    /**
     * requestAnimationFrame の id
     * @type {number}
     */
    this.animationId = 0;

    this.init();

    return this;

  }


  /**
   * initialize
   */
  init() {

    const moveHandle = (e) => this._eMouseMove(e);
    const downHandle = (e) => this._eMouseDown(e);
    const upHandle = (e) => this._eMouseUp(e);

    if (isMobile.any) {
      document.addEventListener('touchmove', moveHandle, {passive: false});
      document.addEventListener('touchstart', downHandle, {passive: false});
      document.addEventListener('touchend', upHandle, {passive: false});
    } else {
      window.addEventListener('mousemove', moveHandle);
      window.addEventListener('mousedown', downHandle);
      window.addEventListener('mouseup', upHandle);
    }

    this.play();

  }

  play() {

    if (this.mouse.isDown) {

      // ドラッグ距離
      this.mouse.dist.x = this.mouse.x - this.mouse.start.x;
      this.mouse.dist.y = this.mouse.y - this.mouse.start.y;

      // 摩擦で目標値を減らす
      this.mouse.dist.x *= this.friction;
      this.mouse.dist.y *= this.friction;

    } else {

      // リセット
      this.mouse.dist.x = 0;
      this.mouse.dist.y = 0;

    }

    // 滑らかに移動させるためイージング
    this.param.x += (this.mouse.dist.x - this.param.x) * this.ease;
    this.param.y += (this.mouse.dist.y - this.param.y) * this.ease;

    // 中心からの距離
    const distFromCenter = Math.sqrt(this.param.x * this.param.x + this.param.y * this.param.y);
    // カラースケールを定義して、距離から色情報を取り出す
    const color = chroma.scale([0x25ECB7, 0xFF6473])(math.map(distFromCenter, 0, 500 / 4, 0, 1)).css()

    TweenMax.set(this.target, {
      rotationZ: math.angleToRadian(this.param.x * this.param.y) * 0.1,
      scaleX: 1 + Math.abs(this.param.x) * .002,
      scaleY: 1 + Math.abs(this.param.y) * .002,
      x: this.param.x,
      y: this.param.y,
      backgroundColor: color,
    });

    this.animationId = window.requestAnimationFrame(() => this.play());
  }

  /**
   * ドラッグ
   * @param e
   * @private
   */
  _eMouseMove(e) {

    if (isMobile.any) {
      e.preventDefault();
      const touches = e.touches;
      if (touches != null && touches.length > 0) {
        this.mouse.x = touches[0].pageX;
        this.mouse.y = touches[0].pageY;
      }
    } else {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }

  }

  /**
   * マウス押した
   * @param e
   * @private
   */
  _eMouseDown(e) {

    if (!this.mouse.isDown) {
      this.mouse.isDown = true;
      if (isMobile.any) {
        e.preventDefault();
        const touches = e.touches;
        if (touches != null && touches.length > 0) {
          this.mouse.start.x = this.mouse.x = touches[0].pageX;
          this.mouse.start.y = this.mouse.y = touches[0].pageY;
        }
      } else {
        this.mouse.start.x = e.clientX;
        this.mouse.start.y = e.clientY;
      }
    }

  }

  /**
   * マウスを離した
   * @private
   */
  _eMouseUp() {
    this.mouse.isDown = false;
  }

  destroy() {
    cancelAnimationFrame(this.animationId);

    this.target = null;
    this.wrapper = null;
    this.ease = 0;
    this.friction = 0;
    this.param = null;
    this.mouse = null;
    this.animationId = 0;

    const moveHandle = (e) => this._eMouseMove(e);
    const downHandle = (e) => this._eMouseDown(e);
    const upHandle = () => this._eMouseUp();

    if (isMobile.any) {
      document.removeEventListener('touchmove', moveHandle, {passive: false});
      document.removeEventListener('touchstart', downHandle, {passive: false});
      document.removeEventListener('touchend', upHandle, {passive: false});
    } else {
      window.removeEventListener('mousemove', moveHandle);
      window.removeEventListener('mousedown', downHandle);
      window.removeEventListener('mouseup', upHandle);
    }
  }

}

export default DragPinch;
