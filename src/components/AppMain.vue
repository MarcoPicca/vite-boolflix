<template lang="">
    <main>
        <!-- 13 GENERO TRAMITE V-FOR LE CARD CHE CONTERRANNO I DATI RICHIESTI IN QUESTO CASO TITOLO DEL FILM -->
        <article v-for="film in store.filmsList">
        {{ film.title }}</article>
    </main>
</template>

<script>
import { store } from '../store';

export default {
    name: 'AppMain',
    data(){
        return{
            store,
        }
    }
    
    // 12 PASSO LA PROP (FILMS) CHE VA IN APP.VUE
    //  CON TIPO DI DATO E REQUISITI
        
        // props: {
        //     films: {
        //         type: Array,
        //         required: true
        //     }
        // }
    }




</script>

<style lang="scss" scoped>
    
</style>