<script>
import TheHeader from './TheHeader.vue';
import TheMain from './TheMain.vue';
import Loader from './Loader.vue';
import { store, fetchImage } from './store';
export default {
  components : {TheHeader, TheMain, Loader},
  data() {
    return {
      store
    }
  },
}
</script>
<template>
  <Loader v-if="store.loading"></Loader>
  <TheMain></TheMain>
  
  
</template>


<style lang="scss">
@use "./styles/general.scss";

</style>
