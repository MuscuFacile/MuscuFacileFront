<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4 mt-5 mb-5>
      <form @submit="checkFormUser">
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

            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">Compte</v-stepper-step>
                
                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">Informations</v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-text-field v-model="email" prepend-icon="person" name="email" label="Email" type="email" required></v-text-field>
                  <v-text-field v-model="pass" prepend-icon="lock" id="pass" name="pass" label="Mot de passe" type="password" required></v-text-field>
                  <v-text-field v-model="passConfirm" prepend-icon="lock" id="passConfirm" name="passConfirm" label="Confirmation mot de passe" type="password" required></v-text-field>
          
                  <v-btn color="primary" @click="checkFormEmail">Suivant</v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-text-field v-model="prenom" prepend-icon="person" id="prenom" name="prenom" label="Prénom" type="text" required></v-text-field>
                  <v-text-field v-model="nom" prepend-icon="person" id="nom" name="nom" label="Nom" type="text" required></v-text-field>
                  <v-text-field v-model="taille" prepend-icon="person" id="taille" name="taille" label="Taille (cm)" type="text" required></v-text-field>
                  <v-text-field v-model="age" prepend-icon="person" id="age" name="age" label="Âge" type="number" required></v-text-field>
                  <v-text-field v-model="poids" prepend-icon="person" id="poids" name="poids" label="Poids" type="number" step=".01" required></v-text-field>
                      
                  <v-btn color="primary" type="submit">S'inscrire</v-btn>

                  <v-btn flat @click="e1 = 1">Retour</v-btn>
                </v-stepper-content>

              </v-stepper-items>
            </v-stepper>
          </v-card-text>
          
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
import * as UserService from '@/services/userService.js'

export default {
  name: 'SignUp',
  data: function() {
    return {
      e1: 0,
      email: null,
      pass: null,
      passConfirm: null,
      prenom: null,
      nom: null,
      taille: null,
      age: null,
      poids: null,
      isSignUpOk: false,
      errors: []
    }
  },
  methods: {
    checkFormEmail: function() {
      this.errors = []
      this.isSignUpOk = false
      if(this.email !== null && this.pass !== null && this.passConfirm !== null) {
        if(this.validateEmail(this.email)) {
          if(this.pass === this.passConfirm) {
            this.e1 = 2
          } else {
            this.errors.push('Les deux mots de passe doivent être identiques.')
          }
        } else {
          this.errors.push('Le format de l\'adresse email est incorrect.')
        }
        
      } else {
        this.errors.push('Les informations sont incomplètes.')
      }
    },
    checkFormUser: function(e) {
      this.errors = []
      this.isSignUpOk = false

      if(this.prenom !== null && this.nom !== null && this.taille !== null && this.age !== null && this.poids !== null) {
        this.postForm()
      } else {
        this.errors.push('Les informations sont incomplètes.')
      }

      e.preventDefault()

    },
    postForm: function() {

      UserService.insertUser(this.email, this.pass, this.prenom, this.nom, this.taille, this.age, parseInt(this.poids), new Date().getTime())
        .then(response => {
          this.isSignUpOk = true
        })
        .catch(error => {
          this.errors.push('L\'inscription n\'a pas pu aboutir.')
        })
    },
    validateEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return re.test(String(email).toLowerCase())
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
