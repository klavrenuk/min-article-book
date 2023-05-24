<template>
    <div class="categories">
        <AppHeader />

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
    import AppHeader from '@/components/header/AppHeader';
    import Category from "@/components/category/Category";
    import CategoriesEmpty from "@/components/category/CategoriesEmpty";

    export default {
        name: "TheCategories",
        components: {
            Category,
            CategoriesEmpty,
            AppHeader
        },

        data() {
            return {
                categories: []
            }
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