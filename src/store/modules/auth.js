import api from "../../api/imgur";

const state = {
  token: null
};

const getters = {
  // state in this case is an arguement in the function, not the const state
  // shorthand for function(state) => { !!state.token }
  // !! turns a value into a boolean value
  isLoggedIn: state => !!state.token
};

const actions = {
  // to call a mutation, we use the commit function
  // NOT mutations.setToken
  logout: ({ commit }) => {
    commit("setToken", null);
    // you could call another mutation or anything async if you wanted
  },
  login: () => {
    // as soon as we call the api function, we instantly navigate away from our application because of window.location
    api.login();
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state, // shorthand for "state: state" becuase of ES6 syntax
  getters,
  actions,
  mutations
};
