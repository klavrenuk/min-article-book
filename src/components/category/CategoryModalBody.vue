<template>
    <div class="category_modal_body">
        <form v-if="isShowForm">
            <div class="form-group">
                <CustomInput label="Название"
                             :onChange="onChangeName"
                             :defaultValue="category.name"
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
                category: {},
                isShowForm: false,
                selectedArticles: [],
                articleSettings: {
                    label: 'Вложенные статьи',
                    key: 'article'
                },
                settingsParentCategory: {
                    label: 'Родительская категория (необязательно)',
                    key: 'parent'
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

        methods: {
            ...mapActions([
                'addCategory',
                'editCategory',
                'setModalState'
            ]),

            onChangeName(name) {
                this.category.name = name;
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
                    category: this.category
                });
            },

            setParentCategories() {
                if(!this.category.id) {
                    this.parentCategories = this.$store.state.categories.slice();
                } else {
                    this.parentCategories = this.$store.state.categories.filter((category) => {
                        return this.category.id !== category.id
                    })
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