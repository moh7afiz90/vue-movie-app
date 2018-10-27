<template>
 <v-app>
   <v-flex>
     <v-card 
      :class="{'ma-0':$vuetify.breakpoint.smAndDown,'ma-0': $vuetify.breakpoint.mdAndUp}"
      >
      <v-img
        :src="imgURL + person.profile_path"
        aspect-ratio="0.70"
      ></v-img>
      <v-card-title primary-title>
        <div>
          <p class="title text-sm-center">{{person.name }}</p>
          <div class="text-wrap">{{person.overview}}</div>
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
              color="#01d277"
              round
              outline
              block
              >
              Known For:
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
                      <!-- <div v-for="title in person.">
                        <p class="headline text-sm-center">{{person.title}} <strong>({{ moment(person.release_date).format('YYYY') }})</strong></p>
                      </div> -->
                    </v-card-title>
                  </v-flex>
                  <v-flex xs5>
                    <img 
                      :src="imgURL + person.poster_path" 
                      height="350px"
                      contain
                      />
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs7>
                    <div class="subheading">
                      {{person.overview}}
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
  props: ['person'],
  data: function(){
    return {
      imgURL: imgURL,
      dialog: false,
      moment: moment
    }
  },
  // filters: {
  //   sliceText: function(value){
  //     if(value.length > 80) {
  //       return value.slice(0,80) + "...";
  //     }
  //     return this.value 
  //   }
  // }
}
 
</script>

<style scoped>

</style>