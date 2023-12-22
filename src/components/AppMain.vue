<template lang="">
    <main>
        <!-- 13 GENERO TRAMITE V-FOR LE CARD CHE CONTERRANNO I DATI RICHIESTI IN QUESTO CASO TITOLO DEL FILM -->
        <h1>Film</h1>
        <article v-for="film in films" :key="film.id">
            {{ film.title }}
            {{ film.original_title }}
            {{ film.original_language }}
            {{ film.vote_average }}
        </article>
        <br>
        <br>
        <h1>Serie Tv</h1>
        <section v-for="tv in tvs" :key="tv.id">
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