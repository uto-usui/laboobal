<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="target" ref="target">
      <div class="target__inner"></div>
    </div>
  </section>
</template>

<script>
  import DragPinchScript from './DragPinchScript';

  export default {
    name: 'DragPinch',
    components: {},
    methods: {},
    data() {
      return {
        dragPinch: {}
      };
    },
    mounted() {

      this.$nextTick(() => {
        this.dragPinch = new DragPinchScript(this.$refs.target, this.$refs.wrap)
      });

    },
    destroyed() {
      this.dragPinch.destroy();
    },
  };
</script>

<style scoped lang="scss">

  .wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: #f1f1f1;
    transform-style: preserve-3d;
    perspective: 400px;
  }

  .target {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    background-color: #25ECB7;
  }

</style>
