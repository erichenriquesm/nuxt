<template>
  <div>
    <div
      class="bg-dark p-4 text-light mb-4 d-flex align-items-center justify-content-between"
    >
      <h2>{{ title }}</h2>
      <div class="nav d-flex align-items-center">
        <NuxtLink :to="{name: 'a-empresa'}">Empresa</NuxtLink>
        <NuxtLink :to="{name: 'servicos'}">Serviços</NuxtLink>
        <NuxtLink :to="{name: 'produtos'}">Produtos</NuxtLink>
        <NuxtLink :to="'/produtos/produto-a'">Produto A</NuxtLink>
        <NuxtLink :to="'/produtos/produto-b'">Produto B</NuxtLink>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    props:["title"]
};
</script>

<style scoped>
.nav{
  gap: 15px;
}
</style>>

</style>