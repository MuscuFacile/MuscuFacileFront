<template>
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h1>Pesée</h1>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>

      <p v-if="isWeightAdded">
        <v-alert
          :value="true"
          type="success"
        >
        Pesée ajoutée avec succes.
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

      <v-data-table
        :headers="headers"
        :items="weights"
        class="elevation-1"
      >

      <template slot="items" slot-scope="props">
        <td>{{ props.item.weight }}</td>
        <td class="text-xs-right">{{ props.item.date }}</td>
      </template>

    </v-data-table>

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
      ]
    }
  },
  created: function() {
    this.user = this.$store.getters['users/getUser']
    this.getWeightsFromUser()
  },
  methods: {
    getWeightsFromUser: function() {
      UserService.getUserWeights(this.user.email)
        .then(response => {
          
          for(var i = 0; i < response.data.length; i++) {
            var weight = {
              date: new Date(response.data[i].date).toLocaleDateString(),
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
