<template>
  <section class="section">
    <h1 class="title">Moedas</h1>
    <h2 class="subtitle">
      Valores de compra no dia atual em relação ao Real (BRL)
    </h2>           

    <ul>
      <li v-for="moeda, index in moedas" :key="moeda.simbolo">
        <div class="card">
          <div class="card-content">
            <p class="title">
              {{ moeda.nomeFormatado }}
            </p>
            <p class="subtitle">
              {{ moeda.simbolo }} {{ valoresMoedas[index] }}
            </p>
          </div>
        </div>
        <p></p>
        <p></p>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SectionMoedas',
  computed: {
    ...mapState({
      moedas: (state) => (state.moedas.length > 0 ? state.moedas[0].data.value : []),
      valoresMoedas: (state) => (state.valoresMoedas ? state.valoresMoedas : [])
    }),
  },
  methods: {

  },
  async created() {
    try {
      await this.$store.dispatch('requisicaoAPIMoedas')
      this.loading = false;
    } catch (error) {
      console.log(error)
    }
  },
  mounted(){
    setTimeout(() => {
      this.moedas.forEach(moeda => {
        try {
          this.$store.dispatch('requisicaoValorMoeda', moeda.simbolo)
          this.loading = false;
        } catch (error) {
          console.log(error)
        }
      });
    }, 1000)
  
  }
}
</script>