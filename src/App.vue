<script>
import Header from "./components/Header.vue";
import MenuLateral from "./components/MenuLateral.vue";
export default (await import('vue')).defineComponent({
  name: 'App',
  components: {
    Header, MenuLateral
  }
})
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <MenuLateral />
  </main>
</template>

<style scoped>
</style>
