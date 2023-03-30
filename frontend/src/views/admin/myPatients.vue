<template>
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        Patient Name
      </th>
      <th class="text-left">
        Medical History
      </th>
      <th class="text-left">
        Telephone
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="record in records"
      :key="record._id"
    >
      <td> {{ record.FirstName + " " + record.LastName}}</td>
      <td>{{ record.medhistory}}</td>
      <td>{{ record.patientNumber}}</td>
<!--      <td> {{ record.patientEmail}}</td>-->

    </tr>
    </tbody>
  </v-table>
</template>
<script>
import patientRecord from "@/views/patientRecord.vue";
import axios from "axios";

export default {
  name: "myPatients",
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
    axios.get('http://localhost:4000/record/get?email=' + patientEmail, {

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
