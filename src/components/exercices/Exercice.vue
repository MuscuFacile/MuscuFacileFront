<template>
  <v-container>
    <h1>{{ exercice.name }}</h1>
    <v-layout row wrap>
      <v-flex xs12>
        <p><b>Description :</b> {{ exercice.description }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as ExercicesService from '@/services/exercicesService.js'

export default {
  name: 'Exercice',
  data: function() {
    return {
      exercice: null,
      errors: []
    }
  },
  created: function() {
    this.getExercice()
  },
  methods: {
    getExercice: function() {
      this.errors = []

      ExercicesService.getExercice(this.$route.params.id)
        .then(response => {
          this.exercice = response.data
        })
        .catch(error => {
          this.errors.push('Impossible d\'afficher les informations de l\'exercice')
        })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
