<template>
  <section class="wrap" id="js-wrap-skew">
    <div class="item js-item" data-mouse-parallax=".2">
      <DummyImage/>
    </div>
  </section>
</template>

<script>

  import skew from './EffectsSkewScript';
  import DummyImage from './DummyImage';

  export default {
    name: 'EffectsTilt',
    components: {DummyImage},
    methods: {
    },
    mounted() {
      this.$nextTick(() => {
        new skew('js-wrap-skew', '.js-item');
      })
    }
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
