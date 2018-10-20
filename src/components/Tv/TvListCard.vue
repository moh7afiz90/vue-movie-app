<template>
 <v-app>
   <v-flex>
     <v-card 
      :class="{'ma-0':$vuetify.breakpoint.smAndDown,'ma-0': $vuetify.breakpoint.mdAndUp}"
      >
      <v-img
        :src="imgURL + episode.poster_path"
        aspect-ratio="0.70"
      >
      </v-img>
       <v-card-title primary-title>
        <div>
          <p class="title text-sm-center">{{episode.name }}</p>
          <div class="text-wrap">{{episode.overview | sliceText}}</div>
          <div>
            <v-rating
              class="text-sm-center" 
              length="10" 
              size="10"
              readonly
              background-color="#E8F5E9"
              color="#01d277"
              v-model="episode.vote_average"
              ></v-rating>
          </div>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <div class="text-xs-center">
          <v-dialog
            v-model="dialog"
            max-width="600"
            >
            <v-btn
              class="text-xs"
              slot="activator"
              color="#01d277"
              dark
              outline
              round
              center
              >
              Details
            </v-btn>
            <v-card
              dark
              flat
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
                        <p class="headline text-sm-center">{{episode.name}} <strong>({{ moment(episode.release_date).format('YYYY') }})</strong></p>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-flex xs5>
                    <img 
                      :src="imgURL + episode.poster_path" 
                      height="350px"
                      contain
                      />
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs7>
                    <div class="subheading">
                      {{episode.overview}}
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
                    <span class="caption whtie--text">{{episode.vote_count}} <strong>voting counts</strong></span>
                  </div>
                  <br>
                  <span class="caption">
                    
                  </span>
                  <v-spacer></v-spacer>
                  <v-rating 
                    length="10" 
                    size="14"
                    readonly
                    color="#01d277"
                    background="#E8F5E9"
                    v-model="episode.vote_average"
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
  props: ['episode'],
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

