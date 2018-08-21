
import {TweenMax, Expo} from 'gsap'

/**
 *
 */
/**
 *
 * @param target {object} element id
 */
class skewElement {

  /**
   *
   * @param target {Object}
   * @param wrapper {Object} ID
   */
  constructor(wrapper, target) {

    const mouseMovefn = (e) => {

      let xMouse = e.pageX - e.currentTarget.getBoundingClientRect().left - (e.currentTarget.offsetWidth / 2),
          yMouse = e.pageY - window.pageYOffset - e.currentTarget.getBoundingClientRect().top - (e.currentTarget.offsetHeight / 2);

      let mouseElements = [...e.currentTarget.querySelectorAll(target)];

      mouseElements.forEach(elem => {

        let factor = elem.dataset.mouseParallax,
            xFinal = xMouse * factor,
            yFinal = yMouse * factor;

        TweenMax.to(elem, 1.2, {
          x: xFinal,
          y: yFinal,
          skewX: xFinal * 0.05,
          skewY: xFinal * 0.05
        });

      });

    };

    const mouseleavefn = (e) => {

      const mouseElements = [...e.currentTarget.querySelectorAll(target)];

      mouseElements.forEach(elem => {

        TweenMax.to(elem, 1.2, {
          x: 0,
          y: 0,
          skewX: 0,
          skewY: 0
        });

      });

    };

    let app = document.getElementById(wrapper);
    app &&
    app.addEventListener('mousemove', mouseMovefn),
      app.addEventListener('mouseleave', mouseleavefn);

  }

}

export default skewElement;
