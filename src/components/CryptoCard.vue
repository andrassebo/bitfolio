<template>
  <div>
    <b-card>
      <b-card-img :src="require('../assets/bitcoin_logo.png')" height="80" width="80"></b-card-img>
      <b-card-text>{{ title }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Crypto",
  props: {
    title: String
  }
};
</script>