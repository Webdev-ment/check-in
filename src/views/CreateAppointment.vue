<template>
<div>
  <h3>Request an Appointment</h3>
  <p> Fill the form below to schedule your appointment.</p>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              label="Phone Number"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="address"
              :rules="addressRules"
              label="Address"
              required
            ></v-text-field>
          </v-col>


          <v-col
            cols="12"
            md="6"
          >
            <v-select
              label="What procedure would you want to make an appointment for?"
              :items="['Medical Examination', 'Doctor Check', 'Result Analysis', 'Check-up']"
            ></v-select>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
              <v-radio-group v-model="radios">
                <template v-slot:label>
                  <div>Have you ever visited this facility before?</div>
                </template>
                <v-radio value="Yes">
                  <template v-slot:label>
                    <div>Yes</div>
                  </template>
                </v-radio>
                <v-radio value="No">
                  <template v-slot:label>
                    <div>No</div>
                  </template>
                </v-radio>
              </v-radio-group>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >

          </v-col>

        </v-row>

        <v-btn
          block
          class="mb-4"
          color="blue"
          size="large"
          variant="tonal"
        >
          Submit Form
        </v-btn>
      </v-container>
    </v-form>
</div>
</template>

<script>

export default {
  name: "CreateAppointment"
}
</script>

<style scoped>

</style>
