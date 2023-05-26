<template>
    <div class="categories">
        <HeaderPageCategories />

        <div class="categories-content">
            <div v-if="!$store.state.categories[0]">
                <CategoriesEmpty />
            </div>
            <div v-else>
                <Category v-for="(category,index) in categories.slice(start, end)"
                          :key="category.id"
                          :category="category"
                          :index="index"
                />

                <PaginationCategories :onChange="onChangePagination"
                                      :countCategories="categories.length"
                                      v-if="isShowPagination"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderPageCategories from '@/components/header/HeaderPageCategories';
    import Category from "@/components/category/Category";
    import CategoriesEmpty from "@/components/category/CategoriesEmpty";
    import PaginationCategories from "@/components/pagination/PaginationCategories";

    export default {
        name: "TheCategories",
        components: {
            PaginationCategories,
            Category,
            CategoriesEmpty,
            HeaderPageCategories
        },

        data() {
            return {
                categories: [],
                start: 0,
                end: 3,
                isShowPagination: false
            }
        },

        watch: {
            '$store.state.filterArticles': function(value) {
                this.filterCategories(value);
            }
        },

        methods: {
            searchInCategory(category, searchTitle) {
                if(category.articles) {
                    category.articles = category.articles.filter((article) => {
                        if(article.name.toLowerCase().search(searchTitle.toLowerCase()) > -1) {
                            return article;
                        }
                    });

                    if(category.articles.length > 0) return true;
                }

                return false;
            },

            searchInSubCategory(category, searchTitle) {
                if(category.subCategories) {
                    for(let subCategory of category.subCategories) {
                        const isHas = this.searchInCategory(subCategory, searchTitle)

                        if(!subCategory.subCategories) {
                            if(isHas) return subCategory;
                        } else {
                            return this.searchInSubCategory(subCategory, searchTitle);
                        }
                    }
                }
            },

            filterCategories(searchTitle) {
                this.isShowPagination = false;
                const arrCopy = JSON.parse(JSON.stringify(this.$store.state.categories));

                if(searchTitle === '') {
                    this.categories = arrCopy.slice();

                } else {
                    this.categories = arrCopy.filter((category) => {
                        const isHas = this.searchInCategory(category, searchTitle);

                        if(!category.subCategories) {
                            if(isHas) return category;

                        } else {
                            return this.searchInSubCategory(category, searchTitle);
                        }
                    });
                }

                setTimeout(() => {
                    this.isShowPagination = true;
                }, 0);
            },

            onChangePagination(start, end) {
                this.start = start;
                this.end = end;
            }
        },

        mounted() {
            this.categories = this.$store.state.categories;
            this.isShowPagination = true;
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