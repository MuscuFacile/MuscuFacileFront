import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    loggingUser: (state) => {
      state.isLoggedIn = true
    },
    logoutUser: (state) => {
      state.isLoggedIn = false
    }
  },
  actions: {
    loggingUser: ({ commit }) => {
      commit('loggingUser')
    },
    logoutUser: ({ commit }) => {
      commit('logoutUser')
    }
  },
  plugins: [vuexLocal.plugin]
})
