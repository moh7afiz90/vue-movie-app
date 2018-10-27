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
                v-for="person in persons"
                :key="person.id"
                >
                  <Person :person="person"></Person>
              </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Person from './PersonListCard.vue'
import axios from 'axios';
import {imgURL} from '../../../config.js'
 export default {
  data: function(){
   return {
     persons: [],
     imgURL: imgURL,
   }
  },
  components: {
    Person
  },
  created(){
    axios
    .get('api/person')
    .then(
      response => {
        this.persons = response.data.results;
        console.log(response.data.results)
      }
    )
  }
}

 
</script>

<style scoped>

</style>

