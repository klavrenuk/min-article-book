<template>
    <div class="search_categories">
        <input class="search_categories-input input"
               placeholder="Найти статью"
               v-model.lazy="searchStr"
               v-debounce="delay"
        />
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
            ])
        }
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
            top: 11px;
            right: 20px;
            z-index: 2;
            background-image: url('/public/images/magnifier.svg') !important;

            &:hover, &:active {
                background-image: url('/public/images/magnifier-effect.svg') !important;
            }
        }
    }
</style>