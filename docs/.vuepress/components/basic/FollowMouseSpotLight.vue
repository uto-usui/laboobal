<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div ref="target1" class="target" />
    <div ref="target2" class="target target--sm" />
    <img
      src="https://images.unsplash.com/photo-1547962041-6d2d7c4bdf6e"
      alt=""
    />
  </section>
</template>

<script>
import FollowMouse from './FollowMouseScript'

export default {
  name: 'EffectsTilt',
  components: {},
  mounted() {
    this.$nextTick(() => {
      const _ = new FollowMouse(this.$refs.target1, this.$refs.wrap)
      const __ = new FollowMouse(this.$refs.target2, this.$refs.wrap, 0.08)
      console.log(_, __)
    })
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 500px;
  background-color: #f1f1f1;
  //
  img {
    position: relative;
    z-index: 1;
    filter: brightness(30%);
  }
}

.target {
  position: absolute;
  z-index: 9;
  width: 15rem;
  height: 15rem;
  background-color: rgba(white, 0.9);
  transform-origin: 50% 50%;
  border-radius: 100%;
  pointer-events: none;
  mix-blend-mode: soft-light;
  filter: blur(15px);
  //
  &.target--sm {
    width: 10rem;
    height: 10rem;
    background-color: rgba(white, 0.8);
    filter: blur(20px);
  }
}
</style>
