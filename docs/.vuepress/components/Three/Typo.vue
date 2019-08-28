<template>
  <div ref="wrap" class="wrap">
    <div id="canvas" ref="canvas" class="canvas" />
  </div>
</template>

<script>
// import { TypoScript } from './TypoScript'
import { pause } from '../utility/animation'
import { TypoInit } from './TypoInit'

export default {
  name: 'ThreeTypo',
  data() {
    return {
      canvas: null,
      frameID: null,
      updateFunction: null,
    }
  },
  watch: {
    //
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    cancelAnimationFrame(this.frameID)
    this.canvas.finish()
  },
  methods: {
    async init() {
      this.canvas = new TypoInit({ wrap: this.$refs.canvas })
      this.canvas.start()
      //
      this.updateFunction = this.update.bind(this)
      await pause(1)
      this.update()
    },
    update() {
      this.frameID = requestAnimationFrame(this.updateFunction)
      this.canvas.update()
    },
  },
}
</script>

<style scoped lang="scss">
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: 'helvetica neue', helvetica, sans-serif;
  font-size: 120px;
  font-weight: bold;
  color: #f1f1f1;
  // background-color: #111;
}

.canvas {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
