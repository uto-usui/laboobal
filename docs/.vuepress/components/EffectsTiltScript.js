
import {TweenMax, Power2} from 'gsap'

/**
 *
 */
class tilt {

  /**
   *
   * @param container {String} マウスの動かす領域
   * @param target {String} 動かす対象
   * @param perspective {Number}
   * @param duration {Number} 動くスピード
   */
  constructor(container, target, perspective = 1200, duration = 1) {

    this.container = document.getElementById(container);
    this.targets = [...this.container.querySelectorAll(target)];
    this.fixer = 0.02;
    this.perspective = perspective;
    this.dutation = duration;

    this.addEvent();
    this.leaveEvent();
  }

  mouseMove(event) {

    const pageX = event.layerX - this.container.offsetWidth * 0.5;
    const pageY = event.layerY - this.container.offsetHeight * 0.5;

    this.targets.forEach(el => {
      const target = el;
      const speedX = target.dataset.speedX;
      const speedY = target.dataset.speedY;
      const tiltx = pageY / (this.container.offsetWidth * 0.5);
      const tilty = pageX / (this.container.offsetHeight * 0.5) * -1;
      const radius = Math.sqrt(tiltx ** 2 + tilty ** 2);
      const degree = radius * 15;

      TweenMax.set(target, {transformPerspective: this.perspective});

      TweenMax.to(target, this.dutation, {
        x: (target.offsetLeft + pageX * speedX) * this.fixer,
        y: (target.offsetTop + pageY * speedY) * this.fixer,
        rotationX: tiltx * degree,
        rotationY: tilty * degree,
        ease: Power2.easeOut
      });
    });

  }

  mouseLeave() {
    this.targets.forEach(el => {
      const target = el;

      TweenMax.to(target, .85, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        ease: Power2.easeOut
      });
    });
  }

  addEvent() {
    const event = (e) => this.mouseMove(e);
    this.container.addEventListener('mousemove', event);
  }

  leaveEvent() {
    const event = (e) => this.mouseLeave(e);
    this.container.addEventListener('mouseleave', event);
  }

}

export default tilt;
