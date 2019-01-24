<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="target" ref="target" v-for="index in 80" :key="index">
      <div class="target__inner"></div>
    </div>
    <div class="ball" ref="ball"></div>
  </section>
</template>

<script>
  import DragPinchLinesScript from './DragPinchLinesScript';
  import DragPinchMinimizeScript from './DragPinchMinimizeScript';

  export default {
    name: 'DragPinchLines',
    components: {},
    methods: {},
    data() {
      return {
        dragPinch: [],
        dragPinchBall: {},
      };
    },
    mounted() {

      this.$nextTick(() => {

        this.$refs.target.forEach((el, i) => {
          this.dragPinch[i] = new DragPinchLinesScript(el, this.$refs.wrap, .075);
        });

        this.dragPinchBall = new DragPinchMinimizeScript(this.$refs.ball, this.$refs.wrap, .1);

      });

    },
    beforeDestroy() {
      this.dragPinch.forEach(el => {
        el.destroy();
      });
      this.dragPinch = [];
      this.dragPinchBall.destroy();
      this.dragPinchBall = {};
    },
  };
</script>

<style scoped lang="scss">

  .wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: #f1f1f1;
    transform-style: preserve-3d;
    perspective: 400px;
  }

  .target {
    position: absolute;
    z-index: 2;
    width: 1px;
    height: 1px;
    background-color: #25ECB7;
  }

  .ball {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: #25ECB7;
  }


</style>
