---
#sidebar: auto
---

# random

## colors

with css gradient 

<RandomColor />

```javascript
import {TweenMax} from 'gsap';
import math from './math';
import chroma from 'chroma-js';

class RandomColor {

  /**
   * ランダムなグラデーションカラーを生成する
   * シームレスなグラデーションとタイル状に描画するモードを選択する
   * 
   * @param target {HTMLElement}
   * @param length {number}
   * @param tile {boolean}
   * @param deg {number}
   * @returns {DragPinchSimple}
   */
  constructor(target, length = 30, tile = false, deg = 90) {

    /**
     * ターゲットとなる要素
     * @type {HTMLElement}
     */
    this.target = target;

    /**
     * グラデーションのカラーストップ数
     * @type {number}
     */
    this.length = length;

    /**
     * 描画モードの真偽値
     * @type {boolean}
     */
    this.tile = tile;

    /**
     * グラデーションの角度
     * @type {number}
     */
    this.deg = deg;

    /**
     * animation callback id
     * @type {number}
     */
    this.animationId = 0;

    this.init();

    return this;

  }

  /**
   * initialize
   */
  init() {
    this.play();
  }

  play() {

    TweenMax.set(this.target, {
      background: `linear-gradient(${this.deg}deg, ${this.getColor()})`,
    });

    this.animationId = requestAnimationFrame(() => this.play());

  }

  getColor() {

    let gradient = '';

    for (let i = 0; i < this.length; i++) {

      const color = chroma(math.random(100, 220), math.random(100, 255), math.random(180, 240)).css();
      gradient += color;

      if (this.tile && i !== this.length - 1) {
        gradient += ` ${100 / this.length * i}%, ${color} ${100 / this.length * (i + 1)}%,`;
      } else if (i === this.length - 1) {
        gradient += ` ${100 / this.length * i}%, ${color} ${100 / this.length * (i + 1)}%`;
      } else if (!this.tile && i !== this.length - 1) {
        gradient += ',';
      }

    }

    return gradient;

  }

  // destroy this instance
  destroy() {

    cancelAnimationFrame(this.animationId);

    this.target = null;
    this.length = 0;
    this.tile = false;
    this.animationId = 0;

  }

}

export default RandomColor;

```

## transform

<RandomTransform />

```javascript
import {TweenMax} from 'gsap';
import math from './math';

class RandomColor {

  /**
   * ランダムな値でオブジェクトを変形
   * @param target {HTMLElement}
   * @returns {DragPinchSimple}
   */
  constructor(target) {

    /**
     * ターゲットとなる要素
     * @type {HTMLElement}
     */
    this.target = target;

    /**
     * animation callback id
     * @type {number}
     */
    this.animationId = 0;

    this.init();

    return this;

  }

  /**
   * initialize
   */
  init() {
    this.play();
  }

  play() {
    
    TweenMax.set(this.target, {
      scaleX: math.random(.5, 2),
      scaleY: math.random(.5, 2),
      skewX: math.random(0, 360),
      skewY: math.random(0, 360),
      x: math.random(-150, 150),
      y: math.random(-150, 150),
    });

    this.animationId = requestAnimationFrame(() => this.play());

  }

  // destroy this instance
  destroy() {

    cancelAnimationFrame(this.animationId);

    this.target = null;
    this.animationId = 0;

  }

}

export default RandomColor;

```
