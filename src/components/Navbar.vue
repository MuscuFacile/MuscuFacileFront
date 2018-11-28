<template>
  <v-toolbar>
    <v-toolbar-title>MuscuFacile</v-toolbar-title>
    <v-btn flat><router-link to="/">Dashboard</router-link></v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y>
        <v-btn flat icon color="black" slot="activator">
          <v-icon medium>account_circle</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>Profil</v-list-tile>
          <v-list-tile>Réglages</v-list-tile>

          <router-link to="/login">
            <v-list-tile>Connexion</v-list-tile>
          </router-link>

          <router-link to="/signup">
            <v-list-tile>Inscription</v-list-tile>
          </router-link>

          <v-list-tile>Déconnexion</v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style lang="stylus" scoped>
a
  color: black
</style>
