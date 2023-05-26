<template>
    <section class="category">
        <div class="category-header">
            <button @click="toggleView()" class="btn btn-empty wrap-category-title">
                <h3 class="category-title">
                    {{ category.name }}
                    <span class="category-title-count">({{ category.articles.length }})</span>
                </h3>
            </button>

            <div class="category-header-control">
                <button class="btn btn-icon btn_toggle_view"
                        :class="!isShowArticles ? 'close' : ''"
                        @click="toggleView()"
                ></button>
                <button class="btn btn-icon btn_options"
                        @click="toggleViewOptions()"
                ></button>

                <ListOptions
                        :options="controlOptions"
                        :onSelectOption="onSelectOption"
                        :toggleViewOptions="toggleViewOptions"
                        v-if="isShowListOptions"
                />
            </div>
        </div>

        <div v-if="isShowArticles">
            <ul class="category-list">
                <li class="category-list-item"
                    v-for="article in category.articles"
                    :key="article.id"
                >
                    <CategoryArticleCard :article="article" />
                </li>
            </ul>

            <div class="category-subcategories">
                <ul class="subcategories-list">
                    <li v-for="subCategory of category.subCategories"
                        :key="subCategory.id"
                    >
                        <CardCategory :category="subCategory"
                                      :isShowDefaultArticles="false"
                                      :parent="category"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import CategoryArticleCard from "@/components/category/CategoryArticleCard";
    import ListOptions from "@/components/list-options/ListOptions";
    import CategoryModalBody from '@/components/category/CategoryModalBody';
    import {mapActions} from 'vuex';

    export default {
        name: "CardCategory",
        components: {
            CategoryArticleCard,
            ListOptions
        },

        props: {
            category: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: false,
                default: -2
            },
            isShowDefaultArticles: {
                type: Boolean,
                required: false,
                default: true
            },
            parent: {
                type: Object,
                required: false
            }
        },

        data() {
            return {
                isShowArticles: this.isShowDefaultArticles,
                controlOptions: [
                    {key: 'edit', name: 'Редактировать'},
                    {key: 'remove', name: 'Удалить'}
                ],
                isShowListOptions: false
            }
        },

        methods: {
            ...mapActions([
                'showModalRemove',
                'showModalDefault',
                'editCategory'
            ]),

            toggleView() {
                this.isShowArticles = !this.isShowArticles;
            },

            toggleViewOptions() {
                this.isShowListOptions = !this.isShowListOptions;
            },

            onSelectOption(key) {
                this.toggleViewOptions();

                switch (key) {
                    case 'remove':
                        this.showModalRemove({index: this.index, category: this.category});
                        break;

                    case 'edit':
                        console.log('edit');
                        console.log('this.category', this.category);

                        this.showModalDefault({
                            categoryIndex: this.index,
                            category: this.category,
                            title: 'Редактирование категории',
                            save: this.editCategory,
                            content: CategoryModalBody,
                            parent: this.parent
                        })
                        break;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .category {
        border: 1px solid green;

        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & .wrap-category-title {
                &:hover, &:active {
                    & .category-title {
                        color: #ED5252;
                    }
                }
            }

            & .category-title {
                margin: 0 0 1rem;
                color: #303446;
                font-size: 24px;
                line-height: 32px;

                &-count {
                    position: relative;
                    top: -5px;
                    margin-left: .5rem;
                    color: #A0A6BF;
                    font-size: 16px;
                    line-height: 24px;
                    font-weight: 600;
                }
            }

            &-control {
                position: relative;

                & .btn_toggle_view {
                    width: 14px;
                    height: 24px;
                    background: url('/public/images/icon-toggle-articles.svg') center center no-repeat;

                    &.close {
                        transform: rotate(180deg);
                    }

                    &:hover, &:active {
                        background: url('/public/images/icon-toggle-articles-effect.svg') center center no-repeat;
                    }
                }

                & .btn_options {
                    height: 24px;
                    width: 24px;
                    margin-left: 26px;
                    background: url('/public/images/icon-options.svg') center center no-repeat;

                    &:hover, &:active {
                        background: url('/public/images/icon-options-effect.svg') center center no-repeat;
                    }
                }
            }
        }

        &-list {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
        }

        & .subcategories-list {
            padding-top: 1rem;

            & .category-title {
                color: #4D5163;
            }
        }
    }
</style>