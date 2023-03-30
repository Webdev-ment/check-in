<template>
  <v-container class="">
    <v-table
      fixed-header
      height="300px"
    >
      <thead>
      <tr>
        <th class="text-left">
          Patient Name
        </th>
        <th class="text-left">
          Procedures
        </th>
        <th class="text-left">
          Appointment Date
        </th>
        <th class="text-left">
          Time of Appointment
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="appointment in appointments"
        :key="appointment._id"
      >
        <td>{{ appointment.FirstName + " " + appointment.LastName}}</td>
        <td>{{ appointment.procedure }}</td>
        <td>{{ appointment.appDate }}</td>
        <td>{{ appointment.appTime }}</td>
      </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import createAppointment from "@/views/CreateAppointment.vue";
import axios from "axios";

export default {
  name: "viewAppointments",
  data() {
    return {
      appointments: []
    }
  },
  computed: {
    createAppointment() {
      return createAppointment
    }
  },
  mounted() {
    const patientEmail = localStorage.getItem("email")
    axios.get('http://localhost:4000/appointments/get?email=' + "",  {

    })
      .then( async (response) => {
        console.log(response.data);
        this.appointments = await response.data
      })
  }
}
</script>

<style scoped>

</style>
