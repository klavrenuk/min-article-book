<template>
    <div class="search">
        <input class="search-input"
               placeholder="Найти статью"
        />
<!--        <button class="btn btn-icon search-magnifier">Loop</button>-->
    </div>
</template>

<script>
    export default {
        name: "SearchGeneral"
    }
</script>

<style lang="less">
    .search {
        position: relative;
        overflow: hidden;

        &-input {
            height: 46px;
            width: 100%;
            border: 1px solid #D9DDE6;
            border-radius: 6px;
            padding: 0 40px 0 1rem;
            color: #A0A6BF;
            box-sizing: border-box;
        }
    }
</style>