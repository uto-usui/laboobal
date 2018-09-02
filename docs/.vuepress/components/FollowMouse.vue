<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="target" ref="target1"></div>
    <div class="target target--sm" ref="target2"></div>
  </section>
</template>

<script>

  import FollowMouse from './FollowMouseScript';

  export default {
    name: 'EffectsTilt',
    components: {},
    methods: {
    },
    mounted() {
      this.$nextTick(() => {
        new FollowMouse(this.$refs.target1, this.$refs.wrap);
        new FollowMouse(this.$refs.target2, this.$refs.wrap, .05);
      })
    }
  };
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
    background-color: #25ECB7;
    transform-origin: 50% 50% 50%;
    border-radius: 100%;
    pointer-events: none;
    //
    &.target--sm {
      width: 1.5rem;
      height: 1.5rem;
      background-color: darken(#25ECB7, 15%);
    }
  }

</style>
