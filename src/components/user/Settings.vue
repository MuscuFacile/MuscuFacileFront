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

      <form @submit="checkForm" ref="userForm">
        <v-layout column>
          <h2>Mes informations</h2>
          
          <v-flex>
            <v-text-field
              :value="this.user.email"
              name="email"
              label="Adresse email"
              id="email"
              type="email"
              disabled
            ></v-text-field>
          </v-flex>
          
          <v-flex>
            <v-text-field
              :value="this.user.prenom"
              name="firstName"
              label="Prénom"
              id="firstName"
              type="text"
            ></v-text-field>
          </v-flex>
            
          <v-flex>
            <v-text-field
              :value="this.user.nom"
              name="lastName"
              label="Nom"
              id="lastName"
              type="text"
            ></v-text-field>
          </v-flex>

          <v-flex>
            <v-text-field
              :value="this.user.taille"
              name="height"
              label="Taille"
              id="height"
              type="number"
            ></v-text-field>
          </v-flex>

          <v-flex class="text-xs-center">
            <v-btn color="success" type="submit">Modifier mes informations</v-btn>
          </v-flex>

      </v-layout>
    </form>

  </v-flex>
</v-layout>
</template>

<script>
import * as UserService from '@/services/userService.js'

export default {
  name: 'Settings',
  data: function() {
    return {
      user: null,
      isUserUpdated: false,
      errors: [],
      userFormData: {
        prenomInput: null,
        nomInput: null,
        tailleInput: null
      }
    }
  },
  created: function() {
    this.user = this.$store.getters['users/getUser'],
    this.userFormData = {
      prenomInput: this.user.prenom,
      nomInput: this.user.nom,
      tailleInput: this.user.taille
    }
  },
  methods: {
    checkForm: function(e) {
      this.isUserUpdated = false
      this.errors = []
      this.postForm()
      e.preventDefault()
    },
    postForm: function() {
      const data = this.getFormValues()

      UserService.updateUser(this.user.email, data)
        .then(response => {
          this.isUserUpdated = true
          
          UserService.getUser(this.user.email)
            .then(response => {
              this.$store.dispatch('users/setUser', response.data)
              this.user = this.$store.getters['users/getUser']
            })
            .catch(error => {
              this.errors.push('La modification n\'a pas pu aboutir.')
            })
        })
        .catch(error => {
          this.errors.push('La modification n\'a pas pu aboutir.')
        })
    },
    getFormValues: function() {
      const data = {
        prenom: this.$refs.userForm.firstName.value,
        nom: this.$refs.userForm.lastName.value,
        taille: this.$refs.userForm.height.value
      }

      return data
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
