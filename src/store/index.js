import Vue from "vue";
import Vuex from "vuex";
import stock from './module/stocks'
import portfolio from './module/portfolio'

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    stock,
    portfolio
  }
});
