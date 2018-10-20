<template>
  <div id="app">
    <v-app id="inspire" dark>
     <v-toolbar 
        fixed 
        :height="height"
        dark 
        :scroll-off-screen=scrollOffScreen
        color="#01d277"
        >
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
          >
        </v-toolbar-side-icon>
        <v-toolbar-title tag="bottn" @click="navigateToHome" class="white--text">
            Vue TMDB
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat raised>
            <v-icon>person</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <router-view>
        <v-container>
          <!-- <v-layout></v-layout> -->
        </v-container>
         </router-view>
      </v-content>
      <drawer-nav :drawer="drawer"></drawer-nav>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import DrawerNav from './components/Drawer.vue'
import Footer from './components/Footer.vue'
// import ToolbarNav from './components/Nav.vue'
export default {
  name: 'app',
  components: {
    // ToolbarNav,
    DrawerNav,
    Footer,
  },
  data: function(){
    return {
      drawer: null,  
      mini: true,
      right: null,
      tmdbImg:'https://www.themoviedb.org/assets/1/v4/logos/208x226-stacked-green-9484383bd9853615c113f020def5cbe27f6d08a84ff834f41371f223ebad4a3c.png',
      tile: true,
      size: 50,
      invertedScroll: false,
      height: 50,
      loader: null,
      scrollOffScreen: false,
      loading4: false
    }
  },
  watch: {
    loader: function(){
      const a = this.loader
      this[a] = !this[a]
      setTimeout(() => (this[a] = false), 500)
      this.loader = null
    }
  },
  methods: {
    navigateToHome(){
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
