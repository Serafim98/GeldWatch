import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    //colocar aqui as variáveis que serão acessadas em qualquer componente
    moedas: [],
    valoresMoedas: []
  },
  mutations: {
    //aqui ficam as funções que modificam os valores que estão no state
    setMoedas(state, response) {
      state.moedas.push(response);
    },
    setValorMoeda(state, response){
      state.valoresMoedas.push(response);
    }
  },
  actions: {
    requisicaoAPIMoedas({ commit }) {
      axios
        .get(
          "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?%24format=json"
        )
        .then((res) => {
          commit("setMoedas", res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    requisicaoValorMoeda({ commit }, moeda) {
      const hoje = new Date();
      const mes = (hoje.getMonth() + 1).toString().padStart(2, "0");
      const dia = hoje.getDate().toString().padStart(2, "0");
      const ano = hoje.getFullYear();

      const dataAtual = `${mes}-${dia}-${ano}`;
      axios
        .get(
          "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?%40moeda='" +
            moeda +
            "'&%40dataCotacao='" +
            dataAtual +
            "'&%24format=json"
        )
        .then((res) => {
          // console.log(res.data.value[4].cotacaoCompra);
          // commit("setValorMoeda", res.data.value[4].cotacaoCompra);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    //aqui ficarão funç~pes que pegam os dados direto do state e mandam de maneira diferente para o
    // componente, sem alterar eles na base, utilizado por exemplo para fazer filtros dentro de
    // componentes.
  },
});
