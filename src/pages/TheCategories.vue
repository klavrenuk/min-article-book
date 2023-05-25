<template>
    <div class="categories">
        <AppHeader />

        <div class="categories-content">
            <div v-if="!$store.state.categories[0]">
                <CategoriesEmpty />
            </div>
            <div v-else>
                <Category v-for="(category,index) in categories"
                          :key="category.id"
                          :category="category"
                          :index="index"
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
        },

        watch: {
            '$store.state.filterArticles': function(value) {
                this.filterCategories(value);
            }
        },

        methods: {
            filterCategories(searchTitle) {
                const arrCopy = JSON.parse(JSON.stringify(this.$store.state.categories));

                if(searchTitle === '') {
                    this.categories = arrCopy.slice();

                } else {
                    this.categories = arrCopy.filter((category) => {
                        if(category.articles) {
                            category.articles = category.articles.filter((article) => {
                                if(article.name.toLowerCase().search(searchTitle.toLowerCase()) > -1) {
                                    return article;
                                }
                            })
                        }

                        return category;
                    })
                }
            }
        },

        mounted() {
            this.categories = this.$store.state.categories;
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