<template>
    <section class="category">
        <h3 class="category-title">
            Название категории
            <span class="category-title-count">(4)</span>
        </h3>

        <ul class="category-list">
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

    export default {
        name: "CardCategory",
        components: {
            CategoryArticleCard
        },

        data() {
            return {
                articles: []
            }
        }
    }
</script>

<style lang="less" scoped>
    .category {
        &-title {
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

        &-list {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;

            &-item {

            }
        }
    }
</style>