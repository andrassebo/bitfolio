<template>
  <div>
    <b-spinner v-if="isLoading"></b-spinner>
    <b-card :img-src="`/images/${crypto}_logo.png`" :title="crypto" imt-top v-else>
      <b-card-text>{{ priceData.last }} EUR</b-card-text>
      <div slot="footer">
        <small class="text-muted">H: {{ priceData.high }}</small>
        <small class="text-muted">L: {{ priceData.low }}</small>
      </div>
    </b-card>
  </div>
</template>

<script>
import BitstampClient from "@/services/BitstampClient";

export default {
  data() {
    return {
      isLoading: true,
      priceData: null
    };
  },
  name: "crypto",
  props: {
    crypto: String
  },
  created() {
    BitstampClient.getCryptoPrice(this.crypto).then(result => {
      this.priceData = result;
      this.isLoading = false;
    });

    BitstampClient.getTransactions();
  }
};
</script>