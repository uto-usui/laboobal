<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div v-for="index in 20" ref="target" :key="index" class="target">
      {{ index }}
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap/all'
import HoverControlScript from './HoverControlScript'

export default {
  name: 'HoverRect',
  components: {},
  data() {
    return {
      hoverControl: [],
    }
  },
  mounted: function() {
    this.$nextTick(() => {
      const over = el =>
        new Promise(resolve => {
          gsap.to(el, 0.6, {
            scale: 1,
            backgroundColor: '#FF6473',
            fontSize: '32px',
            borderWidth: '20px',
            ease: 'Expo.easeOut',
            onComplete: () => {
              resolve()
            },
          })
        })

      const out = el =>
        new Promise(resolve => {
          gsap.to(el, 0.5, {
            scale: 1,
            backgroundColor: '#25ECB7',
            fontSize: '16px',
            borderWidth: '0px',
            ease: 'Expo.easeInOut',
            onComplete: () => {
              resolve()
            },
          })
        })

      ;[...this.$refs.target].forEach((el, i) => {
        this.hoverControl[i] = new HoverControlScript(el, over, out)
      })
    })
  },
  destroyed() {
    this.hoverControl.forEach((el) => {
      el.destroy()
    })
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  background-color: #f1f1f1;
  transform-style: preserve-3d;
  perspective: 400px;
}

.target {
  position: relative;
  z-index: 1;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5);
  height: calc(500px / 4);
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  background-color: #25ecb7;
  border: 0 solid white;
  //
  &:hover {
    z-index: 2;
  }
}
</style>
