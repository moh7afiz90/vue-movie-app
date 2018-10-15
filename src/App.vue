<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-toolbar 
        fixed 
        dark 
        scroll-off-screen="false"
        color="#01d277"
        >
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
          >
        </v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Vue TMDB</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout row wrap>
            <movies-list />
          </v-layout>
        </v-container>
      </v-content>
      <!-- <Drawer :drawer="drawer"/> -->
      <v-navigation-drawer
        v-model="drawer"
        fixed
        :mini-variant="mini"
        mini-variant-width="80"
        temporary
        >
        <v-list class="pt-0">
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar 
              :tile="tile"
              :size="size"
              >
              <img :src="tmdbImg">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider light></v-divider>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            >

            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>

          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <Footer />
    </v-app>
  </div>
</template>

<script>
// import Drawer from './components/Drawer.vue'
import Footer from './components/Footer.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Nav from './components/Nav.vue'
import MoviesList from './components/Movie/MoviesList.vue'
export default {
  name: 'app',
  components: {
    // Nav,
    // Drawer,
    Footer,
    MoviesList
  },
  data: function(){
    return {
      drawer: null,
        items: [
          { title: 'Movies', icon: 'local_movies' },
          { title: 'TV Series', icon: 'live_tv' }
        ],
        mini: true,
        right: null,
        tmdbImg:'https://www.themoviedb.org/assets/1/v4/logos/208x226-stacked-green-9484383bd9853615c113f020def5cbe27f6d08a84ff834f41371f223ebad4a3c.png',
        tile: true,
        size: 50,
        invertedScroll: false
    }
  }
}
</script>

<style>

</style>
