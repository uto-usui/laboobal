<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="target" ref="target1"></div>
    <div class="target target--sm" ref="target2"></div>
  </section>
</template>

<script>

  import FollowMouseSpringScript from './FollowMouseSpringScript';
  import math from './math';

  export default {
    name: 'FollowMouseSpring',
    components: {},
    methods: {},
    mounted() {
      this.$nextTick(() => {
        new FollowMouseSpringScript(this.$refs.target1, this.$refs.wrap);
        new FollowMouseSpringScript(this.$refs.target2, this.$refs.wrap, .3);
      });

    },
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
