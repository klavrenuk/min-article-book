<template>
    <section class="category">
        <div class="category-header">
            <h3 class="category-title">
                {{ category.name }}
                <span class="category-title-count">(4)</span>
            </h3>

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
                        v-if="isShowListOptions"
                />
            </div>
        </div>

        <ul class="category-list"
            v-if="isShowArticles"
        >
            <li class="category-list-item"
                v-for="article in articles"
                :key="article.id"
            >
                <CategoryArticleCard :article="article" />
            </li>
        </ul>
    </section>
</template>

<script>
    import CategoryArticleCard from "@/components/category/CategoryArticleCard";
    import ListOptions from "@/components/list-options/ListOptions";

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
            }
        },

        data() {
            return {
                articles: [],
                isShowArticles: true,
                controlOptions: [
                    {key: 'edit', name: 'Редактировать'},
                    {key: 'remove', name: 'Удалить'}
                ],
                isShowListOptions: false
            }
        },

        methods: {
            toggleView() {
                this.isShowArticles = !this.isShowArticles;
            },

            toggleViewOptions() {
                this.isShowListOptions = !this.isShowListOptions;
            },

            onSelectOption() {
                console.log('onSelectOptions');
                this.toggleViewOptions();
            }
        }
    }
</script>

<style lang="less" scoped>
    .category {
        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-title {
                width: 80%;
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

            &-item {

            }
        }
    }
</style>