<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div v-for="index in 4" ref="target" :key="index" class="target">
      {{ index }}
      <div class="target__inner" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HoverControlCss',
  components: {},
  data() {
    return {}
  },
  mounted: function() {
    this.$nextTick(() => {})
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  overflow: scroll;
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
  width: 100%;
  height: calc(500px / 4);
  margin-left: auto;
  margin-right: auto;
  background-color: #25ecb7;
  //
  //&:hover {
  //background-color: #FF6473;
  //}
}

.target__inner {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ff6473;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.5s ease-in-out;
  //
  .target:hover & {
    transition: transform 0.6s ease-out;
    transform: scaleX(1);
  }
}
</style>
