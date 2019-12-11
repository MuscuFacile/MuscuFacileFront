<template>
  <v-footer
    height="auto"
  >
    <v-card
      flat
      tile
      class="text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0">
        MuscuFacile est la solution pour gérer vos entrainements, votre suivi de poids. Une liste d'exercices est disponible avec une description détaillée pour chacun d'eux.
                  Avec MuscuFacile vous n'avez plus à vous souciez de rechercher pendant des heures l'exercice parfait pour atteindre votre objectif.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        &copy;2019 — <strong>MuscuFacile</strong>
      </v-card-text>
    </v-card>

  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: function() {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-instagram'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
