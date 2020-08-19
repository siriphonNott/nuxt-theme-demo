<template>
  <div>
    <v-navigation-drawer
      v-model="showSidebarRight"
      :right="true"
      temporary
      fixed
    >
      <div class="py-4 px-6">
        <div class="title">
          THEME CUSTOMIZER
        </div>
        <span class="caption grey--text">Customize & Preview in Real Time</span>
      </div>
      <v-divider class=" mb-2" />
      <div class="py-4 px-6">
        <h3 class="pb-1">
          Theme Mode
        </h3>
        <v-radio-group v-model="themeMode" row>
          <v-radio label="Dark" :value="true" />
          <v-radio label="Light" :value="false" />
        </v-radio-group>
      </div>
      <v-divider />
      <div class="py-4 px-6">
        <h3 class="pb-1">
          Sidebar
        </h3>
        <div class="d-flex justify-space-between pb-0">
          <p class="pt-4">
            Display
          </p>
          <div class="d-inline-block">
            <v-switch v-model="showSidebarLeft" hide-details />
          </div>
        </div>
        <div class="d-flex justify-space-between">
          <p class="pt-4">
            Collapse
          </p>
          <div class="d-inline-block">
            <v-switch v-model="miniVariantSidebarLeft" hide-details />
          </div>
        </div>
        <div class="d-flex justify-space-between">
          <p class="pt-4">
            Clipped
          </p>
          <div class="d-inline-block">
            <v-switch v-model="clippedSidebarLeft" hide-details />
          </div>
        </div>
      </div>
      <v-divider />
      <div class="py-4 px-6">
        <h3 class="pb-1">
          Header
        </h3>
        <div class="d-flex justify-space-between">
          <p class="pt-4">
            Display
          </p>
          <div class="d-inline-block">
            <v-switch v-model="showHeader" hide-details />
          </div>
        </div>
      </div>
      <v-divider />
      <div class="py-4 px-6">
        <h3 class="pb-1">
          Footer
        </h3>
        <div class="d-flex justify-space-between">
          <p class="pt-4">
            Display
          </p>
          <div class="d-inline-block">
            <v-switch v-model="showFooter" hide-details />
          </div>
        </div>
        <div class="d-flex justify-space-between">
          <p class="pt-4">
            Fixed
          </p>
          <div class="d-inline-block">
            <v-switch v-model="fixedFooter" hide-details />
          </div>
        </div>
      </div>
      <v-divider />
    </v-navigation-drawer>
    <v-navigation-drawer
      stateless
      permanent
      floating
      fixed
      right
      color="transparent"
      class="nav-drawer-setting text-right"
    >
      <v-btn small dark color="primary" class="btn-setting" @click="showSidebarRight = !showSidebarRight">
        <v-icon
          small
        >
          mdi-cog
        </v-icon>
      </v-btn>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      switch1: true
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
    showSidebarRight: {
      get () {
        return this.$store.state.themeConfig.sidebarRight.show
      },
      set (newVal) {
        this.$store.commit('set_show_sidebar_right', newVal)
      }
    },
    themeMode: {
      get () {
        return this.$vuetify.theme.dark
      },
      set (newVal) {
        this.$vuetify.theme.dark = newVal
      }
    },
    miniVariantSidebarLeft: {
      get () {
        return this.$store.state.themeConfig.sidebarLeft.miniVariant
      },
      set (newVal) {
        this.$store.commit('set_mini_variant_sidebar_left', newVal)
      }
    },
    clippedSidebarLeft: {
      get () {
        return this.$store.state.themeConfig.sidebarLeft.clipped
      },
      set (newVal) {
        this.$store.commit('set_clipped_sidebar_left', newVal)
      }
    },
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
    },
    showHeader: {
      get () {
        return this.$store.state.themeConfig.header.show
      },
      set (newVal) {
        this.$store.commit('set_show_header', newVal)
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.nav-drawer-setting {
  margin-top: 50vh;
  width: 35px!important;
  .btn-setting {
    min-width: 25px;
    min-height: 35px;
  }
}
</style>
