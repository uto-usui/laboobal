import { globalColor } from '@assets/js/core/color'
import math from '@/components/math'

export class DrawCircle {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D | null
  private size: { w: number; h: number }

  /**
   * constructor.
   *
   * @param canvas - canvas DOM
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    this.size = {
      w: 0,
      h: 0,
    }

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
    this.size.w = width
    this.size.h = height

    this.render()
  }

  /**
   * rendering
   */
  render() {
    const start = Math.PI * math.random(0, 2)
    const end = Math.PI * math.random(0, 2)

    this.drawCircle(
      this.size.w / 2,
      this.size.h / 2,
      this.size.w / 4,
      start,
      end,
      globalColor.sub[2],
    )
  }

  /**
   * draw circle
   * @param x - center position X
   * @param y - center position Y
   * @param radius - radius
   * @param startRadian - start position
   * @param endRadian - end position
   * @param [color] - color
   */
  drawCircle(
    x: number,
    y: number,
    radius: number,
    startRadian: number,
    endRadian: number,
    color: string,
  ) {
    if (!this.ctx) return
    // set color
    if (color) this.ctx.fillStyle = color
    // begin path
    this.ctx.beginPath()
    // set position
    this.ctx.moveTo(x, y)
    // create circle
    this.ctx.arc(x, y, radius, startRadian, endRadian)
    // close path
    this.ctx.closePath()
    // drew fill
    this.ctx.fill()
  }
}
