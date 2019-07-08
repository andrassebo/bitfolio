<template>
  <div id="app">
    <CryptoCard crypto="BTC" />
  </div>
</template>

<script>
import CryptoCard from "./components/CryptoCard.vue";

export default {
  name: "app",
  components: {
    CryptoCard
  }
};
</script>