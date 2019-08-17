<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div ref="target" class="target" />
  </section>
</template>

<script>
import RandomTransformScript from './RandomTransformScript'

export default {
  name: 'RandomTransform',
  components: {},
  data() {
    return {
      instance: {},
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.instance = new RandomTransformScript(this.$refs.target)
    })
  },
  beforeDestroy() {
    this.instance.destroy()
    this.instance = {}
  },
  methods: {},
}
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
  width: 150px;
  height: 150px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #25ecb7;
  -webkit-user-select: none;
}
</style>
