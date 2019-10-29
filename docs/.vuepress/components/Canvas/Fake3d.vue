<template>
  <div ref="wrap" class="wrap">
    <div
      id="gl"
      class="canvas"
      data-imageOriginal="/images/canvas/rose.jpg"
      data-imageDepth="/images/canvas/rose-map.jpg"
      data-horizontalThreshold="5"
      data-verticalThreshold="10">
    </div>
  </div>
</template>

<script>
//import { Fake3d } from './Fake3dScript'

export default {
  name: 'Fake3d',
  data() {
    return {
      shift: null,
    }
  },
  async mounted() {
    const {Fake3d} = await import(`./Fake3dScript`)
    new Fake3d()
  },
  beforeDestroy() {
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
