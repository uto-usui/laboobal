import { TweenMax, TimelineMax, Power1, Power2, Power3 } from 'gsap'

/**
 *  RevealCurtain
 */
class RevealCurtain {
  /**
   * Constructor
   *
   * @param target {Element} DOM
   * @param direction {String} アニメーションの方向を決定します
   */
  constructor(target, direction, speed = 1) {
    this.target = target
    this.direction = direction
    this.speed = speed

    this.height = 0
    this.width = 0

    this._init()
  }

  _init() {
    /**
     * set CSS position prop
     * @type {string}
     */
    const position = getComputedStyle(this.target).position

    if (
      position !== 'fixed' &&
      position !== 'absolute' &&
      position !== 'relative'
    ) {
      this.target.style.position = 'relative'
    }

    this._getSize()

    this._wrapTarget()

    this._createMask()
  }

  /**
   * create wrap target div
   * @type {string}
   * @private
   */
  _wrapTarget() {
    this.target.innerHTML =
      '<div class="block_inner" style="opacity: 0">' +
      this.target.innerHTML +
      '</div>'
  }

  /**
   * set original size
   * @private
   */
  _getSize() {
    this.height = this.target.clientHeight
    this.width = this.target.clientWidth
  }

  /**
   * initialize rect size
   * @returns {string}
   */
  _initRect() {
    if (this.direction === 'lr') {
      return `rect(0px 0px ${this.height}px 0px)`
    } else if (this.direction === 'rl') {
      return `rect(0px ${this.width}px ${this.height}px ${this.width}px)`
    } else if (this.direction === 'tb') {
      return `rect(0px ${this.width}px 0px 0px)`
    } else if (this.direction === 'bt') {
      return `rect(${this.height}px ${this.width}px ${this.height}px 0px)`
    }
  }

  /**
   * create mask element
   * @type {HTMLElement}
   */
  _createMask() {
    this.mask = createDOMElement('div', 'block_mask')
    this.mask.style.position = 'absolute'
    this.mask.style.zIndex = 99
    this.mask.style.top = 0
    this.mask.style.left = 0
    this.mask.style.right = 0
    this.mask.style.bottom = 0
    this.mask.style.backgroundColor = '#282828'

    TweenMax.set(this.mask, {
      clip: this._initRect(this.direction),
    })

    /**
     * insert mask
     */
    this.target.insertAdjacentElement('afterbegin', this.mask)
  }

  /**
   * get animation rect position
   * @param end
   * @returns {string}
   */
  _getRect(end) {
    const rect = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }

    if (this.direction === 'lr') {
      rect.bottom = this.height
      rect.right = this.width

      if (end) rect.left = this.width
    } else if (this.direction === 'rl') {
      rect.bottom = this.height
      rect.right = this.width

      if (end) rect.right = 0
    } else if (this.direction === 'tb') {
      rect.right = this.width
      rect.bottom = this.height

      if (end) rect.top = this.height
    } else if (this.direction === 'bt') {
      rect.right = this.width
      rect.bottom = this.height

      if (end) rect.bottom = 0
    }

    return `rect(${rect.top}px ${rect.right}px ${rect.bottom}px ${rect.left}px)`
  }

  // public
  // - - - -- - - - - -  - - - -
  /**
   * アニメーション実行
   */
  anim() {
    const tl = new TimelineMax({})
    const fromRect = this._getRect(false)
    const toRect = this._getRect(true)

    tl.to(this.mask, 0.75, {
      clip: fromRect,
      ease: Power1.easeOut,
    })
      .add(() => {
        this.mask.nextElementSibling.style.opacity = 1
      })
      .to(this.mask, 0.65, {
        clip: toRect,
        ease: Power3.easeOut,
        delay: 0.5,
      })
  }
}

export default RevealCurtain

/**
 *
 * @param type
 * @param className
 * @param content
 * @returns {HTMLElement}
 */
function createDOMElement(type, className, content) {
  const el = document.createElement(type)
  el.className = className || ''
  el.innerHTML = content || ''
  return el
}
