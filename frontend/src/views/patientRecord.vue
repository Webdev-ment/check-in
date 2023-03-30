<template>
  <div>
<h2>Patient Record</h2>
    <p> Fill out the form below with patient details.</p>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="address"
              :rules="emailRules"
              label="Address"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field label="Birth Date" variant="solo" type="date" v-model="birth"></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="patientEmail"
              :rules="emailRules"
              label="Patient Email"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="patientNumber"
              :rules="emailRules"
              label="Telephone"
              required
            ></v-text-field>
          </v-col>

          <h2>General Medical History</h2>
          <v-divider></v-divider>

          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="history"
              :rules="emailRules"
              label="Previous Medical History"
              required>

            </v-text-field>
          </v-col>


          <h2>Case of Emergency</h2>
            <v-divider></v-divider>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="name"
              :rules="emailRules"
              label="Name"
              required>

            </v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="number"
              :rules="emailRules"
              label="Phone Number"
              required>

            </v-text-field>
          </v-col>


        </v-row>




        <v-btn
          block
          class="mb-4"
          color="green"
          size="large"
          variant="tonal"
          @click="simulateRecord"
        >
          Submit Form
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "patientRecord",
  data() {
    return {
      firstname: "",
      lastname: "",
      address: "",
      patientEmail: "",
      patientNumber: "",
      birth: "",
      history: "",
      name: "",
      number: ""
    }
  },
  methods: {

    simulateRecord(){
      let self = this;
      axios.post('http://localhost:4000/record/create', {
        FirstName: this.firstname,
        LastName: this.lastname,
        address: this.address,
        patientEmail: this.patientEmail,
        patientNumber: this.patientNumber,
        birthDate: this.birth,
        medhistory: this.history,
        emergName: this.name,
        emergNum: this.number
      })
        .then(function (response) {
          console.log(response);
          self.$router.push("/")
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
