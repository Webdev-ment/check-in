<template>
  <div class="pa-5">
    <div class="mt-15">
      <h1 >Register</h1>
      <br><br>
      <v-text-field label="First Name"></v-text-field>
      <v-text-field label="Last Name"></v-text-field>
      <v-text-field label="Email Address"></v-text-field>
      <v-text-field label="Password"></v-text-field>
      <div class="d-flex justify-center">
        <router-link to="/"> <v-btn color="primary">Create Account</v-btn></router-link>
      </div>
      <div class="d-flex justify-center mt-2">
        <router-link to="/login">
          <v-btn variant="text" color="primary" size="x-small">I already have an account</v-btn>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>
