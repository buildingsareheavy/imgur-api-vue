<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <p>Image List</p>
      <img v-for="image in allImages" :src="image.link" :key="image.id" />
    </div>
    <h2 v-else>Log in to get started</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 5px;
}
img {
  max-width: 100%;
  padding: 5px;
  border: 1px solid black;
}
</style>
