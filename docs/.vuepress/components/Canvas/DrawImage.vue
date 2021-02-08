<template>
  <div>
    <button @click="show">show</button>
    <canvas ref="canvas" class="canvas" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { DrawImage } from './DrawImageScript'

type DrawImageType = {
  drawImage: DrawImage | null
}

export default Vue.extend({
  name: 'DrawImage',
  data(): DrawImageType {
    return {
      drawImage: null,
    }
  },
  mounted() {
    const img = 'https://images.unsplash.com/photo-1608902918218-0f142aef5cfd'
    const canvas = this.$refs.canvas as HTMLCanvasElement

    this.drawImage = new DrawImage(canvas, img)
    this.drawImage.init()
  },
  beforeDestroy() {
    if (!this.drawImage) return

    this.drawImage.destroy()
  },
  methods: {
    show() {
      if (!this.drawImage) return

      this.drawImage.isShow = true
    },
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

  > button {
    position: relative;
    z-index: 2;
  }
}
</style>
