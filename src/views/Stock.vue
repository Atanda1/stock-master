<template>
    <div>
        <h1>
            Here's the stock page
        </h1>
        <unitStock v-for="stock in stocks" v-bind:key="stock" :stock="stock"></unitStock>
    </div>
</template>

<script>
import unitStock from '../components/stock'
export default {
  components : {
      unitStock
  },
  computed : {
      stocks () {
          return this.$store.getters.stocks
      }
  }
};
</script>