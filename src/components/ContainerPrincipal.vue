<template>
  <div>
    <header>
      <Header @ShowHome="ShowHome"/>
    </header>

    <div class="columns">
      <div class="column is-4">
        <MenuLateral @ShowMoedas="ShowMoedas" @ShowCrypto="ShowCrypto" @ShowTitulos="ShowTitulos" />
      </div>
      <div class="column is-auto">
        <SectionMoedas v-if="MostraMoedas" />
        <SectionCrypto v-if="MostraCrypto" />
        <SectionTitulo v-if="MostraTitulos" />
        <Home v-if="MostraHome"/>
      </div>
    </div>

  </div>
</template>


<script>
import Header from "./Header.vue";
import Home from "./Home.vue";
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
    SectionTitulo,
    Home
  },
  data() {
    return {
      MostraMoedas: false,
      MostraCrypto: false,
      MostraTitulos: false,
      MostraHome: false
    }
  },
  methods: {
    ShowMoedas() {
      this.MostraMoedas = true;
      this.MostraCrypto = false;
      this.MostraTitulos = false;
      this.MostraHome = false;
    },
    ShowCrypto() {
      this.MostraCrypto = true;
      this.MostraMoedas = false;
      this.MostraTitulos = false;
      this.MostraHome = false;
    },
    ShowTitulos() {
      this.MostraTitulos = true;
      this.MostraMoedas = false;
      this.MostraCrypto = false;
      this.MostraHome = false;
    },
    ShowHome() {
      this.MostraHome = true;
      this.MostraMoedas = false;
      this.MostraCrypto = false;
      this.MostraTitulos = false;
    }
  }
}
</script>