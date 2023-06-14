<template>
  <section class="section">
    <h1 class="title">Selic</h1>
    <h2 class="subtitle">
      Valores de compra no dia atual em relação ao Real (BRL)
    </h2>           
        <div class="card">
          <div class="card-content">
            <p class="title">
              {{ ValData }}
            </p>
            <p class="subtitle">
              {{ ValValor }}
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

    ValData(){
      return this.selic[this.selic.length - 1].VALDATA
    },

    ValValor(){
      return this.selic[this.selic.length - 1].VALVALOR
    }
  },
  methods: {

  },
  async created() {
    try {
      await this.$store.dispatch('requisicaoSelic')
      this.loading = false;
    } catch (error) {
      console.log(error)
    }
  },
  mounted(){

  
  }
}
</script>