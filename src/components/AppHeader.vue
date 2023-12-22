<template >
    <div >
        <!-- 9 INSERISCO L'INPUT CON LEGAME BIDIREZZIONALE(V-MODEL) E INSERISCO CIO' CHE L'UTENTE SCRIVE -->
        <input type="text" v-model="searchedString" @keyup.enter="$emit('searchMovies', searchedString)" name="" id="">
        
        <!-- 11 SU UN BOTTONE IMPOSTO UN EVENTO CON $EMIT CHE PASSA 
        SIA SEARCH, CANALE CHE SI TROVA IN APP VUE 
        SIA IL DATO CHE STO TRASFERENDO DALL'INPUT -->
        <button @click="$emit('searchMovies', searchedString)">Cerca</button>
    </div>
</template>

<script>
// import { store } from "../store";

export default {
    name: 'AppHeader',
    
    // 10 INSERISCO IL DATA CHE COMUNICA CON V-MODEL
        data(){
            return {
                // store,
                searchedString: '',
            }
        }
}
</script>

<style lang="scss" scoped>
    
</style>


<!-- AL PASSAGGIO 11 ANDARE SU APPMAIN -->