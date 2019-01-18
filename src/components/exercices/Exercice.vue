<template>
  <v-container>
    <h1>{{ exercice.name | htmlFilter }} <v-chip color="success" class="white--text">Catégorie : {{ category }}</v-chip></h1>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Description</h2> 
        <p>{{ exercice.description }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as ExercicesService from '@/services/exercicesService.js'
import * as CategoriesService from '@/services/categoriesService.js'

export default {
  name: 'Exercice',
  data: function() {
    return {
      exercice: null,
      category: null,
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
          this.getCategory()
        })
        .catch(error => {
          this.errors.push('Impossible d\'afficher les informations de l\'exercice')
        })
    },
    getCategory: function() {
      this.errors = []

      CategoriesService.getCategory(this.exercice.category)
        .then(response => {
          this.category = response.data.name
        })
        .catch(error => {
          this.errors.push('Error')
        })
    }
  },
  filters: {
    htmlFilter: function(value) {
      if (!value) return ''
      return value.replace(/<\/?[^>]+(>|$)/g, "")
    },
  }
}
</script>

<style lang="stylus" scoped>

</style>
