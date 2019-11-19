<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <svg width="100%" height="100%" viewBox="-20 0 557 190" class="svg" id="svg">
      <path class="path" ref="path" id="path" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
    </svg>
    <div class="target" ref="target"></div>
  </section>
</template>

<script>
import { gsap, MotionPathPlugin } from 'gsap/all'
gsap.registerPlugin(MotionPathPlugin)

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
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #25ecb7;
  perspective: 800px;
}

.svg {
  transform: translateZ(0);
}

.path {
  stroke-width: 2;
  stroke: gray;
  fill: none
}
</style>
