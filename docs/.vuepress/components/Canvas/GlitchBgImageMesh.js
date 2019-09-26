import * as THREE from 'three'
import vs from './GlitchBgImageMesh.vs'
import fs from './GlitchBgImageMesh.fs'

/**
 * 画像テクスチャのメッシュを作る
 */
export class BackgroundImage {
  /**
   * @param width {number}
   * @param height {number}
   * @returns {BackgroundImage}
   */
  constructor(width, height) {
    this.width = width
    this.height = height

    this.uniforms = {
      // canvas の画角
      resolution: {
        type: 'v2',
        value: new THREE.Vector2(this.width, this.height),
      },
      // テクスチャの画角
      imageResolution: {
        type: 'v2',
        value: null,
      },
      // テクスチャ
      texture: {
        type: 't',
        value: null,
      },
    }

    /**
     * three mesh
     */
    this.mesh = null

    this.geometry = null
    this.material = null

    return this
  }

  /**
   * initialize
   * @param src {String} 画像のURL
   * @param callback {function} 画像のロード後に実行されるコールバック関数
   */
  init(src, callback) {
    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'Anonymous'
    loader.load(src, texture => {
      // いい感じに拡大
      texture.magFilter = texture.minFilter = THREE.LinearFilter
      // 画像の比率
      this.uniforms.imageResolution.value = new THREE.Vector2(
        texture.image.width,
        texture.image.height,
      )
      // テクスチャセット
      this.uniforms.texture.value = texture
      // メッシュ作成関数の代入
      this.mesh = this.createMesh()
      callback()
    })
  }

  /**
   * メッシュを作る
   * @returns {Mesh}
   */
  createMesh() {
    this.geometry = new THREE.PlaneBufferGeometry(2, 2)
    this.material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vs,
      fragmentShader: fs,
    })

    return new THREE.Mesh(this.geometry, this.material)
  }

  /**
   * window resize callback
   */
  resize() {
    this.uniforms.resolution.value.set(this.width, this.height)
  }

  /**
   * dispose Three instance
   */
  destroy() {
    this.geometry.dispose()
    this.material.dispose()
  }
}

export default BackgroundImage
