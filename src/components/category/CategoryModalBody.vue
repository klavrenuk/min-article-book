<template>
    <div class="category_modal_body">
        <form v-if="isShowForm">
            <div class="form-group">
                <CustomInput label="Название"
                             :onChange="onChangeName"
                             :defaultValue="category.name"
                             :invalid="invalid"
                />
            </div>
            <div class="form-group">
                <CustomSelect :settings="settingsParentCategory"
                              :listOptions="parentCategories"
                              :onSelected="onSelected"
                />
            </div>
            <div class="from-group">
                <SelectWithSearch :settings="articleSettings"
                                  :options="articlesFree"
                                  :onSelect="onSelected"
                />
                <ListSelectedItems :onRemove="onRemoveSelectedItem"
                                   :items="selectedArticles"
                />
            </div>
        </form>
    </div>
</template>

<script>
    import {mapActions, mapGetters } from 'vuex'

    import SelectWithSearch from "@/components/select/SelectWithSearch";
    import ListSelectedItems from "@/components/select/ListSelectedItems";
    import CustomSelect from "@/components/select/CustomSelect";
    import CustomInput from "@/components/form/CustomInput";

    export default {
        name: "CategoryModalBody",

        components: {
            CustomSelect,
            SelectWithSearch,
            ListSelectedItems,
            CustomInput
        },

        data() {
            return {
                invalid: null,
                category: {},
                isShowForm: false,
                selectedArticles: [],
                articleSettings: {
                    label: 'Вложенные статьи',
                    key: 'article'
                },
                settingsParentCategory: {
                    label: 'Родительская категория (необязательно)',
                    key: 'parent',
                    selectedItem: null
                },
                articlesFree: [],
                parentCategories: []
            }
        },

        computed: {
            ...mapGetters([
                'modalDefault',
            ])
        },

        watch: {
            '$store.state.isValidModalItem': function(value) {
                this.invalid = null;

                if(value && Array.isArray(value)) {
                    for(let item of value) {
                        if(item.key === 'name') {
                            this.invalid = {
                                message: item.message,
                                isValid: false
                            };
                        }
                    }
                }
            },
        },

        methods: {
            ...mapActions([
                'addCategory',
                'editCategory',
                'setModalState'
            ]),

            onChangeName(name) {
                this.category.name = name;
                this.updateStore();
            },

            onSelected(key, value) {
                switch(key) {
                    case 'article':
                        this.selectedArticles.push(value);
                        this.setArticleFree();
                        break;

                    case 'parent':
                        this.category.parent = value.id;
                        break;

                    default:
                        this.category[key] = value;
                        break;
                }

                this.updateStore();
            },

            onRemoveSelectedItem(index) {
                this.selectedArticles.splice(index, 1);
                this.setArticleFree();
                this.updateStore();
            },

            setArticleFree() {
                this.articlesFree = this.$store.state.articles.filter((article) => {
                    let isHas = false;

                    for(let selectedArticle of this.selectedArticles) {
                        if(selectedArticle.id === article.id) isHas = true;
                    }

                    if(!isHas) return article;
                })
            },

            updateStore() {
                this.setModalState({
                    articleSelected: this.selectedArticles,
                    category: {
                        ...this.category
                    }
                });
            },

            getCategory(category) {
                if(category.subCategories) {
                    if(this.category.id !== category.id) this.parentCategories.push(category);

                    for(let subCategories of category.subCategories) {
                        this.getCategory(subCategories, category);
                    }
                } else {
                    if(this.category.id !== category.id) this.parentCategories.push(category);
                }
            },

            setParentCategories() {
                this.parentCategories = [];

                for(let category of this.$store.state.categories) {
                    this.getCategory(category);
                }
            }
        },

        mounted() {
            if(this.modalDefault.category && this.modalDefault.category.id) {
                this.category = {
                    ...this.modalDefault.category,
                    index: this.modalDefault.categoryIndex
                };
                this.selectedArticles = this.modalDefault.category.articles.slice();

                if(this.modalDefault.parent) {
                    this.settingsParentCategory.selectedItem = this.modalDefault.parent.name;
                }
            }

            this.setArticleFree();
            this.setParentCategories();
            this.updateStore();

            setTimeout(() => {
                this.isShowForm = true;
            }, 0);
        }
    }
</script>

<style lang="less" scoped>
    .category_modal_body {
        & .form-group {
            margin-bottom: 1rem;
        }
    }
</style>