<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div ref="target1" class="target" />
    <div ref="target2" class="target target--sm" />
  </section>
</template>

<script>
import FollowMouseSpringScript from './FollowMouseSpringScript'
import math from '../math'

export default {
  name: 'FollowMouseSpring',
  components: {},
  mounted() {
    this.$nextTick(() => {
      new FollowMouseSpringScript(this.$refs.target1, this.$refs.wrap)
      new FollowMouseSpringScript(this.$refs.target2, this.$refs.wrap, 0.3)
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
