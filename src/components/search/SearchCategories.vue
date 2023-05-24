<template>
    <div class="search_categories">
        <input class="search_categories-input input"
               placeholder="Найти статью"
        />
        <button class="btn btn-icon search_categories-magnifier"></button>
    </div>
</template>

<script>
    export default {
        name: "SearchCategories"
    }
</script>

<style lang="less">
    .search_categories {
        position: relative;
        overflow: hidden;

        &-input {
            position: relative;
            height: 46px;
            width: 100%;
            padding: 0 45px 0 1rem !important;
            box-sizing: border-box;
            z-index: 1;
        }

        &-magnifier {
            position: absolute;
            top: 10px;
            right: 20px;
            z-index: 2;
            background-image: url('/public/images/magnifier.svg') !important;

            &:hover, &:active {
                background-image: url('/public/images/magnifier-effect.svg') !important;
            }
        }
    }
</style>