<template>
  <v-toolbar>
    <v-toolbar-title>MuscuFacile</v-toolbar-title>
    <v-btn flat><router-link to="/">Dashboard</router-link></v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
    <modal-connexion></modal-connexion>
    </v-toolbar-items>
  </v-toolbar>    
</template>

<script>
import ModalConnexion from '@/components/ModalConnexion'

export default {
  name: 'Navbar',
  components: {
    ModalConnexion
  }
}
</script>

<style lang="stylus" scoped>
a
  color: black
</style>
