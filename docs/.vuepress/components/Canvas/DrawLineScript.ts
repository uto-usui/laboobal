export class DrawLineScript {
  private target: HTMLElement
  /**
   * constructor.
   *
   * @param target
   */
  constructor(target: HTMLElement) {
    this.target = target

    this.init()

    return this
  }

  /**
   * init
   * load image
   */
  init() {
    console.log('🎉 init DrawLineScript')
  }
}

export default DrawLineScript
