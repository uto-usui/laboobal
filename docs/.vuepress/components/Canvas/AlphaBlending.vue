<template>
  <div>
    <select v-model="selected" name="">
      <option disabled value="">Please select one</option>
      <option v-for="(item, index) in options" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
    <canvas ref="canvas" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { AlphaBlending } from './AlphaBlendingScript'

export default Vue.extend({
  name: 'AlphaBlending',

  data: () => {
    return {
      options: [
        'source-over',
        'source-in',
        'source-out',
        'source-atop',
        'destination-over',
        'destination-in',
        'destination-out',
        'destination-atop',
        'lighter',
        'copy',
        'xor',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      selected: '',
      alphaBlending: null,
    }
  },

  watch: {
    selected(value) {
      if (!value) return

      this.alphaBlending.render(value)
    },
  },

  mounted() {
    this.$nextTick(() => {
      const canvas = this.$refs.canvas as HTMLCanvasElement
      this.alphaBlending = new AlphaBlending(canvas)

      this.alphaBlending.init()
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
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  > select {
    position: relative;
    z-index: 2;
  }
}
</style>
