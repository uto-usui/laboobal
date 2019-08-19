import * as THREE from 'three'
import Trackballcontrols from 'three-trackballcontrols'

export class VideoScript {
  /**
   *
   * @param wrap {DOMElement}
   * @param video {DOMElement}
   */
  constructor({wrap, video}) {
    this.scene = new THREE.Scene()
    this.wrap = wrap
    this.video = video

    this.renderer = null
    this.camera = null
    this.trackballControls = null
    this.groundPlane = null
    this.ambientLight = null
    this.spotLight = null
    this.mesh = null
    this.material = null
    this.geometry = null

    this.initRenderer()
    this.initCamera()
    this.initTrackballControls()
    this.addLargeGroundPlane()
    this.initDefaultLighting()
    this.initTexture()

    this.addGeometry()

    this.clock = new THREE.Clock()

    this.render()

    return this
  }

  /**
   * Initialize a simple default renderer and binds it to the "webgl-output" dom
   * element.
   */
  initRenderer() {
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.shadowMap.enabled = true
    //    this.renderer.shadowMapSoft = true
    //    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    this.renderer.setClearColor(new THREE.Color(0xbb0000))
    this.renderer.setSize(
      this.wrap.getBoundingClientRect().width,
      this.wrap.getBoundingClientRect().height,
    )
    //    this.renderer.shadowMap.enabled = true
    this.wrap.appendChild(this.renderer.domElement)
  }

  /**
   * Initialize a simple camera and point it at the center of a scene
   */
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.wrap.getBoundingClientRect().width /
      this.wrap.getBoundingClientRect().height,
      0.1,
      1000,
    )
    this.camera.position.copy(new THREE.Vector3(40, 0, 50))
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }

  /**
   * Initialize trackball controls to control the scene
   */
  initTrackballControls() {
    this.trackballControls = new Trackballcontrols(this.camera, this.wrap)
    this.trackballControls.rotateSpeed = 1.0
    this.trackballControls.zoomSpeed = 1.5
    this.trackballControls.panSpeed = 1
    this.trackballControls.noZoom = false
    this.trackballControls.noPan = false
    this.trackballControls.staticMoving = true
    this.trackballControls.dynamicDampingFactor = 0.1
    this.trackballControls.keys = [65, 83, 68]
  }

  /**
   * Add a simple ground plane to the provided scene
   */
  addLargeGroundPlane() {
    // create the ground plane
    const planeGeometry = new THREE.PlaneGeometry(1000, 1000)
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
    })
    this.groundPlane = new THREE.Mesh(planeGeometry, planeMaterial)
    this.groundPlane.receiveShadow = true

    // rotate and position the plane
    this.groundPlane.rotation.x = -0.5 * Math.PI
    this.groundPlane.position.x = 0
    this.groundPlane.position.y = 0
    this.groundPlane.position.z = 0

    this.groundPlane.position.y = -20

    this.scene.add(this.groundPlane)
  }

  initDefaultLighting() {
    this.spotLight = new THREE.SpotLight(0xffffff)
    this.spotLight.position.copy(new THREE.Vector3(0, 30, 50))
    this.spotLight.shadow.mapSize.width = 2048
    this.spotLight.shadow.mapSize.height = 2048
    this.spotLight.shadow.camera.fov = 15
    this.spotLight.castShadow = true
    this.spotLight.decay = 2
    this.spotLight.penumbra = 0.05
    //
    this.scene.add(this.spotLight)

    this.ambientLight = new THREE.AmbientLight(0x444444)
    //
    this.scene.add(this.ambientLight)
  }

  initTexture() {
    this.texture = new THREE.VideoTexture(this.video)
    this.texture.minFilter = THREE.LinearFilter
    this.texture.magFilter = THREE.LinearFilter
    //    this.texture.format = THREE.RGBFormat
    this.texture.generateMipmaps = false
  }

  addGeometry() {
    this.geometry = new THREE.IcosahedronGeometry(8, 0)
    this.material = new THREE.MeshStandardMaterial({
      map: this.texture,
      metalness: 0.2,
      roughness: 0.05,
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.castShadow = true
    //
    this.scene.add(this.mesh)
  }

  render() {
    this.trackballControls.update(this.clock.getDelta())
    this.renderer.render(this.scene, this.camera)
    this.mesh.rotation.x += 0.01
    requestAnimationFrame(() => {
      this.render()
    })
  }

  destroy() {
    this.trackballControls.dispose()

    this.scene.remove(this.mesh)
    this.geometry.dispose()
    this.material.dispose()

    this.renderer.domElement = null
  }
}
