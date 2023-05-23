<template>
    <div class="modal_remove modal">
        <div class="modal_remove-header">
            <img src="/public/images/icon-question.svg"
                 alt="Вопрос"
                 loading="lazy"
            />
        </div>

        <div class="modal_remove-body">
            <h5 class="modal_remove-body-title">
                Удалить категорию?
            </h5>
            <p class="modal_remove-body-text">
                Все дочерние категории удалятся.
            </p>
        </div>

        <div class="modal_remove-footer">
            <button class="btn btn-primary">
                Удалить
            </button>
            <button class="btn">
                Отмена
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalRemove"
    }
</script>

<style lang="less" scoped>
    .modal_remove {
        &-header {
            margin-bottom: 1rem;
        }

        &-body {
            padding-bottom: 32px;

            &-title {
                margin-top: 4px;
                color: #303446;
                font-size: 16px;
                line-height: 24px;
            }

            &-text {
                color: #6A6E7E;
            }
        }

        &-footer {
            display: flex;
            justify-content: center;
            gap: 8px;
        }
    }
</style>