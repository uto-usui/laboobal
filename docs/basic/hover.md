---
#sidebar: auto
---

# hover

## timing control

### css

<HoverControlCss />

### js

<HoverControl />


```javascript
class HoverControl {

  /**
   * マウスオーバーした時のインタラクションのコントロール
   * アニメーションを必ず100%の進捗率まで進める
   *
   * @param target {HTMLElement}
   * @param overFunc {function} Promise を返す関数を受け取る
   * @param outFunc {function} Promise を返す関数を受け取る
   */
  constructor(target, overFunc, outFunc) {

    /**
     * ターゲット要素
     * @type {HTMLElement}
     */
    this.target = target;

    /**
     * マウスオーバーした時に実行する関数
     * @type {function}
     */
    this.overFunc = overFunc;

    /**
     * マウスアウトした時に実行する関数
     * @type {function}
     */
    this.outFunc = outFunc;

    /**
     * マウスが乗っているかどうか
     * @type {boolean}
     */
    this.isOver = false;

    /**
     * アニメーションが進行中かどうか
     * @type {boolean}
     */
    this.isPlaying = false;

    this.init();

    return this;

  }

  /**
   * initialize
   */
  init() {
    this.target.addEventListener('mouseover', this.rollOverHandle.bind(this));
    this.target.addEventListener('mouseout', this.rollOutHandle.bind(this));
  }

  /**
   * over handle
   * @param e {object} mouse event
   */
  rollOverHandle(e) {
    this.isOver = true;
    if (!this.isPlaying) {
      this.startRollOver(e);
    }
  }

  /**
   * out handle
   */
  rollOutHandle() {
    this.isOver = false;
    if (!this.isPlaying) {
      this.startRollOut();
    }
  };

  /**
   * roll over animation
   * @param e {object} mouse event
   * @returns {Promise<void>}
   */
  async startRollOver(e) {
    this.isPlaying = true;

    await this.overFunc.call(this, e);
    this.completeRollOver();
  };

  /**
   * roll out animation
   * @returns {Promise<void>}
   */
  async startRollOut() {
    this.isPlaying = true;

    await this.outFunc.call(this);
    this.completeRollOut();
  };

  /**
   * finished roll over animation
   */
  completeRollOver() {
    this.isPlaying = false;
    if (!this.isOver) {
      this.startRollOut();
    }
  };

  /**
   * finished roll out animation
   */
  completeRollOut() {
    this.isPlaying = false;
    if (this.isOver) {
      this.startRollOver();
    }
  };

  destroy() {
    this.target.removeEventListener('mouseover', this.rollOverHandle.bind(this));
    this.target.removeEventListener('mouseout', this.rollOutHandle.bind(this));
  }

}

export default HoverControl;

```

```javascript
import {TweenMax} from 'gsap';
import HoverControlScript from './HoverControlScript';

const el = document.getElementById('el');
const animationTarget = el.querySelector('.target__inner');

new HoverControlScript(el, (e) => {
  return new Promise(resolve => {

    TweenMax.set(animationTarget, {
      transformOrigin: '0% 50%',
    });

    TweenMax.to(animationTarget, 0.6, {
      scaleX: 1,
      backgroundColor: '#FF6473',
      ease: Expo.easeOut,
      onComplete: resolve,
    });

  });

}, () => {
  return new Promise(resolve => {

    TweenMax.set(animationTarget, {
      transformOrigin: '100% 50%',
    });

    TweenMax.to(animationTarget, 0.5, {
      scaleX: 0,
      ease: Expo.easeInOut,
      onComplete: resolve,
    });

  });
});

```

## rect

<HoverRect />

```javascript
import {TweenMax} from 'gsap';
import HoverControlScript from './HoverControlScript';

const over = (el, ev) => new Promise(resolve => {
  TweenMax.to(el, 0.6, {
    scale: 1,
    backgroundColor: '#FF6473',
    fontSize: '32px',
    borderWidth: '20px',
    ease: Expo.easeOut,
    onComplete: resolve,
  });
});

const out = (el) => new Promise(resolve => {
  TweenMax.to(el, 0.5, {
    scale: 1,
    backgroundColor: '#25ECB7',
    fontSize: '16px',
    borderWidth: '0px',
    ease: Expo.easeInOut,
    onComplete: resolve,
  });
});

[...this.$refs.target].forEach((el, i) => {
  new HoverControlScript(el, over, out);
});

```
