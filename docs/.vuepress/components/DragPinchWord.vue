<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="target" ref="target" v-for="index in 5" :key="index">
      dragggg
    </div>
  </section>
</template>

<script>
  import DragPinchWordScript from './DragPinchWordScript';

  export default {
    name: 'DragPinchWord',
    components: {},
    methods: {},
    data() {
      return {
        dragPinch: [],
      };
    },
    mounted() {

      this.$nextTick(() => {

        this.$refs.target.forEach((el, i) => {
          this.dragPinch[i] = new DragPinchWordScript(el, this.$refs.wrap, .2);
        });

      });

    },
    beforeDestroy() {
      this.dragPinch.forEach(el => {
        el.destroy();
      });
      this.dragPinch = [];
    },
  };
</script>

<style scoped lang="scss">

  .wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: #f1f1f1;
    transform-style: preserve-3d;
    perspective: 400px;
  }

  .target {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #25ECB7;
    -webkit-user-select: none;
  }


</style>
