import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    //colocar aqui as variáveis que serão acessadas em qualquer componente
    moedas: [],
    valoresMoedas: [],
    cripto: [],
    titulos: []
  },
  mutations: {
    //aqui ficam as funções que modificam os valores que estão no state
    setMoedas(state, response) {
      state.moedas.push(response);
    },
    setValorMoedas(state, response){
      state.valoresMoedas.push(response);
    },
    setCripto(state, response){
      state.cripto.push(response)
    },
    setSelic(state, response){
      state.selic = (response.data)
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
      const url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?%40moeda='"
      + moeda + "'&%40dataCotacao='" + dataAtual + "'&%24format=json";

      axios
        .get(url)
        .then((res) => {
          if(res.data.value.length != 0)
            commit("setValorMoedas", res.data.value[4].cotacaoCompra);
          else{
            commit("setValorMoedas", '(API Indisponível)');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    requisicaoCripto({ commit }, moeda) {
      axios
        .get(
          "https://www.mercadobitcoin.net/api/"+ moeda +"/ticker/" //moeda/method
        )
        .then((res) => {
          res.nome = moeda;
          commit("setCripto", res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    requisicaoSelic({ commit }) {
      axios
        .get(
          "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/10?formato=json"
        )
        .then((res) => {
          commit("setSelic", res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  getters: {
    //aqui ficarão funç~pes que pegam os dados direto do state e mandam de maneira diferente para o
    // componente, sem alterar eles na base, utilizado por exemplo para fazer filtros dentro de
    // componentes.
  },
});
