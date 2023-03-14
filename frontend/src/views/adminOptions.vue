<template>
  <h3>My Dashboard</h3>
  <v-card
    max-width="500"

    class="mx-auto"
  >

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            theme="dark"


          >
            <v-card-title class="text-h5">
              Approve Appointments
            </v-card-title>

<!--            <v-card-subtitle>Requires approval to proceed.</v-card-subtitle>-->

            <v-card-actions>
              <v-btn
                class="ms-2"
                variant="outlined"
                size="small">
                View Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#1F7087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  View Patients
                </v-card-title>

<!--                <v-card-subtitle>Shows Patients who visit the facility.</v-card-subtitle>-->

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                    View Now
                  </v-btn>
                </v-card-actions>
              </div>

            </div>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#952175"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Create Prescriptions
                </v-card-title>

<!--                <v-card-subtitle>Shows Patients who visit the facility.</v-card-subtitle>-->

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                    View Now
                  </v-btn>
                </v-card-actions>

              </div>

            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "adminOptions"
}
</script>

<style scoped>

</style>
