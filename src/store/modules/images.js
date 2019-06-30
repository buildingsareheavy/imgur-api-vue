import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: [],
};

const getters = {
  allImages: state => state.images,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    // rootState allows us to access data from other modules
    const { token } = rootState.auth; // shorthand for "rootState.auth.token;""
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages({ rootState }, images) {
    // Get the access token
    const { token } = rootState.auth;

    // Call our API modle to do the upload
    await api.uploadImages(images, token);

    // Redirect our user to ImageList component
    router.push('/');
  },
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state, // shorthand for "state: state" because of ES6 syntax
  getters,
  actions,
  mutations,
};
