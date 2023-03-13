<template>
  <div>
    <h3>Prescription Information</h3>
      <v-table>
        <thead>
        <tr>
          <th class="text-left">
            Name of Medication
          </th>
          <th class="text-left">
            Dosage
          </th>
          <th class="text-left">
            Status
          </th>
        </tr>
        </thead>
        <tbody>

        </tbody>
      </v-table>

      <div class="" style="margin-top: 50px;">
        <h3>Fill out form to add medication.</h3>
        <v-sheet width="500" class="mx-auto" >
          <v-form fast-fail @submit.prevent>
            <v-text-field
              v-model="medName"
              label="Name of Medicine"
              :rules="MedRules"
            ></v-text-field>

            <v-text-field
              v-model="dosage"
              label="Dosage"
              :rules="doseRules"
            ></v-text-field>

            <v-btn type="submit" block class="mt-2 ">Add</v-btn>
          </v-form>
        </v-sheet>
      </div>


  </div>
</template>

<script>
import addPrescriptions from "@/views/AddPrescriptions.vue";

export default {
  name: "AddPrescriptions",
  computed: {
    addPrescriptions() {
      return addPrescriptions
    }
  }
}
</script>

<style scoped>

</style>
