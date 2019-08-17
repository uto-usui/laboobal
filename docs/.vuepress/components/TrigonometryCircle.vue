<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div v-for="index in 12" :ref="index" :key="index" class="target" />
  </section>
</template>

<script>
import TrigonometryCircle from './TrigonometryCircleScript'

export default {
  name: 'TrigonometryCircle',
  components: {},
  mounted() {
    this.$nextTick(() => {
      const anim = new TrigonometryCircle(
        [...this.$refs.wrap.querySelectorAll('.target')],
        2,
        this.$refs.wrap.offsetWidth,
        this.$refs.wrap.offsetHeight,
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
  perspective: 1200px;
}

.target {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #25ecb7;
}
</style>
