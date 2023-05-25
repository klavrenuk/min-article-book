<template>
    <div class="modal_remove modal">
        <div class="modal-container">
            <div class="modal_remove-header">
                <img src="/images/icon-question.svg"
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
                <button class="btn btn-primary"
                        @click="onRemove()"
                >
                    Удалить
                </button>
                <button class="btn"
                        @click="hideModalRemove()"
                >
                    Отмена
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "ModalRemove",

        methods: {
            ...mapActions([
                'removeCategory',
                'hideModalRemove'
            ]),

            onRemove() {
                this.removeCategory(this.$store.state.modalRemove);
                this.hideModalRemove();
            }
        }
    }
</script>

<style lang="less" scoped>
    .modal_remove {
        & .modal-container {
            height: 300px;
        }

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