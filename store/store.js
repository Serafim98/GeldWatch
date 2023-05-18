import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    //colocar aqui as variáveis que serão acessadas em qualquer componente
    moedas : []
  },
  mutations: {
    //aqui ficam as funções que modificam os valores que estão no state
    setMoedas(state, response){
      state.moedas.push(response);
    }
  },
  actions: {
    requisicaoAPIMoedas({ commit}, data) {
      axios
      .get("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?%24format=json")
      .then((res) => {
          commit("setMoedas", res)
      })
      .catch((error) => {
              console.log(error);
      });
    },
    //EXEMPLO DE REQUISIÇÃO ABAIXO
    addTodo({ commit }, data) {
      return axios.post('http://localhost:3000/todos', data).then((response) => {
        commit('storeTodo', response.data);
      })
    }
  },
  getters: {
    //aqui ficarão funç~pes que pegam os dados direto do state e mandam de maneira diferente para o 
    // componente, sem alterar eles na base, utilizado por exemplo para fazer filtros dentro de 
    // componentes.
  },
  modules: {
  }
})