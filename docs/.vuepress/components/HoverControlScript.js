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

    this.init()

    return this
  }

  /**
   * initialize
   */
  init() {
    this.target.addEventListener('mouseover', this.rollOverHandle.bind(this))
    this.target.addEventListener('mouseout', this.rollOutHandle.bind(this))
  }

  /**
   * over handle
   * @param e {object} mouse event
   */
  rollOverHandle(e) {
    this.isOver = true
    if (!this.isPlaying) {
      this.startRollOver(e)
    }
  }

  /**
   * out handle
   */
  rollOutHandle() {
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
    this.isPlaying = true

    await this.overFunc.call(this, this.target, e)
    this.completeRollOver()
  }

  /**
   * roll out animation
   * @returns {Promise<void>}
   */
  async startRollOut() {
    this.isPlaying = true

    await this.outFunc.call(this, this.target)
    this.completeRollOut()
  }

  /**
   * finished roll over animation
   */
  completeRollOver() {
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
    this.target.removeEventListener('mouseover', this.rollOverHandle.bind(this))
    this.target.removeEventListener('mouseout', this.rollOutHandle.bind(this))
  }
}

export default HoverControl
