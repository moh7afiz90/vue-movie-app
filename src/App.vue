<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-toolbar dark color="red darken-2">
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
        absolute
        temporary
        >
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
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
          { title: 'Movies', icon: 'dashboard' },
          { title: 'TV Series', icon: 'question_answer' }
        ],
        mini: false,
        right: null,
        tmdbImg: 'https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png'
    }
  }
}
</script>

<style>

</style>
