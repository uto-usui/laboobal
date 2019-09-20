<template>
  <div ref="box" />
</template>

<script>
import DrawSvgScript from './DrawSvgScript'

export default {
  name: '',
  mounted() {
    new DrawSvgScript(this.$refs.box, '/images/logo/vogue.svg')
  },
}
</script>

<style scoped lang="scss">
div {
  position: relative;
  height: 400px;
  overflow: scroll;
  //
  /deep/ canvas {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
