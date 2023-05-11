<template>
    <div>

    </div>
</template>


<script>
import Header from "./components/Header.vue";
import MenuLateral from "./components/MenuLateral.vue";
export default (await import('vue')).defineComponent({
  name: 'ContainerPrincipal',
  components: {
    Header, MenuLateral
  }
})
</script>