<template>
  <div ref="wrap" class="wrap">
    <canvas id="canvas" ref="canvas" class="canvas" />
    <ul class="list">
      <li
        v-for="index in 2"
        ref="item"
        :key="`listItem${index}`"
        class="list__item"
      />
    </ul>
  </div>
</template>

<script>
import { ScaleScript } from './ScaleScript'

export default {
  name: 'ThreeScale',
  data() {
    return {
      scale: null,
    }
  },
  watch: {
    //
  },
  mounted() {
    this.scale = new ScaleScript({
      canvas: this.$refs.canvas,
      items: this.$refs.item,
    })
    this.scale.init()
  },
  beforeDestroy() {
    // this.video && this.video.destroy()
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

.canvas {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.list {
  position: relative;
  z-index: 9;
  padding: 0;
  margin: 0;
  list-style: none;
}

.list__item {
  width: 100px;
  height: 100px;
  padding: 0;
  margin: 0;
  background-color: #ff6473;
  //
  + .list__item {
    margin-top: 20px;
  }
}
</style>
