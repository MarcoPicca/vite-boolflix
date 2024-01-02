<template lang="">
    <main>
        <!-- 13 GENERO TRAMITE V-FOR LE CARD CHE CONTERRANNO I DATI RICHIESTI IN QUESTO CASO TITOLO DEL FILM -->
        <h1>Images</h1>
        <article v-for="img in imgs" :key="img">
            <img :src="img.url" :alt="img.title" />
            <p>{{ film.title }}</p>
        </article>
        <h1>Film</h1>
        <article v-for="film in films" :key="film">
            {{ film.title }}
            {{ film.original_title }}
            {{ film.original_language }}
            {{ film.vote_average }}
        </article>
        <br>
        <br>
        <h1>Serie Tv</h1>
        <section v-for="tv in tvs" :key="tv">
            {{ tv.name }}
            {{ tv.original_name }}
            {{ tv.original_language }}
            {{ tv.vote_average }}
        </section>
    </main>
</template>

<script>
// import { store } from '../store';

    export default {
        name: 'AppMain',

        // data(){
        //     return{
        //         store,
        //     }
        // }



        // 12 PASSO LA PROP (FILMS) CHE VA IN APP.VUE
        //  CON TIPO DI DATO E REQUISITI
            
        props: {
            films: {
                type: Array,
                required: true
            },

            tvs: {
                type: Array,
                required: true
            },

            imgs: {
                type: Array,
                required: true,
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWVkNTYzMGRlMjMwYjYyNGVkZDM5NzEzYjJlNDViNiIsInN1YiI6IjY1ODJjNDE0OTkyZmU2M2UzNjcyNDY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-M0tqZY8c-WphOaISjl30ZBLLNbPkT5GLK7aSI_sGcE'
            }
        }
    }

</script>

<style lang="scss" scoped>
    article{
        margin-bottom: 1rem;
    }

    section{
        background-color: yellowgreen;
    }
</style>