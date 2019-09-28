// import * as THREE from 'three'

import { Mesh } from 'three'
import { CanvasManager } from './CanvasManager'
import { TypoFontTexture } from './TypoFontTexture'
import { TypoCreateRenderer } from './TypoCreateRenderer'

export class TypoInit extends TypoCreateRenderer {
  /**
   *
   * @param wrap {HTMLElement}
   * @returns {TypoInit}
   */
  constructor({ wrap }) {
    super({ wrap })
    // resolve this
    this.resizeFunction = this.resize.bind(this)
    // create texture
    this.title = new TypoFontTexture()
    // create mesh
    this.meth = new Mesh(this.title.geometry, this.title.material)

    // add scene
    this.scene.add(this.meth)

    return this
  }

  /**
   * canvas start
   */
  start() {
    CanvasManager.add(this.resizeFunction, true)
  }

  /**
   * canvas end
   */
  finish() {
    this.needsStopUpdate = true
    //
    CanvasManager.remove(this.resizeFunction)
    CanvasManager.disposeThreeObjects(this.scene, this.renderer)
    CanvasManager.destroy()
    //
    this.container.width = 1
    this.container.height = 1
  }

  /** s
   * resize handler
   *
   * @param width
   * @param height
   */
  resize(width, height) {
    this.needsStopUpdate = true
    this.setConfig(width, height)
    this.title.resize()
    this.resizeScene()
    this.needsStopUpdate = false
    //
    console.log('🔥 TypoInit resize')
  }

  /**
   * ref animation
   */
  update() {
    if (!this.needsStopUpdate) {
      const time = 0.001 * performance.now()
      this.title.update(time)
      //
      this.renderer.render(this.scene, this.camera)
    }
  }
}
