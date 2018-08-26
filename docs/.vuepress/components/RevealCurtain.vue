<template>
  <section class="wrap" id="js-curtain">
    <div class="item js-item" ref="target">
      <DummyImage/>
    </div>
  </section>
</template>

<script>

  import Curtain from './RevealCurtainScript';
  import DummyImage from './DummyImage';

  export default {
    name: 'RevealCurtain',
    components: {DummyImage},
    methods: {
    },
    mounted() {
      this.$nextTick(() => {
        const func = new Curtain(this.$refs.target, 'rl')
        setTimeout(() => {
          func.anim()
        }, 2000)
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
