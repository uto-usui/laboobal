export class DrawImage {
  private canvas: HTMLCanvasElement | null
  private ctx: CanvasRenderingContext2D | null
  private img: HTMLImageElement
  private animId: number
  private x: number
  private y: number
  private _isShow: boolean

  get isShow(): boolean {
    return this._isShow
  }

  set isShow(value: boolean) {
    this._isShow = value
    this.x = 1
    this.y = -1
  }

  constructor(canvas: HTMLCanvasElement, img: string) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')

    this.animId = 0

    this._isShow = false

    this.img = new Image()
    this.img.onload = () => this.render()
    this.img.src = img

    this.x = 1
    this.y = -1

    return this
  }

  init() {
    if (!this.canvas) return

    const { width, height } = this.canvas.getBoundingClientRect()
    this.canvas.width = width
    this.canvas.height = height
  }

  render() {
    if (!this.ctx || !this.canvas) return

    const w = this.canvas.width
    const h = this.canvas.height
    const scale = this.img.width / w

    if (this._isShow) {
      this.show(scale, h, w)
    } else {
      this.infinite(scale, w, h)
    }

    this.animId = requestAnimationFrame(() => this.render())
  }

  infinite(scale: number, w: number, h: number) {
    if (!this.ctx) return

    // invert on end
    this.x === w ? (this.y = -1) : this.x === 0 && (this.y = 1)

    this.ctx.drawImage(
      this.img,
      this.x * scale,
      0,
      1,
      h * scale,
      -this.x,
      0,
      w + this.x,
      h,
    )
    this.x += this.y
  }

  show(scale: number, h: number, w: number) {
    if (!this.ctx) return

    this.ctx.drawImage(
      this.img,
      this.x * scale,
      0,
      1 * scale,
      h * scale,
      this.x,
      0,
      w,
      h,
    )
    this.x < w ? this.x++ : cancelAnimationFrame(this.animId)
  }

  destroy() {
    cancelAnimationFrame(this.animId)

    this.ctx = null
    this.canvas = null
  }
}
