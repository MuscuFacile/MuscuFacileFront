<template>
  <v-layout row wrap>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h1>Réglages</h1>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>

      <p v-if="isUserUpdated">
        <v-alert
          :value="true"
          type="success"
        >
        Informations modifiées avec succes.
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
        <v-layout column>
          
        <v-flex>
          <v-text-field
            name="email"
            label="Adresse email"
            id="email"
            type="email"
            required
          ></v-text-field>
        </v-flex>
        
        <v-flex>
          <v-text-field
            name="firstName"
            label="Prénom"
            id="firstName"
            type="text"
          ></v-text-field>
        </v-flex>
          
        <v-flex>
          <v-text-field
            name="lastName"
            label="Nom"
            id="lastName"
            type="text"
          ></v-text-field>
        </v-flex>

        <v-flex>
          <v-text-field
            name="height"
            label="Taille"
            id="height"
            type="number"
          ></v-text-field>
        </v-flex>

        <v-flex class="text-xs-center" mt-5>
          <v-btn color="success" type="submit">Confirmer</v-btn>
        </v-flex>

      </v-layout>
    </form>
  </v-flex>
</v-layout>
</template>

<script>
import Constants from '@/config.js'
import * as UserService from '@/services/userService.js'

export default {
  name: 'Settings',
  data: function() {
    return {
      user: null,
      isUserUpdated: false,
      errors: []
    }
  },
  created: function() {
    //this.user = this.$store.user.getUser()
  },
  methods: {
    checkForm: function(e) {
      isUserUpdated = false
      e.preventDefault()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
