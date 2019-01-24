<template>
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h1>Mes pesées</h1>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>

      <p v-if="isWeightAdded">
        <v-alert
          :value="true"
          type="success"
        >
        Pesée ajoutée avec succès.
        </v-alert>
      </p>

      <p v-if="isWeightDeleted">
        <v-alert
          :value="true"
          type="success"
        >
        Pesée supprimée avec succès.
        </v-alert>
      </p>

      <p v-if="errors.length">
        <v-alert
          v-for="error in errors" :key="error"
          :value="true"
          type="error"
        >
        {{ error }}
        </v-alert>
      </p>

      <form @submit="checkForm">
        <v-layout column mt-5>
          <h2>Ajouter une pesée</h2>
          <v-flex>
            <v-text-field
              v-model="weight"
              name="Pesée"
              label="Masse (en kg)"
              id="weight"
              type="number"
              required
            ></v-text-field>
          </v-flex>

          <v-flex class="text-xs-center">
            <v-btn color="success" type="submit">Ajouter</v-btn>
          </v-flex>

        </v-layout>
      </form>

      <v-layout column mb-5>
        <h2>Mon historique</h2>
        <v-data-table
          :headers="headers"
          :items="weights"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.weight }}</td>
            <td class="text-xs-left">{{ props.item.date.toLocaleDateString() }}</td>
            <td><v-btn color="error" v-on:click="deleteWeight(props.item.date)">Supprimer</v-btn></td>
          </template>
        </v-data-table>
      </v-layout>

    </v-flex>
  </v-layout>
</template>

<script>
import * as UserService from '@/services/userService.js'

export default {
  name: 'Masses',
  data: function() {
    return {
      user: null,
      isWeightAdded: false,
      isWeightDeleted: false,
      weight: "",
      weights: [],
      errors: [],
      headers: [
        {
          text: 'Masse (kg)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Date', value: 'date' },
        { text: 'Action', value: 'action' }
      ]
    }
  },
  created: function() {
    this.user = this.$store.getters['users/getUser']
    this.getWeightsFromUser()
  },
  methods: {
    checkForm: function(e) {
      this.isWeightAdded = false
      this.errors = []
      this.postForm()
      e.preventDefault()
    },
    deleteWeight: function(weightDate) {
      this.isWeightDeleted = false
      this.errors = []

      UserService.deleteUserWeight(this.user.email, weightDate.getTime())
        .then(response => {
          this.isWeightDeleted = true
          this.getWeightsFromUser()
        })
        .catch(error => {
          this.errors.push('La suppresion n\'a pas pu aboutir.')
        })
    },
    postForm: function() {
      const data = {
        date: new Date().getTime(),
        poids: parseInt(this.weight)
      }
      
      UserService.insertUserWeight(this.user.email, data)
        .then(response => {
          this.isWeightAdded = true
          this.getWeightsFromUser()
        })
        .catch(error => {
          this.errors.push('La modification n\'a pas pu aboutir.')
        })
    },
    getWeightsFromUser: function() {
      this.weights = []
      
      UserService.getUserWeights(this.user.email)
        .then(response => {
          
          for(var i = 0; i < response.data.length; i++) {
            var weight = {
              date: new Date(response.data[i].date),
              weight: response.data[i].poids
            }

            this.weights.push(weight)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
