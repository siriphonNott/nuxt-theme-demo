export default {
  set_show_sidebar_left (state, newVal) {
    state.themeConfig.sidebarLeft.show = newVal
  },
  set_clipped_sidebar_left (state, newVal) {
    state.themeConfig.sidebarLeft.clipped = newVal
  },
  set_mini_variant_sidebar_left (state, newVal) {
    state.themeConfig.sidebarLeft.miniVariant = newVal
  },
  set_fixed_footer (state, newVal) {
    state.themeConfig.footer.fixed = newVal
  },
  set_show_footer (state, newVal) {
    state.themeConfig.footer.show = newVal
  },
  set_show_header (state, newVal) {
    state.themeConfig.header.show = newVal
  },
  set_show_sidebar_right (state, newVal) {
    state.themeConfig.sidebarRight.show = newVal
  }
}
