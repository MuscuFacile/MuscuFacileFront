<template>
  <div>
    <v-layout row wrap>
      <v-flex xs4>
        <coach></coach>
      </v-flex>
      <v-flex xs4>
        <imc></imc>
      </v-flex>
      <v-flex xs4>
        <liste></liste>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs8>
        <chart></chart>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Coach from '@/components/Coach'
import Chart from '@/components/Chart.js'
import Imc from '@/components/Imc'
import Liste from '@/components/Liste'

export default {
  name: 'Dashboard',
  components: {
    Coach,
    Chart,
    Imc,
    Liste
  }
}
</script>

<style lang="stylus" scoped>

</style>
