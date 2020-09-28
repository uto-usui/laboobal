import { globalColor } from '@assets/js/core/color'
import math from '@/components/math'

export class DrawRect {
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
    // 多角形の頂点の数
    const count = math.randomInt(4, 8)
    // 多角形の各頂点を格納するための配列
    const points = [] as number[]
    // ループで一気に頂点を追加する
    for (let i = 0; i < count; ++i) {
      // 配列に要素を追加する
      points.push(math.random(0, this.size.w), math.random(0, this.size.h))
    }
    // 多角形の描画処理を行う
    this.drawPolygon(points, globalColor.sub[2])
  }

  /**
   * draw polygon
   * @param points {number[]} - points array
   * @param color {string} - polygon color
   */
  drawPolygon(points: number[], color: string) {
    if (!this.ctx) return
    // has points
    if (Array.isArray(points) !== true || points.length < 4) return
    // set color
    if (color != null) this.ctx.fillStyle = color
    // begin path
    this.ctx.beginPath()
    // start path pos
    this.ctx.moveTo(points[0], points[1])
    // set points
    for (let i = 2; i < points.length; i += 2) {
      this.ctx.lineTo(points[i], points[i + 1])
    }
    // close path
    this.ctx.closePath()
    // drew stroke
    // this.ctx.stroke()
    // drew fill
    this.ctx.fill()
  }
}
