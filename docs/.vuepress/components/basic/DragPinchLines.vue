<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div v-for="index in 80" ref="target" :key="index" class="target">
      <div class="target__inner" />
    </div>
    <div ref="ball" class="ball" />
  </section>
</template>

<script>
import DragPinchLinesScript from './DragPinchLinesScript'
import DragPinchMinimizeScript from './DragPinchMinimizeScript'

export default {
  name: 'DragPinchLines',
  components: {},
  data() {
    return {
      dragPinch: [],
      dragPinchBall: {},
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.target.forEach((el, i) => {
        this.dragPinch[i] = new DragPinchLinesScript(el, this.$refs.wrap, 0.075)
      })

      this.dragPinchBall = new DragPinchMinimizeScript(
        this.$refs.ball,
        this.$refs.wrap,
        0.1,
      )
    })
  },
  beforeDestroy() {
    this.dragPinch.forEach((el) => {
      el.destroy()
    })
    this.dragPinch = []
    this.dragPinchBall.destroy()
    this.dragPinchBall = {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #f1f1f1;
  transform-style: preserve-3d;
  perspective: 400px;
}

.target {
  position: absolute;
  z-index: 2;
  width: 1px;
  height: 1px;
  background-color: #25ecb7;
}

.ball {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: #25ecb7;
}
</style>
