<template>
  <div  class="backgroundPicture">
    <v-row no-gutters>
      <v-col cols="12" sm="8"></v-col>
      <v-col cols="12" sm="4" style="min-height: 100vh; background-color: white">
        <router-view />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "guest",
  mounted() {
    if (localStorage.getItem("token") !== null) {
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.backgroundPicture{
  background-image: url('/pexels-luis-quintero-15446898.jpg');
  background-size: cover;


}
</style>
