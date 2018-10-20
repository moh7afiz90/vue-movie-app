<template>
  <v-flex  
    column
    mt-2
    mb-0
    >
    <v-parallax :src="backGroundImage">
    <div class="subheading mb-1 hero-text-sub text-xs-center">Civil | Geotechnical | Mining</div>
    <p class="white--text hero-text-header mb-2 display-2 text-xs-center">Unlock the power of your engineering data</p>
    <div class="subheading mb-3 hero-text-sub text-xs-center">Find out how <span class="brand-text">ISLAND Civil</span> can help you <span class="brand-text">win more contracts</span> and <span class="brand-text">deliver better solutions</span> for your clients</div>
    <v-btn
    small
      class="mt-3 green darken-1 accented-text" dark
      href="#earthworks"
    >
      Learn More
    </v-btn>
    </v-parallax>
  </v-flex>
</template>



<script>
  export default{
    data: function(){
      return {
        backGroundImage: 'https://source.unsplash.com/dTLlhgeEJWg'
      }
    }
  }
</script>

<style scoped>
 #para{
   margin-top: 50px;
   height: auto;
   width: auto;
 }
</style>

