<template>
  <div :movie="movie">
    <v-card>
      <v-card-title>
        {{movie.title}}
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
 export default {
   props: ['movie'],
  name: '',
  data(){
   return 
  }
 }
 
</script>

<style scoped>

</style>

