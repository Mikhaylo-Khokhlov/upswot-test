export const state = () => ({
  user: {},
  loginError: false,
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setLoginError(state, payload) {
    state.loginError = payload
  },
}

export const actions = {
  userLogin({ commit }, data) {
    if (data.name === 'admin' && data.password === '12345') {
      commit('setUser', data)
      localStorage.setItem('user', JSON.stringify(data))
    } else {
      commit('setLoginError', true)
    }
  },
}

export const getters = {
  getUser: (state) => state.user,
  getLoginError: (state) => state.loginError,
}
