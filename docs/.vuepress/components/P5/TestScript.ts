import * as p5 from 'p5'

/**
 * P5
 */

let circleWidth = 100
let wrapperW = 0
let wrapperH = 0
let speed = 3
let canvasId = ''
let posX = circleWidth / 2
let cbFunc

/**
 * Vue からリアクティブで変更される値を更新
 * @param width
 */
export const setWidth = (width: number) => {
  circleWidth = width
}

/**
 * vue から受け取る DOM のデータ
 */
export const setInitData = (id: string, w: number, h: number) => {
  canvasId = id
  wrapperW = w
  wrapperH = h
}

/**
 * 受けろった関数をローカルに格納
 * @param _cbFunc
 */
export const callBackOnP5 = (_cbFunc) => {
  cbFunc = _cbFunc
}

/**
 * draw で実行する関数
 * cd があれば実行する
 */
const drawCall = () => {
  cbFunc && cbFunc(posX - circleWidth / 2)
}

/**
 * P% のインスタンスに渡す関数
 * @param P5
 */
export const main = (P5: p5) => {
  // play
  P5.draw = () => {
    P5.background(2)

    // y 座標の移動量を求める
    const degree = P5.frameCount * 3
    const y = (P5.sin(P5.radians(degree)) * wrapperH) / 4

    P5.push()
    P5.translate(0, P5.height / 2)
    P5.ellipse(posX, y, circleWidth, circleWidth)
    P5.pop()

    posX += speed

    if (posX + circleWidth / 2 > P5.width || posX < circleWidth / 2) {
      speed *= -1
    }

    drawCall()
  }

  // init
  P5.setup = () => {
    const p5canvas = P5.createCanvas(wrapperW, wrapperH)
    p5canvas.parent(canvasId)
  }
}
