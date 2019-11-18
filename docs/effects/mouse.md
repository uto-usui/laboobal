---
#sidebar: auto
---

# mouse effects

## tilt

<effects-EffectsTilt />

```javascript
import TweenLite from 'gsap/TweenLite';
import {Power2} from 'gsap/EasePack';
import 'gsap/CSSPlugin';

/**
 *
 */
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
  constructor(container, target, perspective = 1200, duration = 1, fixer = .02, reverse = false) {

    this.container = document.getElementById(container);
    this.targets = [...this.container.querySelectorAll(target)];
    this.perspective = perspective;
    this.dutation = duration;
    this.reverse = reverse ? 1 : -1;

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

      TweenLite.set(target, {transformPerspective: this.perspective});

      TweenLite.to(target, this.dutation, {
        x: (target.offsetLeft + pageX * speedX) * this.fixer,
        y: (target.offsetTop + pageY * speedY) * this.fixer,
        rotationX: tiltx * degree * this.reverse,
        rotationY: tilty * degree * this.reverse,
        ease: Power2.easeOut,
      });

    });

  }

  mouseLeave() {

    this.targets.forEach(el => {

      TweenLite.to(el, .85, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        ease: Power2.easeOut,
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
```

## skew

<effects-EffectsSkew />

```javascript
import TweenLite from 'gsap/TweenLite';
import 'gsap/CSSPlugin';

import _event from './utility/EventListener'

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

    this.app = document.getElementById(wrapper);
    this.target = target;
    this._eventList = []

    this.app && this.init();

  }

  init() {

    const handleMouseMove = (e) => this.mouseMoveFn(e);
    const handleMouseLeave = (e) => this.mouseLeaveFn(e);

    this._eventList.push(new _event(this.app, 'mousemove', handleMouseMove))
    this._eventList.push(new _event(this.app, 'mouseleave', handleMouseLeave))

  }

  destroy() {

    this._eventList.forEach(event => event.destroyed())

  }

  mouseMoveFn(e) {

    let xMouse = e.pageX - e.currentTarget.getBoundingClientRect().left - (e.currentTarget.offsetWidth / 2),
        yMouse = e.pageY - window.pageYOffset - e.currentTarget.getBoundingClientRect().top - (e.currentTarget.offsetHeight / 2);

    let mouseElements = [...e.currentTarget.querySelectorAll(this.target)];

    mouseElements.forEach(el => {

      let factor = el.dataset.mouseParallax,
          xFinal = xMouse * factor,
          yFinal = yMouse * factor;

      TweenLite.to(el, 1.2, {
        x: xFinal,
        y: yFinal,
        skewX: xFinal * 0.05,
        skewY: xFinal * 0.05,
      });

    });

  };

  mouseLeaveFn(e) {

    const mouseElements = [...e.currentTarget.querySelectorAll(this.target)];

    mouseElements.forEach(el => {

      TweenLite.to(el, 1.2, {
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0,
      });

    });

  };

}

export default skewElement;
```
