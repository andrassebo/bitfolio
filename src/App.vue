<template>
  <div id="app">
    <CryptoDeck />
  </div>
</template>

<script>
import CryptoDeck from "./components/CryptoDeck.vue";

export default {
  name: "app",
  components: {
    CryptoDeck
  }
};
</script>