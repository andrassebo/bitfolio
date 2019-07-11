import axios from "axios";
import crypto from "cryptojs";

export default {
  currency: "eur",
  key: "",
  secret: "",
  clientId: "",
  timeout: 10000,

  async getCryptoPrice(crypto) {
    var result = await axios.get(
      `/ticker/${crypto.toLowerCase()}${this.currency}/`
    );
    return result.data;
  },

  async getTransactions() {},

  generateNonce() {
    return Date.now();
  },

  sign() {
    var nonce = this.generateNonce();
    var message = nonce + this.clientId + this.key;
    var signer = crypto.createHmac("sha256", new Buffer(this.secret, "utf8"));
    var signature = signer
      .update(message)
      .digest("hex")
      .toUpperCase();
  }
};
