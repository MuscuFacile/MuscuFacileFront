<template>
  <v-card height="100%">

    <v-toolbar class="elevation-0">
      <v-toolbar-title>Masse</v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>

    <masse></masse>

  </v-card>
</template>

<script>
import Masse from './Masse.js'

export default {
  name: 'MasseChart',
  components: {
    Masse
  }
}
</script>

<style lang="stylus" scoped>

</style>
