import {TweenMax} from 'gsap';

/**
 *  FollowMouse
 */
class FollowMouse {

  constructor($target, $wrapper = window, easeing = .1) {

    this.$target = $target;
    this.$wrapper = $wrapper;
    this.easing = easeing;
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

    this.mouse.x = e.offsetX;
    this.mouse.y = e.offsetY;

  }

  update() {

    /**
     * Damp the target position
     * current position + (target position - current position) * easing
     * @type {number}
     */
    this.targetPosition.x += (this.mouse.x - this.targetPosition.x) * this.easing;
    this.targetPosition.y += (this.mouse.y - this.targetPosition.y) * this.easing;

    TweenMax.set(this.$target, {
      x: this.targetPosition.x - this.$target.offsetWidth / 2,
      y: this.targetPosition.y - this.$target.offsetHeight / 2
    });

    const animationCall = () => this.update();
    requestAnimationFrame(animationCall);

  }

}

export default FollowMouse;
