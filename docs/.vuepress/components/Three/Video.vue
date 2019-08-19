<template>
  <div ref="wrap" class="wrap">
    <video
      id="video"
      class="video"
      src="/video/sky.mp4"
      style="display: none; position: absolute; left: 15px; top: 75px;"
      controls="false"
      crossorigin="anonymous"
      autoplay
      loop
      muted
      playsinline
      preload
    />
    <div id="canvas" ref="canvas" class="canvas" />
  </div>
</template>

<script>
import { VideoScript } from './VideoScript'

export default {
  name: 'Video',
  data() {
    return {
      video: null,
    }
  },
  watch: {
    //
  },
  mounted() {
    this.video = new VideoScript({
      wrap: this.$refs.canvas,
    })
  },
  beforeDestroy() {
    this.video && this.video.destroy()
  },
  methods: {
    //
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
  font-size: 120px;
  font-weight: bold;
  color: #f1f1f1;
  // background-color: #111;
}

.video {
  z-index: 9;
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
