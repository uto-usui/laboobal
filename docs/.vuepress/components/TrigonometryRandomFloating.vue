<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="target" :ref="index" v-for="index in 20" :key="index"></div>
  </section>
</template>

<script>

  import TrigonometryRandomFloating from './TrigonometryRandomFloatingScript';

  export default {
    name: 'TrigonometryRandomFloating',
    components: {},
    methods: {},
    mounted() {
      this.$nextTick(() => {

        const anim = new TrigonometryRandomFloating([...this.$refs.wrap.querySelectorAll('.target')], 2, this.$refs.wrap.offsetWidth, this.$refs.wrap.offsetHeight, this.$refs.wrap);
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
    background-color: #25ECB7;
    border-radius: 48%;
  }

</style>
