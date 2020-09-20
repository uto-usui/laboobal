<template>
  <figure>
    <img
      :width="width"
      :src="`https://source.unsplash.com/random/${width}x900`"
      alt="dummy image"
    />
  </figure>
</template>
<script>
export default {
  name: 'DummyImage',
  props: {
    width: {
      type: Number,
      default: 1600,
    },
  },
}
</script>
<style scoped lang="scss">
img {
  max-width: 100%;
  vertical-align: bottom;
}
</style>
