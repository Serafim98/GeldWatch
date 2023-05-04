<script>
import Header from "./components/Header.vue";
export default(await import('vue')).defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>

<template>
    <Header />

  <main>
 
  </main>
</template>

<style scoped>

</style>
