<template>
  <div id="app">
    <v-app>
      <app-navbar></app-navbar>
      <router-view/>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppNavbar from '@/components/statics/Navbar'
import AppFooter from '@/components/statics/Footer'

export default {
  name: 'AppTest',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style lang="stylus">
@import '~@/assets/style/main'
</style>
