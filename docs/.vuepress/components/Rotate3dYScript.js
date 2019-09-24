import { TweenMax } from 'gsap'
import math from './math'

class Rotate3dY {
  /**
   * constructor
   * @param targets {Object}
   * @param speed {Number}
   * @param wrapWidth {Number}
   * @param wrapHeight {Number}
   * @param wrap {Object}
   */
  constructor(
    targets,
    speed = 2,
    wrapWidth = window.innerWidth,
    wrapHeight = window.innerHeight,
    wrap,
  ) {
    this.targets = []
    this.wrap = wrap

    this.speed = speed

    this.wrapWidth = wrapWidth
    this.wrapHeight = wrapHeight

    /**
     * オブジェクトの位置を動かすためのパラメータの基準値
     * これにランダム値とかで加工する
     *
     * @type {{
     *   x: {
     *    range: number, 変化の範囲
     *    speed: number  変化のスピード
     *   },
     *   y: {range: number, speed: number},
     *   z: {range: number, speed: number}
     * }}
     */
    this.position = {
      x: {
        range: 0.25,
        speed: 1,
      },
      y: {
        range: 0.25,
        speed: 1,
      },
      z: {
        range: 0.25,
        speed: 1,
      },
    }

    // 中心座標
    this.center = {
      x: this.wrapWidth / 2 - targets[0].offsetWidth / 2,
      y: this.wrapHeight / 2 - targets[0].offsetHeight / 2,
    }

    /**
     * init element
     * 各オブジェクトの初期値などを設定
     */
    targets.forEach((el, i) => {
      /**
       * @type {{
       *   el: HTMLElement,
       *   x: number,
       *   y: number,
       *   z: number
       *   scale: number,
       *   speedZ: number,
       *   speedY: number,
       *   speedX: number,
       * }}
       */
      const obj = {
        el: el,
        x: math.random(
          -this.wrapWidth * this.position.x.range,
          this.wrapWidth * this.position.x.range,
        ),
        y: math.random(
          -this.wrapHeight * this.position.y.range,
          this.wrapHeight * this.position.y.range,
        ),
        z: math.random(
          -this.wrapHeight * this.position.z.range,
          this.wrapHeight * this.position.z.range,
        ),
        speedX: math.random(1, 4) * this.position.x.speed * this.speed,
        speedY: math.random(1, 4) * this.position.y.speed * this.speed,
        speedZ: math.random(1, 4) * this.position.z.speed * this.speed,
        scale: math.random(1, 2),
      }

      this.targets.push(obj)
    })
  }

  /**
   * animation start
   */
  play() {
    this.targets.forEach((el, i) => {
      // オブジェクトの座標を更新
      math.rotateY(el, math.angleToRadian(el.speedY))

      TweenMax.set(el.el, {
        scale: el.scale,
        x: el.x + this.center.x,
        y: el.y + this.center.y,
        z: el.z,
      })
    })

    requestAnimationFrame(() => this.play())
  }
}

export default Rotate3dY
