<template>
  <div ref="box" />
</template>

<script>
import LoadImage from './CanvasCrossOriginScript'

export default {
  name: '',
  mounted() {
    const loadImage = new LoadImage(
      this.$refs.box,
      'https://source.unsplash.com/random/1600x900',
    )
    loadImage.init()
  },
}
</script>

<style scoped lang="scss">
div {
  height: 400px;
  overflow: scroll;
}
</style>
