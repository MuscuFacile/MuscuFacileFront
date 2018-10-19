<template>
  <div id="app">
    <v-app>
      <navbar></navbar>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="stylus">
@import '~@/assets/style/main'
</style>
