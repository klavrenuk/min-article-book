<template>
    <div class="categories">
        <div class="categories-header">
            <div class="categories-header-left">
                <button class="categories-header-button btn btn-primary">
                    Создать категорию
                </button>
            </div>

            <div class="categories-header-search">
                <SearchGeneral />
            </div>
        </div>

        <div class="categories-content">
            <Category v-for="category in categories"
                      :key="category.id"
            />
        </div>
    </div>
</template>

<script>
    import SearchGeneral from "@/components/search/SearchGeneral";
    import Category from "@/components/category/Category";

    export default {
        name: "TheCategories",
        components: {
            SearchGeneral,
            Category
        },

        data() {
            return {
                categories: [
                    {
                        id: 1,
                        title: 'Название категории',
                        articles: []
                    },
                    {
                        id: 2,
                        title: 'Название категории#2',
                        articles: []
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    @widthLeftBlock: 242px;

    .categories {
        &-header {
            margin-bottom: 48px;
            display: flex;

            &-left {
                width: @widthLeftBlock;
            }

            & .categories-header-button {

            }

            &-search {
                width: calc(100% - @widthLeftBlock);
            }
        }
    }
</style>