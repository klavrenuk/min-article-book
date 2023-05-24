<template>
    <div class="categories">
        <AppHeader />

        <div class="categories-content">
            <div v-if="!$store.state.categories[0]">
                <CategoriesEmpty />
            </div>
            <div v-else>
                <Category v-for="category in $store.state.categories"
                          :key="category.id"
                          :category="category"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from '@/components/header/AppHeader';
    import Category from "@/components/category/Category";
    import CategoriesEmpty from "@/components/category/CategoriesEmpty";

    export default {
        name: "TheCategories",
        components: {
            Category,
            CategoriesEmpty,
            AppHeader
        }
    }
</script>

<style lang="less">
    .categories {
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