import { TweenMax, TimelineMax, Expo } from 'gsap'

/**
 *  RevealClip
 */
class RevealClip {
  /**
   * Constructor
   *
   * @param target {Element} target element
   * @param direction {String} animation direction
   */
  constructor(target, direction, speed = 1) {
    this.target = target
    this.direction = direction
    this.speed = speed

    this.height = 0
    this.width = 0

    this._init()
  }

  /**
   * set original size
   * @private
   */
  _getSize() {
    this.height = this.target.clientHeight
    this.width = this.target.clientWidth

    this._setSize()
  }

  /**
   * set wrapper size
   * @private
   */
  _setSize() {
    this.target.style.height = this.height + 'px'
    this.target.style.width = this.width + 'px'
  }

  /**
   * initialize rect position
   * @returns {string}
   */
  _getInitRect() {
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
   * initialize
   * @private
   */
  _init() {
    /**
     * get position prop
     * @type {string}
     */
    const position = getComputedStyle(this.target).position

    /**
     * set position prop
     */
    if (
      position !== 'fixed' &&
      position !== 'absolute' &&
      position !== 'relative'
    ) {
      this.target.style.position = 'relative'
    }

    this._getSize()

    /**
     * create inner div
     * @type {string}
     */
    this.target.innerHTML =
      '<div class="reveal-curtain__inner" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: 9;">' +
      this.target.innerHTML +
      '</div>'

    TweenMax.set(this.target.firstElementChild, {
      clip: this._getInitRect(),
    })
  }

  /**
   * get rect animation position
   * @returns {string}
   */
  _getRect() {
    let rect = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }

    if (this.direction === 'lr') {
      rect.bottom = this.height
      rect.right = this.width
    } else if (this.direction === 'rl') {
      rect.bottom = this.height
      rect.right = this.width
    } else if (this.direction === 'tb') {
      rect.right = this.width
      rect.bottom = this.height
    } else if (this.direction === 'bt') {
      rect.right = this.width
      rect.bottom = this.height
    }

    return `rect(${rect.top}px ${rect.right}px ${rect.bottom}px ${rect.left}px)`
  }

  /**
   * animation start to
   */
  animTo() {
    TweenMax.to(this.target.firstElementChild, this.speed, {
      clip: this._getRect(),
      ease: Expo.easeOut,
    })
  }

  /**
   * animation start from
   */
  animFrom() {
    TweenMax.to(this.target.firstElementChild, this.speed, {
      clip: this._getInitRect(),
      ease: Expo.easeOut,
    })
  }

  /**
   * animation start from to
   */
  animFromTo() {
    const tl = new TimelineMax({})

    tl.to(this.target.firstElementChild, this.speed, {
      clip: this._getInitRect(),
      ease: Expo.easeOut,
    }).to(this.target.firstElementChild, this.speed, {
      clip: this._getRect(),
      ease: Expo.easeOut,
    })
  }
}

export default RevealClip
