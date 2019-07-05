<template>
  <div id="app">
    <CryptoCard title="Bitcoin"/>
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