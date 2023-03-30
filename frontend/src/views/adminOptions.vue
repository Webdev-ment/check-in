<template>
  <h3>My Dashboard</h3>


  <v-row no-gutters>
    <v-col>
    <v-sheet class="pa-2 ma-2">
      <v-card
        max-width="500"

        class="mx-auto"
      >

        <v-container>
          <v-row dense>

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
                        href="/add_prescriptions"
                      >
                        Create Prescriptions
                      </v-btn>
                    </v-card-actions>

                  </div>

                </div>
              </v-card>
            </v-col>


            <v-col cols="12">
              <v-card
                color="#385F73"
                theme="dark"
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5">
                      View Prescriptions
                    </v-card-title>

                    <!--                <v-card-subtitle>Shows Patients who visit the facility.</v-card-subtitle>-->

                    <v-card-actions>
                      <v-btn
                        class="ms-2"
                        variant="outlined"
                        size="small"
                        href="/patient_prescriptions"
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
    </v-sheet>
    </v-col>
    <v-col>
      <v-sheet class="pa-2 ma-2">
        <v-card
          max-width="500"

          class="mx-auto"
        >

          <v-container>
            <v-row dense>

              <v-col cols="12">
                <v-card
                  color="#952175"
                  theme="dark"
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title class="text-h5">
                       View Appointments
                      </v-card-title>

                      <!--                <v-card-subtitle>Shows Patients who visit the facility.</v-card-subtitle>-->

                      <v-card-actions>
                        <v-btn
                          class="ms-2"
                          variant="outlined"
                          size="small"
                          href="/view_appointments"
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
                          href="/my_patients"
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
      </v-sheet>
    </v-col>
  </v-row>

<!--  <v-card
    max-width="500"

    class="mx-auto"
  >

    <v-container>
      <v-row dense>

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

                &lt;!&ndash;                <v-card-subtitle>Shows Patients who visit the facility.</v-card-subtitle>&ndash;&gt;

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                    href="/add_prescriptions"
                  >
                    Create Prescriptions
                  </v-btn>
                </v-card-actions>

              </div>

            </div>
          </v-card>
        </v-col>


        <v-col cols="12">
          <v-card
            color="#385F73"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  View Prescriptions
                </v-card-title>

                &lt;!&ndash;                <v-card-subtitle>Shows Patients who visit the facility.</v-card-subtitle>&ndash;&gt;

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                    href="/patient_prescriptions"
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
            color="#1F7087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  View Patients
                </v-card-title>

                &lt;!&ndash;                <v-card-subtitle>Shows Patients who visit the facility.</v-card-subtitle>&ndash;&gt;

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                    href="/my_patients"
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
  </v-card>-->

</template>

<script>
import Appointments from "@/views/MyAppointments.vue";

export default {
  name: "adminOptions",
  components: {Appointments}
}
</script>

<style scoped>

</style>
