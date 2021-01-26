<template>
  <div>
    <canvas ref="canvas" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { DrawText } from './DrawTextScript'

export default Vue.extend({
  name: 'DrawText',

  mounted() {
    this.$nextTick(() => {
      const canvas = this.$refs.canvas as HTMLCanvasElement
      const drawText = new DrawText(canvas)

      drawText.init()
    })
  },
})
</script>

<style scoped lang="scss">
div {
  position: relative;
  height: 400px;
  overflow: scroll;
  //
  > canvas {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
