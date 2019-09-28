import { pause } from '../utility/animation'

let _this = null

export class CanvasManager {
  /**
   *
   * @param container
   * @returns {CanvasManager}
   */
  constructor(container = window) {
    _this = this
    //
    this.container = container
    this.width = 0
    this.height = 0
    this.halfWidth = 0
    this.halfHeight = 0
    this.aspectRatio = 0
    this.functions = []
    this.functionsLength = 0
    this.isWaiting = false

    this.init()

    return this
  }

  /**
   *
   */
  init() {
    window.addEventListener('resize', this.onResize.bind(this))
    this.onResize()
  }

  /**
   *
   * @param func
   * @param isInitPlay
   */
  add(func, isInitPlay) {
    this.functions.push(func)
    this.functionsLength = this.functions.length
    isInitPlay && func(this.width, this.height, this.halfWidth, this.halfHeight)
  }

  /**
   *
   * @param func
   */
  remove(func) {
    for (let i = 0; i < this.functionsLength; i++) {
      if (this.functions[i] === func) {
        this.functions.splice(i, 1)
        break
      }
    }

    this.functionsLength = this.functions.length
  }

  /**
   *
   * @param e
   * @returns {*}
   */
  onResize(e) {
    //    await pause(1)
    //
    this.width =
      this.container === window ? window.innerWidth : this.container.offsetWidth
    this.height =
      this.container === window
        ? window.innerHeight
        : this.container.offsetHeight

    this.dpr = window.devicePixelRatio
    this.aspectRatio = this.width / this.height

    if (this.width >= this.height) {
      this.sceneWidth = 1.5 + this.width / 2560
      this.sceneHeight = this.sceneWidth / this.aspectRatio
    } else {
      this.sceneHeight = 1.5 + this.height / 1280
      this.sceneWidth = this.sceneHeight * this.aspectRatio
    }

    this.isWaiting = false

    for (let i = 0; i < this.functionsLength; i++) {
      this.functions[i](this.width, this.height)
    }
  }

  static getInstance() {
    return _this || (_this = new CanvasManager())
  }

  static add(func, initPlay) {
    this.getInstance().add(func, initPlay)
  }

  static remove(func) {
    this.getInstance().remove(func)
  }

  static width() {
    return this.getInstance().width
  }

  static height() {
    return this.getInstance().height
  }

  static sceneWidth() {
    return this.getInstance().sceneWidth
  }

  static sceneHeight() {
    return this.getInstance().sceneHeight
  }

  static dpr() {
    return this.getInstance().dpr
  }

  static destroy() {
    _this = null
  }

  static disposeThreeObjects(scene, renderer) {
    scene.children.forEach(obj => {
      obj.traverse(obj3D => dispose(obj3D))
      scene.remove(obj)
    })

    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement = null
  }
}

function dispose(obj) {
  if (obj.geometry) {
    obj.geometry.dispose()
    obj.geometry = null
  }
  if (!!obj.material && obj.material instanceof Array) {
    obj.material.forEach(material => disposeMaterial(material))
  } else if (obj.material) {
    disposeMaterial(obj.material)
  }
}

function disposeMaterial(material) {
  if (material.map) {
    material.map.dispose()
    material.map = null
  }
  material.dispose()
  material = null
}
