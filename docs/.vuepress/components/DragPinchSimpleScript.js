import DragPinchScript from './DragPinchScript';
import {TweenMax} from 'gsap'

class DragPinchSimple {

  /**
   *
   * @param target {HTMLElement}
   * @param wrapper {HTMLElement}
   * @param ease {number}
   * @returns {DragPinchSimple}
   */
  constructor(target, wrapper, ease = .1) {

    /**
     *
     * @type {HTMLElement}
     */
    this.target = target;

    /**
     *
     * @type {HTMLElement}
     */
    this.wrapper = wrapper;

    /**
     *
     * @type {number}
     */
    this.ease = ease;

    /**
     *
     * @type {number}
     */
    this.targetX = 0;

    /**
     *
     * @type {number}
     */
    this.targetY = 0;

    /**
     *
     * @type {{}}
     */
    this.dragInstance = {};

    this.init();

    return this;

  }

  /**
   * initialize
   */
  init() {

    this.dragInstance = new DragPinchScript(this.target, this.wrap, ({target, param}) => {

      // 滑らかに移動させるためにイージング (減衰)
      this.targetX += (param.x - this.targetX) * this.ease;
      this.targetY += (param.y - this.targetY) * this.ease;

      TweenMax.set(target, {
        x: this.targetX,
        y: this.targetY,
      });

    });

  }

  // destroy this instance
  destroy() {

    // destroy instance
    this.dragInstance.destroy();

    this.target = {};
    this.wrapper = {};
    this.ease = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.dragInstance = null;

  }

}

export default DragPinchSimple;
