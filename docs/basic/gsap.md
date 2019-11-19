---
#sidebar: auto
---

# GSAP3 

* [GSAP](https://greensock.com/gsap/)
* [Docs](https://greensock.com/docs/)
* [Installation](https://greensock.com/docs/v3/Installation)

## basic

<basic-gsap-Basic />

```js
import { gsap, TextPlugin } from 'gsap/all'
gsap.registerPlugin(TextPlugin)

const { target } = this.$refs

gsap.to(target, {
  duration: 2,
  rotationY: 720,
  scale: 0.8,
  repeat: -1,
  yoyo: true,
  text: '0001',
  ease: 'none',
})
```

## random repeat

<basic-gsap-RandomRepeat />

```js
import { gsap } from 'gsap'
const { target } = this.$refs

gsap.to(target, {
  duration: 1,
  scale: 'random(0.5, 2)',
  rotationX: 'random(-360, 360)',
  rotationY: 'random(-360, 360)',
  rotationZ: 'random(-360, 360)',
  repeat: -1,
  repeatRefresh: true,
  ease: 'Power1.inOut',
})
```
## stagger grid

* [Advanced staggers in GSAP 3](https://codepen.io/GreenSock/pen/vYBRPbO)

<basic-gsap-Stagger />

```js
import { gsap } from 'gsap/all'

const { target } = this.$refs

gsap.to(target, {
  duration: 1.25,
  scale: 0.75,
  z: 100,
  repeat: -1,
  repeatDelay: 0.2,
  yoyo: true,
  ease: 'Sine.inOut',
  stagger: {
    amount: 1,
    grid: [10, 10],
    from: 'center',
  },
})
```

## timeline

<basic-gsap-Timeline />

```js
const { target } = this.$refs

const tl = gsap.timeline({
  repeat: -1,
  defaults: {
    ease: 'Power1.Out',
    duration: 1,
  }
})

tl.to(target, {
  scale: 0.5,
}).to(target, {
  rotation: 180,
}).to(target, {
  rotation: 0,
}).to(target, {
  scale: 1,
}, '-=1').to(target, {
  x: 100
}).to(target, {
  y: -100
}).to(target, {
  x: 0,
  y: 0,
})
```

## motion path

<basic-gsap-MotionPath />

```js
import { gsap, MotionPathPlugin } from 'gsap/all'
gsap.registerPlugin(MotionPathPlugin)

const { target, path } = this.$refs

gsap.set(target, {
  xPercent: -50,
  yPercent: -50,
  transformOrigin: '50% 50%',
})

gsap.to(target, {
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: 'power2.inOut',
  motionPath:{
    autoRotate: true,
    immediateRender: true,
    path: path,
    align: path,
  }
})
````

## utility methods

very useful functions ✨

* [UtilityMethods](https://greensock.com/docs/v3/GSAP/UtilityMethods)

### clamp

特定の範囲内に収まるように値を固定

> Clamp a value to fit within a specific range 

```js
gsap.utils.clamp(0, 100, 120) // 100
gsap.utils.clamp(0, 100, -120) // 0
```

### getUnit

文字列の単位を取得

> Get the unit of a string

```js
gsap.utils.getUnit('100px') // px
gsap.utils.getUnit('100%') // %
```

### interpolate

2つ以上の値を線形補間

> Interpolate between almost any two values

```js
gsap.utils.interpolate(0, 100, 0.5) // 50
gsap.utils.interpolate('10px', '20px', 0.5) // '15px'
gsap.utils.interpolate('red', 'blue', 0.5) // 'rgba(128, 0, 128, 1)'

// object
gsap.utils.interpolate({a:0, b: 100}, {a: 100, b: 200}, 0.5) // {a: 50, b: 150}

// array - mulch value
gsap.utils.interpolate([0, -200, 500], 0.75) // 150

// function
const interpolate = gsap.utils.interpolate(0, 100);
interpolate(0.5) // 50
interpolate(0.25) // 25
interpolate(1)  // 100
```

### mapRange

ある範囲を別の範囲にマッピング

> Map one range to another

```js
gsap.utils.mapRange(0, 10, 0, 100, 5) // 50
```

### normalize

範囲内の数値を0から1までの範囲にノーマライズ

> Map a number within a range to a progress between 0 to 1

```js
gsap.utils.normalize(0, 10, 5) // 0.5
```

### snap

配列内の最も近い値にスナップ

> Snap a value  to the closest value in an array

```js
snap([0, 5, 10], 7) // 5
```

### splitColor

任意の色を rgba or hsla に変換

> Split any color into its red, green, blue (and optionally alpha) components. Or hue, saturation, and brightness.

```js
gsap.utils.splitColor('green') // [0, 128, 0]
gsap.utils.splitColor('#25ecb7') // [37, 236, 183]

gsap.utils.splitColor('#25ecb7', true) // [164, 84, 54] - HSL
```


### wrap

指定した範囲に数値を配置して、最大値を超えると開始位置に戻り、最小値より小さい場合は終了位置から折り返すように

> Place a number into a specified range such that when it exceeds the maximum, it wraps back to the start and if it is less than the minimum, it wraps to the end. Or cycle through an Array such that when the provided index is greater than the length of the array, it wraps back to the start.

```js
gsap.utils.wrap(5, 10, 12) // 7
gsap.utils.wrap([0, 10, 20], 4) // 10
```
