
class math {

  /**
   * 新しい範囲における現在の値を、現在の範囲を元に変換して返す
   * map(a, b, c, d, e)   aを範囲b-cから別の範囲d-eへ変換する
   * @param value {Number}
   * @param fromMin {Number} 変換前の最小
   * @param fromMax {Number} 変換前の最大
   * @param toMin {Number} 変換後の最小
   * @param toMax {Number} 変換後の最大
   */
  static map = (value, fromMin, fromMax, toMin, toMax) => {

    let result = 0;

    result = (value <= fromMin)
      ? toMin : (value >= fromMax)
        ? toMax : (() => {

          let ratio = (toMax - toMin) / (fromMax - fromMin);
          return (value - fromMin) * ratio + toMin;

        })();

    return result;

  };

  /**
   * 線形補間 0から1のまでの値を、任意の範囲に相当する値に変換する。
   * @param x
   * @param y
   * @param p
   * @returns {Number}
   */
  static lerp = (x, y, p) => x + (y - x) * p;

  /**
   * ノーマライズ 任意の範囲のある値を、0から1の範囲の値に変換する。
   * @param x {Number}
   * @param y {Number}
   * @param p {Number}
   * @returns {number}
   */
  static norm = (x, y, p) => (p - x) / (y - x);

  /**
   * ２点間の距離を求める
   * @param x0 {number}
   * @param y0 {number}
   * @param x1 {number}
   * @param y1 {number}
   * @returns {number}
   */
  static distance =  (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);


}

export default math;
