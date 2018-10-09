<template>
 <v-app>
   <v-card >
    <v-img
      :src="imgURL + movie.poster_path"
      aspect-ratio="1"
    ></v-img>
    <v-card-title primary-title>
      <div>
        <p class="title text-sm-center">{{movie.original_title }}</p>
        <div class="text-wrap">{{movie.overview | sliceText}}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
 </v-app>
</template>

<script>
import {imgURL} from '../../config.js'
export default {
  props: ['movie'],
  data: function(){
    return {
      imgURL: imgURL
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

