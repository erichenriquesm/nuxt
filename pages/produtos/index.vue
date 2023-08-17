<template>
  <div>
    <!-- <Header :title="'Produtos'"/> -->

    <div>
      <h2>Produtos</h2>
      <p>
        
        {{ JSON.stringify(paises) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  async asyncData({ $axios }){
    const paises = await $axios.$get("https://restcountries.com/v3.1/all");
    return {
      name: "eric",
      paises: paises
    }
  }
};
</script>

<style>
</style>