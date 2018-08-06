<template>
  <section>
    <button @click="log('yes')">Yes</button>
  </section>
</template>

<script>
  export default {
    name: 'EasingIndex',
    methods: {
      log(value) {
        console.log(value)
      }
    }
  };
</script>

<style scoped>
</style>
