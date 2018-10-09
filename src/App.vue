<template>
  <div id="app">
    <v-app id="inspire" dark>
      <Nav />
      <v-content>
        <v-container fluid fill-height>
          <v-layout row wrap>
            <movies-list />
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import MoviesList from './components/MoviesList.vue'
export default {
  name: 'app',
  components: {
    Nav,
    MoviesList
  }
}
</script>

<style>

</style>
