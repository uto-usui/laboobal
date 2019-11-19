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
