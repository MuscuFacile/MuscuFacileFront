<template>
  <v-content>
      <section>
        <v-parallax :src="require('@/assets/img/workout2.jpg')" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="@/assets/img/logo.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">MuscuFacile</h1>
            <div class="subheading mb-3 text-xs-center">Powered by Ekip2Chok</div>
            <router-link to="signup">
              <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              >
                S'inscrire
              </v-btn>
            </router-link>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Le meilleur moyen pour atteindre vos objectifs</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">fa-heartbeat</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Suivi de votre poids</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">fa-dumbbell</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Une liste d'exercices complète</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">fa-info-circle</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Un affichage détaillé</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('@/assets/img/workout4.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Essayer MuscuFacile maintenant</div>
            <router-link to="signup">
              <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              >
                S'inscrire
              </v-btn>
            </router-link>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Informations</div>
                </v-card-title>
                <v-card-text>
                  MuscuFacile est la solution pour gérer vos entrainements, votre suivi de poids et votre régime alimentaire.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Nous contacter</div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>04 37 56 92 76</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Lyon, France</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>muscufacile@2chok.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>

</style>
