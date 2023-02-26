<template>
   <button @click="onBtnPrev" class="btn btn-danger">prev</button>
    <button @click="onBtnNext" class="btn btn-info">next</button>
</template>
<script>
export default {
  props: {
    currentPage : {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      
    };
  },
  emits : ["pageChange"],
  methods: {
      onBtnPrev () {
        this.$emit("pageChange", this.currentPage - 1);
      },
      onBtnNext () {
        this.$emit("pageChange", this.currentPage + 1);
      }
    },
}
</script>
<style scoped>
  
</style>