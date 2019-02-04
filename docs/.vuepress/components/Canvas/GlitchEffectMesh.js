import * as THREE from 'three'

import vs from 'raw-loader!glslify-loader!./GlitchEffectMesh.vs'
import fs from 'raw-loader!glslify-loader!./GlitchEffectMesh.fs'

class PostEffect {
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
    this.mesh = this.createMesh()
  }

  /**
   * creat effect mesh
   * @returns {Mesh}
   */
  createMesh() {
    return new THREE.Mesh(
      new THREE.PlaneBufferGeometry(2, 2),
      new THREE.RawShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: vs,
        fragmentShader: fs,
      }),
    )
  }

  render(time) {
    this.uniforms.time.value += time
  }

  resize() {
    this.uniforms.resolution.value.set(this.width, this.height)
  }
}

export default PostEffect
