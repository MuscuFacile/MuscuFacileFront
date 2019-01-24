<template>
  <v-container>
    <h1>{{ exercice.name }} <v-chip color="success" class="white--text">Catégorie : {{ category }}</v-chip></h1>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Description</h2>
        <p>{{ exercice.description | html }}</p>

        <div v-if="musclesExercice.length > 0">
          <h2>Muscles</h2>
          <ul>
            <li v-for="muscle in musclesExercice" :key="muscle.id">
              {{ muscle.name }}
            </li>
          </ul>
        </div>

        <div v-if="secondaryMusclesExercice.length > 0">
          <h2>Muscles secondaires</h2>
          <ul>
            <li v-for="muscle in secondaryMusclesExercice" :key="muscle.id">
              {{ muscle.name }}
            </li>
          </ul>
        </div>

        <div v-if="equipementsExercice.length > 0">
          <h2>Equipements</h2>
          <ul>
            <li v-for="equipement in equipementsExercice" :key="equipement.id">
              {{ equipement.name }}
            </li>
          </ul>
        </div>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as ExercicesService from '@/services/exercicesService.js'
import * as CategoriesService from '@/services/categoriesService.js'
import * as MusclesService from '@/services/musclesService.js'
import * as EquipementsService from '@/services/equipementsService.js'

export default {
  name: 'Exercice',
  data: function() {
    return {
      exercice: "",
      category: "",
      muscles: [],
      equipments: [],
      musclesExercice: [],
      secondaryMusclesExercice: [],
      equipementsExercice: [],
      errors: []
    }
  },
  created: function() {
    this.getAllMuscles()
    this.getAllEquipements()
    this.getExercice()
  },
  methods: {
    getExercice: function() {
      this.errors = []

      ExercicesService.getExercice(this.$route.params.id)
        .then(response => {
          this.exercice = response.data
          this.getCategory()
          this.getMusclesExercice()
          this.getSecondaryMusclesExercice()
          this.getEquipementsExercice()
        })
        .catch(error => {
          this.errors.push('Impossible d\'afficher les informations de l\'exercice')
        })
    },
    getCategory: function() {
      
      CategoriesService.getCategory(this.exercice.category)
        .then(response => {
          this.category = response.data.name
        })
        .catch(error => {
          this.errors.push('Error')
        })
    },
    getAllMuscles: function() {
      this.errors = []

      MusclesService.getAllMuscles()
        .then(response => {
          this.muscles = response.data
        })
        .catch(error => {
          this.errors.push('Error')
        })
    },
    getAllEquipements: function() {
      this.errors = []

      EquipementsService.getAllEquipements()
        .then(response => {
          this.equipments = response.data
        })
        .catch(error => {
          this.errors.push('Error')
        })
    },
    getMusclesExercice: function() {

      for(var i = 0; i < this.exercice.muscles.length; i++) {
        for(var j = 0; j < this.muscles.length; j++) {
          if(this.muscles[j].id == this.exercice.muscles[i]) {
            this.musclesExercice.push(this.muscles[j])
          }
        }
      }
      
    },
    getSecondaryMusclesExercice: function() {

      for(var i = 0; i < this.exercice.muscles_secondary.length; i++) {
        for(var j = 0; j < this.muscles.length; j++) {
          if(this.muscles[j].id == this.exercice.muscles_secondary[i]) {
            this.secondaryMusclesExercice.push(this.muscles[j])
          }
        }
      }
      
    },
    getEquipementsExercice: function() {

      for(var i = 0; i < this.exercice.equipment.length; i++) {
        for(var j = 0; j < this.equipments.length; j++) {
          if(this.equipments[j].id == this.exercice.equipment[i]) {
            this.equipementsExercice.push(this.equipments[j])
          }
        }
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
