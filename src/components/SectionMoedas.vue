<template>
  <section class="section">
    <h1 class="title">Título da Section</h1>
    <h2 class="subtitle">
      Section Simples pra ficar bonitin.
    </h2>
    <pre>{{ valoresMoedas }}</pre>            

    <ul>
      <li v-for="moeda, index in moedas" :key="moeda.simbolo">
        <div class="card">
          <div class="card-content">
            <p class="title">
              {{ moeda.nomeFormatado }}
            </p>
            <p class="subtitle">
              {{ moeda.simbolo }}
            </p>
            <p class="subtitle" >
              {{ valoresMoedas[index] }}
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
      moedas: (state) => state.moedas[0].data.value,
      valoresMoedas: (state) => state.valoresMoedas
    }),
  },
  methods: {
    mandaValor(simbolo){
      try {
       his.$store.dispatch('requisicaoValorMoeda', simbolo)
      this.loading = false;
    } catch (error) {
      console.log(error)   
    }
    }

  },
  async created() {
    try {
      await this.$store.dispatch('requisicaoAPIMoedas')
      this.loading = false;
    } catch (error) {
      console.log(error)
    }
    this.moedas.forEach(moeda => {
      try {
      this.$store.dispatch('requisicaoValorMoeda', moeda.simbolo)
      this.loading = false;
    } catch (error) {
      console.log(error)
      
    }
      
    });
    
  }
}
</script>