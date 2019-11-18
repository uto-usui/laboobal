<template>
  <section id="js-wrap-skew" class="wrap">
    <div class="item js-item" data-mouse-parallax=".2">
      <DummyImage />
    </div>
  </section>
</template>

<script>
import skew from './EffectsSkewScript'
import DummyImage from '../DummyImage'

export default {
  name: 'EffectsTilt',
  components: { DummyImage },
  mounted() {
    this.$nextTick(() => {
      new skew('js-wrap-skew', '.js-item')
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
