import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive( {
    // SEARCHCONTENT SOSTITUISCE SERCHEDSRTING

    // serchedString: '',
    filmsList: [],

    getMovies(searchContent = ''){
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=c5ed5630de230b624edd39713b2e45b6&query=' + searchContent)
          .then((response) => {
            console.log(response);
            // 14 IN ARROW FUNCTION TRAMITE THIS ASSOCIO IL DATO(FLIMSLIST) AL RISULTATO CHE DARA' L'API
            this.filmsList = response.data.results;
          })
          .catch(function (error) {
            console.error(error);
          });
    }      
} );


// SE SI UTILIZZA LO STORE

// IN -->APP.VUE<-- 
// DISATTIVARE: 

// CREATED,
// METHODS, 
// ARRAY IN DATA, 
// PROPS IN APPMAIN, 
// $EMIT(SEARCH) IN APPHEADER, 
// IMPORT AXIOS



// IN -->APPMAIN<-- 
// ATTIVARE:

// IMPORT AXIOS,
// IMPORT { store },
// store IN DATA,
// IN V-FOR INDICARE COME GRUPPO IN CUI CERCARE store.ARRAY INSERITO IN STORE

// DISATTIVARE:

// PROPS



// IN -->APPHEADER<-- 
// MODIFICARE: 

// IL VALORE DELL'EVENTO NEL BOTTONE CON store.FUNZIONE DI CHIAMATA AXIOS CON ARGOMENTO (VALORE DI V-MODEL DELL'INPUT)


// ATTIVARE:

// IMPORT { store },
// STORE IN DATA