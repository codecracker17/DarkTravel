<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <TopBar></TopBar>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col>
       <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import Country_Select from './components/Country_Select.vue';
//import Artikel from "./components/Artikel.vue";
//import Map from './components/Map.vue';
import TopBar from "./components/TopBar.vue";

export default {
  name: "App",

  components: {
    TopBar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.Body{
  margin-top: 10%;
}  
</style>
