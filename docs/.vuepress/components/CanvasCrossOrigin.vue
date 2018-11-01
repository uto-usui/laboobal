<template>
  <div ref="box"></div>
</template>

<script>

  import LoadImage from './CanvasCrossOriginScript'

  export default {
    name: '',
    mounted() {

      new LoadImage(this.$refs.box, 'https://source.unsplash.com/random/1600x900');

    },
  };

</script>

<style scoped lang="scss">
  div {
    height: 400px;
    overflow: scroll;
  }
</style>
