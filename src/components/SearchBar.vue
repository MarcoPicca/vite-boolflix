<template>
    <div class="container-search-bar">
        <input type="text" class="search-bar" placeholder="Inserisci il nome di un film">
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'SearchBar',
}

// data(){
//     return{
//         films: [],
//     }
// }

// methods: {
//     getFilm(){
//       axios.get('http://files.tmdb.org/p/exports/movie_ids_05_15_2023.json.gz?num=20&offset=0')
//       .then((response) => {
//         console.log(response);
//         this.films = response.data.results;
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//     }
  
//     created() {
//         this.getFilm();
//     }
// }




</script>
<style lang="scss" scoped>
    .container-search-bar{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: greenyellow;
    }

    .search-bar{
        width: 65%;
        height: 22px;
        border: none;
    }
</style>