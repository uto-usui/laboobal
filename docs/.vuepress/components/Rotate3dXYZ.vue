<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="target" :ref="index" v-for="index in 12" :key="index"></div>
  </section>
</template>

<script>

  import Rotate3dScript from './Rotate3dScript';

  export default {
    name: 'Rotate3d',
    components: {},
    methods: {},
    mounted() {
      this.$nextTick(() => {

        const anim = new Rotate3dScript([...this.$refs.wrap.querySelectorAll('.target')], 1, this.$refs.wrap.offsetWidth, this.$refs.wrap.offsetHeight, this.$refs.wrap);
        anim.play();

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
    transform-style: preserve-3d;
    perspective: 800px;
  }

  .target {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 48%;
    //
    mix-blend-mode: multiply;

    &:nth-of-type(3n) {
      background-color: #005257;
    }
    &:nth-of-type(3n+1) {
      background-color: #BEFCFE;
    }
    &:nth-of-type(3n+2) {
      background-color: #FF6473;
    }

  }

</style>
