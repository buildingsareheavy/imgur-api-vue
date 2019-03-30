import qs from "qs";

const CLIENT_ID = "7b5bc27de11ba4e";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      // params
      client_id: CLIENT_ID,
      response_type: "token"
    };

    // window.location makes the user's browser to automatically navigate to the URL
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  }
};
