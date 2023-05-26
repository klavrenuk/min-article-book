<template>
    <div class="search_categories">
        <input class="search_categories-input input"
               placeholder="Найти статью"
               v-model.lazy="searchStr"
               v-debounce="delay"
        />
        <button class="btn btn-icon search_categories-clear"
                @click="clear"
        ></button>
        <button class="btn btn-icon search_categories-magnifier"></button>
    </div>
</template>

<script>
    import { directive } from 'v-debounce';
    import {mapActions} from 'vuex';

    export default {
        name: "SearchCategories",

        data() {
            return {
                searchStr: null,
                delay: 600
            }
        },

        directives: {
            debounce: directive
        },

        watch: {
            searchStr(str) {
                this.setFilterArticles(str);
            }
        },

        methods: {
            ...mapActions([
                'setFilterArticles'
            ]),

            clear() {
                this.searchStr = null;
            }
        }
    }
</script>

<style lang="less">
    @positionButtonTop: 10px;

    .search_categories {
        position: relative;
        overflow: hidden;

        &-input {
            position: relative;
            height: 46px;
            width: 100%;
            padding: 15px 70px 15px 1rem !important;
            box-sizing: border-box;
            z-index: 1;
        }

        &-clear {
            position: absolute;
            top: @positionButtonTop;
            right: 45px;
            z-index: 2;
            background-image: url('/public/images1/icon-search-clear.svg') !important;

            &:hover, &:active {
                background-image: url('/public/images1/icon-search-clear-effect.svg') !important;
            }
        }

        &-magnifier {
            position: absolute;
            top: @positionButtonTop;
            right: 20px;
            z-index: 2;
            background-image: url('/public/images1/magnifier.svg') !important;

            &:hover, &:active {
                background-image: url('/public/images1/magnifier-effect.svg') !important;
            }
        }
    }
</style>