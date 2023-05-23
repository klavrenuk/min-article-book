<template>
    <div class="modal_category modal">
        <div class="modal_category-header">
            <h2 class="modal_category-header-title">
                Новая категория
            </h2>
        </div>

        <div class="modal_category-body">
            <form>
                <div class="form-group"
                     v-for="option in options"
                     :key="key"
                >
                    <input class="form_input"
                           :placeholder="option.label"
                           v-model="category[option.key]"
                           v-if="option.type === 'input'"
                    />

                    <select class="form_select"
                            :placeholder="option.label"
                            v-model="category[option.key]"
                            v-if="option.type === 'input'"
                    ></select>
                </div>
            </form>
        </div>

        <div class="modal_category-footer">
            <button class="btn btn-primary">
                Сохранить
            </button>
            <button class="btn">
                Отмена
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalCategory",

        data() {
            return {
                options: [
                    {
                        key: 'name',
                        label: 'Название',
                        type: 'input',
                        isRequired: true
                    },
                    {
                        key: '',
                        label: 'Родительская карточка (необязательно)',
                        type: 'select',
                        isRequired: false
                    },
                    {
                        key: '',
                        label: 'Вложенные статьи',
                        type: 'select',
                        isRequired: true
                    }
                ],
                category: {}
            }
        }
    }
</script>

<style lang="less" scoped>
    .modal_category {
        &-header {
            &-title {
                margin: 1rem;
                font-size: 20px;
                line-height: 28px;
                font-weight: 600;
            }
        }

        &-body {
            & .form-group {
                margin-bottom: 1rem;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        &-footer {
            padding: 1rem 0 24px;
        }
    }
</style>