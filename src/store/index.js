import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mututaions'

Vue.ust(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})


