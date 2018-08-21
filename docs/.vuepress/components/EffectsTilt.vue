<template>
  <section class="wrap" id="js-wrap">
    <div class="item js-item">
      <DummyImage/>
    </div>
  </section>
</template>

<script>

  import tilt from './EffectsTiltScript';
  import DummyImage from './DummyImage';

  export default {
    name: 'EffectsTilt',
    components: {DummyImage},
    methods: {
    },
    mounted() {
      this.$nextTick(() => {
        new tilt('js-wrap', '.js-item');
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
