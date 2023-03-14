<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" >
        <!--  -->
        <div class="d-flex justify-center mt-5">
          <h4 >Chec-In</h4>
        </div>
        <v-list density="compact">
          <v-list-item active-color="primary" to="/">
            <template v-slot:prepend>
              <v-icon icon="mdi-map"></v-icon>
            </template>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item>
          <v-list-item active-color="primary" to="/my_appointments">
            <template v-slot:prepend>
              <v-icon icon="mdi-clock"></v-icon>
            </template>
            <v-list-item-title >Appointments</v-list-item-title>
          </v-list-item>
          <v-list-item active-color="primary" to="/my_prescriptions">
            <template v-slot:prepend>
              <v-icon icon="mdi-clock"></v-icon>
            </template>
            <v-list-item-title >My Prescriptions</v-list-item-title>
          </v-list-item>
          <v-list-item active-color="primary" to="/user_settings">
            <template v-slot:prepend>
              <v-icon icon="mdi-clock"></v-icon>
            </template>
            <v-list-item-title >Settings</v-list-item-title>
          </v-list-item>
          <v-list-item active-color="primary" color="red" href="#" @click="simulateLogout">
            <template v-slot:prepend>
              <v-icon icon="mdi-clock"></v-icon>
            </template>
            <v-list-item-title >Logout</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-app-bar color="primary">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <!--  -->
        <div class="pa-5">
          <router-view />
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "auth",
  data(){
    return {
      drawer: null
    }
  },
  methods: {
    simulateLogout(){
      localStorage.removeItem("token");
      this.$router.push("/login")
    }
  },
  mounted(){
    if (localStorage.getItem("token") === null){
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

</style>
