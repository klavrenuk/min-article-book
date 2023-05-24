<template>
    <div class="category_empty">
        <h5 class="category_empty-title title">
            Пока нет статей
        </h5>
        <p class="category_empty-description">Создайте свою первую  категорию и добавьте в неё статьи.</p>
        <ButtonPrimary class="app_header-left-btn">
            <slot>Создать категорию</slot>
        </ButtonPrimary>
    </div>
</template>

<script>
    import ButtonPrimary from "@/components/buttons/ButtonPrimary";
    export default {
        name: "CategoriesEmpty",
        components: {
            ButtonPrimary
        }
    }
</script>

<style lang="less" scoped>
    .category_empty {
        text-align: center;

        &-title {
            font-size: 16px;
            line-height: 24px;
        }

        &-description {
            margin: 4px 0 16px;
            font-size: 14px;
            line-height: 22px;
            font-weight: 500;
        }
    }
</style>