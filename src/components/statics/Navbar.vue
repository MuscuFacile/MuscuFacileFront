<template>
  <v-toolbar>
    <v-toolbar-title v-if="!isLoggedIn"><router-link to="/">MuscuFacile</router-link></v-toolbar-title>
    <v-toolbar-title v-if="isLoggedIn"><router-link to="/">MuscuFacile</router-link></v-toolbar-title>
    <v-btn flat v-if="isLoggedIn"><router-link to="/dashboard">Dashboard</router-link></v-btn>
    <v-btn flat v-if="isLoggedIn"><router-link to="/weights">Pesée</router-link></v-btn>
    <v-btn flat v-if="isLoggedIn"><router-link to="/exercices">Exercices</router-link></v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y>
        <v-btn flat icon color="black" slot="activator">
          <v-icon medium>account_circle</v-icon>
        </v-btn>
        <v-list>

          <router-link to="/settings">
            <v-list-tile v-if="isLoggedIn"> Réglages</v-list-tile>
          </router-link>

          <router-link to="/login">
            <v-list-tile v-if="!isLoggedIn">Connexion</v-list-tile>
          </router-link>

          <router-link to="/signup">
            <v-list-tile v-if="!isLoggedIn">Inscription</v-list-tile>
          </router-link>

          <router-link to="/logout">
            <v-list-tile v-if="isLoggedIn">Déconnexion</v-list-tile>
          </router-link>

        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('users')

export default {
  name: 'Navbar',
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn
    })
  }
}
</script>

<style lang="stylus" scoped>
a
  color: black
</style>
