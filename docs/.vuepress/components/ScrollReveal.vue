<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="inner">
      <div class="target" ref="target">progress:<br>{{progress}}</div>
    </div>
    <button @click="destroy()">destroy</button>
  </section>
</template>

<script>
  import ScrollRevealScript from './ScrollRevealScript';

  export default {
    name: 'ScrollReveal',
    components: {},
    methods: {
      destroy() {
        this.reveal.destroy()
      }
    },
    data() {
      return {
        progress: 0,
        reveal: {}
      };
    },
    mounted() {
      this.$nextTick(() => {

//        this.$refs.wrap.addEventListener('wheel', e => {
//          console.log(e.deltaY)
//        });

        this.reveal = new ScrollRevealScript(this.$refs.target, progress => {
          this.progress = progress
        }, null, 100, this.$refs.wrap);

      });
    },
  };
</script>

<style scoped lang="scss">

  .wrap {
    position: relative;
    overflow: scroll;
    height: 500px;
    background-color: #f1f1f1;
    transform-style: preserve-3d;
    perspective: 800px;
  }

  .inner {
    padding-top: 1000px;
    padding-bottom: 1000px;
  }

  .target {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    height: 100px;
    background-color: #25ECB7;
    //
    + .target {
      margin-top: 200px;
    }
  }

</style>
