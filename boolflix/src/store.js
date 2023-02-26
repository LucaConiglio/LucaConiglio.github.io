import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({

 searchText : "",

 movies : [],

 tvSeries : [],

 //funzionalità extra
//gestisce gli H2 film e series
 show : false,
//gestisce il loader
 loading : false

})



export function fetchMovies() {
  store.loading = true
  axios.get("https://api.themoviedb.org/3/search/movie" ,{
    params : {
      api_key: "1a953019a29582a3b5c59afbba707100",
      query : store.searchText,
    }
  })
  .then((resp) => {
    console.log(resp.data.results);
    store.movies = resp.data.results;

    
    setTimeout(() => {
      store.loading = false
    }, 1000);

    

  })
  
  .catch((error) => {
  
    console.log("Codice errore: ", error.message + ' ' + error.name);
    setTimeout(() => {
      store.loading = false
      
    }, 1000);
  })

}
export function fetchTvSeries() {
  axios.get("https://api.themoviedb.org/3/search/tv" ,{
    params : {
      api_key: "1a953019a29582a3b5c59afbba707100",
      query : store.searchText,
    }
  })
  .then((resp) => {
    console.log(resp.data.results);
    store.tvSeries = resp.data.results

  })
  .catch((error) => {
    console.log("Codice errore: ", error.message + ' ' + error.name);
    store.show = false
  })
}