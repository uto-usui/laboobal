---
#sidebar: auto
---

# mouse effects

## tilt

<EffectsTilt />

```javascript
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
new tilt('wrap', '.js-item');
```

## skew

<EffectsSkew />

```javascript
class skewElement {

  /**
   *
   * @param target {Object}
   * @param wrapper {Object} ID
   */
  constructor(wrapper, target) {

    const mouseMovefn = (e) => {

      let xMouse = e.pageX - e.currentTarget.getBoundingClientRect().left - (e.currentTarget.offsetWidth / 2),
          yMouse = e.pageY - window.pageYOffset - e.currentTarget.getBoundingClientRect().top - (e.currentTarget.offsetHeight / 2);

      let mouseElements = [...e.currentTarget.querySelectorAll(target)];

      mouseElements.forEach(elem => {

        let factor = elem.dataset.mouseParallax,
            xFinal = xMouse * factor,
            yFinal = yMouse * factor;

        TweenMax.to(elem, 1.2, {
          x: xFinal,
          y: yFinal,
          skewX: xFinal * 0.05,
          skewY: xFinal * 0.05
        });

      });

    };

    const mouseleavefn = (e) => {

      const mouseElements = [...e.currentTarget.querySelectorAll(target)];

      mouseElements.forEach(elem => {

        TweenMax.to(elem, 1.2, {
          x: 0,
          y: 0,
          skewX: 0,
          skewY: 0
        });

      });

    };

    let app = document.getElementById(wrapper);
    app &&
    app.addEventListener('mousemove', mouseMovefn),
      app.addEventListener('mouseleave', mouseleavefn);

  }

}
```
