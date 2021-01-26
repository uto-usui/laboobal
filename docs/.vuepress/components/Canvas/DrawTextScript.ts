import { globalColor } from '@assets/js/core/color'

export class DrawText {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D | null
  private size: { w: number; h: number }

  /**
   * constructor.
   *
   * @param canvas
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
    // draw method
    this.drawText('laboobal', 60, globalColor.primary)
  }

  /**
   * draw text
   * @param text {string} - string to draw
   * @param fontSize {number} - font size
   * @param color {string} - text color
   */
  drawText(text, fontSize: number, color?: string) {
    if (!this.ctx) return
    // text font style
    // style size family
    this.ctx.font = `bold ${fontSize}px Helvetica Neue`
    // text baseline
    // "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top"
    this.ctx.textBaseline = 'middle'
    // text align
    // "center" | "end" | "left" | "right" | "start"
    this.ctx.textAlign = 'center'
    // set color
    if (color) this.ctx.fillStyle = color
    // draw - center
    this.ctx.fillText(text, this.size.w / 2, (this.size.h - fontSize) / 2)
    // only stroke
    // this.ctx.strokeText(text, this.size.w / 2, (this.size.h - fontSize) / 2)
  }
}
