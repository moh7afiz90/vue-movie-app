<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    >
    <v-list>
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
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
        drawer: null,
        items: [
          { title: 'Movies', icon: 'dashboard' },
          { title: 'TV Series', icon: 'question_answer' }
        ],
        mini: false,
        right: null,
        tmdbImg: 'https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png'
   }
  }
 }
 
</script>

<style scoped>

</style>

