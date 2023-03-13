<template>
  <div>
    My Appointments

    <div>
      <v-container class="">
        <v-row>
          <v-col>
            <v-sheet class="pa-2 ma-2">

            </v-sheet>
          </v-col>

          <v-spacer></v-spacer>

          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-btn
                variant="flat"
                color="success"
              >
                <router-link to="/create_appointments">Create Appointment</router-link>
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Appointments"
}
</script>

<style scoped>

</style>
