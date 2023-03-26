<template>
  <div>
    <h3>Prescription Information</h3>
<!--      <v-table>-->
<!--        <thead>-->
<!--        <tr>-->
<!--          <th class="text-left">-->
<!--            Name of Medication-->
<!--          </th>-->
<!--          <th class="text-left">-->
<!--            Dosage-->
<!--          </th>-->
<!--          <th class="text-left">-->
<!--            Status-->
<!--          </th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr-->
<!--          v-for="prescription in prescription"-->
<!--          :key="prescription._id"-->
<!--        >-->
<!--&lt;!&ndash;          <td>{{ prescription.FirstName + " " + appointment.LastName}}</td>&ndash;&gt;-->
<!--          <td></td>-->
<!--          <td></td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </v-table>-->

      <div class="" style="margin-top: 50px;">
        <h3>Fill out form to add medication.</h3>
        <v-sheet width="500" class="mx-auto" >
          <v-form >
            <v-text-field
              v-model="medName"
              label="Name of Medicine"
              :rules="MedRules"
              required
            ></v-text-field>

            <v-text-field
              v-model="dose"
              label="Dosage"
              :rules="doseRules"
              required
            ></v-text-field>

            <v-btn type="submit" block class="mt-2 " @click="simulateAppointment">Add</v-btn>
          </v-form>
        </v-sheet>
      </div>


  </div>
</template>

<script>
import axios from "axios";

import addPrescriptions from "@/views/AddPrescriptions.vue";

export default {
  name: "AddPrescriptions",
  data() {
    return {
      medName: "",
      dose: ""
    }
  },
  methods: {

    simulateAppointment(){
      let self = this;
      axios.post('http://localhost:4000/prescription/add', {
        Medicine: this.medName,
        Dosage: this.dose,
      })
        .then(function (response) {
          console.log(response);
          self.$router.push("/admin_options")
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  },
  computed: {
    addPrescriptions() {
      return addPrescriptions
    }
  }
}
</script>

<style scoped>

</style>
