<template >
    <div class="container-search-bar-appheader">
        <SearchBar />
    </div>
</template>
<script>
import SearchBar from './SearchBar.vue';

export default {
    name: 'AppHeader',
    components: {
        SearchBar,
    }
        
}
</script>

<style lang="scss" scoped>
    .container-search-bar-appheader{
        widows: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>