<template>
  <section id="js-curtain" class="wrap">
    <div ref="target" class="item">
      <DummyImage />
    </div>
    <button @click="fromTo">
      Re:start
    </button>
  </section>
</template>

<script>
import clip from './RevealClipScript'
import DummyImage from './DummyImage'

export default {
  name: 'RevealClip',
  components: { DummyImage },
  data() {
    return {
      func: {},
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.func = new clip(this.$refs.target, 'lr')
        this.to()
      }, 2000)
    })
  },
  methods: {
    to() {
      this.func.animTo()
    },
    fromTo() {
      this.func.animFromTo()
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
  margin: 1em;
  //
  > * {
    width: 80%;
    margin: auto;
  }
}
</style>
