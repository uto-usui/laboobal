import {TweenMax} from 'gsap';
import math from './math';

class RandomColor {

  /**
   * ランダムな値でオブジェクトを変形
   * @param target {HTMLElement}
   * @returns {DragPinchSimple}
   */
  constructor(target) {

    /**
     * ターゲットとなる要素
     * @type {HTMLElement}
     */
    this.target = target;

    /**
     * animation callback id
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
    this.play();
  }

  play() {

    TweenMax.set(this.target, {
      scaleX: math.random(.5, 2),
      scaleY: math.random(.5, 2),
      skewX: math.random(0, 360),
      skewY: math.random(0, 360),
      x: math.random(-150, 150),
      y: math.random(-150, 150),
    });

    this.animationId = requestAnimationFrame(() => this.play());

  }

  // destroy this instance
  destroy() {

    cancelAnimationFrame(this.animationId);

    this.target = null;
    this.animationId = 0;

  }

}

export default RandomColor;
