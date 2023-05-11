import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    //colocar aqui as variáveis que serão acessadas em qualquer componente
  },
  mutations: {
    //aqui ficam as funções que modificam os valores que estão no state
  },
  actions: {
    requisicaoAPIMoedas({ commit}, data) {
        console.log('entrou')
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