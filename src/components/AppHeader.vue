<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <a href class="item">Galleries</a>
        <a href class="item">Upload</a>
        <a href class="item" @click="logout">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  // I could just write > methods: mapActions(['login']) because it's the only method being called
  methods: {
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>



<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
