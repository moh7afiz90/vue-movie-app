<template>
  <v-layout justify-center>   
    <v-flex class="pt-4" xs12>
        <v-container
          fluid
          flat
          grid-list-lg
          >
          <v-layout
            row
            wrap
            >
              <v-flex
                sm6 md6 lg3 xs12
                v-for="movie in movies"
                :key="movie.id"
                >
                  <Movie :movie="movie"></Movie>
              </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Movie from './MoviesListCard.vue'
import axios from 'axios';
import {imgURL} from '../../../config.js'
 export default {
  data: function(){
   return {
     movies: [],
     imgURL: imgURL,
   }
  },
  components: {
    Movie
  },
  created(){
    axios
    .get('api/movie')
    .then(
      response => {
        this.movies = response.data.results;
        console.log(response.data.results)
      }
    )
  }
}

 
</script>

<style scoped>

</style>

