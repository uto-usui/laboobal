<template>
  <section id="js-curtain" class="wrap">
    <div ref="target" class="item js-item">
      <DummyImage />
    </div>
    <button @click="start">
      Re:start
    </button>
  </section>
</template>

<script>
import Curtain from './RevealCurtainScript'
import DummyImage from './DummyImage'

export default {
  name: 'RevealCurtain',
  components: { DummyImage },
  data() {
    return {
      func: {},
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.func = new Curtain(this.$refs.target, 'rl')
      setTimeout(() => {
        this.func.anim()
      }, 2000)
    })
  },
  methods: {
    start() {
      this.func.anim()
    },
  },
}
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
