<template>
  <v-navigation-drawer
    v-model="showSidebarLeft"
    :mini-variant="miniVariantSidebarLeft"
    :clipped="clippedSidebarLeft"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SidebarLeft',
  data () {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ]
    }
  },
  computed: {
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
    miniVariantSidebarLeft () {
      return this.$store.state.themeConfig.sidebarLeft.miniVariant
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
