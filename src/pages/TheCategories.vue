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
            <div v-if="!categories[0]">
                <CategoriesEmpty />
            </div>
            <div v-else>
                <Category v-for="category in categories"
                          :key="category.id"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import SearchGeneral from "@/components/search/SearchGeneral";
    import Category from "@/components/category/Category";
    import CategoriesEmpty from "@/components/category/CategoriesEmpty";

    export default {
        name: "TheCategories",
        components: {
            SearchGeneral,
            Category,
            CategoriesEmpty
        },

        data() {
            return {
                categories: []
            }
        }
    }
</script>

<style lang="less">
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

        &-content {
            & .category_empty {
                margin-top: 144px;
            }

            & .category {
                margin-bottom: 48px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>