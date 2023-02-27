<template>
  <section>
    <div class="container">
      <h1 class="pt-4 fw-bold text-center text-danger pb-4">BOOLFLIX</h1>
      <div class="row">
        <div class="col-8 m-auto ">
          <form class="d-flex" @submit.prevent="onSearchClick">
            <input type="text" class="form-control" v-model="searchText">
            <button class="btn btn-dark ms-2">Search</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
</template>
<script>
import {store, fetchMovies, fetchTvSeries} from '../assets/store'
export default {
  data() {
    return {
      store,
      searchText : "",
    }
  },
  //emits : ["PerformSearch"],
  methods : {
    onSearchClick () {
      this.store.searchText = this.searchText,

      fetchMovies();
      fetchTvSeries();
     // this.$emit("performSearch")

      this.store.show = true
      if(this.store.searchText === "") {
        this.store.loading = false
      }
    },
    
      
    
  }
}
</script>
<style lang="scss">
  section{
    h1{
      font-size: 70px;
    }
  }
</style>