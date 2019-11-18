---
#sidebar: auto
---

# follow

## mouse - easing

<basic-FollowMouse />

```javascript
import { TweenLite } from 'gsap/TweenLite';

/**
 *  FollowMouse
 */
class FollowMouse {

  constructor($target, $wrapper = window, easing = .1) {
    this.$target = $target;
    this.$wrapper = $wrapper;
    this.easing = easing;

    /**
     * mouse position
     * @type {{x: number, y: number}}
     */
    this.mouse = {
      x: 0,
      y: 0
    };
    /**
     * target position
     * @type {{x: number, y: number}}
     */
    this.targetPosition = {
      x: 0,
      y: 0
    };

    const mouseEvent = (e) => this.getMousePosition(e);
    this.$wrapper.addEventListener('mousemove', mouseEvent);

    this.update();

  }

  /**
   * get mouse current position
   * @param e
   */
  getMousePosition(e) {
    this.mouse.x = this.$wrapper === window ? e.clientX : e.offsetX;
    this.mouse.y = this.$wrapper === window ? e.clientY : e.offsetY;
  }

  update() {
    /**
     * Damp the target position
     * current position + (target position - current position) * easing
     * @type {number}
     */
    this.targetPosition.x += (this.mouse.x - this.targetPosition.x) * this.easing;
    this.targetPosition.y += (this.mouse.y - this.targetPosition.y) * this.easing;

    TweenLite.set(this.$target, {
      x: this.targetPosition.x - this.$target.offsetWidth / 2,
      y: this.targetPosition.y - this.$target.offsetHeight / 2
    });

    const animationCall = () => this.update();
    requestAnimationFrame(animationCall);
  }

}

export default FollowMouse;

```

## mouse - spring

<basic-FollowMouseSpring />

```javascript
import { TweenLite } from 'gsap/TweenLite';

/**
 *  FollowMouse
 */
class FollowMouseSpring {

  constructor($target, $wrapper = window, power = .8) {

    this.$target = $target;
    this.$wrapper = $wrapper;
    this.power = power;
    /**
     * mouse position
     * @type {{x: number, y: number}}
     */
    this.mouse = {
      x: 0,
      y: 0
    };
    /**
     * target position
     * @type {{x: number, y: number}}
     */
    this.targetPosition = {
      x: 0,
      y: 0
    };
    /**
     * Spring Coefficient
     * @type {{x: number, y: number}}
     */
    this.springCoefficient = {
      x: 0,
      y: 0
    };

    const mouseEvent = (e) => this.getMousePosition(e);
    this.$wrapper.addEventListener('mousemove', mouseEvent);

    this.update();

  }

  /**
   * get mouse current position
   * @param e
   */
  getMousePosition(e) {

    this.mouse.x = e.offsetX;
    this.mouse.y = e.offsetY;

  }

  update() {

    /**
     * Damp the target position
     * @type {number}
     */
    this.springCoefficient.x += (this.mouse.x - this.targetPosition.x) * this.power;
    this.springCoefficient.y += (this.mouse.y - this.targetPosition.y) * this.power;
    this.targetPosition.x += (this.springCoefficient.x *= this.power * this.power);
    this.targetPosition.y += (this.springCoefficient.y *= this.power * this.power);

    this.setStyle();

    const animationCall = () => this.update();
    requestAnimationFrame(animationCall);

  }

  setStyle() {
    TweenLite.set(this.$target, {
      x: this.targetPosition.x - this.$target.offsetWidth / 2,
      y: this.targetPosition.y - this.$target.offsetHeight / 2,
    });
  }
}

export default FollowMouseSpring;

```

## mouse - transform

<basic-FollowMouseTransform />

```javascript
import { TweenLite } from 'gsap'

import math from './math'

/**
 *  FollowMouse
 */
class FollowMouseTransform {
  constructor($target, $wrapper = window, easeing = 0.1) {
    this.$target = $target
    this.$wrapper = $wrapper
    this.easing = easeing
    /**
     * mouse position
     * @type {{x: number, y: number}}
     */
    this.mouse = {
      x: 0,
      y: 0,
    }
    /**
     * target position
     * @type {{x: number, y: number}}
     */
    this.targetPosition = {
      x: 0,
      y: 0,
    }

    this.dist = 0

    const mouseEvent = e => this.getMousePosition(e)
    this.$wrapper.addEventListener('mousemove', mouseEvent)

    this.update()
  }

  /**
   * get mouse current position
   * @param e
   */
  getMousePosition(e) {
    this.mouse.x = e.offsetX
    this.mouse.y = e.offsetY
  }

  update() {
    /**
     * Damp the target position
     * current position + (target position - current position) * easing
     * @type {number}
     */
    this.targetPosition.y +=
      (this.mouse.y - this.targetPosition.y) * this.easing
    this.targetPosition.x +=
      (this.mouse.x - this.targetPosition.x) * this.easing

    this.getDist()
    this.setStyle()

    const animationCall = () => this.update()
    requestAnimationFrame(animationCall)
  }

  setStyle() {
    TweenLite.set(this.$target, {
      x: this.targetPosition.x - this.$target.offsetWidth / 2,
      y: this.targetPosition.y - this.$target.offsetHeight / 2,
      scale: this.getScale(),
    })
  }

  getScale() {
    return math.map(this.dist, 0, this.$wrapper.offsetWidth / 2, 1, 2)
  }

  getDist() {
    this.dist = math.distance(
      this.mouse.x,
      this.mouse.y,
      this.targetPosition.x,
      this.targetPosition.y,
    )
  }
}

export default FollowMouseTransform

```

## mouse spot light

<basic-FollowMouseSpotLight />
