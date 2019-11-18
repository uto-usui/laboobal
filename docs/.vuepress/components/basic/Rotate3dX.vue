<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div v-for="index in 12" :ref="index" :key="index" class="target" />
  </section>
</template>

<script>
import Rotate3dXScript from './Rotate3dXScript'

export default {
  name: 'Rotate3dX',
  components: {},
  mounted() {
    this.$nextTick(() => {
      const anim = new Rotate3dXScript(
        [...this.$refs.wrap.querySelectorAll('.target')],
        2,
        this.$refs.wrap.offsetWidth,
        this.$refs.wrap.offsetHeight,
        this.$refs.wrap,
      )
      anim.play()
    })
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  overflow: hidden;
  height: 500px;
  background-color: #f1f1f1;
  transform-style: preserve-3d;
  perspective: 800px;
}

.target {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 48%;
  //
  mix-blend-mode: multiply;

  &:nth-of-type(3n) {
    background-color: #005257;
  }
  &:nth-of-type(3n + 1) {
    background-color: #befcfe;
  }
  &:nth-of-type(3n + 2) {
    background-color: #ff6473;
  }
}
</style>
