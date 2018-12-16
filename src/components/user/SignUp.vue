<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <form @submit="checkForm">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Inscription</v-toolbar-title> 
          </v-toolbar>
          <v-card-text>
          
            <p v-if="isSignUpOk">
              <v-alert
                :value="true"
                type="success"
                >
                Inscription terminée, <router-link to="/login" class="bold-link">accédez à la page de connexion</router-link>.
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

            <v-text-field v-model="email" prepend-icon="person" name="email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="pass" prepend-icon="lock" id="pass" name="pass" label="Mot de passe" type="password" required></v-text-field>
            <v-text-field v-model="passConfirm" prepend-icon="lock" id="passConfirm" name="passConfirm" label="Confirmation mot de passe" type="password" required></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit">S'inscrire</v-btn>
          </v-card-actions>
          <v-card-text>
            <div>
              <router-link to="/login">Déjà un compte ?</router-link>
            </div>
          </v-card-text>
        </v-card>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import Constants from '@/config.js'

export default {
  name: 'SignUp',
  data: function() {
    return {
      email: null,
      pass: null,
      passConfirm: null,
      isSignUpOk: false,
      errors: []
    }
  },
  methods: {
    checkForm: function(e) {
      this.errors = []
      this.isSignUpOk = false
      
      if(this.pass === this.passConfirm) {
        this.postForm()
      } else {
        this.errors.push('Les deux mots de passe doivent être identiques.')
      }

      e.preventDefault()
    },
    postForm: function() {
      const url = Constants.API_LOCALHOST + 'user/insert'

      this.$http.post(url, {
        email: this.email,
        pass: this.pass
      })
      .then(response => {
        this.isSignUpOk = true
      })
      .catch(error => {
        this.errors.push('L\'inscription n\'a pas pu aboutir.')
      })
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
