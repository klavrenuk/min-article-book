<template>
    <div class="category_empty">
        <h5 class="category_empty-title title">
            Пока нет статей
        </h5>
        <p class="category_empty-description">Создайте свою первую категорию<br /> и добавьте в неё статьи.</p>
        <ButtonPrimary class="app_header-left-btn"
                       :onClick="onCreateCategory"
        >
            <slot>Создать категорию</slot>
        </ButtonPrimary>
    </div>
</template>

<script>
    import ButtonPrimary from "@/components/buttons/ButtonPrimary";
    import {mapActions} from 'vuex';
    import CategoryModalBody from "@/components/category/CategoryModalBody";

    export default {
        name: "CategoriesEmpty",
        components: {
            ButtonPrimary
        },
        methods: {
            ...mapActions([
                'showModalDefault',
                'addCategory'
            ]),

            onCreateCategory() {
                this.showModalDefault({
                    title: 'Новая категория',
                    save: this.addCategory,
                    content: CategoryModalBody
                });
            }
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