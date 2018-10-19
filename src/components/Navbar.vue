<template>
  <v-toolbar>
    <v-toolbar-title><router-link to="/">MuscuFacile</router-link></v-toolbar-title>
    <v-btn flat><router-link to="/dashboard">Dashboard</router-link></v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat icon color="black">
      <v-icon medium>account_circle</v-icon>
    </v-btn>
    </v-toolbar-items>
  </v-toolbar>    
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="stylus" scoped>

</style>
