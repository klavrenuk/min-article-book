<template>
    <div class="categories">
        <div class="categories-header">
            <button class="categories-header-button btn btn-primary">
                Создать категорию
            </button>

            <SearchGeneral />
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

<style scoped>

</style>