<template>
  <section class="section">
    <h1 class="title">Selic</h1>
    <h2 class="subtitle">
      Valores de compra no mês atual em relação ao Real (BRL)
    </h2>
    <div class="card">
      <div class="card-content">
        <p class="title">
          Data: {{ ValData(selic) }}
        </p>
        <p class="subtitle">
          Porcentagem: {{ ValValor(selic) }} %
        </p>
      </div>
    </div>

  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SectionMoedas',
  computed: {
    ...mapState({
      selic: (state) => state.selic
    }),
  },
  methods: {
    ValData(selic) {
      if (typeof (selic) !== 'undefined') {
        const dataHora = selic[selic.length - 1].data
        return dataHora
      }
    },
    ValValor(selic) {
      if (typeof (selic) !== 'undefined') {
        const porcentagem = selic[selic.length - 1].valor;
        return ((porcentagem)*100).toFixed(2);
      }
    }
  },
  async created() {
    try {
      await this.$store.dispatch('requisicaoSelic')
      this.loading = false;
    } catch (error) {
      console.log(error)
    }
  },
}
</script>