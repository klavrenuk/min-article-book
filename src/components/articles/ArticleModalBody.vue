<template>
    <div class="article_modal_body">
        <CustomSelect :settings="selectSettings"
                      :onSelected="onSelected"
                      :listOptions="listCategories"
        />

        <div class="article_modal_body-new_category"
             v-if="isShowNewCategory"
        >
            <div class="new_category-container">
                <div class="new_category-container-wrap_input">
                    <CustomInput
                            label="Название новой категории"
                            :onChange="onChangeName"
                    />
                </div>

                <button class="create_category_btn btn btn-primary"
                        @click="onCreateCategory()"
                        :disabled="!nameNewCategory || !nameNewCategory.trim()"
                >
                    Создать
                </button>
            </div>
        </div>

        <ListSelectedItems :onRemove="onRemoveSelectedItem"
                           :items="selectedCategories"
        />
    </div>
</template>

<script>
    import CustomSelect from '@/components/select/CustomSelect';
    import ListSelectedItems from "@/components/select/ListSelectedItems";
    import CustomInput from "@/components/form/CustomInput";

    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "ArticleModalBody",

        components: {
            CustomInput,
            CustomSelect,
            ListSelectedItems
        },

        props: {
            data: {
                type: Object,
                required: false
            }
        },

        data() {
            return {
                selectSettings: {
                    key: 'article',
                    isHideLabel: true,
                    isShowOnlyLabel: true,
                    label: 'Категория (может быть несколько, необязательно)'
                },
                listCategories: [],
                selectedCategories: [],
                isShowNewCategory: false,
                nameNewCategory: null
            }
        },

        computed: {
            ...mapGetters([
                'categoriesForSelect'
            ])
        },

        methods: {
            ...mapActions([
                'setModalState'
            ]),

            onSelected(key, category) {
                if(category.id > 0) {
                    this.listCategories = this.listCategories.filter((option) => {
                        return category.id !== option.id
                    });
                    this.selectedCategories.push(category);

                } else {
                    this.isShowNewCategory = true;
                    this.nameNewCategory = null;
                }

                this.updateStore();
            },

            onRemoveSelectedItem(index) {
                const arr = this.selectedCategories.splice(index, 1);
                this.listCategories.push(arr[0]);
                this.updateStore();
            },

            onCreateCategory() {
                if(!this.nameNewCategory || !this.nameNewCategory.trim()) return false;

                this.selectedCategories.push({
                    id: null,
                    name: this.nameNewCategory.trim()
                });
                this.isShowNewCategory = false;
                this.updateStore();
            },

            setSelectedCategories() {
                return this.$store.state.categories.filter((category) => {
                    const articles = category.articles.filter((article) => {
                        return article.id === this.data.articleId
                    })

                    if(articles.length > 0) return category;
                })
            },

            initCategories() {
                this.selectedCategories = this.setSelectedCategories();

                this.listCategories = [
                    {
                        id: 0,
                        name: 'Создать новую категорию'
                    }
                ];
                for(let category of this.$store.state.categories) {
                    let isHas = false;

                    for(let selectedCategory of this.selectedCategories) {
                        if(category.id === selectedCategory.id) isHas = true;
                    }

                    if(!isHas) this.listCategories.push(category);
                }

                this.updateStore();
            },

            updateStore() {
                this.setModalState({
                    articleId: this.data.articleId,
                    selectedCategories: this.selectedCategories
                });
            },

            onChangeName(name) {
                this.nameNewCategory = name;
            }
        },

        mounted() {
            this.initCategories();
        }
    }
</script>

<style lang="less" scoped>
    .article_modal_body {
        &-new_category {
            margin-top: 1rem;

            & .new_category-container {
                display: flex;
                justify-content: space-between;

                &-wrap_input {
                    width: 80%;
                    padding-right: 1rem;
                }
            }
        }
    }
</style>