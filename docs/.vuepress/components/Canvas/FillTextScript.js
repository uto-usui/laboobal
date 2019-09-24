import eventManager from '../utility/EventListener'
import math from '../math'

export class Circle {
  constructor(x, y, ctx) {
    this.x = x
    this.y = y
    this.r = 1
    this.ctx = ctx
    this.isGrowing = true
    this.color = `hsla(${170 + Math.trunc(math.random(-15, 15))}, ${70 +
      Math.trunc(math.random(-50, 20))}%, 55%, 1)`
  }

  growing() {
    if (this.isGrowing) {
      this.r++
    }
  }

  show() {
    this.ctx.beginPath()
    this.ctx.strokeStyle = this.color
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.closePath()
  }
}

/**
 *
 */
export class FillTextScript {
  /**
   * @param wrap
   * @param canvas
   */
  constructor({ wrap, canvas }) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')

    this._canvas = document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    this.wrap = wrap || window
    this.width =
      this.wrap === window ? window.innerWidth : this.wrap.offsetWidth
    this.height =
      this.wrap === window ? window.innerHeight : this.wrap.offsetHeight

    this.canvas.style.width = this.width + 'px'
    this.canvas.style.height = this.height + 'px'
    this.canvas.setAttribute('height', this.height)
    this.canvas.setAttribute('width', this.width)

    this._canvas.style.width = this.width + 'px'
    this._canvas.style.height = this.height + 'px'
    this._canvas.setAttribute('height', this.height)
    this._canvas.setAttribute('width', this.width)

    this._ctx.textAlign = 'center'
    this._ctx.textBaseline = 'middle'

    this.quality = 10
    this.words = ['A', 'B', 'C', 'D', 'E', 'F']

    this.eventList = []
    this.eventList.push(
      new eventManager(this.wrap, 'click', this.replay.bind(this)),
    )
    this.animationId = 0

    this.replay()
  }

  replay() {
    this.drawNext = true
    this.animationId && window.cancelAnimationFrame(this.animationId)

    this._ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.clearRect(0, 0, this.width, this.height)

    const word = math.randomArr(this.words)
    this._ctx.font = `normal 900 ${this.width / word.length + 2}px sans-serif`
    this._ctx.fillText(word, this.width / 2, this.height / 2)

    this.possibleSpots = []
    this.circles = []

    for (let i = 0; i < this._canvas.width; i += 10) {
      for (let g = 0; g < this._canvas.height; g += 10) {
        const imgData = this._ctx.getImageData(i, g, 1, 1).data
        //
        if (
          imgData[0] > 0 ||
          imgData[1] > 0 ||
          imgData[2] > 0 ||
          imgData[3] > 0
        ) {
          this.possibleSpots.push({ x: i, y: g })
          for (let l = 0; l < 10; l++) {
            for (let h = 0; h < 10; h++) {
              this.possibleSpots.push({ x: i + l, y: g + h })
            }
          }
        }
      }
    }

    this._ctx.clearRect(0, 0, this.width, this.height)
    this.counter = 0

    this.loop()
  }

  /**
   *
   */
  loop() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.counter++

    for (let i = 0; i < this.quality; i++) {
      this.newCircle()
    }

    for (const circle of this.circles) {
      for (const circle1 of this.circles) {
        if (circle !== circle1) {
          if (
            math.distance(circle.x, circle.y, circle1.x, circle1.y) <
            circle.r + circle1.r
          ) {
            circle.isGrowing = false
            break
          }
        }
      }
      circle.show()
      circle.growing()
    }

    if (this.drawNext) {
      this.animationId = window.requestAnimationFrame(this.loop.bind(this))
    }
  }

  /**
   *
   */
  newCircle() {
    const newSpot = math.randomArr(this.possibleSpots)
    let draw = true
    for (const circle2 of this.circles) {
      if (
        math.distance(circle2.x, circle2.y, newSpot.x, newSpot.y) <= circle2.r
      ) {
        draw = false
        break
      }
    }
    if (draw) {
      this.circles.push(new Circle(newSpot.x, newSpot.y, this.ctx))
    }
  }

  destroy() {
    window.cancelAnimationFrame(this.animationId)
    this.eventList.forEach(event => event.destroy())
    this.canvas = null
    this._canvas = null
    this.ctx = null
    this._ctx = null
  }
}
