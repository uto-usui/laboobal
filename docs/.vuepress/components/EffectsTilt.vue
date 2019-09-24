<template>
  <section id="wrap" ref="wrap" class="wrap">
    <div ref="item" class="item" data-speed-x=".5" data-speed-Y=".5">
      <DummyImage />
    </div>
  </section>
</template>

<script>
import Tilt from './EffectsTiltScript'
import DummyImage from './DummyImage'

export default {
  name: 'EffectsTilt',
  components: { DummyImage },
  mounted() {
    this.$nextTick(() => {
      new Tilt('wrap', '.item')
    })
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  overflow: hidden;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  //
  > * {
    width: 80%;
    margin: auto;
  }
}
</style>
