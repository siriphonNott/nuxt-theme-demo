<template>
  <v-app dark>
    <SidebarLeft />
    <Header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
    <SidebarRight />
  </v-app>
</template>

<script>
import SidebarLeft from './components/SidebarLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import SidebarRight from './components/SidebarRight'
export default {
  components: {
    SidebarLeft,
    Header,
    Footer,
    SidebarRight
  }
}
</script>
