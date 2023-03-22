<template>
  <div>
    My Appointments

    <div>
      <v-container class="">
        <v-row>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-sheet class="pa-2 ma-2">
<!--                <v-btn
                  variant="flat"
                  color="success"
                >
                  <router-link to="/">View Appointments</router-link>
                </v-btn>-->
              </v-sheet>
            </v-sheet>
          </v-col>

          <v-spacer></v-spacer>

          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-btn
                variant="flat"
                color="primary"
              >
                <router-link to="/create_appointments">Create Appointment</router-link>
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
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
          </tr>
          </tbody>
        </v-table>
      </v-container>

    </div>
  </div>
</template>

<script>
import createAppointment from "@/views/CreateAppointment.vue";
import axios from 'axios';

export default {
  name: "Appointments",
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

    axios.get('http://localhost:4000/appointments/get', {

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
