<template>
    <v-card height="100%">
    
      <v-toolbar class="elevation-0">
        <v-toolbar-title>IMC</v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text>
          
      <v-progress-circular
        :value="100"
        :size="175"
        :width="20"
        :color="colorStatut"
      >
        <h1>{{ imc | round }}</h1>
      </v-progress-circular>

      <h1 class="text-md-center">{{ statut | capitalize }}</h1>

      </v-card-text>
    
    </v-card>
</template>

<script>
import * as UserService from '@/services/userService.js'

export default {
  name: 'IMC',
  data: function() {
    return {
      user: null,
      imc: null,
      statut: null,
      colorStatut: null
    }
  },
  created: function() {
    this.user = this.$store.getters['users/getUser']
    this.getIMC()
  },
  methods: {
    getIMC: function() {
      UserService.getIMC(this.user.email)
        .then(response => {
          this.imc = response.data.imc
          this.statut = response.data.statut
          this.colorStatut = this.getColorFromStatut(this.imc)
        })
        .catch(error => {
          console.log('Error')
        })
    },
    getColorFromStatut: function(imc) {
      var color = ''

      if(imc < 16.5){
        color = 'red'
      } else if(imc < 18.5){
        color = 'orange'
      } else if(imc < 25){
        color = 'green'
      } else if(imc < 30){
        color = 'orange'
      } else if(imc < 35){
        color = 'orange';
      } else if(imc < 40){
        color = 'red'
      } else if(imc > 40){
        color = 'red'
      }

      return color
    }
  },
  filters: {
    round: function(value) {
      if (!value) return ''
      return Math.round(value)
    },
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
