<template>
  <div>
    <header>
      <Header />
    </header>
   
    <div class="columns">
      <div class="column is-4">
        <MenuLateral />
      </div>
    </div>

  </div>
</template>


<script>
import Header from "./Header.vue";
import MenuLateral from "./MenuLateral.vue";
export default (await import('vue')).defineComponent({
  name: 'ContainerPrincipal',
  components: {
    Header, MenuLateral
  }
})
</script>