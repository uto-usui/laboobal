import { gsap } from 'gsap/all'

import _event from '../utility/EventListener'

/**
 * Effect tilting the element to make it look like 3D
 * 要素を傾けて３Dのように見せるエフェクト
 */
class skewElement {
  /**
   * @param wrapper {Object} id element
   * @param target  {Object} some elements
   */
  constructor(wrapper, target) {
    this.app = document.getElementById(wrapper)
    this.target = target
    this._eventList = []

    this.app && this.init()
  }

  init() {
    const handleMouseMove = e => this.mouseMoveFn(e)
    const handleMouseLeave = e => this.mouseLeaveFn(e)

    this._eventList.push(new _event(this.app, 'mousemove', handleMouseMove))
    this._eventList.push(new _event(this.app, 'mouseleave', handleMouseLeave))
  }

  destroy() {
    this._eventList.forEach(event => event.destroy())
  }

  mouseMoveFn(e) {
    const xMouse =
      e.pageX -
      e.currentTarget.getBoundingClientRect().left -
      e.currentTarget.offsetWidth / 2
    const yMouse =
      e.pageY -
      window.pageYOffset -
      e.currentTarget.getBoundingClientRect().top -
      e.currentTarget.offsetHeight / 2

    const mouseElements = [...e.currentTarget.querySelectorAll(this.target)]

    mouseElements.forEach(el => {
      const factor = el.dataset.mouseParallax
      const xFinal = xMouse * factor
      const yFinal = yMouse * factor

      gsap.to(el, 1.2, {
        x: xFinal,
        y: yFinal,
        skewX: xFinal * 0.05,
        skewY: xFinal * 0.05,
      })
    })
  }

  mouseLeaveFn(e) {
    const mouseElements = [...e.currentTarget.querySelectorAll(this.target)]

    mouseElements.forEach(el => {
      gsap.to(el, 1.2, {
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0,
      })
    })
  }
}

export default skewElement
