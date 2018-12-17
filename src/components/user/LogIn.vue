<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <form @submit="checkForm">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Connexion</v-toolbar-title>
          </v-toolbar>
          <v-card-text>

            <p v-if="errors.length">
              <v-alert
                v-for="error in errors" :key="error"
                :value="true"
                type="error"
                >
                {{ error }}
              </v-alert>
            </p>
            
            <v-text-field v-model="email" prepend-icon="person" name="email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="pass" prepend-icon="lock" id="pass" name="pass" label="Mot de passe" type="password" required></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit">Se connecter</v-btn>
          </v-card-actions>
          <v-card-text>
            <div>
              <router-link to="/signup">Pas encore de compte</router-link>
            </div>
          </v-card-text>
        </v-card>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import * as UserService from '@/services/userService.js'

export default {
  name: 'LogIn',
  data: function() {
    return {
      email: "",
      pass: "",
      user: null,
      errors: []
    }
  },
  methods: {
    checkForm: function(e) {
      this.errors = []
      this.postForm()
      e.preventDefault()
    },
    postForm: function() {
      UserService.logUser(this.email, this.pass)
        .then(response => {
          if(response.status === 200 && 'token' in response.data) {

            UserService.getUser(this.email)
              .then(response => {
                this.$store.dispatch('users/loggingUser')
                this.user = response
                this.$store.dispatch('users/setUser', this.user)
                this.$router.push('/dashboard')
              })
              .catch(error => {
                this.errors.push('Identifiants incorrects.')
              })
          }
        })
        .catch(error => {
          this.errors.push('La connexion n\'a pas pu aboutir.')
          console.log(error)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
