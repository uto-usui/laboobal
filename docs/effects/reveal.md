---
---

# reveal effects

## curtain

<RevealCurtain/>

```javascript
class RevealCurtain {

  /**
   * Constructor
   *
   * @param target {Element} DOM
   * @param direction {String} アニメーションの方向を決定します
   */
  constructor(target, direction) {

    this.target = target;
    this.direction = direction;

    this.layout();

  }

  /**
   * 高さを取得
   */
  getHeight() {

    return this.target.clientHeight;

  }

  /**
   * 幅を取得
   */
  getWidth() {

    return this.target.clientWidth;

  }

  /**
   * rectの初期値を返す
   * @returns {string}
   */
  initRect() {

    const height = this.getHeight(),
          width  = this.getWidth();

    console.log('height', height)
    console.log('width', width)

    if (this.direction === 'lr') {

      return `rect(0px 0px ${height}px 0px)`;

    } else if (this.direction === 'rl') {

      return `rect(0px ${width}px ${height}px ${width}px)`;
    } else if (this.direction === 'tb') {

      return `rect(0px ${width}px 0px 0px)`;

    } else if (this.direction === 'bt') {

      return `rect(${height}px ${width}px ${height}px 0px)`;

    }

  }

  /**
   * mask要素の作成
   */
  layout() {

    let position = getComputedStyle(this.target).position;

    if (position !== 'fixed' && position !== 'absolute' && position !== 'relative') {

      this.target.style.position = 'relative';

    }

    this._createMask();

    this.target.innerHTML = '<div class="block_inner" style="opacity: 0">' + this.target.innerHTML + '</div>';

    this.target.prepend(this.mask);
//    this.target.insertAdjacentHTML('afterbegin', this.mask);

  }

  /**
   * create mask
   * @type {HTMLElement}
   */
  _createMask() {

    this.mask = createDOMElement('div', 'block_mask');
    this.mask.style.position = 'absolute';
    this.mask.style.zIndex = 99;
    this.mask.style.top = 0;
    this.mask.style.left = 0;
    this.mask.style.right = 0;
    this.mask.style.bottom = 0;
    this.mask.style.backgroundColor = '#282828';

    console.log(this.mask)

//    this.mask.style.clip = this.initRect(this.direction)

    console.log('initRect', this.initRect())

    TweenMax.set(this.mask, {

      clip: this.initRect(this.direction),

    });

  }

  /**
   * アニメーション用のrectの値を取得する
   * @param width
   * @param height
   * @param end
   * @returns {string}
   */
  getRect(width, height, end) {

    let rect = {

      top: 0,
      right: 0,
      bottom: 0,
      left: 0,

    };

    if (this.direction === 'lr') {

      rect.bottom = height;
      rect.right = width;

      if (end) {

        rect.left = width;

      }

    } else if (this.direction === 'rl') {

      rect.bottom = height;
      rect.right = width;

      if (end) {

        rect.right = 0;

      }

    } else if (this.direction === 'tb') {

      rect.right = width;
      rect.bottom = height;

      if (end) {

        rect.top = height;

      }

    } else if (this.direction === 'bt') {

      rect.right = width;
      rect.bottom = height;

      if (end) {

        rect.bottom = 0;

      }

    }

    return `rect(${rect.top}px ${rect.right}px ${rect.bottom}px ${rect.left}px)`;

  }

  // public
  // - - - -- - - - - -  - - - -
  /**
   * アニメーション実行
   */
  anim() {

    const tl       = new TimelineMax({}),
          height   = this.getHeight(),
          width    = this.getWidth(),
          fromRect = this.getRect(width, height, false),
          toRect   = this.getRect(width, height, true),
          self     = this;

    tl.to(this.mask, .75, {

      clip: fromRect,
      ease: Power1.easeOut,

    }).add(() => {

      this.mask.nextElementSibling.style.opacity = 1;

    }).to(this.mask, .65, {

      clip: toRect,
      ease: Power3.easeOut,
      delay: .5,

    });

  }

}

/**
 *
 * @param type
 * @param className
 * @param content
 * @returns {HTMLElement}
 */
function createDOMElement(type, className, content) {
  let el = document.createElement(type);
  el.className = className || '';
  el.innerHTML = content || '';
  return el;
}

```
 
## clip


