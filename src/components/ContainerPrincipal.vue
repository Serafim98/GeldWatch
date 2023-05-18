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
        <SectionMoedas />
      </div>
    </div>

  </div>
</template>


<script>
import Header from "./Header.vue";
import MenuLateral from "./MenuLateral.vue";
import SectionMoedas from "./SectionMoedas.vue";
import { mapActions, mapState } from 'vuex'
export default (await import('vue')).defineComponent({
  name: 'ContainerPrincipal',
  components: {
    Header, MenuLateral, SectionMoedas
  },
  computed:{
    ...mapState({
      moedas: (state) => state.moedas
    }),
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