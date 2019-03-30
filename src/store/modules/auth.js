import api from "../../api/imgur";
import qs from "qs";

const state = {
  token: window.localStorage.getItem("imgur_token") // gets the token, but doesn't store it. Check 'finalize login' for that.
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
  login: () => {
    // as soon as we call the api function, we instantly navigate away from our application because of window.location
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace("#", "")); // deleting the "#" symbol
    commit("setToken", query.access_token); // access_token is from the URL after the login
    window.localStorage.setItem("imgur_token", query.access_token); // looks for token and stores it, and checks to see if it's still there when a user comes back (setItem)
  },
  logout: ({ commit }) => {
    commit("setToken", null);
    // you could call another mutation or anything async if you wanted
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
