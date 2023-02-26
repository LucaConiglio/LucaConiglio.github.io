<template>
 <section class="d-flex justify-content-center flex-column align-items-center">
  <div class="fs-4 text-white">Caricamento in corso attendere...</div>
  <div class="loader"></div>
 </section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
section{
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
}
    .loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>