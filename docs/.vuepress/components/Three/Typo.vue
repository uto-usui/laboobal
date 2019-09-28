<template>
  <div ref="wrap" class="wrap">
    <canvas id="canvas" ref="canvas" class="canvas" />
  </div>
</template>

<script>
// import { CanvasManager } from './CanvasManager'
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
  position: relative;
  z-index: 9999;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
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
  width: 100%;
  height: 100%;
}
</style>
