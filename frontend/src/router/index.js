// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import MyPrescription from "@/views/MyPrescription.vue";
import MyAppointments from "@/views/MyAppointments.vue";
import UserSettings from "@/views/UserSettings.vue";
import CreateAppointment from "@/views/CreateAppointment.vue";
import AddPrescriptions from "@/views/AddPrescriptions.vue";
import adminOptions from "@/views/adminOptions.vue";
import patientOptions from "@/views/patientOptions.vue";
import viewPrescriptions from "@/views/viewPrescriptions.vue";
import patientRecord from "@/views/patientRecord.vue";

const routes = [
  { path: '/', component: Home, name: "Home", meta: { layout: 'default'}},
  { path: '/my_prescriptions', component: MyPrescription, name: "My Prescriptions", meta: { layout: 'default'}},
  { path: '/my_appointments', component: MyAppointments, name: "My Appointments", meta: { layout: 'default'}},
  { path: '/user_settings', component: UserSettings, name: "Settings", meta: { layout: 'default'}},
  { path: '/create_appointments', component: CreateAppointment, name: "Create Appointments", meta: { layout: 'default'}},
  { path: '/add_prescriptions', component: AddPrescriptions, name: "Add Prescriptions", meta: { layout: 'default'}},
  { path: '/admin_options', component: adminOptions, name: "Admin Dashboard", meta: { layout: 'default'}},
  { path: '/patient_options', component: patientOptions, name: "My Dashboard", meta: { layout: 'default'}},
  { path: '/view_prescriptions', component: viewPrescriptions, name: "View Prescriptions", meta: { layout: 'default'}},
  { path: '/patient_record', component: patientRecord, name: "Patient Record", meta: { layout: 'default'}},



  { path: '/login', component: Login, name: "Login", meta: { layout: 'guest'}},
  { path: '/register', component: Register, name: "Register", meta: { layout: 'guest'}},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
