import _event from './utility/EventListener';

class ScrollRevealProgress {

  constructor(target, callbackIn, callbackOut, offset = 150, wrapper = window, always = true) {

    /**
     * ターゲット要素
     * @type {HTMLElement}
     */
    this.target = target;

    /**
     * ラッパー要素
     * @type {HTMLElement}
     */
    this.wrapper = wrapper;

    /**
     * 要素が見え始めてからのオフセット
     * @type {number}
     */
    this.offset = offset;

    /**
     * 見え始めたときのコールバック
     * @type {Function}
     */
    this.callbackIn = typeof callbackIn === 'function' ? callbackIn : () => {
    };

    /**
     * 見切れたときのコールバック関数
     * @type {Function}
     */
    this.callbackOut = typeof callbackOut === 'function' ? callbackOut : () => {
    };

    /**
     * 常にコールバック関数を実行するかどうか
     * false だと スクロール値が変わった時にだけ実行する
     * @type {boolean}
     */
    this.always = always;

    /**
     * 可視範囲に入っているかの審議値
     * @type {boolean}
     */
    this.show = false;

    /**
     * ラッパーの高さ
     * @type {number}
     */
    this.wrapHeight = 0;

    /**
     * ラッパーからターゲットまでの距離
     * @type {number}
     */
    this.offsetTop = 0;

    /**
     * ターゲットの高さ
     * @type {number}
     */
    this.targetHeight = 0;

    /**
     * コールバック関数に渡す進捗率 0 ~ 1
     * @type {number}
     */
    this.progress = 0;

    /**
     * requestAnimationFrame の id
     * @type {number}
     */
    this.animationId = 0;

    this.eventList = [];

    this.init();

    return this;

  }

  get scrollY() {
    return this._scrollY;
  }

  set scrollY(value) {

    if (this._scrollY === value && !this.always) {
      return;
    }

    // スクロール値が変わった時にだけ実行
    this.check();

    this._scrollY = value;

  }

  /**
   * initialize
   */
  init() {

    const resizeHandle = () => this.resize();
    this.eventList.push(new _event(window, 'resize', resizeHandle));

    this.getItemInfo();
    this.play();

  }

  /**
   * ターゲットとラッパーの 高さと位置を取得する
   */
  getItemInfo() {

//    console.log('getItemInfo');

    // ラッパーの高さをセット
    this.wrapHeight = (this.wrapper === window) ? window.innerHeight : this.wrapper.offsetHeight;

    const rect = this.target.getBoundingClientRect();

    // ラッパーが window 以外の時はラッパーのオフセットを引く
    if (this.wrapper === window) {

      this.offsetTop = rect.top;

    } else {

      const _rect = this.wrapper.getBoundingClientRect();
      this.offsetTop = rect.top - _rect.top;

    }

    //ターゲットの高さをセット
    this.targetHeight = this.target.offsetHeight;

  }

  play() {

    // スクロール値
    this.scrollY = this.wrapper === window ? this.wrapper.pageYOffset : this.wrapper.scrollTop;

    this.animationId = requestAnimationFrame(() => this.play());

  }

  check() {

    this.show = (this.scrollY + this.wrapHeight > this.offsetTop + this.offset) && (this.scrollY < this.offsetTop + this.targetHeight);
    const value = this.scrollY + this.wrapHeight - this.offsetTop - this.offset;

    this.progress = value / (this.wrapHeight - this.offset + this.targetHeight);

    if (this.show) {

      this.callbackIn.call(this, this.progress);

    } else {

      this.callbackOut.call(this, this.progress);

    }

  }

  resize() {
    this.getItemInfo();
  }

  destroy() {

    cancelAnimationFrame(this.animationId);

    this.eventList.forEach(event => event.destroy());

    this.target = null;
    this.wrapper = null;
    this.offset = 0;
    this.callbackIn = null;
    this.callbackOut = null;
    this.show = false;
    this.wrapHeight = 0;
    this.offsetTop = 0;
    this.targetHeight = 0;
    this.progress = 0;
    this.animationId = 0;

  }

}

export default ScrollRevealProgress;
