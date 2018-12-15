<template>
  
</template>

<script>
export default {
  name: 'Logout',
  data: function() {
    return {}
  },
  created: function() {
    this.logout()
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logoutUser')
      this.$store.dispatch('unsetUser')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
