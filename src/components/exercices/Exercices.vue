<template>
  <v-container>
    <h1>Exercices</h1>
    <v-layout row wrap>
      <v-flex xs4 class="my-2" v-for="exercice in exercices" :key="exercice.id">
        <v-card height="100%">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ exercice.name }}</h3>
              <div>{{ exercice.description }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">See more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as ExercicesService from '@/services/exercicesService.js'

export default {
  name: 'Exercices',
  data: function() {
    return {
      user: null,
      exercices: [],
      errors: []
    }
  },
  created: function() {
    this.user = this.$store.getters['users/getUser']
    this.getAllExercices()
  },
  methods: {
    getAllExercices: function() {
      this.errors = []
      this.exercices = []

      ExercicesService.getAllExercices()
        .then(response => {
          
          for(var i = 0; i < response.data.length; i++) {
            this.exercices.push(response.data[i])
          }
          
        })
        .catch(error => {
          this.errors.push('Impossible d\'afficher les exercices.')
        })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
