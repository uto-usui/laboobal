<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="target" ref="target">
      <div class="target__inner"></div>
    </div>
  </section>
</template>

<script>
  import DragPinchSimpleScript from './DragPinchSimpleScript';

  export default {
    name: 'DragPinchSimple',
    components: {},
    methods: {},
    data() {
      return {
        dragPinch: {}
      };
    },
    mounted() {

      this.$nextTick(() => {
        this.dragPinch = new DragPinchSimpleScript(this.$refs.target, this.$refs.wrap)
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
    width: 100px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 100%;
    background-color: #25ECB7;
  }

</style>
