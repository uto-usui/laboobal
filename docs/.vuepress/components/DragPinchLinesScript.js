import { TweenMax } from 'gsap'
import chroma from 'chroma-js'
import DragPinchScript from './DragPinchScript'
import math from './math'

class DragPinchSimple {
  /**
   *
   * @param target {HTMLElement}
   * @param wrapper {HTMLElement}
   * @param ease {number}
   * @returns {DragPinchSimple}
   */
  constructor(target, wrapper = window, ease = 0.1) {
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
    this.friction = math.random(0.25, 2)

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
    // オブジェクトをバラバラに配置する
    TweenMax.set(this.target, {
      top: math.random(-50, this.wrapHeight + 50),
      left: math.random(-50, this.wrapWidth + 50),
    })

    this.dragInstance = new DragPinchScript(
      this.target,
      this.wrap,
      ({ target, param }) => {
        const _param = param

        _param.x *= this.friction
        _param.y *= this.friction

        // 滑らかに移動させるためのイージング
        this.targetX += (_param.x - this.targetX) * this.ease
        this.targetY += (_param.y - this.targetY) * this.ease

        // 中心からの距離
        const distFromCenter = Math.hypot(this.targetX, this.targetY)
        // カラースケールを定義して、距離から色情報を取り出す
        const color = chroma
          .scale([0x25ecb7, 0xff6473])(
            math.map(distFromCenter, 0, window.innerHeight / 4, 0, 1),
          )
          .css()

        TweenMax.set(target, {
          rotation:
            90 + math.radianToAngle(math.getRadian(this.targetX, this.targetY)),
          scaleY: 1 + (Math.abs(this.targetX) + Math.abs(this.targetY)) * 0.2,
          x: this.targetX * 0.5,
          y: this.targetY * 0.5,
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
    this.wrapHeight = 0
    this.wrapWidth = 0
    this.ease = 0
    this.targetX = 0
    this.targetY = 0
    this.dragInstance = null
  }
}

export default DragPinchSimple
