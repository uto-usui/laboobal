import * as THREE from 'three'
import _event from '../utility/EventListener'
import vs from './GlitchEffectMesh.vs'
import fs from './ShiftImageEffect.fs'

export class ShiftImageEffect {
  constructor(texture, width, height, wrap = window) {
    this.width = width
    this.height = height
    this.texture = texture
    this.wrap = wrap
    this.wrapW = wrap.getBoundingClientRect().width || window.innerWidth
    this.wrapH = wrap.getBoundingClientRect().height || window.innerHeight

    /**
     * mouse position
     * @type {{x: number, y: number}}
     */
    this.mouse = {
      x: this.wrapW / 2,
      y: this.wrapH / 2,
    }
    /**
     * target position
     * @type {{x: number, y: number}}
     */
    this.targetPosition = {
      x: this.wrapW / 2,
      y: this.wrapH / 2,
    }

    this._eventList = []

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
      mouse: {
        type: 'v2',
        value: new THREE.Vector2(this.targetPosition.x, this.targetPosition.y),
      },
    }

    this.eventAttach()

    this.createMesh()
  }

  /**
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
    this.distCenter()
  }

  distCenter() {
    this.targetPosition.x += (this.mouse.x - this.targetPosition.x) * 0.075
    this.targetPosition.y += (this.mouse.y - this.targetPosition.y) * 0.075

    const x = this.targetPosition.x - this.wrapW / 2
    const y = this.targetPosition.y - this.wrapH / 2

    //    console.log(x)

    this.uniforms.mouse.value.x = x
    this.uniforms.mouse.value.y = y
  }

  /**
   * get mouse current position
   * @param e
   */
  getMousePosition(e) {
    this.mouse.x = this.wrap === window ? e.clientX : e.offsetX
    this.mouse.y = this.wrap === window ? e.clientY : e.offsetY
  }

  resetMousePosition() {
    this.mouse.x = this.wrapW / 2
    this.mouse.y = this.wrapH / 2
  }

  eventAttach() {
    const mouseMove = e => this.getMousePosition(e)
    this._eventList.push(new _event(this.wrap, 'mousemove', mouseMove))
    const mouseLeave = e => this.resetMousePosition()
    this._eventList.push(new _event(this.wrap, 'mouseleave', mouseLeave))
  }

  eventRemove() {
    this._eventList.forEach(event => event.destroy())
  }

  resize() {
    this.uniforms.resolution.value.set(this.width, this.height)
  }

  destroy() {
    this.geometry.dispose()
    this.material.dispose()

    this.eventRemove()
  }
}

export default ShiftImageEffect
