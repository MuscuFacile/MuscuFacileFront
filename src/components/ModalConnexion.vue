<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn flat icon color="black" slot="activator">
        <v-icon medium>account_circle</v-icon>
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Se connecter
        </v-card-title>

        <v-card-text>
          <a href="http://localhost:8000/auth/google">
            <v-btn
            color="red lighten-2"
            dark
            >
          Se connecter avec Google
          </v-btn>
        </a>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Annuler
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ModalConnexion',
  data: function() {
    return {
      dialog: false
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
