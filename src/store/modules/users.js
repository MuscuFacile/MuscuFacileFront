const state = {
  isLoggedIn: false,
  loggedUser: null
}

const getters = {
  isLoggedIn: state => {
    return state.isLoggedIn
  },
  getUser: state => {
    return state.loggedUser
  }
}

const mutations = {
  loggingUser: state => {
    state.isLoggedIn = true
  },
  logoutUser: state => {
    state.isLoggedIn = false
  },
  setUser: (state, user) => {
    state.loggedUser = user
  },
  unsetUser: state => {
    state.loggedUser = null
  }
}

const actions = {
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
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
