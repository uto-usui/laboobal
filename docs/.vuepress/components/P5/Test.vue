<template>
  <div class="wrap" ref="wrap">
    <div id="canvas"></div>
    <input type="number" v-model.number="circleWidth">
    <p ref="speed">{{posX}}</p>
  </div>
</template>

<script>

  import {setInitData, setWidth, main, callBackOnP5} from './TestScript';

  export default {
    name: 'Test',
    data() {
      return {
        circleWidth: 100,
        posX: 0
      };
    },
    methods: {
      writeSpeedValue(posX) {
        this.posX = posX
      }
    },
    watch: {
      circleWidth(value) {
        setWidth(value);
      },
    },
    async mounted() {

      const P5 = await import('p5');

      setInitData('canvas', this.$refs.wrap.offsetWidth, this.$refs.wrap.offsetHeight);
      callBackOnP5(this.writeSpeedValue);

      new P5.default(main);

    },
  };

</script>

<style scoped lang="scss">
  .wrap {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    font-family: 'helvetica neue', helvetica, sans-serif;
    background-color: #111;
  }

  input {
    position: absolute;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    height: 50px;
    width: 200px;
    padding-left: 1em;
    font-size: 20px;
    font-weight: bold;
    color: rgba(white, .8);
    background-color: rgba(white, .2);
    border: 0;
    outline: 0;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;
    width: 200px;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    padding-right: 1em;
    color: rgba(white, .8);
    background-color: rgba(white, .2);
  }

</style>
