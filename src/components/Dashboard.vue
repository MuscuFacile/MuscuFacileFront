<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <chart></chart>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Chart from '@/components/Chart.js'

export default {
  name: 'Dashboard',
  components: {
    Chart
  }
}
</script>

<style lang="stylus" scoped>

</style>
