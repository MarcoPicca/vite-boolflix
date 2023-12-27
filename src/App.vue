<script>
 // 1 IMPORTO I COMPONENTI CHE UTILIZZERO' COMPRESO AXIOS  -->
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import axios from 'axios';

    export default{
  // 2 SETTARE IN EXPORT DEFAULT 
  // DATA, METHODS, CREATE O MOUNT O COMANDO DEDICATO E COMPONENTS  -->
      
  
        data() {
          return{
            // 6 SALVO IL DATO CHE ARRIVERA' VIA PROPS -->
            filmsList: [],
            tvsList: [],
            imgsList: [],
          }
        },



        methods: {
          // 3 SEARCHCONTENT VIENE PASSATO COME ARGOMENTO
          // ED ARRIVA VIA $EMIT.
          // QUESTA FUNZIONE DETERMINA LA CHIAMATA ALL'API TRAMITE AXIOS -->
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
          },

          getTvs(searchContent = ''){
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=c5ed5630de230b624edd39713b2e45b6&query=' + searchContent)
              .then((response) => {
                console.log(response);
                // 14 IN ARROW FUNCTION TRAMITE THIS ASSOCIO IL DATO(TVLIST) AL RISULTATO CHE DARA' L'API
                this.tvsList = response.data.results;
              })
              .catch(function (error) {
                console.error(error);
              });
          },

          getImg(searchContent = ''){
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=c5ed5630de230b624edd39713b2e45b6&query=' + searchContent)
              .then((response) => {
                console.log(response);
                // 14 IN ARROW FUNCTION TRAMITE THIS ASSOCIO IL DATO(TVLIST) AL RISULTATO CHE DARA' L'API
                this.imgsList = response.data.results;
              })
              .catch(function (error) {
                console.error(error);
              });
          }
        },

        created() {
        //   // 4 ATTIVO, CREANDO LA CHIAMATA DELLA FUNZIONE CHE DETERMINA LA CHIAMATA ALL'API  -->
          this.getMovies();
          this.getTvs();
          this.getImgs();
        },


        components: {
          // 5 DICHIARO I COMPONENTI CHE INSERISCO IN TEMPLATE -->
          AppHeader,
          AppMain
        }
          
    }
</script>

<template>
  <!-- 7 CREO UN CANALE(L'EVENTO SEARCH) CHE CHIAMA GETMOVIES  -->
  <AppHeader  @searchMovies="getMovies" @searchTvs="getTvs" @searchImgs="getImgs" />
  <!-- @searchMovies="getMovies" -->
      

  <!-- 8 QUI PASSO IL NOME DELLA PROP(FILMS) CHE ARRIVERA' DA APPMAIN
       ED INDICO DOVE VOGLIO MANDARE IL DATO CHE ARRIVA -->
  <AppMain :films="filmsList" :tvs="tvsList" :imgs="imgsList"/>
  
</template>

<style>

</style>




<!-- AL COMMENTO 8 SEGUE APPHEADER -->
