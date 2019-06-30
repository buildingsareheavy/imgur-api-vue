<template>
  <div class="image-drop" @change="uploadImages($event.target.files)">
    <!-- the $ on $event tells vue that it is looking for the event on that @change -->
    <input type="file" multiple accept="image/*" />
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UploadForm",
  methods: mapActions(["uploadImages"])
};
</script>

<style scoped>
.image-drop {
  height: 30vh;
  border: 1px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.image-drop:hover {
  background-color: #eee;
  cursor: pointer;
}
input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>
