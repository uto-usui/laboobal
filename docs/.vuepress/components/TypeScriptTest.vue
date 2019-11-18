<template>
  <section ref="wrap" class="wrap">
    djhfjhasdhfahshdkjsa
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

type TypeScriptTestData = {
  text: string
}

export default Vue.extend({
  name: 'TypeScriptTest',
  data: (): TypeScriptTestData => ({
    text: 'test'
  }),
  mounted(): void {
    //
  },
})
</script>

<style scoped lang="scss">
//
</style>
