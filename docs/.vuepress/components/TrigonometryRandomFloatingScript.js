import { TweenMax } from 'gsap'
import math from './math'

class TrigonometryRandomFloating {
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

    this.params = [
      {
        angle: math.random(0, 360),
        speed: -1.2 * math.random(0.5, 2),
      },
      {
        angle: math.random(0, 360),
        speed: 3.8 * math.random(0.5, 2),
      },
      {
        angle: math.random(0, 360),
        speed: 2.1 * math.random(0.5, 2),
      },
      {
        angle: math.random(0, 360),
        speed: 1 * math.random(0.5, 1.25),
      },
      {
        angle: math.random(0, 360),
        speed: 2 * math.random(0.5, 1.25),
      },
    ]

    // 中心座標
    this.center = {
      x: wrapWidth / 2 - this.targets[0].offsetWidth / 2,
      y: wrapHeight / 2 - this.targets[0].offsetHeight / 2,
    }

    // 動く範囲を円の半径で表現
    // 倍の値(直径)が移動範囲になる
    this.radius = wrapHeight / 3
  }

  /**
   * animation start
   */
  play() {
    this.targets.forEach((el, i) => {
      TweenMax.set(el, {
        // sine 波上にオブジェクトを配置
        x:
          Math.sin(math.angleToRadian(this.params[0].angle)) *
            this.radius *
            1.25 +
          this.center.x,
        y:
          Math.sin(math.angleToRadian(this.params[1].angle)) * this.radius +
          this.center.y,
        z:
          Math.sin(math.angleToRadian(this.params[2].angle)) *
          this.radius *
          1.25,

        //        scaleY: math.map(Math.sin(math.angleToRadian(_angle)), -1, 1, 1, 2),
        //        scaleX: math.map(Math.cos(math.angleToRadian(_angle)), -1, 1, 1, 2),

        //        rotationY: math.map(Math.cos(math.angleToRadian(this.angle + i * this.radius)), -1, 1, 1, 360),
        //        rotationX: math.map(Math.sin(math.angleToRadian(this.angle + i * this.radius)), -1, 1, 1, 360),

        backgroundColor: `hsla(${math.map(
          Math.sin(math.angleToRadian(this.params[3].angle)),
          -1,
          1,
          0,
          259,
        )}, 80%, 70%, 1)`,
      })
    })

    TweenMax.set(this.wrap, {
      perspective: math.map(
        Math.sin(math.angleToRadian(this.params[4].angle)),
        -1,
        1,
        100,
        1000,
      ),
    })

    this.params.forEach((el, i) => {
      // eslint-disable-next-line no-param-reassign
      el.angle += el.speed
    })

    requestAnimationFrame(() => this.play())
  }
}

export default TrigonometryRandomFloating
