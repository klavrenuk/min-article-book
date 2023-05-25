<template>
    <header class="app_header">
        <div class="app_header-container">
            <div class="app_header-left">
                <ButtonPrimary class="app_header-left-btn"
                               :onClick="onCreateCategory"
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
    import CategoryModalBody from "@/components/category/CategoryModalBody";
    import {mapActions} from "vuex";

    export default {
        name: "AppHeader",
        components: {
            SearchCategories,
            ButtonPrimary
        },
        methods: {
            ...mapActions([
                'showModalDefault',
                'addCategory'
            ]),

            onCreateCategory() {
                this.showModalDefault({
                    title: 'Новая категория',
                    save: this.addCategory,
                    content: CategoryModalBody
                });
            }
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