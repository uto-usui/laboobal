class math {

  /**
   * 新しい範囲における現在の値を、現在の範囲を元に変換して返す
   * map(a, b, c, d, e)   aを範囲b-cから別の範囲d-eへ変換する
   * @param value {number}
   * @param fromMin {number} 変換前の最小
   * @param fromMax {number} 変換前の最大
   * @param toMin {number} 変換後の最小
   * @param toMax {number} 変換後の最大
   */
  static map = (value, fromMin, fromMax, toMin, toMax) => {

    return (value <= fromMin)
      ? toMin : (value >= fromMax)
        ? toMax : (() => {

          const ratio = (toMax - toMin) / (fromMax - fromMin);
          return (value - fromMin) * ratio + toMin;

        })();

  };

  /**
   * 線形補間 0から1のまでの値を、任意の範囲に相当する値に変換する。
   * @param x {number} start
   * @param y {number} end
   * @param p {number} value
   * @returns {number}
   */
  static lerp = (x, y, p) => x + (y - x) * p;

  /**
   * ノーマライズ 任意の範囲のある値を、0から1の範囲の値に変換する。
   * @param x {number}
   * @param y {number}
   * @param p {number}
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
  static distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

  /**
   * 角度をラジアンに変換する
   * @param angle {number}
   * @returns {number}
   */
  static angleToRadian = angle => angle * Math.PI / 180;

  /**
   * 最小値と最大値を指定したランダムな値を返す
   * @param min {number}
   * @param max {number}
   * @returns {*}
   */
  static random = (min, max) => Math.random() * (max - min) + min;


}

export default math;
