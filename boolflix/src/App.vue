<script>
import TheMain from './components/TheMain.vue';
import {store, fetchMovies } from './assets/store';
import TheHeader from './components/TheHeader.vue';
import Loader from './components/Loader.vue'
import axios from 'axios'
export default {
  components : {TheMain, TheHeader, Loader },
  data() {
    return {
      store
    }
  },
methods: {
   onSearch() {
    fetchMovies();
    fetchTvSeries();
  }
},

  computed :{
    
  }
}


</script>

<template>
  <Loader v-if="store.loading"></Loader>
  <TheHeader></TheHeader> <!--@performSearch="onSearch"-->
  <TheMain></TheMain>

</template>

<style>


</style>
