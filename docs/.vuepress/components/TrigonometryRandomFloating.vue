<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div class="target" />
  </section>
</template>

<script>
import TrigonometryRandomFloating from './TrigonometryRandomFloatingScript'

export default {
  name: 'TrigonometryRandomFloating',
  components: {},
  mounted() {
    this.$nextTick(() => {
      const anim = new TrigonometryRandomFloating(
        [...this.$refs.wrap.querySelectorAll('.target')],
        2,
        this.$refs.wrap.offsetWidth,
        this.$refs.wrap.offsetHeight,
        this.$refs.wrap,
      )
      anim.play()
    })
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  overflow: hidden;
  height: 500px;
  background-color: #f1f1f1;
  transform-style: preserve-3d;
  perspective: 800px;
}

.target {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: #25ecb7;
  border-radius: 48%;
}
</style>
