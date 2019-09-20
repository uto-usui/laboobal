export class DrawSvgScript {
  /**
   * constructor.
   *
   * @param target
   * @param url
   */
  constructor(target, url) {
    this.target = target
    this.url = url
    this.img = new Image()

    this.init()
  }

  /**
   * init
   * load image
   */
  init() {
    const cb = () => this.onLoad()
    this.img.crossOrigin = 'Anonymous'
    this.img.addEventListener('load', cb, false)
    //
    this.img.src = this.url
  }

  /**
   * callback
   * create canvas
   */
  onLoad() {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    canvas.width = this.target.offsetWidth // this.img.width
    canvas.height = this.target.offsetHeight // this.img.height

    // 100% * aTargetWidth / aWindowW
    const w = (this.target.offsetWidth * 300) / 800
    const h = (this.target.offsetWidth * 79) / 800
    const x = this.target.offsetWidth / 2 + w / -2
    const y = this.target.offsetHeight / 2 + h / -2

    context.drawImage(this.img, x, y, w, h)
    this.target.appendChild(canvas)
  }
}

export default DrawSvgScript
