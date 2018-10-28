<template>
  <div id="app">
    <v-app>
      <app-navbar></app-navbar>
      <v-container grid-list-md text-xs-center>
        <router-view/>
      </v-container>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppNavbar from '@/components/Navbar'
import AppFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style lang="stylus">
@import '~@/assets/style/main'
</style>
