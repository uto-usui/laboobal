<template>
  <div ref="wrap" class="wrap">
    <canvas id="canvas" ref="canvas" class="canvas" />
  </div>
</template>

<script>
import ShiftImageScript from './ShiftImageScript'

export default {
  name: 'ShiftImage',
  data() {
    return {
      shift: null,
    }
  },
  mounted() {
    this.shift = new ShiftImageScript({
      canvas: this.$refs.canvas,
      wrap: this.$refs.wrap,
    })
  },
  beforeDestroy() {
    this.shift.destroy()
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
