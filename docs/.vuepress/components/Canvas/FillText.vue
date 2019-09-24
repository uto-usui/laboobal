<template>
  <div ref="wrap" class="wrap">
    <canvas ref="canvas" class="canvas" />
  </div>
</template>

<script>
import { FillTextScript } from './FillTextScript'

export default {
  name: 'FillText',
  data() {
    return {
      FillText: null,
    }
  },
  mounted() {
    this.FillText = new FillTextScript({
      wrap: this.$refs.wrap,
      canvas: this.$refs.canvas,
    })
  },
  beforeDestroy() {
    if (this.FillText) {
      this.FillText.destroy()
      this.FillText = null
    }
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
  height: 700px;
  font-family: 'Helvetica Neue', helvetica, sans-serif;
  // background-color: #111;
}

.canvas {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
