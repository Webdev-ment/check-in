<template>
  <div class="pa-5">
    <div class="mt-15">
      <!--      based on who is log  in credentials one should be lead to the <admin-options> or <patient-options>-->
      <h1 >Login</h1>
      <br><br>
      <v-text-field label="Email Address" v-model="email" ></v-text-field>
      <v-text-field label="Password" type="password" v-model="password" ></v-text-field>
      <div class="d-flex justify-center">
        <v-btn color="primary" @click="simulateLogin">Login</v-btn>
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
import axios from "axios";
import AdminOptions from "@/views/adminOptions.vue";
import PatientOptions from "@/views/patientOptions.vue";
import {el} from "vuetify/locale";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  components: {PatientOptions, AdminOptions},
  methods: {

    simulateLogin(){
      let self = this;
      axios.post('http://localhost:4000/users/login', {
        userEmail: this.email,
        userPassword: this.password
      })
        .then(response =>{
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", this.email);
          localStorage.setItem("adminStatus", response.data.user.isAdmin);
          console.log(localStorage.getItem("adminStatus"))

          if (response.data.user.isAdmin)
          {
            self.$router.push("/admin_options")
            console.log("/admin_options")
          } else {
            self.$router.push("/patient_options")
            console.log("/patient_options")
          }

        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }
}
</script>

<style scoped>

</style>
