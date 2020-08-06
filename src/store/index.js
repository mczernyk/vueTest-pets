import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  // getters: allow us to pull info from state (i.e. number of animals)
  getters: getters
})
