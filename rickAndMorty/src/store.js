import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({

  characterList : [],
  infoList :[],
  loading : false,
  currentPage: 1,
  activeFilters: null,
})

export function fetchImage() {
    store.loading = true;
    axios.get("https://rickandmortyapi.com/api/character", {
      params: {
        page: store.currentPage,
        ...store.activeFilters
      }
    }
    
    )
    .then((resp) => {
      
  
      store.characterList = resp.data.results;
      store.infoList = resp.data.info
      
      setTimeout(() => {
        
        store.loading = false;
      }, 2000);
    });
  }
    
  
