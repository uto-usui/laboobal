import { TweenMax } from 'gsap'
import math from '../math'

class TrigonometrySine {
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
    this.targets = targets
    this.wrap = wrap

    this.angle = 0
    this.speed = speed

    // 中心座標
    this.center = {
      x: wrapWidth / 2 - this.targets[0].offsetWidth / 2,
      y: wrapHeight / 2 - this.targets[0].offsetHeight / 2,
    }

    this.wrapWidth = wrapWidth
    this.wrapHeight = wrapHeight

    // 動く範囲を円の半径で表現
    // 倍の値(直径)が移動範囲になる
    this.radius = wrapHeight / 3
  }

  /**
   * animation start
   */
  play() {
    this.targets.forEach((el, i) => {
      /**
       * 円周上に配置するための値
       * @type {number}
       * @private
       */
      const _angle = this.angle + (360 / this.targets.length) * i

      TweenMax.set(el, {
        // sine 波上にオブジェクトを配置
        x:
          (this.wrapWidth / this.targets.length) * i +
          this.wrapWidth / this.targets.length / 3,
        y: this.center.y + Math.sin(math.angleToRadian(_angle)) * this.center.y,
        z: Math.sin(math.angleToRadian(_angle)) * this.radius,

        scaleY: math.map(Math.sin(math.angleToRadian(_angle)), -1, 1, 1, 2),
        scaleX: math.map(Math.cos(math.angleToRadian(_angle)), -1, 1, 1, 2),

        rotationY: math.map(
          Math.cos(math.angleToRadian(this.angle + i * this.radius)),
          -1,
          1,
          1,
          360,
        ),
        rotationX: math.map(
          Math.sin(math.angleToRadian(this.angle + i * this.radius)),
          -1,
          1,
          1,
          360,
        ),
        backgroundColor: `hsla(${this.angle +
          (360 / this.targets.length) * i}, 80%, 70%, 1)`,
      })
    })

    TweenMax.set(this.wrap, {
      perspective: math.map(
        Math.sin(math.angleToRadian(this.angle)),
        -1,
        1,
        100,
        800,
      ),
    })

    // angle を進める
    this.angle += this.speed

    requestAnimationFrame(() => this.play())
  }
}

export default TrigonometrySine
