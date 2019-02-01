import { TweenMax } from 'gsap'
import math from './math'
import chroma from 'chroma-js'
import DragPinchScript from './DragPinchScript'

class DragPinchFriction {
  /**
   *
   * @param target {HTMLElement}
   * @param wrapper {HTMLElement}
   * @param ease {number}
   * @returns {DragPinchSimple}
   */
  constructor(target, wrapper, ease = 0.1) {
    /**
     *
     * @type {HTMLElement}
     */
    this.target = target

    /**
     *
     * @type {HTMLElement}
     */
    this.wrapper = wrapper

    /**
     * 摩擦
     */
    this.friction = 0.5

    /**
     *
     * @type {number}
     */
    this.ease = ease

    /**
     *
     * @type {number}
     */
    this.targetX = 0

    /**
     *
     * @type {number}
     */
    this.targetY = 0

    /**
     *
     * @type {{}}
     */
    this.dragInstance = {}

    this.init()

    return this
  }

  /**
   * initialize
   */
  init() {
    this.dragInstance = new DragPinchScript(
      this.target,
      this.wrap,
      ({ target, param }) => {
        const _param = param

        _param.x *= this.friction
        _param.y *= this.friction

        // 滑らかに移動させるためにイージング (減衰)
        this.targetX += (_param.x - this.targetX) * this.ease
        this.targetY += (_param.y - this.targetY) * this.ease

        // 中心からの距離
        const distFromCenter = Math.hypot(this.targetX, this.targetY)
        // カラースケールを定義して、距離から色情報を取り出す
        const color = chroma
          .scale([0x25ecb7, 0xff6473])(
            math.map(distFromCenter, 0, 500 / 2, 0, 1),
          )
          .css()

        TweenMax.set(target, {
          rotationZ: math.angleToRadian(this.targetX * this.targetY) * 0.1,
          scaleX: 1 + Math.abs(this.targetX) * 0.002,
          scaleY: 1 + Math.abs(this.targetY) * 0.002,
          x: this.targetX,
          y: this.targetY,
          backgroundColor: color,
        })
      },
    )
  }

  // destroy this instance
  destroy() {
    // destroy instance
    this.dragInstance.destroy()

    this.target = {}
    this.wrapper = {}
    this.ease = 0
    this.targetX = 0
    this.targetY = 0
    this.dragInstance = null
  }
}

export default DragPinchFriction
