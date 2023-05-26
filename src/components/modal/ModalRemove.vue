<template>
    <div class="modal_remove modal">
        <div class="modal-container"
             v-click-outside="onClickOutside"
        >
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
    import {addEvent} from '@/middleware/events';

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
            },

            onClickOutside() {
                this.hideModalRemove();
            }
        },

        mounted() {
            addEvent(this.hideModalRemove);
        }
    }
</script>

<style lang="less" scoped>
    .modal_remove {
        & .modal-container {
            padding: 36px 0 46px;
        }

        &-header {
            margin-bottom: 1rem;
            text-align: center;
        }

        &-body {
            padding-bottom: 32px;
            text-align: center;

            &-title {
                margin: 4px 0 0;
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