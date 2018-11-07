<template>
  <section class="wrap" ref="wrap" id="wrap">
    <div class="item" ref="item" data-speed-x=".5" data-speed-Y=".5">
      <DummyImage/>
    </div>
  </section>
</template>

<script>
  import Tilt from './EffectsTiltScript';
  import DummyImage from './DummyImage';

  export default {
    name: 'EffectsTilt',
    components: {DummyImage},
    methods: {},
    mounted() {
      this.$nextTick(() => {
        new Tilt('wrap', '.item');
      });
    },
  };
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
