<script>
import ContainerPrincipal from "./components/ContainerPrincipal.vue";

export default (await import('vue')).defineComponent({
  name: 'App',
  components: {
    ContainerPrincipal
}
})
</script>

<template>
  <ContainerPrincipal>

  </ContainerPrincipal>
</template>

<style scoped>
</style>
