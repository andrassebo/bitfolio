<template>
  <div>
    <b-card-group deck>
      <CryptoCard crypto="BTC" />
      <CryptoCard crypto="ETH" />
      <CryptoCard crypto="BCH" />
    </b-card-group>
  </div>
</template>

<script>
import CryptoCard from "./CryptoCard.vue";

export default {
  name: "cryptoDeck",
  components: {
    CryptoCard
  }
};
</script>