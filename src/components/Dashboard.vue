<template>
  <div>
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
        <masse-chart></masse-chart>
      </v-flex>
      <v-flex xs4 class="my-2">
        <muscles-chart></muscles-chart>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Coach from '@/components/Coach'
import Imc from '@/components/Imc'
import Recommandations from '@/components/Recommandations'
import MasseChart from '@/components/charts/MasseChart'
import MusclesChart from '@/components/charts/MusclesChart'

export default {
  name: 'Dashboard',
  components: {
    Coach,
    Imc,
    Recommandations,
    MasseChart,
    MusclesChart
  }
}
</script>

<style lang="stylus" scoped>

</style>
