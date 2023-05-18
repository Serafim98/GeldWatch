<template>
  <div>
    <header>
      <Header />
    </header>

    <div class="columns">
      <div class="column is-4">
        <MenuLateral @ShowMoedas="ShowMoedas" @ShowCrypto="ShowCrypto" @ShowTitulos="ShowTitulos"/>
      </div>
      <div class="column is-auto">
        <SectionMoedas v-if="MostraMoedas"/>
        <SectionCrypto v-if="MostraCrypto"/>
        <SectionTitulo v-if="MostraTitulos"/>
      </div>
    </div>

  </div>
</template>


<script>
import Header from "./Header.vue";
import MenuLateral from "./MenuLateral.vue";
import SectionMoedas from "./SectionMoedas.vue";
import SectionCrypto from "./SectionCrypto.vue";
import SectionTitulo from "./SectionTitulo.vue";
export default {
  name: 'ContainerPrincipal',
  components: {
    Header,
    MenuLateral,
    SectionMoedas,
    SectionCrypto,
    SectionTitulo
},
  data(){
    return {
      MostraMoedas: false,
      MostraCrypto: false,
      MostraTitulos: false
    }
  },
  methods:{
    ShowMoedas() {
      this.MostraMoedas = true,
      this.MostraCrypto = false,
      this.MostraTitulos = false
    },
    ShowCrypto() {
      this.MostraCrypto = true,
      this.MostraMoedas = false,
      this.MostraTitulos = false
    },
    ShowTitulos() {
      this.MostraTitulos = true,
      this.MostraMoedas = false,
      this.MostraCrypto = false
    }
  }
}
</script>