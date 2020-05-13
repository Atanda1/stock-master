 import stocks from '../../data/data'

const state = {
  stock: []
};

const mutations = {
    setStocks  (state, newstocks)  {
        state.stock = newstocks
    },
    randomStocks ( state, stocks )  {
        state.stock = stocks
    }
};
const actions = {
    buyStocks ({commit}, order){
        commit('buyStock', order)
    },
    initStocks ({commit}) {
        commit ('setStocks', stocks)
    },
    radomizeStocks ({commit}) {
        commit('randomStocks')
    }
};

const getters = {
    stocks : (state) => {
      return  state.stock
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}