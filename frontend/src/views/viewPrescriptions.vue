<template>
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        Name of Medication
      </th>
      <th class="text-left">
        Dosage
      </th>
<!--      <th class="text-left">-->
<!--        Status-->
<!--      </th>-->
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="prescription in prescriptions"
      :key="prescription._id"
    >
      <!--          <td>{{ prescription.FirstName + " " + appointment.LastName}}</td>-->
      <td>{{ prescription.Medicine }}</td>
      <td>{{ prescription.Dosage }}</td>
<!--      <td>{{ prescription.patientEmail }}</td>-->

    </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from 'axios';
import createAppointment from "@/views/CreateAppointment.vue";
import ViewAppointments from "@/views/routes/viewAppointments.vue";
import AddPrescriptions from "@/views/AddPrescriptions.vue";
export default {
  name: "viewPrescriptions",
  data() {
    return {
      prescriptions: []
    }
  },
  computed: {
    AddPrescriptions() {
      return AddPrescriptions
    }
  },
  mounted() {
    const patientEmail = localStorage.getItem("email")
    axios.get('http://localhost:4000/prescription/get?email=' + patientEmail, {

    })
      .then( async (response) => {
        console.log(response.data);
        this.prescriptions = await response.data
      })
  }
}
</script>

<style scoped>

</style>
