import { globalColor } from '@assets/js/core/color'

export class DrawLine {
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
    this.drawLine(
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.canvas.width / 2 + 200,
      this.canvas.height / 2 + 50,
      globalColor.sub[2],
    )
    this.drawLine(
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.canvas.width / 2 - 200,
      this.canvas.height / 2 - 50,
      globalColor.primary,
    )
  }

  /**
   * drawing line
   * @param {number} x1 - 線分の始点の X 座標
   * @param {number} y1 - 線分の始点の Y 座標
   * @param {number} x2 - 線分の終点の X 座標
   * @param {number} y2 - 線分の終点の Y 座標
   * @param {string} [color] - 線を描画する際の色
   * @param {number} [width=1] - 線幅
   */
  drawLine(x1, y1, x2, y2, color, width = 1) {
    if (!this.ctx) return

    // 色が指定されている場合はスタイルを設定する
    if (color) {
      this.ctx.strokeStyle = color
    }
    // 線幅を設定する
    this.ctx.lineWidth = width
    // パスの設定を開始することを明示する
    this.ctx.beginPath()
    // パスの始点を設定する
    this.ctx.moveTo(x1, y1)
    // 直線のパスを終点座標に向けて設定する
    this.ctx.lineTo(x2, y2)
    // パスを閉じることを明示する
    this.ctx.closePath()
    // 設定したパスで線描画を行う
    this.ctx.stroke()
  }
}
