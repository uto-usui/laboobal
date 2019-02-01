import { TweenMax } from 'gsap'
import math from './math'
import DragPinchScript from './DragPinchScript'

class DragPinchWord {
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
    this.friction = math.random(0.1, 1)

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

        const letterSpacing = math.map(
          distFromCenter,
          0,
          Math.hypot(window.innerWidth / 2, window.innerHeight / 2),
          0.02,
          3,
        )
        const fontSize = math.map(
          distFromCenter,
          0,
          Math.hypot(window.innerWidth / 2, window.innerHeight / 2),
          1,
          20,
        )

        TweenMax.set(target, {
          letterSpacing: `${letterSpacing}em`,
          fontSize: `${fontSize}em`,
          height: 50 + Math.abs(this.targetY) * 0.2,
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

export default DragPinchWord
