import { globalColor } from '@assets/js/core/color'

export class DrawGradient {
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

    // create linearGradient area
    const linearGradient = this.ctx.createLinearGradient(
      0,
      0,
      (this.canvas.width / 4) * 2,
      (this.canvas.width / 4) * 2,
    )
    // set color stops
    globalColor.gradient.sky.forEach((color, index, arr) => {
      // offset 0 ~ 1
      const offset = (index + 1) / arr.length
      linearGradient.addColorStop(offset, color)
    })

    // draw rect
    this.drawRect(
      0,
      0,
      this.canvas.width / 4,
      this.canvas.width / 4,
      linearGradient,
    )
    this.drawRect(
      this.canvas.width / 4,
      this.canvas.width / 4,
      this.canvas.width / 4,
      this.canvas.width / 4,
      linearGradient,
    )

    // create radial gradient area
    const radialGradient = this.ctx.createRadialGradient(
      (this.canvas.width / 4) * 3,
      this.canvas.width / 4,
      0,
      (this.canvas.width / 4) * 3,
      this.canvas.width / 4,
      this.canvas.width / 4,
    )

    // set color stops
    globalColor.gradient.scene.forEach((color, index, arr) => {
      // offset 0 ~ 1
      const offset = (index + 1) / arr.length
      radialGradient.addColorStop(offset, color)
    })

    // draw rect
    this.drawRect(
      (this.canvas.width / 4) * 2,
      0,
      this.canvas.width / 4,
      this.canvas.width / 4,
      radialGradient,
    )
    this.drawRect(
      (this.canvas.width / 4) * 3,
      this.canvas.width / 4,
      this.canvas.width / 4,
      this.canvas.width / 4,
      radialGradient,
    )
  }

  /**
   * draw polygon
   * @param x {number}
   * @param y {number}
   * @param width {number}
   * @param height {number}
   * @param color {CanvasGradient}
   */
  drawRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: CanvasGradient,
  ) {
    if (!this.ctx) return

    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, width, height)
  }
}
