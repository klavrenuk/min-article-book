<template>
    <ul class="list_selected_items">
        <li v-for="(category,index) in categories"
            :key="category.id"
            class="selected_item"
        >
            <button class="selected_item-remove btn btn-primary" @click="onRemove(index)">
                <img src="/images/icon-trash.svg"
                     alt="Иконка удаления"
                />
            </button>
            <span class="selected_item-name">{{ category.name }}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "RowSelectedCategories",

        props: {
            categories: {
                type: Array,
                required: false
            },
            onRemove: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style lang="less" scoped>
    .list_selected_items {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        gap: 1rem;

        & .selected_item {
            margin-bottom: 1rem;

            &-remove {
                height: 24px;
                width: 24px;
                margin-right: 12px;
                padding: 0;
            }

            &-name {
                color: #4D5163;
            }
        }
    }
</style>