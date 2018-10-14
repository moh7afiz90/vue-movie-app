<template>
 <v-app>
   <v-flex>
     <v-card 
      :class="{'ma-0':$vuetify.breakpoint.smAndDown,'ma-0': $vuetify.breakpoint.mdAndUp}"
      >
      <v-img
        :src="imgURL + movie.poster_path"
        aspect-ratio="1"
      ></v-img>
      <v-card-title primary-title>
        <div>
          <p class="title text-sm-center">{{movie.title }}</p>
          <div class="text-wrap">{{movie.overview | sliceText}}</div>
          <div>
            <v-rating
              class="text-sm-center" 
              length="10" 
              size="10"
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
              class="text-xs"
              slot="activator"
              color="red darken-2"
              dark
              round
              center
              >
              Details
            </v-btn>
            <v-card
              dark
              flat
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
                        <p class="headline text-sm-center">{{movie.title}} <strong>({{ moment(movie.release_date).format('YYYY') }})</strong></p>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-flex xs5>
                    <img 
                      :src="imgURL + movie.poster_path" 
                      height="350px"
                      contain
                      />
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs7>
                    <div class="subheading">
                      {{movie.overview}}
                    </div>
                    <v-divider></v-divider>
                    <div class="text-xs-center">
                      <!-- <v-btn
                        @click="movie.homepage"
                        >
                        Visit Website
                      </v-btn> -->
                    </div>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="title pa-3">
                  <div>
                    <div class="">Rating</div>
                    <span class="caption whtie--text">{{movie.vote_count}} <strong>voting counts</strong></span>
                  </div>
                  <br>
                  <span class="caption">
                    
                  </span>
                  <v-spacer></v-spacer>
                  <v-rating 
                    length="10" 
                    size="14"
                    readonly
                    color="white"
                    background="grey"
                    v-model="movie.vote_average"
                    ></v-rating>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-dialog>
        </div>
      </v-card-actions>
    </v-card>
   </v-flex>
 </v-app>
</template>

<script>
// import MovieDetails from './MoviesListCardDetails.vue'
import moment from 'moment'
import {imgURL} from '../../../config.js'
export default {
  props: ['movie'],
  data: function(){
    return {
      imgURL: imgURL,
      dialog: false,
      moment: moment
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

