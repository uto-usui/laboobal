import isMobile from 'ismobilejs';
import _event from './utility/EventListener'

class DragPinch {

  /**
   * ドラッグに応じてオブジェクトを動かす動き
   *
   * @param target {HTMLElement}
   * @param wrapper
   * @param callBack
   */
  constructor(target, wrapper = window, callBack) {

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
     * コールバック {function}
     */
    this.callBack = callBack;

    // マウス
    this.mouse = {
      isDown: false, // マウスダウンの真偽値
      x: 0, // マウス位置 X
      y: 0, // マウス位置 Y
      start: { // マウスダウン座標
        x: 0,
        y: 0,
      },
      dist: { // ドラッグ距離
        x: 0,
        y: 0,
      },
    };

    /**
     * requestAnimationFrame の id
     * @type {number}
     */
    this.animationId = 0;

    this.eventList = [];

    this.init();

    return this;

  }


  /**
   * initialize
   */
  init() {

    const downHandle = (e) => this.downHandle(e);
    const moveHandle = (e) => this.moveHandle(e);
    const upHandle = (e) => this.upHandle(e);

    if (isMobile.any) {
      this.eventList.push(new _event(document, 'touchmove', moveHandle));
      this.eventList.push(new _event(document, 'touchstart', downHandle));
      this.eventList.push(new _event(document, 'touchend', upHandle));
    } else {
      this.eventList.push(new _event(window, 'mousemove', moveHandle));
      this.eventList.push(new _event(window, 'mousedown', downHandle));
      this.eventList.push(new _event(window, 'mouseup', upHandle));
    }

    this.play();

  }

  play() {

    if (this.mouse.isDown) {

      // ドラッグ距離
      this.mouse.dist.x = this.mouse.x - this.mouse.start.x;
      this.mouse.dist.y = this.mouse.y - this.mouse.start.y;

    } else {

      // リセット
      this.mouse.dist.x = 0;
      this.mouse.dist.y = 0;

    }

    // マウスのドラッグ距離を与えて実行するコールバック
    this.callBack.call(this, {target: this.target, param: this.mouse.dist});

    this.animationId = window.requestAnimationFrame(() => this.play());
  }

  /**
   * ドラッグ
   * @param e
   * @private
   */
  moveHandle(e) {

    if (isMobile.any) {
      e.preventDefault();
      const touches = e.touches;
      if (touches != null && touches.length > 0) {
        this.mouse.x = touches[0].pageX;
        this.mouse.y = touches[0].pageY;
      }
    } else {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }

  }

  /**
   * マウス押した
   * @param e
   * @private
   */
  downHandle(e) {

    if (!this.mouse.isDown) {
      this.mouse.isDown = true;
      if (isMobile.any) {
        e.preventDefault();
        const touches = e.touches;
        if (touches != null && touches.length > 0) {
          this.mouse.start.x = this.mouse.x = touches[0].pageX;
          this.mouse.start.y = this.mouse.y = touches[0].pageY;
        }
      } else {
        this.mouse.start.x = e.clientX;
        this.mouse.start.y = e.clientY;
      }
    }

  }

  /**
   * マウスを離した
   * @private
   */
  upHandle() {
    this.mouse.isDown = false;
  }

  destroy() {
    cancelAnimationFrame(this.animationId);

    this.target = null;
    this.wrapper = null;
    this.ease = 0;
    this.mouse = null;
    this.animationId = 0;

    this.eventList.forEach(event => event.destroy());
  }

}

export default DragPinch;
