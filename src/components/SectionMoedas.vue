<template>
  <h1>teste</h1>
  <section class="section">
  <h1 class="title">Título da Section</h1>
  <h2 class="subtitle">
    Section Simples pra ficar bonitin.
  </h2>
  <li v-for="moeda in moedas">
    {{ moeda }}
  </li>
</section>
</template>

<script>
export default {
  name: 'SectionMoedas',
}
</script>