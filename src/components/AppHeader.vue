<template >
    <div >
        <!-- 9 INSERISCO L'INPUT CON LEGAME BIDIREZZIONALE(V-MODEL) E INSERISCO CIO' CHE L'UTENTE SCRIVE -->
        <input type="text" v-model="searchedString" @keyup.enter="searchAll" name="" id="">
        
        <!-- 11 SU UN BOTTONE IMPOSTO UN EVENTO CON $EMIT CHE PASSA 
        SIA SEARCH, CANALE CHE SI TROVA IN APP VUE 
        SIA IL DATO CHE STO TRASFERENDO DALL'INPUT -->
        <button @click="searchAll">Cerca</button>
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
        },
        methods: {
            searchAll(){
                this.$emit('searchMovies', this.searchedString); 
                this.$emit('searchTvs', this.searchedString);
                this.$emit('searchImgs', this.searchedString);
                this.searchedString = '';
            }
        }
}
</script>

<style lang="scss" scoped>
    
</style>


<!-- AL PASSAGGIO 11 ANDARE SU APPMAIN -->