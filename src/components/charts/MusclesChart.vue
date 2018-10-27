<template>
  <v-card height="100%">

    <v-toolbar class="elevation-0">
      <v-toolbar-title>Muscles</v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>

    <muscles></muscles>

  </v-card>
</template>

<script>
import Muscles from './Muscles.js'

export default {
  name: 'MusclesChart',
  components: {
    Muscles
  }
}
</script>

<style lang="stylus" scoped>

</style>
