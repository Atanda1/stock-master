<template>  
  <div>
    <h1>
        This the portfolio
    </h1>
    <portfolio v-for="appPort in appPorts" v-bind:key="appPort" :appPort="appPort">

    </portfolio>
  </div>
</template>

<script>
import portfolio from "../components/portfolio/stocks"
import {mapGetters} from "vuex"
export default {
    computed : {
        ...mapGetters({
            appPorts: 'stockPortfolio'
        })
    },
    components : {
        portfolio
    }
}
</script>