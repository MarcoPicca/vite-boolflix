<template lang="">
    <main class="container-content">
        <ul class="container-film-card">
            <li class="card" v-for="film in films">

            </li>
        </ul>
    </main>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AppMain',
}

// data(){
//     return{
//         films: [],
//     }
    
// }

// methods: {
    // get(){
    //   axios.get('http://files.tmdb.org/p/exports/movie_ids_05_15_2023.json.gz?num=20&offset=0')
    //   .then((response) => {
    //     console.log(response);
    //     this.films = response.data.results;
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    // }
  
    // created() {
    //     this.getFilm();
    // }
// }

</script>

<style lang="scss" scoped>
    .container-content{
        width: 100%;
        height: calc( 100vh - 100px );
        background-color: rgb(0, 0, 179);
    }

    .container-film-card{
        width: 100%;
        display: flex;
        justify-content: space-around;
        list-style-type: none;
    }

    .card{
        width: 200px;
        height: 150px;
    }
</style>