<template>
  <v-layout justify-center>   
    <v-flex xs12>
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
              sm6 md4 lg3 xs12
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
// import {API_KEY} from '../global'
import {imgURL} from '../../config.js'
 export default {
  data: function(){
   return {
     movies: [],
     imgURL: imgURL,
    //  overview: movie.overview
   }
  },
  components: {
    Movie
  },
  created(){
    axios
    .get('http://localhost:3011/api/movie')
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

