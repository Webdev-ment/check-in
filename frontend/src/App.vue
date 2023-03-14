<script>
const default_layout = 'default'
export default {
  name: "App",
  components: {},
  computed:{
    layout(){
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  }
}
</script>

<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style scoped>

</style>

