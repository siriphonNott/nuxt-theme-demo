<template>
  <v-footer
    v-if="showFooter"
    :absolute="!fixedFooter"
    app
    class="d-flex justify-space-between"
  >
    <span>&copy; {{ new Date().getFullYear() }} NottDev, All rights Reserved</span>
    <span>Made with <span class="red--text">♥</span> in Bangkok</span>
  </v-footer>
</template>

<script>
export default {
  computed: {
    fixedFooter: {
      get () {
        return this.$store.state.themeConfig.footer.fixed
      },
      set (newVal) {
        this.$store.commit('set_fixed_footer', newVal)
      }
    },
    showFooter: {
      get () {
        return this.$store.state.themeConfig.footer.show
      },
      set (newVal) {
        this.$store.commit('set_show_footer', newVal)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
