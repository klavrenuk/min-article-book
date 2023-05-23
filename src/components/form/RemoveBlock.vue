<template>
    <div class="remove_block">
        <button class="btn remove_block-btn">
            <i class="remove_block-btn-icon" />
        </button>
        <span class="remove_block-text">
            Заголовок статьи 1
        </span>
    </div>
</template>

<script>
    export default {
        name: "RemoveBlock"
    }
</script>

<style lang="less" scoped>
    .remove_block {
        &-text {
            margin-left: 12px;
            color: #4D5163;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            display: inline-block;
        }
    }
</style>