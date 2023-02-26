<template>
      <div class="card position-relative">
          <img v-if="poster.poster_path" :src="'https://image.tmdb.org/t/p/' + 'w342' + poster.poster_path" alt="" >
          <img v-else src="https://picsum.photos/194/291" alt="">
          <div class="p-2 pos-absol">
            <h4>{{poster.title ?? poster.name}}</h4>
            <div class="mb-2 d-flex gap-2">language {{poster.original_language}}<span :class="getFlag.icon"></span></div>
            <div  class="mb-2">
                <!-- metti fa-star se index é minore uguale del numero /2 (voto arrotondato)
                 se minore O = metti fa (stella piena) SE maggiore metti fa-regular (stella vuota) -->
                 <i class="text-warning fa-star" 
                :class="num <= Math.round(poster.vote_average / 2 )? 'fa':'fa-regular'
                " v-for="num in 5"></i>
            </div> 
            <div class="fw-semibold mb-2"><small>{{poster.overview}}</small></div>
            <div class="fw-bold mb-2">original title: {{poster.original_title ?? poster.original_name}}</div>
          </div>
      </div>
</template>
<script>
export default {
  //prendo la prop dal main dichiarandola come un oggetto
  props: {
    poster : {
      type: Object,
    }
  },

  data() {
    return {
      
    }
  },
  computed : {
    //funzione getflag dichiariamo una variabile che é un oggetto con dentro
    // chiave icon e valore dopo di ciò facciamo degli if perché le lingue delle
    //chiamate api non corrispondono a quelle della libreria delle bandiere quindi
    //cambiamo manualmente
    getFlag(){
           let bandiere = { icon :`fi fi-${this.poster.original_language}`};
           if (this.poster.original_language == "en"){
            bandiere = { icon: "fi fi-gb"}
           }if (this.poster.original_language == "ja"){
            bandiere = { icon: "fi fi-jp"}
           };
           return  bandiere
        },

  }
}
</script>
<style lang="scss">
  .card{
  overflow: hidden;
//questa serve per la larghezza della scroll
  ::-webkit-scrollbar{
    width: 7px;
}
// per il layaout della scroll
::-webkit-scrollbar-thumb{
 background-color: rgba(0, 0, 0, 0.804);
 border-radius: 10px;

}
  
  img{
    z-index: 2;
    display: block;
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    
}
.pos-absol{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    overflow-y: hidden;
    color: white;
    
  }
&:hover{
  overflow: auto;
  img{
    opacity: 0.6;
    
    
  }
  .pos-absol{
    z-index: 4;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.651)
  }
  
}
  
};
</style>