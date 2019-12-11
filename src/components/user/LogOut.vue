<template>
  
</template>

<script>
import * as UserService from '@/services/userService.js'

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
      this.$store.dispatch('users/logoutUser')
      this.$store.dispatch('users/unsetUser')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
