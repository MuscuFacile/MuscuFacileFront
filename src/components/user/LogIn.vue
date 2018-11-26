<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <form @submit="postForm" method="post">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Connexion</v-toolbar-title>      
          </v-toolbar>
          <v-card-text>
            <p v-if="errors.length">
              <ul>
                <li class="custom-error" v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </p>
            <v-text-field v-model="email" prepend-icon="person" name="email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="password" prepend-icon="lock" id="password" name="password" label="Mot de passe" type="password" required></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit">Se connecter</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import Constants from '@/config.js'

import axios from 'axios'

export default {
  name: 'LogIn',
  data: function() {
    return {
      email: null,
      password: null,
      errors: []
    }
  },
  methods: {
    postForm: function() {
      const url = Constants.API_LOCALHOST + '/user/...'

      axios.post(url, {
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.custom-error
  color: black
</style>
