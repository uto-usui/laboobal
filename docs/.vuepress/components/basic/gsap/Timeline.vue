<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div ref="target" class="target">🐈</div>
  </section>
</template>

<script>
import { gsap } from 'gsap/all'

export default {
  name: 'Timeline',
  components: {},
  data() {
    return {
      //
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.animation()
    })
  },
  destroyed() {
    //
  },
  methods: {
    animation() {
      const { target } = this.$refs

      const tl = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: 'Power1.Out',
          duration: 1,
        },
      })

      tl.to(target, {
        scale: 0.5,
      })
        .to(target, {
          rotation: 180,
        })
        .to(target, {
          rotation: 0,
        })
        .to(
          target,
          {
            scale: 1,
          },
          '-=1',
        )
        .to(target, {
          x: 100,
        })
        .to(target, {
          y: -100,
        })
        .to(target, {
          x: 0,
          y: 0,
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
