/**
 * ソートした結果の最上位のオブジェクトを返す
 * @param arr
 * @param comparator
 * @returns {*}
 */
export const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a))

// example
//
// reduceWhich([1, 3, 2]) // 1
// reduceWhich([1, 3, 2], (a, b) => b - a) // 3
// reduceWhich(
//  [{ name: 'Tom', age: 12 }, { name: 'Jack', age: 18 }, { name: 'Lucy', age: 9 }],
//  (a, b) => a.age - b.age,
// ) // {name: "Lucy", age: 9}

/**
 * 配列の中から一番近い値を返す
 * @param array
 * @param findValue
 * @returns {{index: number, value: *}}
 */
export const findClosest = (array, findValue) => {
  const diff = []
  let index = 0

  array.forEach((val, i) => {
    diff[i] = Math.abs(findValue - val)
    index = diff[index] < diff[i] ? index : i
  })
  const value = array[index]
  return { index, value }
}

// example
//
// const findValue = 100
// const array = [1, 109, 13, 70, 251]
//
// console.log(findClosestIndex(array, findValue))
