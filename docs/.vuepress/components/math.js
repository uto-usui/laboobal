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
   * ラジアンを角度に変換する
   * @param radian {number}
   * @returns {number}
   */
  static radianToAngle = radian => radian * 180 / Math.PI;

  /**
   * ２点間の角度を求める
   * @param x2 {number}
   * @param y2 {number}
   * @param x {number}
   * @param y {number}
   * @returns {number}
   */
  static getRadian = (x2, y2, x = 0, y = 0) => Math.atan2(y2 - y, x2 - x);

  /**
   * 最小値と最大値を指定したランダムな値を返す
   * @param min {number}
   * @param max {number}
   * @returns {number}
   */
  static random = (min, max) => Math.random() * (max - min) + min;

  /**
   * 最小値と最大値を指定したランダムな整数値を返す
   * @param min {number}
   * @param max {number}
   * @returns {number}
   */
  static randomInt = (min, max) => Math.trunc(Math.random() * (max - min + 1)) + min;

  /**
   * ランダムに配列内の要素を返す
   * @param arr {array}
   * @returns {*}
   */
  static randomArr = (arr) => arr[this.randomInt(0, arr.length - 1)];

  /**
   * range の確率で true を返す
   * @param range
   * @returns {boolean}
   */
  static rangeBoolean = (range) => (this.randomInt(0, range - 1) === 0);

  /**
   * min ~ max に value が当てはまるとき 0 ~ 1 を返す
   * @param min {number}
   * @param max {number}
   * @param value {number}
   * @returns {number}
   */
  static aperture = (min, max, value) => (value - (max - min)) / min;

  /**
   * 2D座標回転
   * @param cx {number}
   * @param cy {number}
   * @param x {number}
   * @param y {number}
   * @param ang {number}
   * @returns {<number>[]}
   */
  static rotate2d = (cx, cy, x, y, ang) => {

    const rad = (Math.PI / 180) * ang,
          cos = Math.cos(rad),
          sin = Math.sin(rad),
          nx  = (cos * (x - cx)) + (sin * (y - cy)) + cx,
          ny  = (cos * (y - cy)) - (sin * (x - cx)) + cy;

    return [nx, ny];

  };

  /**
   * X軸を基準に回転
   * x / y / z 座標をもつオブジェクトを受け取って、そのオブジェクトを更新する
   *
   * @param obj {object} 3Dの座標をもつオブジェクト
   * @param angle {number} 移動したい角度 ラジアン
   */
  static rotateX(obj, angle) {

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const y = obj.y * cos - obj.z * sin;
    const z = obj.z * cos + obj.y * sin;

    obj.y = y;
    obj.z = z;

  }

  /**
   * y軸を基準に回転
   * x / y / z 座標をもつオブジェクトを受け取って、そのオブジェクトを更新する
   *
   * @param obj {object} 3Dの座標をもつオブジェクト
   * @param angle {number} 移動したい角度 ラジアン
   */
  static rotateY(obj, angle) {

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const x = obj.x * cos - obj.z * sin;
    const z = obj.z * cos + obj.x * sin;

    obj.x = x;
    obj.z = z;

  }

  /**
   * z軸を基準に回転
   * x / y / z 座標をもつオブジェクトを受け取って、そのオブジェクトを更新する
   *
   * @param obj {object} 3Dの座標をもつオブジェクト
   * @param angle {number} 移動したい角度 ラジアン
   */
  static rotateZ(obj, angle) {

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const x = obj.x * cos - obj.y * sin;
    const y = obj.y * cos + obj.x * sin;

    obj.x = x;
    obj.y = y;

  }


}

export default math;
