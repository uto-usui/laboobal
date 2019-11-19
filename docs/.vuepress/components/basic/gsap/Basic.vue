<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div ref="target" class="target">1</div>
  </section>
</template>

<script>
import { gsap, TextPlugin } from 'gsap/all'
gsap.registerPlugin(TextPlugin)

export default {
  name: 'Basic',
  components: {},
  data() {
    return {
      //
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.animation();
    })
  },
  destroyed() {
    //
  },
  methods: {
    animation() {
      const { target } = this.$refs

      gsap.to(target, {
        duration: 3,
        rotationY: 720,
        scale: 0.8,
        repeat: -1,
        yoyoEase: 'power2.in',
        text: '0001',
        ease: 'power2.out',
      })
    },
  },
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: #f1f1f1;
  transform-style: flat;
  perspective: 100px;
}

.target {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #25ecb7;
  perspective: 800px;
}
</style>
