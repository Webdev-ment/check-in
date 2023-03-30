<template>
  <div>
   <h2>Patient Medical Record</h2>

    <div>
      <v-container class="">
        <v-card
          class="mx-auto"
          max-width="700"
        >
          <v-card-item class="bg-cyan-darken-1">
            <v-card-title>
              <span class="text-h5">My Information</span>
            </v-card-title>
          </v-card-item>

          <v-list
            v-for="record in records"
            :key="record._id"
          >
            <v-list-item>
             <h3>Patient Information</h3>
            {{ record.FirstName + " " + record.LastName}}
              <br>
              {{ record.birthDate}}
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item
            >
              My Email:
              {{ record.patientEmail}}
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item
            >
              Telephone:
              {{ record.patientNumber}}
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item
            >
              Address:
              {{ record.address}}
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item
            >
              Medical History: {{ record.medhistory}}
            </v-list-item>

            <v-divider inset></v-divider>
            <v-list-item
            >
              <span>Emergency Contact</span> <br>
              {{ record.emergName}} <br>    {{ record.emergNum}}
            </v-list-item>

            <v-divider inset></v-divider>
          </v-list>

        </v-card>

      </v-container>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import createAppointment from "@/views/CreateAppointment.vue";
import patientRecord from "@/views/patientRecord.vue";
export default {
  name: "myRecord",
  data() {
    return {
      records: []
    }
  },
  computed: {
    patientRecord() {
      return patientRecord
    }
  },
  mounted() {
    const patientEmail = localStorage.getItem("email")
    axios.get('http://localhost:4000/record/getRecordByEmail?patientEmail=' + patientEmail, {

    })
      .then( async (response) => {
        console.log(response.data);
        this.records = await response.data
      })
  }
}
</script>

<style scoped>

</style>
