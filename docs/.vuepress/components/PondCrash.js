import * as PIXI from 'pixi.js'
//  import { GUI } from 'dat.gui/build/dat.gui.js'

import { TimelineMax, Bounce, RoughEase } from 'gsap'

// import math from './math';

class titleAnim {
  /**
   *
   * @param target
   */
  constructor(target) {
    this.target = target
    this.targetParent = this.target.parentElement

    this.deviceRatio = window.devicePixelRatio

    this.height = this.targetParent.offsetHeight * this.deviceRatio
    this.width = this.targetParent.offsetWidth * this.deviceRatio

    this.target.style.width = this.width / 2 + 'px'
    this.target.style.height = this.height / 2 + 'px'

    this.init()
    this.onResizeFunc()
  }

  onResizeFunc() {
    window.addEventListener('resize', () => {})
  }

  init() {
    this.renderer = PIXI.autoDetectRenderer(this.width, this.height, {
      transparent: true,
      view: this.target,
    })

    this.stage = new PIXI.Container()

    this.setTitle()

    this.setTexture()

    this.aniamtionBase()

    this.animation()
  }

  async animation() {
    await this.animationFlag()
  }

  /**
   * 大きくうねるアニメーション
   */
  animationWave() {
    this.waveAnimation = new PIXI.ticker.Ticker()

    this.waveAnimation.autoStart = false

    this.waveAnimation.add(t => {
      this.displacementSprite.x += 50 * t
      this.displacementSprite.y += 50 * t
    })
  }

  /**
   * 常に揺れ動くアニメーション
   */
  aniamtionBase() {
    const animate = () => {
      /**
       * update
       * @type {(PIXI.filters.DisplacementFilter|DisplacementFilter)[]}
       */
      this.stage.filters = [this.displacementFilter]
      this.renderer.render(this.stage)

      requestAnimationFrame(animate)
    }
    animate()
  }

  animationFlag() {
    this.animationWave()

    return new Promise(resolve => {
      const timeline = new TimelineMax({
        onStart: () => {
          this.resetDisplacementSprite()

          this.waveAnimation.start()
        },
        onRepeat: () => {
          this.waveAnimation.stop()

          this.resetDisplacementSprite()
        },
        onComplete: () => {
          resolve()
        },
        onUpdate: () => {
          this.displacementSprite.rotation += timeline.progress() * 2
          this.displacementFilter.scale.x += timeline.progress() * 2
          this.displacementFilter.scale.Y += timeline.progress() * 2
        },
        repeat: -1,
      })

      timeline.clear()

      timeline
        // scale を初期値に向かう
        .from(this.displacementFilter.scale, 2, {
          y: 2000,
          x: 2000,
          ease: RoughEase.ease.config({
            template: Bounce.easeOut,
            strength: 2,
            points: 200,
            taper: 'in',
            randomize: true,
            clamp: true,
          }),
        })
    })
  }

  resetDisplacementSprite() {
    this.displacementFilter.scale.x = 1
    this.displacementFilter.scale.y = 1
    this.displacementSprite.y = 0
    this.displacementSprite.x = 0
    this.displacementSprite.scale.x = 1
    this.displacementSprite.scale.y = 1
    this.displacementSprite.rotation = 0
  }

  setTexture() {
    //
    this.displacementSprite = PIXI.Sprite.fromImage('../pond.jpg')

    // repeat
    const _displacementSprite = PIXI.Texture.fromImage('../pond.jpg')
    _displacementSprite.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

    // add filter
    this.displacementFilter = new PIXI.filters.DisplacementFilter(
      this.displacementSprite,
    )

    this.resetDisplacementSprite()

    this.displacementFilter.autoFit = false

    this.stage.addChild(this.displacementSprite)
  }

  setTitle() {
    this.img = `https://source.unsplash.com/random/${this.width}x1000`
    this.mainImage = new PIXI.Sprite(PIXI.Texture.fromImage(this.img))

    this.mainImage.anchor.x = 0.5
    this.mainImage.anchor.y = 0.5
    this.mainImage.x = this.width / 2
    this.mainImage.y = this.height / 2
    this.mainImage.width = this.width / 2
    this.mainImage.height = 1000

    this.stage.addChild(this.mainImage)
  }
}

export default titleAnim
