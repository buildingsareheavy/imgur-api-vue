<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <div class="right menu">
      <div v-if="isLoggedIn">Yay! Logged In!</div>
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
    ...mapActions(["login"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>



<style>
</style>
