import { TweenMax } from 'gsap'
import math from './math'
import chroma from 'chroma-js'
import DragPinchScript from './DragPinchScript'

class DragPinchMinimize {
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
     *
     * @type {number}
     */
    this.wrapHeight =
      this.wrapper === window ? window.innerHeight : this.wrapper.offsetHeight

    /**
     *
     * @type {number}
     */
    this.wrapWidth =
      this.wrapper === window ? window.innerWidth : this.wrapper.offsetWidth

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

        // 距離が大きいと小さくなる
        const scale =
          1 -
          math.map(
            distFromCenter,
            0,
            ((this.wrapHeight + this.wrapWidth) / 4) * this.friction,
            0,
            1,
          )

        // カラースケールを定義して、距離から色情報を取り出す
        const color = chroma
          .scale([0x25ecb7, 0xff6473])(
            math.map(
              distFromCenter,
              0,
              ((this.wrapHeight + this.wrapWidth) / 4) * this.friction,
              0,
              1,
            ),
          )
          .css()

        TweenMax.set(target, {
          scale: scale,
          backgroundColor: color,
          x: this.targetX * 2,
          y: this.targetY * 2,
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
    this.friction = 0
    this.dragInstance = null
  }
}

export default DragPinchMinimize
