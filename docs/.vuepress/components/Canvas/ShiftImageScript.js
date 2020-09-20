import * as THREE from 'three'
import _event from '../utility/EventListener'
import GlitchBgImageMesh from './GlitchBgImageMesh'
import { ShiftImageEffect } from './ShiftImageEffect'

export class ShiftImageScript {
  /**
   * @param canvas {HTMLCanvasElement}
   * @param wrap {DOMElement}
   */
  constructor({ canvas, wrap }) {
    this.canvas = canvas
    this.wrap = wrap
    this.wrapperW = this.wrap.offsetWidth
    this.wrapperH = this.wrap.offsetHeight

    this.scene = new THREE.Scene()
    this.sceneBg = new THREE.Scene()

    /**
     * time number
     * @type {Clock}
     */
    this.clock = new THREE.Clock()

    this.animId = 0

    this._eventList = []

    this.init()
  }

  init() {
    this.createRenderer()
    this.createCamera()
    this.createMesh()
    this.eventAttach()
    this.resizeWindow()
    //
    this.render()
  }

  createMesh() {
    /**
     * GlitchBgImageMesh instance
     * @type {BackgroundImage}
     */
    this.bgImg = new GlitchBgImageMesh(this.wrapperW, this.wrapperH)

    /**
     * PostEffect の instance
     * @type {PostEffect}
     */
    this.postEffect = new ShiftImageEffect(
      this.renderBg.texture,
      this.wrapperW,
      this.wrapperH,
      this.wrap,
    )

    this.bgImg.init('/images/girl/01.jpg', () => {
      // add meth
      this.sceneBg.add(this.bgImg.mesh)
      this.scene.add(this.postEffect.mesh)
    })
  }

  createRenderer() {
    this.renderBg = new THREE.WebGLRenderTarget(this.wrapperW, this.wrapperH)
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      canvas: this.canvas,
    })
    this.renderer.setSize(this.wrapperW, this.wrapperH)
    this.renderer.setClearColor(0x111111, 1.0)
  }

  createCamera() {
    // 平行投影で遠近感がないカメラ
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    // 遠近感のあるカメラ
    this.cameraBack = new THREE.PerspectiveCamera(
      45,
      this.wrapperW / this.wrapperH,
      1,
      10000,
    )
    this.cameraBack.position.set(0, 0, 100)
    this.cameraBack.lookAt(new THREE.Vector3())
  }

  /**
   * render func
   */
  render() {
    this.renderer.setRenderTarget(this.renderBg)
    this.renderer.render(this.sceneBg, this.cameraBack)

    this.postEffect.render(this.clock.getDelta())

    this.renderer.setRenderTarget(null)
    this.renderer.render(this.scene, this.camera)

    const anim = () => this.render()
    this.animId = requestAnimationFrame(anim)
  }

  /**
   * attach event
   */
  eventAttach() {
    const onResize = () =>
      debounce(() => {
        this.resizeWindow()
      }, 1000 / 30)
    this._eventList.push(new _event(window, 'resize', onResize))
  }

  /**
   * remove event
   */
  eventRemove() {
    this._eventList.forEach((event) => event.destroy())
  }

  /**
   * resize handler
   */
  resizeWindow() {
    this.canvas.width = this.wrapperW
    this.canvas.height = this.wrapperH
    this.cameraBack.aspect = this.wrapperW / this.wrapperH
    this.cameraBack.updateProjectionMatrix()
    this.bgImg.resize()
    this.postEffect.resize()
    this.renderBg.setSize(this.wrapperW, this.wrapperH)
    this.renderer.setSize(this.wrapperW, this.wrapperH)
  }

  /**
   * dispose instance
   */
  destroy() {
    this.sceneBg.remove(this.bgImg.mesh)
    this.scene.remove(this.postEffect.mesh)
    cancelAnimationFrame(this.animId)

    this.bgImg.destroy()
    this.postEffect.destroy()

    this.eventRemove()
  }
}

export default ShiftImageScript

function debounce(callback, duration) {
  let timer
  return function (event) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(event)
    }, duration)
  }
}
