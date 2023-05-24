<template>
    <div class="modal_category modal"
         :class="isShow ? 'show' : '' "
    >
        <div class="modal-container">
            <div class="modal_category-header">
                <h2 class="modal_category-header-title">
                    Новая категория
                </h2>
            </div>

            <div class="modal_category-body">
                <form>
                    <div class="form-group"
                         v-for="option in options"
                         :key="option.key"
                    >
                        <input class="input"
                               :placeholder="option.label"
                               v-model="category[option.key]"
                               v-if="option.type === 'input'"
                        />

                        <CustomSelect v-if="option.type === 'select'" />

<!--                        <select class="select_general"-->
<!--                                :placeholder="option.label"-->
<!--                                v-model="category[option.key]"-->
<!--                                v-if="option.type === 'select'"-->
<!--                        ></select>-->
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
    </div>
</template>

<script>
    import CustomSelect from "@/components/select/CustomSelect";

    export default {
        name: "ModalCategory",

        components: {
            CustomSelect
        },

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
                category: {},
                isShow: false
            }
        },

        methods: {
            toggle() {
                this.isShow = !this.isShow;
            }
        },

        created() {
            this.$watch(this.$store.state.modalCategory, (newValue) => {
                console.log('watch store', newValue);
            })
        }
    }
</script>

<style lang="less" scoped>
    .modal_category {
        & .modal-container {
            padding: 32px;
        }

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