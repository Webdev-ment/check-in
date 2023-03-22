<template>
  <div class="pa-5">
    <div class="mt-15">
      <h1 >Register</h1>
      <br><br>
    <v-form>
      <v-text-field label="First Name" v-model="firstname"></v-text-field>
      <v-text-field label="Last Name"  v-model="lastname"></v-text-field>
      <v-text-field label="Email Address"  v-model="email"></v-text-field>
      <v-text-field label="Password" type="password"  v-model="password"></v-text-field>
      <v-text-field label="Confirm Password" type="password"  v-model="conpassword"></v-text-field>

      <div class="d-flex justify-center">
        <v-btn color="primary" @click="simulateRegister">Create Account</v-btn>
<!--        <router-link to="/"> <v-btn color="primary" href="/register">Create Account</v-btn></router-link>-->
      </div>
      <div class="d-flex justify-center mt-2">
        <v-btn variant="text" color="primary" size="x-small" href="/login">I already have an account</v-btn>

<!--        <router-link to="/login">-->
<!--          <v-btn variant="text" color="primary" size="x-small">I already have an account</v-btn>-->
<!--        </router-link>-->

      </div>
    </v-form>


    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      conpassword: ""
    }
  },
  methods: {

    simulateRegister(){
      let self = this;
      axios.post('http://localhost:4000/users/register', {
        FirstName: this.firstname,
        LastName: this.lastname,
        userEmail: this.email,
        userPassword: this.password,
        conPassword: this.conpassword
      })
        .then(function (response) {
          console.log(response);
          self.$router.push("/login")
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
