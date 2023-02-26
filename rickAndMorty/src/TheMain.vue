<template>
  <section class="my-section">
    <TheHeader @search="onSearch"></TheHeader>
      <div class="container">
       <Pagination :currentPage="store.currentPage" @pageChange="onPageChange"></Pagination>
        <div class="row pt-5 g-5">
          <div v-for="(character, index) in store.characterList" :key="index" class="mb-3 col-3">
            <div class="container">
              <img class="rounded-2" :src="character.image" alt="immagine">
              <h5 class="mt-2 text-center text-white">{{character.name}}</h5>

            </div>
            
          </div>

        </div>
      </div>
  </section>
</template>
<script>
import TheHeader from './TheHeader.vue';
import Loader from './Loader.vue';
import Pagination from './Pagination.vue'
import { store, fetchImage } from './store';

export default {
    components: { TheHeader,Loader, Pagination },
    data() {
        return {
            store,
           
        };
    },
    created() {
        fetchImage();
    },
    methods : {
      onPageChange (newPage) {
        store.currentPage = newPage;

        fetchImage();
      },

      onSearch(filter) {
        this.store.activeFilters = filter;

        fetchImage()
      },
    },
    
}
</script>
<style lang="scss">
.my-section{
  background-color: #2e3a46;
  img{
    width: 100%;
    display: block;
  }
}
  
</style>