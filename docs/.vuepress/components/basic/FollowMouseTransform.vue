<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div ref="target1" class="target" />
    <div ref="target2" class="target target--sm" />
  </section>
</template>

<script>
import FollowMouseTransform from './FollowMouseTransformScript'

export default {
  name: 'EffectsTilt',
  components: {},
  mounted() {
    this.$nextTick(() => {
      const _ = new FollowMouseTransform(this.$refs.target1, this.$refs.wrap)
      const __ = new FollowMouseTransform(
        this.$refs.target2,
        this.$refs.wrap,
        0.5,
      )
      console.log(_, __)
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
}

.target {
  position: absolute;
  width: 5rem;
  height: 5rem;
  background-color: #25ecb7;
  transform-origin: 50% 50% 50%;
  border-radius: 100%;
  pointer-events: none;
  //
  &.target--sm {
    width: 1.5rem;
    height: 1.5rem;
    background-color: darken(#25ecb7, 15%);
  }
}
</style>
