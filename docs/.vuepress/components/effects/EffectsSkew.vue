<template>
  <section id="js-wrap-skew" class="wrap">
    <div class="item js-item" data-mouse-parallax=".2">
      <DummyImage />
    </div>
  </section>
</template>

<script>
import Skew from './EffectsSkewScript'
import DummyImage from '../DummyImage.vue'

export default {
  name: 'EffectsTilt',
  components: { DummyImage },
  mounted() {
    this.$nextTick(() => {
      const skew = new Skew('js-wrap-skew', '.js-item')
      console.log(skew)
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
