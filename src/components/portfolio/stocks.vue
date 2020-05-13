<template>
    <div>
        <div>
            <h5>{{stock.name}}</h5>
            <small>
              Price is {{ stock.price}}
            </small>
            <small>Quantity is {{stock.quantity}}</small>
            <input
            placeholder="Quantity"
            v-model="quantity">
            <button  :disabled="quantity <= 0" :click="buyStock">Buy</button>
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
        sellStock () {
            const order = {
                stockId : this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            console.log(order)
            this.$store.dispatch('sellStock', order)
            this.quantity = 0
        }
    }
}
</script>
<style scoped>

</style>