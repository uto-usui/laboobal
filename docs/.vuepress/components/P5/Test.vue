<template>
  <div ref="wrap" class="wrap">
    <div id="canvas" />
    <input v-model.number="circleWidth" type="number" />
    <p ref="speed">
      {{ posX }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { setInitData, setWidth, main, callBackOnP5 } from './TestScript'

export default Vue.extend({
  name: 'Test',
  data() {
    return {
      circleWidth: 100,
      posX: 0,
      p5: null,
    }
  },
  watch: {
    circleWidth(value) {
      setWidth(value)
    },
  },
  async mounted() {
    const { default: P5 } = await import('p5')
    const wrap = this.$refs.wrap as HTMLDivElement

    setInitData('canvas', wrap.offsetWidth, wrap.offsetHeight)
    callBackOnP5(this.writeSpeedValue)

    this.p5 = new P5(main)
    console.log(this.p5)
  },
  beforeDestroy() {
    if (!this.p5) return
    this.p5.remove()
    console.log('destroy', this.p5)
  },
  methods: {
    writeSpeedValue(posX) {
      this.posX = posX
    },
  },
})
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

input {
  position: absolute;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  height: 50px;
  width: 200px;
  padding-left: 1em;
  font-size: 20px;
  font-weight: bold;
  color: rgba(white, 0.8);
  background-color: rgba(white, 0.2);
  border: 0;
  outline: 0;
}

p {
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  padding-right: 1em;
  color: rgba(white, 0.8);
  background-color: rgba(white, 0.2);
}
</style>
