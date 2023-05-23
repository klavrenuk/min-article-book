<template>
    <div class="category_article_card">
        <div class="category_article_card-top">
            <BlockLikes :count="article.likes" />

            <button class="btn btn-icon category_article_card-top-edit"></button>
        </div>

        <div class="category_article_card-wrap_img">
            <img :src="article.img"
                 alt="Картинка статьи"
                 loading="lazy"
            />
        </div>

        <h3 class="category_article_card-title">
            {{ article.title}}
        </h3>
        <p class="category_article_card-text">
            {{ article.text }}
        </p>

    </div>
</template>

<script>
    import BlockLikes from "@/components/likes/BlockLikes";

    export default {
        name: "CategoryArticle",
        components: {
            BlockLikes
        },
        props: {
            article: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="less" scoped>
    .category_article_card {
        width: 291px;
        padding: 23px 1rem 1rem;
        border: 1px solid #BFC3D5;
        border-radius: 10px;

        &-top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-edit {
                background-image: url('/public/images/pen.svg');

                &:hover, &:active {
                    background-image: url('/public/images/pen-effect.svg');
                }
            }
        }

        &-wrap_img {
            height: 80px;
            width: 100%;
            margin: 12px 0 8px;

            & img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        &-title {
            margin: 0 0 .8rem;
            color: #303446;
            font-size: 16px;
            line-height: 24px;
        }

        &-text {
            height: 110px;
            color: #6A6E7E;
            font-size: 14px;
            line-height: 22px;
            font-weight: 500;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: normal;

        }
    }
</style>