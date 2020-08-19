<template>
  <v-app-bar
    v-if="showHeader"
    :clipped-left="clippedSidebarLeft"
    fixed
    app
  >
    <v-app-bar-nav-icon v-if="showNavIcon" :class="{ 'd-none': !showNavIcon, 'd-block': showNavIcon} " @click.stop="showSidebarLeft = !showSidebarLeft" />
    <img :src="`https://nuxtjs.org/logos/nuxt-square${this.$vuetify.theme.dark ? '-white' : ''}.svg`" alt="" width="30px" class="mr-2">
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script>

export default {
  data () {
    return {
      title: 'CMS System'
    }
  },
  computed: {
    showHeader () {
      return this.$store.state.themeConfig.header.show
    },
    showSidebarLeft: {
      get () {
        return this.$store.state.themeConfig.sidebarLeft.show
      },
      set (newVal) {
        this.$store.commit('set_show_sidebar_left', newVal)
      }
    },
    clippedSidebarLeft () {
      return this.$store.state.themeConfig.sidebarLeft.clipped
    },
    showNavIcon () {
      return (this.$vuetify.breakpoint.lg !== null && this.$vuetify.breakpoint.lg !== undefined ? !this.$vuetify.breakpoint.lg : false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
