<template>
  <div ref="wrap" class="wrap">
    <canvas id="canvas" class="canvas" ref="canvas" />
  </div>
</template>

<script>
import GlitchScript from './GlitchScript'

export default {
  name: 'GlitchImage',
  data() {
    return {
      glitch: null
    }
  },
  mounted() {
    this.glitch = new GlitchScript({
      canvas: this.$refs.canvas,
      wrap: this.$refs.wrap,
    })
  },
  beforeDestroy() {
    this.glitch.destroy()
  },
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  font-family: 'helvetica neue', helvetica, sans-serif;
  background-color: #111;
}

.canvas {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
