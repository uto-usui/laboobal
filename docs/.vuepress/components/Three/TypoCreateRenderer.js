import * as THREE from 'three'
import { OrthographicCamera } from 'three'
import { Color } from 'three'
import { WebGLRenderer } from 'three'

import { CanvasManager } from './CanvasManager'

/**
 * create scene
 * create camera
 * set renderer
 */
export class TypoCreateRenderer {
  /**
   * constructor
   *
   * @param wrap {DOMElement}
   * @param video {DOMElement}
   */
  constructor({ wrap }) {
    this.container = wrap
    new CanvasManager(this.container)

    // set size
    this.setConfig(CanvasManager.width(), CanvasManager.height())

    // create scene
    this.scene = new THREE.Scene()

    // create camera
    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0.001, 1000)
    this.camera.position.set(0, 0, 50)
    this.camera.lookAt(this.scene.position)

    const color = new Color('hsl(220, 50%,0%)')

    this.backColor = color.getHexString()

    // create renderer
    this.renderer = new WebGLRenderer({
      canvas: this.container,
      antialias: false,
      alpha: false,
      stencil: false,
      depth: false,
    })
    this.renderer.setClearColor(color.getHex())
    this.renderer.setSize(this.width, this.height)
    this.renderer.setPixelRatio(this.dpr)

    return this
  }

  /**
   *
   * @param width
   * @param height
   */
  setConfig(width, height) {
    this.dpr = window.devicePixelRatio
    this.width = width
    this.height = height
    this.halfWidth = this.width / 2
    this.halfHeight = this.height / 2
    this.aspectRatio = this.width / this.height

    if (this.width >= this.height) {
      this.sceneWidth = 1.5 + this.width / 2560
      this.sceneHeight = this.sceneWidth / this.aspectRatio
    } else {
      this.sceneHeight = 1.5 + this.height / 1280
      this.sceneWidth = this.sceneHeight * this.aspectRatio
    }
  }

  /**
   *
   */
  resizeScene() {
    this.camera.aspect = this.aspectRatio
    this.camera.left = -this.sceneWidth / 2
    this.camera.right = this.sceneWidth / 2
    this.camera.top = this.sceneHeight / 2
    this.camera.bottom = -this.sceneHeight / 2
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
    //
    console.log('🔥 TypoCreateRenderer resizeScene')
  }

  /**
   *
   */
  initRenderer() {
    //
  }
}
