<template>
 <v-app>
   <v-card >
    <v-img
      :src="imgURL + movie.poster_path"
      aspect-ratio="1"
    ></v-img>
    <v-card-title primary-title>
      <div>
        <p class="title text-sm-center">{{movie.title }}</p>
        <div class="text-wrap">{{movie.overview | sliceText}}</div>
        <!-- <v-divider></v-divider> -->
        <div>
          <v-rating
            class="text-sm-center" 
            length="10" 
            size="15"
            readonly
            background-color="red lighten-4"
            color="red darken-2"
            v-model="movie.vote_average"
            ></v-rating>
        </div>
      </div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-actions>
      <!-- <v-btn class="text-sm-center" flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn> -->
      <div class="text-xs-center">
        <v-dialog
          v-model="dialog"
          max-width="600"
          >
          <v-btn
            slot="activator"
            color="red darken-2"
            dark
            block
            >
            Movie Details
          </v-btn>
          <v-card
            dark
            color="red darken-2"
            class="text--white"
            >
            <v-container
              fluid
              grid-list-lg
              >
              <v-layout
                row 
                wrap
                >
                <v-flex xs12>
                  <v-card-title>
                    <div>
                      <div class="headline">{{movie.title}}</div>
                      <div>Release Date {{movie.release_date}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <img 
                    :src="imgURL + movie.poster_path" 
                    height="250px"
                    contain
                    />
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs7>
                  <div class="caption">
                    {{movie.overview}}
                  </div>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="title pa-3">
                <div>
                  Rating
                </div>
                <hr>
                <span class="caption">
                  vote count: {{movie.vote_count}}
                </span>
                <v-spacer></v-spacer>
                <v-rating 
                  length="5" 
                  size="10"
                  readonly
                  v-model="movie.vote_average"
                  ></v-rating>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-dialog>
      </div>
    </v-card-actions>
  </v-card>
 </v-app>
</template>

<script>
// import MovieDetails from './MoviesListCardDetails.vue'
import {imgURL} from '../../config.js'
export default {
  props: ['movie'],
  data: function(){
    return {
      imgURL: imgURL,
      dialog: false
      // rating: movie.vote_average
    }
  },
  filters: {
    sliceText: function(value){
      if(value.length > 80) {
        return value.slice(0,80) + "...";
      }
      return this.value 
    }
  }
}
 
</script>

<style scoped>

</style>

