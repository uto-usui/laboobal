import * as THREE from 'three'
import GlitchBgImageMesh from './GlitchBgImageMesh'
import GlitchEffectMesh from './GlitchEffectMesh'

import _event from '../utility/EventListener'

export class GlitchScript {
  /**
   * @param canvas {HTMLCanvasElement}
   * @param wrap {DOMElement}
   */
  constructor({canvas, wrap}) {
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

    this.bgImg.init(
      'https://images.unsplash.com/photo-1547962041-6d2d7c4bdf6e',
      () => {
        // add meth
        this.sceneBg.add(this.bgImg.mesh)
        this.scene.add(this.postEffect.mesh)
      },
    )

    this.eventAttach()
    this.resizeWindow()
    //
    this.render()
  }

  createRenderer() {
    this.renderBg = new THREE.WebGLRenderTarget(this.wrapperW, this.wrapperH)
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      canvas: this.canvas,
    })
    this.renderer.setSize(this.wrapperW, this.wrapperH)
    this.renderer.setClearColor(0x111111, 1.0)

    /**
     * GlitchBgImageMesh instance
     * @type {BackgroundImage}
     */
    this.bgImg = new GlitchBgImageMesh(this.wrapperW, this.wrapperH)

    /**
     * PostEffect の instance
     * @type {PostEffect}
     */
    this.postEffect = new GlitchEffectMesh(
      this.renderBg.texture,
      this.wrapperW,
      this.wrapperH,
    )
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

  render() {
    this.renderer.setRenderTarget(this.renderBg)
    this.renderer.render(this.sceneBg, this.cameraBack)

    this.postEffect.render(this.clock.getDelta())
    this.renderer.setRenderTarget(null)
    this.renderer.render(this.scene, this.camera)

    const anim = () => this.render()
    this.animId = requestAnimationFrame(anim)
  }

  eventAttach() {
    const onResize = () => debounce(() => {
      this.resizeWindow()
    }, 1000 / 30)
    this._eventList.push(new _event(window, 'resize', onResize))
  }

  eventRemove() {
    this._eventList.forEach(event => event.destroy())
  }

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

  destroy() {
    this.sceneBg.remove(this.bgImg.mesh)
    this.scene.remove(this.postEffect.mesh)
    cancelAnimationFrame(this.animId)

    this.bgImg.destroy()
    this.postEffect.destroy()

    this.eventRemove()
  }
}

export default GlitchScript

function debounce(callback, duration) {
  let timer
  return function (event) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(event)
    }, duration)
  }
}
