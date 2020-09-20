<template>
  <div ref="box" />
</template>

<script>
import Vue from 'vue'

import { DrawLineScript } from './DrawLineScript'

export default Vue.extend({
  name: '',

  mounted() {
    const _ = new DrawLineScript(this.$refs.box)
    console.log(_)
  },
})
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
