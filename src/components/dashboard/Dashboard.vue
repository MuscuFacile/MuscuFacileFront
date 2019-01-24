<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs4 class="my-2">
          <coach></coach>
        </v-flex>
        <v-flex xs4 class="my-2">
          <imc></imc>
        </v-flex>
        <v-flex xs4 class="my-2">
          <recommandations></recommandations>
        </v-flex>
        <v-flex xs8 class="my-2">
          <weights-chart></weights-chart>
        </v-flex>
        <v-flex xs4 class="my-2">
          <muscles-chart></muscles-chart>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Coach from '@/components/dashboard/Coach'
import Imc from '@/components/dashboard/Imc'
import Recommandations from '@/components/dashboard/Recommandations'
import WeightsChart from '@/components/charts/WeightsChart'
import MusclesChart from '@/components/charts/MusclesChart'

export default {
  name: 'Dashboard',
  components: {
    Coach,
    Imc,
    Recommandations,
    WeightsChart,
    MusclesChart
  }
}
</script>

<style lang="stylus" scoped>

</style>
