

const state = {
  stocks: [],
  fund: 1000
};

const mutations = {
  buyStock (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id = stockId)
    if(record) {
      record.quantity += quantity;
    }
    else {
      state.stocks.push({
        id: stockId,
        quantity : quantity
      })
      state.fund -= stockPrice * quantity
    }
  },
  sellStock (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element = element.id = stockId) 
      if (record.quantity >= quantity ) {
        record.quantity -= quantity
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }
      state.fund += stockPrice * quantity
  }
};
const actions = {
    disposeStock(order, {commit}) {
      commit( sellStock, order)
    }
};

const getters = {
   stockPortfolio(state) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.Id = stockId) 
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price 
      }

    }) 
   },
   funds(state) {
     return state.fund
   }
};

export default {
    state,
    mutations,
    actions,
    getters
}