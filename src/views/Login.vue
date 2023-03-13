<template>
  <div class="pa-5">
    <div class="mt-15">
      <h1 >Login</h1>
      <br><br>
      <v-text-field label="Email Address"></v-text-field>
      <v-text-field label="Password"></v-text-field>
      <div class="d-flex justify-center">
        <a to="/" href="#" @click="simulateLogin"> <v-btn color="primary">Login</v-btn></a>

      </div>
      <div class="d-flex justify-center mt-2">
       <router-link to="/register">
        <v-btn variant="text" color="primary" size="x-small">I don't have an account</v-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    simulateLogin(){
      localStorage.setItem("token", "bre");
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>
