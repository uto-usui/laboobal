import { globalColor } from '@assets/js/core/color'
import math from '@/components/math'

export class AlphaBlending {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D | null

  /**
   * constructor.
   *
   * @param canvas
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    return this
  }

  /**
   * init
   * setting canvas
   */
  init() {
    const { width, height } = this.canvas.getBoundingClientRect()
    this.canvas.width = width
    this.canvas.height = height

    this.render()
  }

  /**
   * rendering
   */
  render() {
    if (!this.ctx) return

    // グローバルアルファを設定する
    this.ctx.globalAlpha = 0.5

    for (let i = 50; i > 0; i--) {
      this.drawLine(
        math.randomInt(0, this.canvas.width),
        math.randomInt(0, this.canvas.height),
        math.randomInt(0, this.canvas.width),
        math.randomInt(0, this.canvas.height),
        globalColor.sub[2],
        math.randomInt(0, 15),
      )
      this.drawLine(
        math.randomInt(0, this.canvas.width),
        math.randomInt(0, this.canvas.height),
        math.randomInt(0, this.canvas.width),
        math.randomInt(0, this.canvas.height),
        globalColor.primary,
        math.randomInt(0, 5),
      )
    }
  }

  /**
   * drawing line
   * @param x1 - start X
   * @param y1 - start Y
   * @param x2 - end X
   * @param y2 - end Y
   * @param [color] - stroke color
   * @param [width=1] - stroke width
   */
  drawLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color?: string,
    width = 1,
  ) {
    if (!this.ctx) return
    // set color
    if (color) this.ctx.strokeStyle = color
    // set line width
    this.ctx.lineWidth = width
    // begin path
    this.ctx.beginPath()
    // start path pos
    this.ctx.moveTo(x1, y1)
    // set points
    this.ctx.lineTo(x2, y2)
    // close path
    this.ctx.closePath()
    // draw stroke
    this.ctx.stroke()
  }
}
