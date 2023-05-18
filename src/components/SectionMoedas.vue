<template>
  <h1>teste</h1>
  <section class="section">
  <h1 class="title">Título da Section</h1>
  <h2 class="subtitle">
    Section Simples pra ficar bonitin.
  </h2>
  <li v-for="moeda in moedas">
    {{ moeda }}
  </li>
</section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SectionMoedas',
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
}
</script>