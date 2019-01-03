import { TweenLite } from 'gsap';

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
