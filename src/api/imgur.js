import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '7b5bc27de11ba4e';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      // params
      client_id: CLIENT_ID,
      response_type: 'token',
    };

    // window.location makes the user's browser to automatically navigate to the URL
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring,
    )}`;
  },

  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  uploadImages(images, token) {
    // images is an array-like object, so we need to turn it into an actual array so we can iterate over all the objects over the array-like object
    const promises = Array.from(images).map(image => {
      const formData = new FormData();
      // This image is for the Imgur key "image" - see: https://apidocs.imgur.com/?version=latest#c85c9dfc-7487-4de2-9ecd-66f727cf3139
      formData.append('image', image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });
    // wait for every upload request to be completed before we allow this function to continue
    return Promise.all(promises);
  },
};
