<template>
    <ul class="list_selected_items">
        <li v-for="(item,index) in items"
            :key="item.id"
            class="selected_item"
        >
            <button class="selected_item-remove btn btn-primary"
                    @click="onRemove(index)"
                    type="button"
            >
                <div class="selected_item-remove-container">
                    <img src="/images/icon-trash.svg"
                         alt="Иконка удаления"
                    />
                </div>
            </button>
            <span class="selected_item-name">{{ item.name }}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "RowSelectedCategories",

        props: {
            items: {
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
        flex-wrap: wrap;
        gap: 1rem;

        & .selected_item {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;

            &-remove {
                height: 24px;
                width: 24px;
                margin-right: 12px;
                padding: 0;

                &-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            &-name {
                color: #4D5163;
            }
        }
    }
</style>