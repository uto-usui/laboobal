import { gsap } from 'gsap/all'

class tilt {
  /**
   *
   * @param container {String} マウスの動かす領域
   * @param target {String} 動かす対象
   * @param perspective {Number} Z 深度の係数
   * @param duration {Number} 動くスピード
   * @param fixer {Number} エフェクトを軽減する度合
   * @param reverse {Boolean} 傾きの z 深度を反転させる
   */
  constructor(
    container,
    target,
    perspective = 1200,
    duration = 1,
    fixer = 0.02,
    reverse = false,
  ) {
    this.container = document.getElementById(container)
    this.targets = [...this.container.querySelectorAll(target)]
    this.perspective = perspective
    this.dutation = duration
    this.reverse = reverse ? 1 : -1
    this.fixer = fixer

    this.addEvent()
    this.leaveEvent()
  }

  mouseMove(event) {
    const pageX = event.layerX - this.container.offsetWidth * 0.5
    const pageY = event.layerY - this.container.offsetHeight * 0.5

    this.targets.forEach((el) => {
      const target = el
      const speedX = target.dataset.speedX
      const speedY = target.dataset.speedY
      const tiltx = pageY / (this.container.offsetWidth * 0.5)
      const tilty = (pageX / (this.container.offsetHeight * 0.5)) * -1
      const radius = Math.sqrt(tiltx ** 2 + tilty ** 2)
      const degree = radius * 15

      gsap.set(target, { transformPerspective: this.perspective })

      gsap.to(target, this.dutation, {
        x: (target.offsetLeft + pageX * speedX) * this.fixer,
        y: (target.offsetTop + pageY * speedY) * this.fixer,
        rotationX: tiltx * degree * this.reverse,
        rotationY: tilty * degree * this.reverse,
        ease: 'Power2.out',
      })
    })
  }

  mouseLeave() {
    this.targets.forEach((el) => {
      gsap.to(el, 0.85, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        ease: 'Power2.out',
      })
    })
  }

  addEvent() {
    const event = (e) => this.mouseMove(e)
    this.container.addEventListener('mousemove', event)
  }

  leaveEvent() {
    const event = (e) => this.mouseLeave(e)
    this.container.addEventListener('mouseleave', event)
  }
}

export default tilt
