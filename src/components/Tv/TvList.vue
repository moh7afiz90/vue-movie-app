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
              sm6 md6 lg4 xs12
              v-for="episode in series"
              :key="episode.id"
              >
              <Episode :episode="episode"></Episode>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Episode from './TvListCard.vue'
import axios from 'axios';
import {imgURL} from '../../../config.js'
 export default {
  data: function(){
   return {
     series: [],
     imgURL: imgURL,
   }
  },
  components: {
    Episode
  },
  created(){
    axios
    .get('api/tv')
    .then(
      response => {
        this.series = response.data.results;
        console.log(response.data.results)
      }
    )
  }
}

 
</script>

<style scoped>

</style>

