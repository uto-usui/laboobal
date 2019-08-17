<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div ref="target" class="target">
      <div class="target__inner" />
    </div>
  </section>
</template>

<script>
import DragPinchSimpleScript from './DragPinchSimpleScript'

export default {
  name: 'DragPinchSimple',
  components: {},
  data() {
    return {
      dragPinch: {},
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.dragPinch = new DragPinchSimpleScript(
        this.$refs.target,
        this.$refs.wrap,
      )
    })
  },
  beforeDestroy() {
    this.dragPinch.destroy()
    this.dragPinch = null
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #f1f1f1;
  transform-style: preserve-3d;
  perspective: 400px;
}

.target {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 100%;
  background-color: #25ecb7;
}
</style>
