import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';

Vue.use(Vuex); // needs connection of Vuex to talk to Vue

export default new Vuex.Store({
  // Vuex.Store holds all the modules, getters, etc.
  // store also needed to be added to main.js
  modules: {
    auth, // shorthand for "auth: auth"
    images,
  },
});
