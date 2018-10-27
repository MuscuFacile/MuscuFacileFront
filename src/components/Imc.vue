<template>
    <v-card height="100%">
    
      <v-toolbar class="elevation-0">
        <v-toolbar-title>IMC</v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text>
          
        <v-progress-circular
        :value="100"
        :size="175"
        :width="20"
        color="green"
      >
        <h1>18</h1>
      </v-progress-circular>

      <h1 class="text-md-center">Corpulence normale</h1>

      </v-card-text>
    
    </v-card>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>

</style>
