<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import Auth from "../middleware/auth.js";
export default {
  middleware: Auth,
  data(){
    return {

    }
  },
}
</script>

<style></style>