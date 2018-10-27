<template>
 <v-toolbar 
    fixed 
    :height="height"
    dark 
    :scroll-off-screen=scrollOffScreen
    color="#01d277"
    >
    <v-toolbar-side-icon
      @click.stop="drawer = !drawer"
      >
    </v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Vue TMDB</v-toolbar-title>
    <!-- <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat raised>
        <v-icon>person</v-icon>
      </v-btn>
    </v-toolbar-items> -->
  </v-toolbar>
</template>
        
<script>
 export default{
   props: ['drawer'],
   methods: {
     openSideNav: function(){
       this.$emit('openSideNav', this.drawer = !drawer)
     }
   }
 }
</script>

<style>

</style>

