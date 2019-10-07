import * as THREE from 'three'
import { TweenLite } from 'gsap'

const leftActivation = `
  float activation = uv.x;
`
const topActivation = `
  float activation = 1.- uv.y;
`
const topLeftActivation = `
  float activation = (+uv.x-uv.y+1.)/2.;
`
const centerActivation = `
  float maxDistance = distance(vec2(0.),vec2(0.5));
  float dist = distance(vec2(0.), uv-0.5);
  float activation = smoothstep(0.,maxDistance,dist);
`

const createVertex = activation => `
  uniform float uProgress;
  uniform vec2 uMeshScale;
  uniform vec2 uMeshPosition;
  uniform vec2 uViewSize;
  varying vec2 vUv;

  void main(){
    vec3 pos = position.xyz;
    
    ${activation}
    
    float latestStart = 0.5;
    float startAt = activation * latestStart;
    float vertexProgress = smoothstep(startAt,1.,uProgress);
       
    // Scale to page view size/page size
    vec2 scaleToViewSize = uViewSize / uMeshScale - 1.;
    vec2 scale = vec2(
      1. + scaleToViewSize * vertexProgress
    );
    pos.xy *= scale;
    
    // Move towards center 
    pos.y += -uMeshPosition.y * vertexProgress;
    pos.x += -uMeshPosition.x * vertexProgress;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
    vUv = uv;
  }
`

const fragmentShader = `
  uniform vec3 uColor;
  void main(){
    vec3 color = uColor /255.;
    gl_FragColor = vec4(color,1.);
  }
`

const vertexShader = createVertex(leftActivation)

export class ScaleScript {
  /**
   * @param canvas
   * @param items
   */
  constructor({ canvas, items }) {
    this.canvas = canvas
    this.items = items

    this.camera = null
    this.scene = null
    this.renderer = null

    this.width = canvas.offsetWidth
    this.height = canvas.offsetHeight

    console.log(this.width, this.height)

    this.vertexShader = vertexShader
    this.fragmentShader = fragmentShader

    this.uniforms = {
      uProgress: new THREE.Uniform(0),
      uMeshScale: new THREE.Uniform(new THREE.Vector2(1, 1)),
      uMeshPosition: new THREE.Uniform(new THREE.Vector2(0, 0)),
      uViewSize: new THREE.Uniform(new THREE.Vector2(1, 1)),
      uColor: new THREE.Uniform(new THREE.Vector3(20, 20, 20)),
    }
    this.animating = false
    this.state = 'grid'
    this.itemIndex = -1
  }

  toGrid() {
    if (this.state === 'grid' || this.isAnimating) return

    this.animating = true
    this.tween = TweenLite.to(this.uniforms.uProgress, 1, {
      value: 0,
      onUpdate: this.render.bind(this),
      onComplete: () => {
        this.isAnimating = false
        this.state = 'grid'
        this.canvas.style.zIndex = -1
        this.items[this.itemIndex].style.opacity = 1
      },
    })
  }

  toFullscreen() {
    if (this.state === 'fullscreen' || this.isAnimating) return

    this.animating = true
    this.canvas.style.zIndex = 2
    this.items[this.itemIndex].style.opacity = 0
    this.tween = TweenLite.to(this.uniforms.uProgress, 1, {
      value: 1,
      onUpdate: this.render.bind(this),
      onComplete: () => {
        this.isAnimating = false
        this.state = 'fullscreen'
        this.toGrid()
      },
    })
  }

  init() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.width, this.height)
    //    this.canvas.appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.width / this.height,
      0.1,
      10000,
    )
    this.camera.position.z = 50
    this.camera.lookAt = this.scene.position

    const viewSize = this.getViewSize()
    this.uniforms.uViewSize.value.x = viewSize.width
    this.uniforms.uViewSize.value.y = viewSize.height

    const segments = 128
    const geometry = new THREE.PlaneBufferGeometry(1, 1, segments, segments)

    // We'll be using the shader material later on ;)
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
      side: THREE.DoubleSide,
    })

    this.mesh = new THREE.Mesh(geometry, material)
    this.scene.add(this.mesh)

    window.addEventListener('resize', this.onResize.bind(this))

    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i]
      element.addEventListener('click', ev => this.onGridImageClick(ev, i))
    }

    this.vertexShader = this.setVertex(createVertex(leftActivation))
  }

  updateMesh() {
    if (this.itemIndex === -1) return

    const item = this.items[this.itemIndex]
    const rect = item.getBoundingClientRect()
    const _rect = this.canvas.getBoundingClientRect()
    const viewSize = this.getViewSize()

    // 1. Transform pixel units to camera's view units
    const widthViewUnit = (rect.width * viewSize.width) / this.width
    const heightViewUnit = (rect.height * viewSize.height) / this.height
    let xViewUnit = ((rect.left - _rect.left) * viewSize.width) / this.width
    let yViewUnit = ((rect.top - _rect.top) * viewSize.height) / this.height

    // 2. Make units relative to center instead of the top left.
    xViewUnit = xViewUnit - viewSize.width / 2
    yViewUnit = yViewUnit - viewSize.height / 2

    // 3. Make the origin of the plane's position to be the center instead of top Left.
    const x = xViewUnit + widthViewUnit / 2
    const y = -yViewUnit - heightViewUnit / 2

    // 4. Scale and position mesh
    const mesh = this.mesh
    // Since the geometry's size is 1. The scale is equivalent to the size.
    mesh.scale.x = widthViewUnit
    mesh.scale.y = heightViewUnit
    mesh.position.x = x
    mesh.position.y = y

    this.uniforms.uMeshPosition.value.x = x / widthViewUnit
    this.uniforms.uMeshPosition.value.y = y / heightViewUnit
    this.uniforms.uMeshScale.value.x = widthViewUnit
    this.uniforms.uMeshScale.value.y = heightViewUnit

    const styles = window.getComputedStyle(item)
    let color = styles.getPropertyValue('background-color')
    color = color.substring(color.indexOf('(') + 1, color.indexOf(')'))

    const rgbColors = color.split(',', 3).map(c => parseInt(c))
    this.uniforms.uColor.value.x = rgbColors[0]
    this.uniforms.uColor.value.y = rgbColors[1]
    this.uniforms.uColor.value.z = rgbColors[2]
  }

  onGridImageClick(ev, itemIndex) {
    // getBoundingClientRect gives pixel units relative to the top left of the pge

    console.log('click')

    this.itemIndex = itemIndex

    this.updateMesh()

    // this.render();
    this.toFullscreen()
  }

  setVertex(newVertex) {
    this.mesh.material.vertexShader = newVertex
    this.mesh.material.needsUpdate = true
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  getViewSize() {
    // const fovInRadians = THREE.Math.degToRad( camera.fov )
    // const height = camera.position.z * Math.tan( vFOV / 2 ) * 2
    const fovInRadians = (this.camera.fov * Math.PI) / 180
    const height = Math.abs(
      this.camera.position.z * Math.tan(fovInRadians / 2) * 2,
    )

    return { width: height * this.camera.aspect, height }
  }

  onResize() {
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
    this.updateMesh()
    this.render()
  }
}
