<template>
  <v-card height="100%">

    <v-toolbar class="elevation-0">
      <v-toolbar-title>Pesée</v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>

    <weights></weights>

  </v-card>
</template>

<script>
import Weights from './Weights.js'

export default {
  name: 'WeightsChart',
  components: {
    Weights
  }
}
</script>

<style lang="stylus" scoped>

</style>
