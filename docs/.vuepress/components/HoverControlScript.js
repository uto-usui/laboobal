import _event from './utility/EventListener'

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
    this.target = target

    /**
     * マウスオーバーした時に実行する関数
     * @type {function}
     */
    this.overFunc = overFunc

    /**
     * マウスアウトした時に実行する関数
     * @type {function}
     */
    this.outFunc = outFunc

    /**
     * マウスが乗っているかどうか
     * @type {boolean}
     */
    this.isOver = false

    /**
     * アニメーションが進行中かどうか
     * @type {boolean}
     */
    this.isPlaying = false

    this.eventList = []

    this.init()

    return this
  }

  /**
   * initialize
   */
  init() {
    this.eventList.push(new _event(this.target, 'mouseover', this.rollOverHandle.bind(this)))
    this.eventList.push(new _event(this.target, 'mouseout', this.rollOutHandle.bind(this)))
  }

  /**
   * over handle
   * @param e {object} mouse event
   */
  rollOverHandle(e) {
//    console.log('rollOverHandle')
    this.isOver = true
    if (!this.isPlaying) {
      this.startRollOver(e)
    }
  }

  /**
   * out handle
   */
  rollOutHandle() {
//    console.log('rollOutHandle')
    this.isOver = false
    if (!this.isPlaying) {
      this.startRollOut()
    }
  }

  /**
   * roll over animation
   * @param e {object} mouse event
   * @returns {Promise<void>}
   */
  async startRollOver(e) {
//    console.log('startRollOver')
    this.isPlaying = true

    await this.overFunc.call(this, this.target, e)
    this.completeRollOver()
  }

  /**
   * roll out animation
   * @returns {Promise<void>}
   */
  async startRollOut() {
//    console.log('startRollOut')
    this.isPlaying = true

    await this.outFunc.call(this, this.target)
    this.completeRollOut()
  }

  /**
   * finished roll over animation
   */
  completeRollOver() {
//    console.log('completeRollOver')
    this.isPlaying = false
    if (!this.isOver) {
      this.startRollOut()
    }
  }

  /**
   * finished roll out animation
   */
  completeRollOut() {
    this.isPlaying = false
    if (this.isOver) {
      this.startRollOver()
    }
  }

  destroy() {
    this.eventList.forEach(event => event.destroy())
  }
}

export default HoverControl
