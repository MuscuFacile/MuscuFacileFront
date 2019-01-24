<template>
  <v-container>
    <h1>Exercices</h1>
    <v-layout row wrap>

      <p v-if="errors.length">
        <v-alert
          v-for="error in errors" :key="error"
          :value="true"
          type="error"
        >
        {{ error }}
        </v-alert>
      </p>

      <v-radio-group row v-model="selectedCategory">
        <v-radio
          v-for="category in categories"
          :key="category.id"
          :label="`${category.name}`"
          :value="category.id"
          color="grey darken-4"
        ></v-radio>  
      </v-radio-group>

      <v-flex class="my-2" v-for="exercice in filteredExercices" :key="exercice.id">
        <v-card height="100%">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ exercice.name }}</h3>
              <div>{{ exercice.description | html }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <router-link :to="{ name: 'Exercice', params: { id: exercice.id }}">
              <v-btn flat color="grey darken-4">See more</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as ExercicesService from '@/services/exercicesService.js'
import * as CategoriesService from '@/services/categoriesService.js'

export default {
  name: 'Exercices',
  data: function() {
    return {
      user: null,
      exercices: [],
      categories: [],
      selectedCategory: "0",
      errors: []
    }
  },
  created: function() {
    this.user = this.$store.getters['users/getUser']
    this.getAllExercices()
    this.getAllCategories()
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
    },
    getAllCategories: function() {
      this.errors = []
      const allCategory = {
        id: "0",
        name: "All"
      }
      this.categories.push(allCategory)

      CategoriesService.getAllCategories()
        .then(response => {
          var exercicesCategories = response.data
          for(var i = 0; i < exercicesCategories.length; i++) {
            this.categories.push(exercicesCategories[i])
          }
        })
        .catch(error => {
          this.errors.push('Error')
        })
    }
  },
  computed: {
		filteredExercices: function() {
      var vm = this
      var category = vm.selectedCategory

			if(category === "0") {
				return vm.exercices
			} else {
				return vm.exercices.filter(function(exercice) {
					return exercice.category == category
				})
			}
    }
	},
  filters: {
    html: function(value) {
      if (!value) return ''
      return value.replace(/<\/?[^>]+(>|$)/g, "")
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
