<template>
  <section>
    <div class="container pb-5">
      <h2 class=" py-4 fs-1 text-white" v-if="store.show">films</h2>
      <div class="row g-3 gy-5">
        <div v-for="(singlePoster, index) in store.movies" :key="index" class="col-xl-2 col-lg-3 col-sm-4  d-flex flex-column">
        <Card :poster="singlePoster"></Card>
         
        </div>
      </div>

      <h2 class="py-4 fs-1 text-white" v-if="store.show">Tv-Series</h2>
      <div class="row g-3 gy-5">
       <div v-for="(singlePoster, index) in store.tvSeries" :key="index" class="col-xl-2 col-lg-3 col-sm-4 d-flex flex-column ">
        <Card :poster="singlePoster"></Card>
       </div>
      </div>
    </div>
  </section>
</template>
<script>
import {store} from '../store'
import Card from '../components/Card.vue'
export default {
  components : { Card, },
  data() {
    return {
      store,
      
    }
  },
  methods: {
    
  },
  mounted() {
    
  },
}
</script>
<style lang="scss">


section{

width: 100%;
height: 100%;





}
</style>