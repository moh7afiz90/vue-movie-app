<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    :mini-variant="mini"
    mini-variant-width="80"
    temporary
    >
      <v-list class="pt-1">
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
      <v-list-tile class="pt-4">
        <v-list-tile-action>
        <v-btn
          flat
          @click="navigateToHome"
          fab
          large
          color="#01d277"
          :loading="loading4" 
          @click.native="loader = 'loading4'"
          >
          <v-icon>home</v-icon>
        </v-btn>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile class="pt-3">
        <v-list-tile-action>
          <v-btn
            flat
            @click="navigateToMovies"
            fab
            large
            color="#01d277"
            :loading="loading4" 
            @click.native="loader = 'loading4'"
            >
            <v-icon>local_movies</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile class="pt-3">
      <v-list-tile-action>
        <v-btn
          @click="navigateToSeries"
          large
          flat
          color="#01d277"
          :loading="loading4" 
          @click.native="loader = 'loading4'"
          fab
          >
          <v-icon>live_tv</v-icon>
        </v-btn>
      </v-list-tile-action>
      </v-list-tile>
       <v-list-tile class="pt-3">
      <v-list-tile-action>
        <v-btn
          @click="navigateToPersons"
          large
          flat
          color="#01d277"
          :loading="loading4" 
          @click.native="loader = 'loading4'"
          fab
          >
          <v-icon>person</v-icon>
        </v-btn>
      </v-list-tile-action>
      </v-list-tile>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
 export default {
  props: ['drawer'],
  name: '',
  data(){
   return {
      // drawer: null,  
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
    },
    navigateToMovies(){
      this.$router.push({path: '/popular/movies'})
    },
    navigateToSeries(){
      this.$router.push({path: '/popular/series'})
    },
    navigateToPersons(){
      this.$router.push({path: '/popular/persons'})
    },
  }
 }
 
</script>

<style scoped>

</style>

