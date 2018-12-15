import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: null
  },
  getters: {
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    loggingUser: (state) => {
      state.isLoggedIn = true
    },
    logoutUser: (state) => {
      state.isLoggedIn = false
    },
    setUser: (state, user) => {
      state.user = user
    },
    unsetUser: (state) => {
      state.user = null
    }
  },
  actions: {
    loggingUser: ({ commit }) => {
      commit('loggingUser')
    },
    logoutUser: ({ commit }) => {
      commit('logoutUser')
    },
    setUser: ({ commit }, user) => {
      commit('setUser', user)
    },
    unsetUser: ({ commit }) => {
      commit('unsetUser')
    }
  },
  plugins: [vuexLocal.plugin]
})
