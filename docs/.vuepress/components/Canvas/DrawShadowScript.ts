import { globalColor } from '@assets/js/core/color'
import math from '@/components/math'

export class DrawShadow {
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
    this.addShadow(8, '#000000', -15, 15)

    this.drawLine(
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.canvas.width / 2 + math.randomInt(50, 200),
      this.canvas.height / 2 + math.randomInt(50, 200),
      globalColor.sub[2],
    )
    this.drawLine(
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.canvas.width / 2 + math.randomInt(50, 200),
      this.canvas.height / 2 + math.randomInt(50, 200),
      globalColor.primary,
    )
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
    // drew stroke
    this.ctx.stroke()
  }

  /**
   * add shadow (all contents)
   *
   * @param blur {number} blur
   * @param color {string} color
   * @param x {number} offset x
   * @param y {number} offset y
   */
  addShadow(blur: number, color: string, x: number, y: number) {
    if (!this.ctx) return

    // set shadow blue
    this.ctx.shadowBlur = blur
    // set shadow color
    this.ctx.shadowColor = color
    // set shadow offset
    this.ctx.shadowOffsetX = x
    this.ctx.shadowOffsetY = y
  }
}
