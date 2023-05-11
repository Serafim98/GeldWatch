<template>
  <div>
    <header>
      <Header />
    </header>
   
    <div class="columns">
      <div class="column is-4">
        <MenuLateral />
      </div>
      <div class="column is-auto">
        <Section />
      </div>
    </div>

  </div>
</template>


<script>
import Header from "./Header.vue";
import MenuLateral from "./MenuLateral.vue";
import Section from "./Section.vue";
import { mapActions } from 'vuex'
export default (await import('vue')).defineComponent({
  name: 'ContainerPrincipal',
  components: {
    Header, MenuLateral, Section
  },
  methods:{
    ...mapActions({
      add: 'requisicaoAPIMoedas' // map `this.add()` to `this.$store.dispatch('increment')`
    }),
  },
  async created(){
    try {
      await this.$store.dispatch('requisicaoAPIMoedas')
      this.loading = false;
    } catch (error) {
      console.log(error)
    }
  }
})
</script>