<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" >
        <!--  -->
        <div class="d-flex justify-center mt-5">
          <h4 >Chec-In Admin</h4>
        </div>
        <v-list density="compact">
<!--          <v-list-item active-color="primary" to="/">
            <template v-slot:prepend>
              <v-icon icon="mdi-map"></v-icon>
            </template>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item>
          <v-list-item active-color="primary" to="/admin_options">
            <template v-slot:prepend>
              <v-icon icon="mdi-clock"></v-icon>
            </template>
            <v-list-item-title >Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item active-color="primary" to="/view_appointments">
            <template v-slot:prepend>
              <v-icon icon="mdi-clock"></v-icon>
            </template>
            <v-list-item-title >View Appointments</v-list-item-title>
          </v-list-item>
          <v-list-item active-color="primary" to="/add_prescriptions">
            <template v-slot:prepend>
              <v-icon icon="mdi-clock"></v-icon>
            </template>
            <v-list-item-title >Add Prescriptions</v-list-item-title>
          </v-list-item>
          &lt;!&ndash;          <v-list-item active-color="primary" to="/user_settings">&ndash;&gt;
          &lt;!&ndash;            <template v-slot:prepend>&ndash;&gt;
          &lt;!&ndash;              <v-icon icon="mdi-clock"></v-icon>&ndash;&gt;
          &lt;!&ndash;            </template>&ndash;&gt;
          &lt;!&ndash;            <v-list-item-title >Settings</v-list-item-title>&ndash;&gt;
          &lt;!&ndash;          </v-list-item>&ndash;&gt;-->
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

        <v-toolbar-title>{{ this.$route.name }} ({{this.userName}})</v-toolbar-title>
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
  name: "adminAuth",
  data() {
    return {
      drawer: null,
      userName: ""
    }
  },
  methods: {
    simulateLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("fullname");
      localStorage.removeItem("email");
      localStorage.removeItem("adminStatus");
      this.$router.push("/login")
    }
  },
  mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login")
    }
    this.userName = localStorage.getItem("fullname")
  }
}
</script>

<style scoped>

</style>
