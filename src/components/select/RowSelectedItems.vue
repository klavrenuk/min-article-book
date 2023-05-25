<template>
    <div class="row_selected_items">
        <span class="item"
              v-for="item in list"
              :key="item.id"
        >
            {{ item.name }} <span class="item-line">|</span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "RowSelectedMulti",

        props: {
            list: {
                type: Array,
                required: false
            }
        }
    }
</script>

<style lang="less" scoped>
    @textColor: #303446;

    .row_selected_items {
        & .item {
            position: relative;
            color: @textColor;
            font-size: 14px;
            font-weight: bold;
            display: inline-block;

            &-line {
                position: relative;
                top: -1.5px;
                left: -4px;
            }
        }
    }
</style>