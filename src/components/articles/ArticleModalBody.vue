<template>
    <div class="article_modal_body">
        <CustomSelect :settings="selectSettings"
                      :onSelected="onSelected"
                      :listOptions="listCategories"
        />

        <ListSelectedItems :onRemove="onRemoveSelectedItem"
                           :categories="selectedCategories"
        />
    </div>
</template>

<script>
    import CustomSelect from '@/components/select/CustomSelect';
    import ListSelectedItems from "@/components/select/ListSelectedItems";

    import { mapGetters } from 'vuex'

    export default {
        name: "ArticleModalBody",

        components: {
            CustomSelect,
            ListSelectedItems
        },

        data() {
            return {
                selectSettings: {
                    key: 'article'
                },
                listCategories: [],
                selectedCategories: []
            }
        },

        computed: {
            ...mapGetters([
                'categoriesForSelect'
            ])
        },

        methods: {
            onSelected(key, category) {
                if(category.id > 0) {
                    this.listCategories = this.listCategories.filter((option) => {
                        return category.id !== option.id
                    });
                    this.selectedCategories.push(category);
                }
            },

            onRemoveSelectedItem(index) {
                const arr = this.selectedCategories.splice(index, 1);
                this.listCategories.push(arr[0])
            }
        },

        beforeMount() {
            this.listCategories = this.categoriesForSelect;

            console.log('this.', this.listOptions);
        }
    }
</script>

<style scoped>

</style>