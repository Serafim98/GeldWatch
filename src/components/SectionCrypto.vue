<template>
  <section class="section">
    <h1 class="title">Criptomoedas</h1>
    <h2 class="subtitle">
      Valores de compra no dia atual em relação ao Real (BRL)
    </h2>
    <ul>
      <li v-for="moeda, index in criptos">
        <div class="card">
          <div class="card-content">
            <p class="title">
              {{ moeda.nome }}
              {{ moeda.data.ticker.last }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
  name: 'SectionCrypto',
  computed: {
    ...mapState({
      criptos: (state) => state.cripto,
    }),
  },
  methods: {

  },
  created() {
    try {
      var arrayNomeMoedas = ['BTC', 'DOGE', 'ETH', 'MBVASCO01', 'SHIB'];
      const promises = [];

      arrayNomeMoedas.forEach((nome) => {
        promises.push(this.$store.dispatch('requisicaoCripto', nome));
      });

    } catch (error) {
      console.log(error)
    }
  },
}
</script>