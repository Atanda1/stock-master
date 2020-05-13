<template>
    <div>
        <div>
            <h5>{{stock.name}}</h5>
            <small>
              Price is {{ stock.price}}
            </small>
            <input
            placeholder="Quantity"
            v-model="quantity">
            <button  :disabled="quantity <= 0" @click="buy">Buy</button>
        </div>
    </div>
</template>

<script>
export default {
    props : ['stock'],
    data () {
        return {
            quantity : 0
        }
    },
    methods : {
        buy () {
            const order = {
                stockId : this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order)
            console.log("order don")
            this.$store.dispatch('buyStocks', order)
        }
    }
}
</script>
<style scoped>

</style>