<template>
  <div class="pa-5">
    <div class="mt-15">
      <!--      based on who is log  in credentials one should be lead to the <admin-options> or <patient-options>-->
      <h1 >Login</h1>
      <br><br>
      <v-text-field label="Email Address"></v-text-field>
      <v-text-field label="Password"></v-text-field>
      <div class="d-flex justify-center">
        <v-btn color="primary" href="/adminOptions">Login</v-btn>
      </div>
      <div class="d-flex justify-center mt-2">
        <v-btn variant="text" color="primary" size="x-small" href="/register">I don't have an account</v-btn>

        <!--       <router-link to="/register">-->
<!--        <v-btn variant="text" color="primary" size="x-small" href="/register">I don't have an account</v-btn>-->
<!--        </router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
import AdminOptions from "@/views/adminOptions.vue";
import PatientOptions from "@/views/patientOptions.vue";

export default {
  name: "Login",
  components: {PatientOptions, AdminOptions},
  methods: {
    simulateLogin(){
      localStorage.setItem("token", "chec");
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>
