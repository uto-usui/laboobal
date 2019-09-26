import * as THREE from 'three'
import vs from './GlitchEffectMesh.vs'
import fs from './GlitchEffectMesh.fs'

export class PostEffect {
  constructor(texture, width, height) {
    this.width = width
    this.height = height
    this.texture = texture

    this.uniforms = {
      time: {
        type: 'f',
        value: 0,
      },
      resolution: {
        type: 'v2',
        value: new THREE.Vector2(this.width, this.height),
      },
      texture: {
        type: 't',
        value: this.texture,
      },
    }

    this.createMesh()
  }

  /**
   *
   * creat effect mesh
   * @returns {Mesh}
   */
  createMesh() {
    this.geometry = new THREE.PlaneBufferGeometry(2, 2)
    this.material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vs,
      fragmentShader: fs,
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)
  }

  render(time) {
    this.uniforms.time.value += time
  }

  resize() {
    this.uniforms.resolution.value.set(this.width, this.height)
  }

  destroy() {
    this.geometry.dispose()
    this.material.dispose()
  }
}

export default PostEffect
