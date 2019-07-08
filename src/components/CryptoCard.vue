<template>
  <div>
    <b-card>
      <b-card :img-src="require('../assets/'+crypto+'_logo.png')" :title="crypto" imt-top></b-card>
      <b-card-text>{{ priceData.last }} EUR</b-card-text>
      <div slot="footer">
        <small class="text-muted"></small>
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      priceData: null
    };
  },
  name: "crypto",
  props: {
    crypto: String
  },
  created() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const bitstampUrl = "https://www.bitstamp.net/api/v2/ticker/";
    const url = proxy + bitstampUrl + encodeURI(this.crypto) + "eur/";
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Headers": "origin"
        }
      })
      .then(response => {
        this.priceData = response.data;
      });
  }
};
</script>