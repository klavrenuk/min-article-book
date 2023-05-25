<template>
    <header class="app_header">
        <div class="app_header-container">
            <div class="app_header-left">
                <ButtonPrimary class="app_header-left-btn"
                               :onClick="showModalCategory"
                >
                    <slot>Создать категорию</slot>
                </ButtonPrimary>
            </div>

            <div class="app_header-search">
                <SearchCategories />
            </div>
        </div>
    </header>
</template>

<script>
    import SearchCategories from "@/components/search/SearchCategories";
    import ButtonPrimary from "@/components/buttons/ButtonPrimary";
    import {mapActions} from "vuex";

    export default {
        name: "AppHeader",
        components: {
            SearchCategories,
            ButtonPrimary
        },
        methods: {
            ...mapActions([
                'showModalCategory'
            ])
        }
    }
</script>

<style lang="less" scoped>
    @widthLeftBlock: 242px;

    .app_header {
        margin-bottom: 48px;
        padding-top: 32px;

        &-container {
            display: flex;
        }

        &-left {
            width: @widthLeftBlock;
        }

        &-search {
            width: calc(100% - @widthLeftBlock);
        }
    }
</style>