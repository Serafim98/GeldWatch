<template>
  <section class="hero is-link">
    <div class="hero-body">
      <p class="title">
        Gestão de Projetos
      </p>
      <p class="subtitle">
        Professora Dra. Ana Carolina Nicolosi da Rocha Gracioso
      </p>
    </div>
  </section>


  <section class="section is-large">
    <h1 class="title">Descrição do Projeto</h1>
    <h2 class="subtitle">
      GeldWatch, junção das palavras <strong>Geld</strong> (do alemão "dinheiro") e <strong>watch</strong> (do verbo em
      inglês to watch, que significa assistir)
      , é uma mini aplicação criada com o intuito de mostrar as cotações das principais moedas e criptomoedas, assim como
      também mostrar a atual taxa selic. A aplicação consome
      três diferentes APIS públicas:
      <ul>
        <li>API para moedas do Banco do Brasil</li>
        <a href="https://olinda.bcb.gov.br/olinda/servico/Expectativas/versao/v1/documentacao" class="is-active router-link-active has-icon">
          <span class="tag is-info">Documentação</span>
        </a>
        <li>
          API de criptomoedas fornecida pelo Mercado Bitcoin</li>
        <a href="https://api.mercadobitcoin.net/api/v4/docs#section/Overview" class="is-active router-link-active has-icon">
          <span class="tag is-info">Documentação</span>
        </a>
        <li>Informações sobre Taxa Selic do Banco Central do Brasil</li>
        <a href="https://dadosabertos.bcb.gov.br/dataset/11-taxa-de-juros---selic/resource/b73edc07-bbac-430c-a2cb-b1639e605fa8" class="is-active router-link-active has-icon">
          <span class="tag is-info">Documentação</span>
        </a>
      </ul>
    </h2>
  </section>


  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>GeldWatch</strong> by 
        <a href="https://github.com/BrunaBravin">Bruna Bravin</a> e 
        <a href="https://github.com/Serafim98">Luis Fernando Serafim</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Home',

}
</script>

<style scoped>
ul {
  list-style-type: circle;
}
</style>