<template>
    <div class="modal_category modal"
         v-if="isShowModalCategory"
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
                        {{ invalidOptions.includes(option.key) }}

                        <input class="input"
                               :placeholder="option.label"
                               v-model="category[option.key]"
                               v-if="option.type === 'input'"
                        />

                        <CustomSelect v-if="option.type === 'select'"
                                      :settings="option"
                                      :onSelected="onSelected"
                        />
                    </div>
                </form>
            </div>

            <div class="modal_category-footer">
                <button class="btn btn-primary modal_category-footer-btn"
                        @click="onSave"
                >
                    Сохранить
                </button>
                <button class="btn modal_category-footer-btn"
                        @click="onCancel"
                >
                    Отмена
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomSelect from "@/components/select/CustomSelect";
    import { mapGetters, mapActions } from 'vuex'

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
                        key: 'parent',
                        label: 'Родительская карточка (необязательно)',
                        type: 'select',
                        isRequired: false
                    },
                    {
                        key: 'articles',
                        label: 'Вложенные статьи',
                        type: 'select',
                        isRequired: true
                    }
                ],
                category: {},
                invalidOptions: []
            }
        },

        computed: {
            ...mapGetters([
                'isShowModalCategory'
            ])
        },

        methods: {
            ...mapActions([
                'closeModalCategory',
                'addCategories'
            ]),

            isValid() {
                for(let option of this.options) {
                    if(option.isRequired && !this.category[option.key]) {
                        this.invalidOptions.push(option.key);
                    }
                }

                return !this.invalidOptions[0];
            },

            onSave() {
                console.log('onSave', this.category);
                this.invalidOptions = [];

                if(!this.isValid()) return false;


                console.log('saving....');
                this.addCategories(this.category);
                this.closeModalCategory();
                console.log('finish');
            },

            onCancel() {
                console.log('onCancel');
                this.category = {};
                this.closeModalCategory();
            },

            onSelected(key, value) {
                this.category[key] = value;
            }
        },

        created() {
        }
    }
</script>

<style lang="less" scoped>
    @footerBtnGap: 24px;
    @footerHeight: 84px;

    .modal_category {
        & .modal-container {
            padding: 32px 32px calc(@footerHeight + 20px) 32px;
            height: calc(100vh - 110px);
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
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 84px;
            padding: 1rem 32px;
            border-top: 1px solid #BFC3D5;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            gap: @footerBtnGap;

            &-btn {
                height: 44px;
                padding: 0 1rem;
                text-align: center;
                width: calc(50% - (@footerBtnGap / 2));
            }
        }
    }
</style>