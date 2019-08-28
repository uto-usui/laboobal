import { CanvasTexture, PlaneGeometry, ShaderMaterial } from 'three'

import vs from 'raw-loader!glslify-loader!./TypoFontTexture.vs'
import fs from 'raw-loader!glslify-loader!./TypoFontTexture.fs'
import { TypoScript } from './TypoScript'

export class TypoFontTexture {
  constructor() {
    this.texture = null

    this.createFontTexture({
      size: 2048,
      fontSize: 160,
    })

    this.material = new ShaderMaterial({
      uniforms: {
        texture: {
          type: 't',
          value: this.texture,
        },
        time: {
          type: 'f',
          value: 0,
        },
        seed: {
          type: 'f',
          value: 1000 * Math.random(),
        },
      },
      vertexShader: vs,
      fragmentShader: fs,
      transparent: true,
    })

    this.resize()

    return this
  }

  init() {
    //
  }

  /**
   *
   * @param fontSize
   * @param _size
   */
  createFontTexture({ fontSize, size: _size }) {
    const canvas = document.createElement('canvas')
    const size = _size * 1
    canvas.width = size
    canvas.height = size

    console.log('TypeFontTexture', size)

    const ctx = canvas.getContext('2d')

    //    ctx.fillStyle = '#fff'
    //    ctx.beginPath()
    //    ctx.arc(0.5 * size, 0.5 * size, 210 * TypoScript.dpr(), 0, 2 * Math.PI, false)
    //    ctx.fill()

    ctx.font = `normal 900 ${fontSize * TypoScript.dpr()}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = 'red'

    const r = 15 * TypoScript.dpr()
    ctx.fillText('P', size / 2 - 175 * TypoScript.dpr(), size / 2 + r)
    //    ctx.fillText('N  I  P  P  O  N', size / 2, size / 2 + r)
    ctx.fillText('O', size / 2, size / 2 + r)
    ctx.fillText('N', size / 2 + 175 * TypoScript.dpr(), size / 2 + r)

    const texture = new CanvasTexture(canvas)
    texture.needsUpdate = false

    this.texture = texture
  }

  /**
   *
   */
  resize() {
    const size =
      0.8 * Math.max(TypoScript.sceneWidth(), TypoScript.sceneHeight())
    this.geometry = new PlaneGeometry(size, size, 1, 1)
    console.log(
      'this.geometry',
      this.geometry,
      TypoScript.sceneWidth(),
      TypoScript.sceneHeight(),
    )
  }

  /**
   *
   * @param time
   */
  update(time = 0.1) {
    //    console.log('🔥 this.material', this.material.uniforms.time.value)
    this.material.uniforms.time.value = time
  }
}
